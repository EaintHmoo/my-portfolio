'use client';
import { motion } from "motion/react";
import { useState } from "react";
import { Mail, Send, Github, Linkedin, Globe } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
type ContactFormProps = {
    token: string; 
  };
  
export default function ContactForm({token}:ContactFormProps)
{
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
    const onSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        const form = event.currentTarget;
        const formData = new FormData(form);

        formData.append("access_key", token );

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        })
        .then(async (response) => {
            const data = await response.json();
            if (data.success) {
                toast.success("Form Submitted Successfully", { theme: "colored" });
            } else {
                toast.error(data.message);
            }
        })
        .catch(error => {
            console.log(error);
            toast.error(error);
        });

        setLoading(false);
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
        
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const contactInfo = [
    {
        icon: <Mail className="w-6 h-6" />,
        title: 'Email',
        value: 'eainthmooaung@gmail.com',
        link: 'mailto:eainthmooaung@gmail.com'
    },
    {
        icon: <Linkedin className="w-6 h-6" />,
        title: 'LinkedIn',
        value: 'linkedin.com/in/eaint-hmoo-aung',
        link: 'https://www.linkedin.com/in/eaint-hmoo-aung-82278a1b7'
    },
    {
        icon: <Github className="w-6 h-6" />,
        title: 'GitHub',
        value: 'github.com/EaintHmoo',
        link: 'https://github.com/EaintHmoo'
    },
    {
        icon: <Globe className="w-6 h-6" />,
        title: 'Website',
        value: 'sourcecode.com.mm',
        link: 'https://www.sourcecode.com.mm/'
    }
    ];

    return (
    <>
    <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="space-y-8">
                <motion.div 
                initial={{opacity:0, y: -50}}
                whileInView={{opacity:1, y:0}}
                transition={{ duration:0.5, delay: 0.5}}>
                    <h3 className="text-2xl font-bold mb-6 text-zinc-800 dark:text-zinc-100">
                    Let&#39;s Connect
                    </h3>
                    <p className=" leading-relaxed text-base italic mb-8 text-zinc-600 dark:text-zinc-400">
                    I&#39;m currently available for freelance work and full-time opportunities. 
                    Feel free to reach out if you&#39;d like to discuss a project or just want to say hello!
                    </p>
                </motion.div>

                <div
                 className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {contactInfo.map((info, index) => (
                    <motion.a
                        initial={{opacity:0, y: -50}}
                        whileInView={{opacity:1, y:0}}
                        transition={{ duration:0.5, delay: 0.5+(0.1 * index)}}
                        key={index}
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-start gap-4 rounded-2xl p-4 bg-gray-50 dark:bg-zinc-800 border-1 border-gray-200 dark:border-gray-800 shadow-md shadow-zinc-100 dark:shadow-teal-500/50 transition-colors duration-300 group"
                    >
                        <div className="text-teal-500 group-hover:text-teal-400 transition-colors duration-300 mt-1">
                        {info.icon}
                        </div>
                        <div>
                        <h4 className="dark:text-white font-semibold mb-1">
                            {info.title}
                        </h4>
                        <p className="dark:text-gray-300  text-zinc-600 text-sm break-all">
                            {info.value}
                        </p>
                        </div>
                    </motion.a>
                    ))}
                </div>
                </div>

                {/* Contact Form */}
                <motion.div
                initial={{opacity:0, x: 50}}
                whileInView={{opacity:1, x:0}}
                transition={{ duration:0.5, delay: 0.5}}
                className="bg-gray-50 dark:bg-zinc-800 border-1 text-zinc-800 dark:text-white border-gray-200 dark:border-gray-800 shadow-md shadow-zinc-100 dark:shadow-teal-500/50 rounded-xl p-8">
                <h3 className="text-2xl font-bold ">
                    Send Message
                </h3>
                
                <form onSubmit={onSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium dark:text-gray-300 mb-2">
                        Name
                        </label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 dark:bg-transparent bg-white border border-gray-600 rounded-lg dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium dark:text-gray-300 mb-2">
                        Email
                        </label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 dark:bg-transparent bg-white border border-gray-600 rounded-lg dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                        />
                    </div>
                    </div>
                    
                    <div>
                    <label htmlFor="subject" className="block text-sm font-medium dark:text-gray-300 mb-2">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 dark:bg-transparent bg-white border border-gray-600 rounded-lg dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                        placeholder="Project Inquiry"
                    />
                    </div>
                    
                    <div>
                    <label htmlFor="message" className="block text-sm font-medium dark:text-gray-300 mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 dark:bg-transparent bg-white border border-gray-600 rounded-lg dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Tell me about your project..."
                    />
                    </div>
                    
                    <button
                    type="submit"
                    className="w-full text-zinc-100 dark:text-zinc-800 bg-zinc-800 border-1 dark:border-gray-200 border-gray-800  shadow-xl hover:cursor-pointer dark:bg-white hover:bg-zinc-800/95 dark:hover:bg-gray-50/85 font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                        {
                            loading ? 'Loading...' : (
                                <>
                                <Send size={18} />
                                Send Message
                                </>
                            )
                        }
                    
                    </button>
                </form>
                </motion.div>
            </div>
        </div>
    </div>
    <ToastContainer autoClose={1500} />
    </>
    
    );
}