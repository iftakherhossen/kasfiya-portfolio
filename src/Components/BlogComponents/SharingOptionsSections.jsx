import React from 'react';
import { EmailShareButton, FacebookShareButton, LinkedinShareButton, TelegramShareButton, TwitterShareButton, WhatsappShareButton, } from "react-share";
import { EmailIcon, FacebookIcon, LinkedinIcon, TelegramIcon, TwitterIcon, WhatsappIcon, } from "react-share";
import { MdOutlineContentCopy } from 'react-icons/md';
import toast, { Toaster } from 'react-hot-toast';

const SharingOptionsSections = ({ blog }) => {
     const hashtags = ["kasfiya-upoma", "blog", blog.slug];
     const related = ["KasfiyaUpoma"];
     const link = `/blog/${blog.slug}`;
     const title = `${blog.title} by Kasfiya`;

     const handleCopyLink = () => {
          navigator.clipboard.writeText(link);
          toast("Link Copied Successfully", { type: "success" });
     }

     return (
          <div>
               <div className="mt-5 pt-1 flex justify-center">
                    <button className="mx-1 text-lg rounded-full bg-slate-300 p-2" onClick={handleCopyLink}>
                         <MdOutlineContentCopy />
                    </button>
                    <EmailShareButton url={link} subject="Sharing Blog via Email" body={title + blog.content} separator=" " className="mx-1">
                         <EmailIcon size={32} round={true} />
                    </EmailShareButton>
                    <FacebookShareButton url={link} title={title} hashtags={hashtags} className="mx-1">
                         <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>
                    <TelegramShareButton url={link} title={title} className="mx-1">
                         <TelegramIcon size={32} round={true} />
                    </TelegramShareButton>
                    <TwitterShareButton url={link} title={title} via="KasfiyaUpoma" hashtags={hashtags} related={related} className="mx-1">
                         <TwitterIcon size={32} round={true} />
                    </TwitterShareButton>
                    <LinkedinShareButton url={link} title={title} summary={blog.content} source="Kasfiya Rab Bin Noor" className="mx-1">
                         <LinkedinIcon size={32} round={true} />
                    </LinkedinShareButton>
                    <WhatsappShareButton url={link} separator=" " title={title} className="mx-1">
                         <WhatsappIcon size={32} round={true} />
                    </WhatsappShareButton>
               </div>

               <Toaster
                    position="bottom-center"
                    reverseOrder={false}
               />
          </div>
     );
};

export default SharingOptionsSections;