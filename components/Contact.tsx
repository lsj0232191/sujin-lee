import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="bg-tertiary">
            <div className="container mx-auto flex flex-col items-center justify-center max-w-7xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl font-bold pt-20 pb-5 mb-10">Contact</h1>
                <div className="flex justify-between items-center md:items-stretch  flex-col md:flex-row pb-24">
                    
                    <div className="w-full md:pr-20">
                        <form>
                            <div className="my-6">
                                <input type="email" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required="" />
                            </div>
                            <div className="my-6">
                                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required="" />
                            </div>
                            <div className="my-6">
                                <input type="email" id="subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Subject" required="" />
                            </div>
                            <div className="my-6">
                                <textarea id="message" rows={4} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Message" required="" />
                            </div>
                            <button
                                type="submit"
                                className="bg-cream text-black hover:brightness-95 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                            >
                                <a href="mailto:sujin321.lee@gmail.com">SEND</a>
                            </button>
                        </form>
                    </div>
                    <div className="w-full flex flex-col md:items-end mt-12 md:mt-6 text-sm" >Have a question or a feedback in mind? I'd love to hear from you. Let's chat!</div>
                </div>
            </div>
        </section>
        )
    }

    export default Contact;