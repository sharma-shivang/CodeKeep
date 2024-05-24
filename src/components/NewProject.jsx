import React from "react";
import { FaChevronDown, FaCss3, FaHtml5, FaJs } from "react-icons/fa6";
import { FcSettings } from "react-icons/fc";
import SplitPane from "react-split-pane";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
// import { monokai } from '@uiw/codemirror-theme-monokai'

const NewProject = () => {
    return (
        <>
            <div className="w-screen h-screen flex flex-col items-start justify-start overflow-hidden">
                {/* Alert Sectioni */}

                {/* HEader Section */}

                {/* Codign Section */}
                <div>
                    {/* Horizonntal Section */}
                    <SplitPane
                        split="horizontal"
                        minSize={100}
                        maxSize={-100}
                        defaultSize={"50%"}
                    >
                        {/* Top Coding Section  */}
                        <SplitPane split="vertical" minSize={500}>
                            {/* <HTML></HTML> */}
                            <div className="w-full h-full flex flex-col items-start justify-start">
                                <div className="w-full flex items-center justify-between">
                                    <div className="bg-secondary px-4 py-2 border-t-4 flex justify-center items-center gap-3">
                                        <FaHtml5 className="text-xl text-red-500 border-t-gray-500" />
                                        <p className="text-primaryText font-semibold ">
                                            HTML
                                        </p>
                                    </div>

                                    <div className=" cursor-pointer flex items-center justify-center gap-5 px-4">
                                        <FcSettings className="text-xl" />
                                        <FaChevronDown className="text-xl text-primaryText" />
                                    </div>
                                </div>
                                <div className="w-full px-2 text-lg">
                                <CodeMirror value={"console.log('Hello world');"} 
                                height="600px" 
                                extensions={[javascript({ jsx: true })]} 
                                theme={"dark"}
                                onChange={() => {}} />
                                </div>
                            </div>

                            <SplitPane split="vertical" minSize={500}>
                                {/* <CSS></CSS> */}
                                <div className="w-full h-full flex flex-col items-start justify-start">
                                    <div className="w-full flex items-center justify-between">
                                        <div className="bg-secondary px-4 py-2 border-t-4 flex justify-center items-center gap-3">
                                            <FaCss3 className="text-xl text-sky-500 border-t-gray-500" />
                                            <p className="text-primaryText font-semibold ">
                                                CSS
                                            </p>
                                        </div>

                                        <div className=" cursor-pointer flex items-center justify-center gap-5 px-4">
                                            <FcSettings className="text-xl" />
                                            <FaChevronDown className="text-xl text-primaryText" />
                                        </div>
                                    </div>
                                    <div>Code MIrror</div>
                                </div>

                                {/* <JavaScript></JavaScript> */}
                                <div className="w-full h-full flex flex-col items-start justify-start">
                                    <div className="w-full flex items-center justify-between">
                                        <div className="bg-secondary px-4 py-2 border-t-4 flex justify-center items-center gap-3">
                                            <FaJs className="text-xl text-yellow-500 border-t-gray-500" />
                                            <p className="text-primaryText font-semibold ">
                                                JS
                                            </p>
                                        </div>

                                        <div className=" cursor-pointer flex items-center justify-center gap-5 px-4">
                                            <FcSettings className="text-xl" />
                                            <FaChevronDown className="text-xl text-primaryText" />
                                        </div>
                                    </div>
                                    <div>Code MIrror</div>
                                </div>
                            </SplitPane>
                        </SplitPane>
                        {/* Bottom result sectionsection */}
                        <div></div>
                    </SplitPane>
                </div>
            </div>
        </>
    );
};

export default NewProject;
