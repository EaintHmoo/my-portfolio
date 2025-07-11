'use client';
import { motion } from "motion/react";
import { useState } from "react";
type ContactFormProps = {
    token: string; 
  };
  
export default function ContactForm({token}:ContactFormProps)
{
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    
        const onSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            setResult("");
            setLoading(true);
            const form = event.currentTarget;
            const formData = new FormData(form);
    
            formData.append("access_key", token );
    
            const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
            });
    
            const data = await response.json();
    
            if (data.success) {
            setLoading(false);
            setResult("Form Submitted Successfully");
            event.target.reset();
            } else {
            console.log("Error", data);
            setLoading(false);
            setResult(data.message);
            }
        };

    return (
    <motion.form
     initial={{opacity:0}}
     whileInView={{opacity:1}}
     transition={{ duration:0.5, delay: 0.9}}
     onSubmit={onSubmit} className="w-full sm:w-2xl mx-auto flex flex-col gap-6">
        <div className="sm:text-lg text-center w-full">{result}</div>
        <div className="grid grid-cols-auto sm:grid-cols-2 gap-6">
            <motion.input 
            initial={{opacity:0, x: -50}}
            whileInView={{opacity:1, x: 0}}
            transition={{ duration:0.6, delay: 1.1}}
            type="text" 
            name="name"
            placeholder="Enter your name" required 
            className="flex-1 p-3 outline-none border-[0.5px] dark:bg-transparent dark:shadow-md dark:shadow-teal-600/50 border-gray-400 rounded-md bg-white"/>
            <motion.input 
            initial={{opacity:0, x: 50}}
            whileInView={{opacity:1, x: 0}}
            transition={{ duration:0.6, delay: 1.1}}
            type="email" 
            name="email"
            placeholder="Enter your email" required 
            className="flex-1 p-3 outline-none border-[0.5px] dark:bg-transparent dark:shadow-md dark:shadow-teal-600/50 border-gray-400 rounded-md bg-white"/>
        </div>
        <div>
            <motion.textarea 
            initial={{opacity:0, y: 100}}
            whileInView={{opacity:1, y: 0}}
            transition={{ duration:0.6, delay: 1.1}}
            name="message"
            rows="6" 
            placeholder="Enter your message" required
            className="w-full p-3 outline-none border-[0.5px] dark:bg-transparent dark:shadow-md dark:shadow-teal-600/50 border-gray-400 rounded-md bg-white"></motion.textarea>
        </div>
        
        <div className="text-center">
             <motion.button
             whileHover={{scale:1.05}}
             transition={{ duration:0.3}}
              disabled={loading}
              className="dark:bg-gray-50 px-10 py-4 text-center text-zinc-100 dark:text-zinc-800 bg-zinc-800 border-1 rounded-2xl dark:border-gray-200 border-gray-800 shadow-xl hover:cursor-pointer hover:bg-zinc-800/95 dark:hover:bg-gray-50/85 transaction duration-50 dark:shadow-md dark:shadow-teal-600/50">
                {
                    loading ? 'Loading...' : 'Submit now'
                }
              </motion.button>
        </div>
    </motion.form> 
    );
}