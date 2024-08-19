import React, { useState } from "react";
import {
  ScInt,
  Soroban,
  StrKey,
  nativeToScVal,
  Address,
  Account,
  MuxedAccount,
  Horizon,
  encodeMuxedAccount,
} from "@stellar/stellar-sdk";
import { signTransaction } from "@stellar/freighter-api";

import {
  server,
  getTxBuilder,
  FUTURENET_DETAILS,
  mintTokens,
  xlmToStroop,
  submitTx,
  accountToScVal,
  anyInvoke,
  loadContract,
} from "../../utils/soroban";

import { Copy, AddCircle, CloseCircle, DocumentCode } from "iconsax-react";
import XLMlogo from "../../assets/2024.svg";

export default function InvokeContract({
  userKey,
  setUserKey,
  setNetwork,
  isWalletInstalled,
  setLoadedContractId,
  loadedContractId,
  connecting,
  setConnecting,
}) {
  const [selectedToken, setSelectedToken] = useState("");
  const [mintAmount, setMintAmount] = useState(0);
  const [receiver, setReceiver] = useState("");
  const [mintStatus, setMintStatus] = useState("PRE");
  const [argsCount, setArgsCount] = useState([]);
  const [args, setArgs] = useState([]);
  const [operation, setOperation] = useState("");
  const [file, setFile] = useState(null);
  const [fileContent, setFileContent] = useState(null);
  const memo = "mint tokens";
  const smartWalletContract =
    "CABH4AZ26PTXJGHPNO7UOEYYYDHU5FZQGUV7N6G5JYK2FWVOLM3HJW2Q";

  const selectedNetwork = FUTURENET_DETAILS;
  const { network, networkPassphrase } = selectedNetwork;

  // console.log("the args are", args);

  function addArgsHandler() {
    let curCount = argsCount.length;
    const newCount = curCount + 1;
    setArgsCount(() => [...argsCount, newCount]);
    setArgs(() => [...args, { id: newCount, name: "", type: "", value: "" }]);
  }

  function deleteArgsHandler(selectedArg) {
    setFile(null);
    setFileContent(null);
    setArgsCount((prevArgsCount) =>
      prevArgsCount.filter((arg) => arg !== selectedArg)
    );

    setArgs((prevArgs) => prevArgs.filter((arg) => arg.id !== selectedArg));
  }

  // function stringToArray(input) {
  //   if (!!input) {
  //     return input
  //       .split(",")
  //       .map((item) => item.trim())
  //       .filter((item) => item !== "")
  //       .map(Number);
  //   }
  // }

  function stringToArray(input) {
    if (!!input) {
      return input
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== "");
    }
    return [];
  }

  function processArgs(arg) {
    if (arg.type === "i128") {
      const quantity = Soroban.parseTokenAmount(arg.value, 7);
      return new ScInt(quantity).toI128();
    } else if (arg.type === "Address") {
      return accountToScVal(arg.value); // to
    } else if (arg.type === "u32") {
      return nativeToScVal(Number(arg.value), { type: "u32" }); // to
    } else if (arg.type === "u64") {
      return nativeToScVal(Number(arg.value)); // to
    } else if (arg.type === "u64") {
      return nativeToScVal(Number(arg.value)); // to
    } else if (arg.type === "symbol") {
      return nativeToScVal(arg.value, { type: "symbol" }); // to
    } else if (arg.type === "Wasm") {
      return;
    } else if (arg.type === "vec") {
      const arrs = stringToArray(arg.value);
      const argsare = nativeToScVal(arrs, {
        type: ["u64", "u64", "symbol"],
      }); // to

      return argsare;
    } else {
      return nativeToScVal(arg.value);
    }
  }

  async function anyInvokeHandler(e) {
    e.preventDefault();
    try {
      setConnecting(() => true);

      const url2 = "https://horizon-futurenet.stellar.org";
      let hserver = new Horizon.Server(url2);

      const accountLoaded = await hserver.loadAccount(userKey);
      console.log("it is good ghere");
      const testMux = new MuxedAccount(accountLoaded, "111");
      console.log("the mux is", testMux);

      let loadedWasm;

      if (fileContent !== null) {
        const txBuilderUpload = await getTxBuilder(
          userKey,
          xlmToStroop(1).toString(),
          server,
          selectedNetwork.networkPassphrase
        );

        const wasm = fileContent;

        const signedXdr = await loadContract(wasm, txBuilderUpload);
        const txHash = await submitTx(signedXdr, networkPassphrase, server);
        loadedWasm = txHash.returnValue._value;
      }

      const invokeArgs = [operation];
      for (const eachArg of args) {
        if (eachArg?.type === "Wasm") {
          invokeArgs.push(nativeToScVal(loadedWasm));
        } else {
          invokeArgs.push(processArgs(eachArg));
        }
      }

      const txBuiderAnyInvoke = await getTxBuilder(
        userKey,
        xlmToStroop(1).toString(),
        server,
        selectedNetwork.networkPassphrase
      );

      const xdr = await anyInvoke(
        loadedContractId,
        invokeArgs,
        "contract invocation",
        txBuiderAnyInvoke,
        server
      );

      const signedXdr = await signTransaction(xdr, { network: "FUTURENET" });

      const result = await submitTx(signedXdr, networkPassphrase, server);
      const contractId = StrKey.encodeContract(
        result.returnValue._value._value
      );
      console.log("protocol token id is", contractId);
      console.log("invoke result", result);
    } catch (e) {
      alert(e.message);
    } finally {
      setConnecting(() => false);
    }
  }

  async function loadContractHandler() {
    if (await StrKey.isValidContract(selectedToken)) {
      setLoadedContractId(() => selectedToken);
    }
  }

  const copyHandler = () => {
    navigator.clipboard
      .writeText(loadedContractId)
      .then(() => {
        // console.log("Contract ID copied to clipboard:", loadedContractId);
        // Optionally, show a success message to the user
        alert("Contract ID copied!");
      })
      .catch((err) => {
        // console.error("Failed to copy text to clipboard:", err);
      });
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onload = async (event) => {
      const fileBuffer = event.target.result;
      setFileContent(() => fileBuffer);
    };
    reader.readAsArrayBuffer(selectedFile);
  };

  return (
    <div className="overflow-x-hidden bg-gray-100">
      <section className=" bg-gray-100 ">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-5xl mx-auto  space-y-4">
            <div className="mt-6 overflow-hidden  rounded-xl">
              <div className="px-4 py-6 sm:p-8 bg-white mb-3 rounded-xl">
                {!loadedContractId && (
                  <form
                    method="POST"
                    className="mt-2"
                    onSubmit={loadContractHandler}
                  >
                    <div className="grid grid-cols-1  gap-x-5 gap-y-4">
                      <div>
                        <div className=" p-2 ">
                          <h3 className="text-2xl font-normal  text-gray-900">
                            Your Smart Contract ID is:
                          </h3>
                        </div>
                        <div className="mt-2.5 relative">
                          <input
                            onChange={(e) => setSelectedToken(e.target.value)}
                            type="text"
                            name=""
                            id=""
                            placeholder="Paste contract ID here"
                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                )}
                {loadedContractId.length > 0 && (
                  <>
                    <div className="relative ">
                      <div className="relative p-4 flex  overflow-hidden bg-white justify-between items-center border border-gray-200 rounded-2xl">
                        <div>
                          <div className="flex items-center sm:items-center mb-1">
                            <img
                              src={XLMlogo}
                              className="flex-shrink-0 w-12 h-12 text-gray-400"
                            />
                            <p className="ml-6 text-xl font-bold text-gray-900 text-[24px] font-pj">
                              Loaded contract can now be interated with
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <p className="ml-16 text-xl font-small text-[18px] text-gray-700 font-pj">
                              {loadedContractId}{" "}
                            </p>
                            <button onClick={copyHandler}>
                              <Copy
                                size="16"
                                color="#000000"
                                className="flex-shrink-0 w-auto h-6 text-gray-400"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              {loadedContractId?.length > 0 && (
                <>
                  <div>
                    <div className="grid grid-cols-1  gap-x-5 gap-y-4">
                      <div className="px-4 py-4 sm:px-8 bg-white mb-3 rounded-xl">
                        <div className=" p-2 ">
                          <h3 className="text-2xl font-normal  text-gray-900">
                            Operation (function)
                          </h3>
                        </div>
                        <div className="mt-1 relative flex gap-2">
                          <input
                            onChange={(e) => setOperation(e.target.value)}
                            type="text"
                            name=""
                            id=""
                            placeholder="Enter the operation you want to invoke"
                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          />{" "}
                          <div className="sm:col-span-2 flex  rounded-xl items-center w-[220px] justify-between  border border-gray-700 ">
                            <button
                              className="relative flex items-center gap-3   px-4  text-lg font-bold text-white transition-all duration-200 font-pj rounded-xl  justify-between "
                              role="button"
                              onClick={addArgsHandler}
                            >
                              <AddCircle size="44" color="#000000" />{" "}
                              <p className="text-black">Add args</p>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {args.length > 0 && (
                    <div>
                      <div className="grid grid-cols-1  gap-x-5 gap-y-4">
                        <div className="px-4 py-4 sm:px-8 bg-white mb-3 rounded-xl">
                          <div className=" p-2 ">
                            <h3 className="text-2xl font-normal  text-gray-900">
                              Arguments
                            </h3>
                          </div>
                          {argsCount?.map((arg, index) => (
                            <div
                              className="mt-1 relative flex gap-2"
                              key={index}
                            >
                              <div className="block px-4 py-4 text-black placeholder-gray-500 w-[200px] transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600">
                                {`Arg${index + 1}`}
                              </div>
                              <div className="">
                                <select
                                  className="block px-4 py-4 h-full text-black placeholder-gray-500 w-[150px] transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                  id="type-select"
                                  value={
                                    args.find((cur) => cur.id === arg)?.type
                                  }
                                  onChange={(e) => {
                                    setArgs(
                                      args.map((cur) =>
                                        cur.id === arg
                                          ? {
                                              ...cur,
                                              name: `Arg${index + 1}`,
                                              type: e.target.value,
                                            }
                                          : cur
                                      )
                                    );
                                  }}
                                >
                                  <option value="select type">
                                    Select type
                                  </option>
                                  <option value="i128">i128</option>
                                  <option value="u32">u32</option>
                                  <option value="u64">u64</option>
                                  <option value="String">String</option>
                                  <option value="symbol">symbol</option>
                                  <option value="Address">Address</option>
                                  <option value="Wasm">{"Wasm"}</option>
                                  <option value="vec">{"vec<u64>"}</option>
                                </select>
                              </div>
                              {args.find((cur) => cur.id === arg)?.type ===
                              "Wasm" ? (
                                // <input
                                //   onChange={(e) => {
                                //     setArgs(
                                //       args.map((cur) =>
                                //         cur.id === arg
                                //           ? { ...cur, value: e.target.value }
                                //           : cur
                                //       )
                                //     );
                                //   }}
                                //   // onChange={(e) => setIvalue(e.target.value)}
                                //   type="text"
                                //   name=""
                                //   id=""
                                //   placeholder="Upload contract file here (.wasm)"
                                //   className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                // />

                                <div className="relative block w-full ">
                                  <div className="relative px-4 py-[7px] flex  overflow-hidden bg-white justify-between items-center border border-gray-200 rounded-md">
                                    <div>
                                      <div className="flex items-center sm:items-center ">
                                        <p className=" text-normal font-bold text-gray-500  font-pj">
                                          {file === null
                                            ? "Upload contract file here (.wasm)"
                                            : `${file?.name} `}
                                        </p>
                                      </div>
                                    </div>

                                    <div className=" flex justify-center bg-[#FF8A65] bg-opacity-25 p-1 rounded-full">
                                      <input
                                        type="file"
                                        accept=".wasm"
                                        onChange={handleFileChange}
                                        className="hidden"
                                        id="file-upload"
                                      />
                                      <label
                                        htmlFor="file-upload"
                                        className="cursor-pointer inline-flex items-center  border border-transparent text-base leading-6 font-medium rounded-md  focus:shadow-outline-indigo  transition ease-in-out duration-150"
                                      >
                                        <AddCircle size="32" color="#FF8A65" />
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <input
                                  onChange={(e) => {
                                    setArgs(
                                      args.map((cur) =>
                                        cur.id === arg
                                          ? { ...cur, value: e.target.value }
                                          : cur
                                      )
                                    );
                                  }}
                                  // onChange={(e) => setIvalue(e.target.value)}
                                  type="text"
                                  name=""
                                  id=""
                                  placeholder="Argument value"
                                  className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                />
                              )}
                              <div className="sm:col-span-2 flex  rounded-xl items-center justify-between  ">
                                <button
                                  onClick={() => deleteArgsHandler(arg)}
                                  className="relative flex items-center gap-3   px-4  text-lg font-bold text-white transition-all duration-200 font-pj rounded-xl  justify-between "
                                  role="button"
                                >
                                  <CloseCircle size="44" color="#616161" />{" "}
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}

              <div className="sm:col-span-2">
                <button
                  // onClick={loadContractHandler}
                  onClick={anyInvokeHandler}
                  // onClick={(e) => setIvalue(e.target.value)}
                  className="relative inline-flex items-center justify-center  w-full px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 opacity-60"
                  role="button"
                >
                  {connecting
                    ? "Processing..."
                    : "Login to or Create Smart Wallet using Twitter"}
                </button>
              </div>
              {userKey.length > 0 && (
                <div className="sm:col-span-2">
                  <button
                    // onClick={loadContractHandler}
                    onClick={anyInvokeHandler}
                    // onClick={(e) => setIvalue(e.target.value)}
                    className="relative inline-flex items-center mt-4 justify-center w-full px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button"
                  >
                    {connecting
                      ? "Processing..."
                      : "Login to or Create Smart Wallet using External Wallet"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
