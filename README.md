# Cover Letter Generator

### Description:

The Cover Letter Generator is a Chrome extension designed to assist job seekers in creating personalized cover letters efficiently. It harnesses the power of OpenAI's GPT-3.5 to generate custom cover letters based on job descriptions. This tool is particularly useful for individuals browsing job listings on LinkedIn, streamlining the often tedious and time-consuming process of tailoring cover letters for different job applications.

<img width="1046" alt="image" src="https://github.com/abdulwahab04/OpenAIChromeExtension/assets/88958237/5b7bb5d9-127f-4750-9b90-ec8d9944a957">
<img width="1102" alt="image" src="https://github.com/abdulwahab04/OpenAIChromeExtension/assets/88958237/c193cafb-d457-494f-8bf6-80bf40a14882">

### Key Features:

1) Automated Cover Letter Creation: By analyzing the job description from a LinkedIn job posting, the extension generates a tailored cover letter that aligns with the specific requirements and themes of the job.

2) Integration with LinkedIn: The extension activates when the user navigates to job listings or individual job posts on LinkedIn, identifying key elements of the job description to use as input for the cover letter generation.

3) Utilization of GPT-3.5: Leverages OpenAI's GPT-3.5 for intelligent and context-aware text generation, ensuring that each cover letter is unique, relevant, and professionally composed.

4) Local Storage of Job Information: Temporarily stores job descriptions and generated cover letters in Chrome's local storage, enabling users to revisit and revise their cover letters as needed.

5) User-Friendly Interface: Includes an intuitive popup interface, allowing users to view, copy, or edit the generated cover letter directly within the extension.

6) Customization Options: Users can input their resume details and other preferences, which the AI considers in the cover letter generation process.

### Technical Details:

- Developed using React, making the UI interactive and responsive.
- Utilizes Axios for API communication, particularly interfacing with OpenAI's GPT-3.5 API.
- Employs Chrome's scripting and storage capabilities to interact with the content of web pages (LinkedIn job postings) and store necessary data.
- Background script in the extension listens to tab updates to detect navigation on LinkedIn job pages.

### Challenges and Solutions:

Content Script Execution: Ensuring that content scripts run correctly in the context of LinkedIn pages, extracting job descriptions accurately.
Data Persistence: Managing local storage effectively to store and retrieve job descriptions and generated cover letters.

### Usage Scenario:

You can clone this repository and type "npm install" & "npm run build" in your terminal to build the extension. Then you can go to Chrome extensions and upload the build file to have the extension on your computer. Note that you will need your OpenAI API key to work with ChatGPT-3.5.

A user browsing LinkedIn job listings can click on the extension icon when they find a job they wish to apply for. The extension reads the job description, generates a cover letter using GPT-3.5, and presents it in a popup window. The user can then customize this letter or save it for future reference. Make sure to upload and save your resume initially for a more tailored cover letter.
