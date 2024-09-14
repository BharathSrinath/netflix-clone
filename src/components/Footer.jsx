import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-gray-400 text-base font-semibold leading-7">
      <div className="w-5/6 mx-auto py-8">
        <p className="my-4">
          Questions? Call <span className="underline">000-800-919-1694</span>
        </p>
        <div className="md:flex justify-between underline">
          <div className="flex flex-col">
            <a href="https://help.netflix.com/support/412">FAQ</a>
            <a href="http://ir.netflix.com/">Investor Relations</a>
            <a href="https://help.netflix.com/legal/privacy">Privacy</a>
            <a href="https://fast.com/">Speed Test</a>
          </div>
          <div className="flex flex-col">
            <a href="https://help.netflix.com/">Help Centre</a>
            <a href="https://jobs.netflix.com/jobs">Jobs</a>
            <a href="https://www.netflix.com/in/#">Cookie Preferences</a>
            <a href="https://help.netflix.com/legal/notices">Legal Notices</a>
          </div>
          <div className="flex flex-col">
            <a href="https://www.netflix.com/youraccount">Account</a>
            <a href="https://www.netflix.com/watch">Ways to Watch</a>
            <a href="https://help.netflix.com/legal/corpinfo">
              Corporate Information
            </a>
            <a href="https://www.netflix.com/in/browse/genre/839338">
              Only on Netflix
            </a>
          </div>
          <div className="flex flex-col">
            <a href="https://media.netflix.com/">Media Centre</a>
            <a href="https://help.netflix.com/legal/termsofuse">Terms of Use</a>
            <a href="https://help.netflix.com/contactus">ContactUs</a>
          </div>
        </div>
        <p className="my-4">Netflix India</p>
      </div>
    </div>
  );
};

export default Footer;
