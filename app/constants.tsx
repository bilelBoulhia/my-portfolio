import {IconBrandGithub, IconFolder, IconHome, IconPhoneCall} from "@tabler/icons-react";
import {TbWriting} from "react-icons/tb";
import React from "react";
import {BsGithub} from "react-icons/bs";
import {InstagramLogoIcon} from "@radix-ui/react-icons";
import {Mail, Phone} from "lucide-react";

export const links = [
    {

        icon: (
            <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
        ),
        sectionid: 1

    },

    {

        icon: (
            <IconFolder className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
        ),
        sectionid: 2

    },
    {

        icon: (
            <TbWriting className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
        ),
        sectionid: 3

    },
    {

        icon: (
            <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
        ),

        sectionid: 4
    },
    {

        icon: (
            <IconPhoneCall className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
        ),
        sectionid: 5
    }

];

export const contactMethods = [
    {
        id: "phone",
        icon: Phone,
        label: "+213 549 36 61 79",
        value: "+213 549 36 61 79",
        color: "from-purple-500 to-blue-600",

    },
    {
        id: "email",
        icon: Mail,
        label: "billel.boulahia456@gmail.com",
        value: "billel.boulahia456@gmail.com",
        color: "from-blue-500 to-cyan-500",

    },
    {
        id: "github",
        icon: BsGithub,
        label: "github.com/bilelBoulhia",
        value: "https://github.com/bilelBoulhia",
        color: "from-gray-700 to-gray-900",
        islink:true

    },
    {
        id: "instagram",
        icon: InstagramLogoIcon,
        label: "instagram.com/bilel_lll_/",
        value: "https://www.instagram.com/bilel_lll_/",
        color: "from-pink-500 to-purple-600",
        islink:true

    },
    // {
    //     id: "facebook",
    //     icon: BsFacebook,
    //     label: "facebook.com/bi.lel0509/",
    //     value: "https://www.facebook.com/bi.lel0509/",
    //     color: "from-blue-600 to-blue-800",
    //     islink:true
    //
    // },
]


export const gists = [{
    title: "Avoid Getting Your Supabase Project Paused",
    excerpt: "Supabase is a great tool for quickly building demo applications, especially for learning purposes. Its free-tier offering allows developers to spin up a backend without dealing with complex infrastructure.....",
    date: "Fev 23, 2025",
    code: `async function PingSupabase() {
  const tableName = "your_table_name";
  //you can use any endpoint that supabase offers
  const endpoint = '{SUPABASE_URL}/rest/v1/{tableName}';

  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": 'Bearer {SUPABASE_ANON_KEY}',
        "Content-Type": "application/json",
      },
    });
`,
    url: "https://gist.github.com/bilelBoulhia/b30e238fc5e370beee8f7586c68cf1db",

},
    {
        title: "Automate Sending Emails on Form Submission (more than 550 Emails/Day for Free): google form as example",
        excerpt: "In this gist, I'll show you how to send automated emails on form submission. We'll use Google Forms as an example, but you can basically use this script with any form—just make sure to adjust the onFormSubmit function......",
        date: "Fev 22, 2025",
        code: `
for (let service of services) {
      let quota = parseInt(props.getProperty(service), 10);

        if (quota <= 0) {
            Logger.log('{service}: quota exhausted.');
            continue;
        }

        if (sendEmail(service, email, body)) {
            props.setProperty(service, (quota - 1).toString());
            Logger.log('Success with: {service}, quota remaining: {props.getProperty(service)}');
            return true;
        }
    }`,
        url: "https://gist.github.com/bilelBoulhia/efe15d785a53417b389f49eab91c562a",

    }]

export const screens = [
    {
        id: 1,
        content: () => import('@/app/screens/screen-1')

    },
    {
        id: 2,
        content: ()=> import('@/app/screens/screen-2')
    }
    ,
    {
        id: 3,
        content: ()=> import('@/app/screens/screen-3')
    },
    {
        id: 4,
        content: ()=> import('@/app/screens/screen-4')
    },
    {
        id: 5,
        content: ()=> import('@/app/screens/screen-5')
    }


]


export const WebsitesList =
    [
        {
            title: "House of ideas",
            description: "a website for checking out and applying house of ideas scientific club various activies including workshops and evnets",
            technologies: ['Next.js', 'Tailwind', 'TypeScript'],
            techColors: ['#030304', '#38B2AC', '#3178C6'],
            imageUrl: "https://i.ibb.co/ZzfmGGQv/Capture-1.png",
            projectUrl: "https://www.houseofideas.club",
            githubUrl: "https://github.com/bilelBoulhia/House-of-ideas"
        },
        {
            title: "HI articels",
            description: "a website for pusblishing and reading articles for a scientific club",
            technologies: ['Next.js', 'Tailwind', 'TypeScript'],
            techColors: ['#000000', '#38B2AC', '#3178C6'],
            imageUrl: "https://i.ibb.co/qMtMwHVb/photo-6035050906766133098-w-1.jpg",
            projectUrl: "https://hi-ejournal.vercel.app/",
            githubUrl: "https://github.com/bilelBoulhia/house-of-ideas-articles"
        },
        {
            title: "Cinemato",
            description: "a demp website for booking and looking a catalogue of a cinema",
            technologies: ['Next.js', 'Tailwind', 'TypeScript'],
            techColors: ['#000000', '#38B2AC', '#3178C6'],
            imageUrl: "https://i.ibb.co/xd3SSX0/photo-6035050906766133095-w-1.jpg",
            projectUrl: "https://cinema-website-kappa.vercel.app",
            githubUrl: "https://github.com/bilelBoulhia/cinema-website"
        },
        {
            title: "meteo app",
            description: "a demo webapp for a managing the the payroll of employess  ",
            technologies: ['Next.js', 'Tailwind', 'TypeScript'],
            techColors: ['#000000', '#38B2AC', '#3178C6'],
            imageUrl: "https://i.ibb.co/1GsGvc1D/Ix6aqs-QLhi-Zb.png",
            projectUrl: "meteo1-nine.vercel.app",
            githubUrl: "https://github.com/bilelBoulhia/MeteoGestion"
        },
        {
            title: "Destroch gel",
            description: "a website that sells a pest control product",
            technologies: ['Next.js', 'Tailwind', 'TypeScript'],
            techColors: ['#000000', '#38B2AC', '#3178C6'],
            imageUrl: "https://i.ibb.co/1Jsc0FJQ/image-1.png",
            projectUrl: "https://destrouch-gel.vercel.app",
            githubUrl: "https://github.com/ALaksell/DESTROUCH-GEL"
        },

    ]

export const ToolsProjects = [
    {
        title: "Telegram Coin Singaling Bot",
        projectType: "Bot",
        description: "a Bot service that determines the best coins with liquidity and send signals of the selected coins",
        technologies: ['Asp net', 'JWT', 'Sql'],
        techColors: ['#102475', '#1074b3', '#bf3314'],
        projectUrl: "https://t.me/+PBLMrCrf6PdhZGZk",
        githubUrl: "https://github.com/bilelBoulhia/telegram-bot-for-trade-spoting"
    },
    {
        title: "Nsfw poop remover ",
        description: "an extension that removes +18 popup without having to open an account",
        technologies: ['Google'],
        projectType: "Extension",
        techColors: ['#ae4b34'],
        projectUrl: "https://github.com/bilelBoulhia/reddit-nsfw-popup-remover",
        githubUrl: "https://github.com/bilelBoulhia/reddit-nsfw-popup-remover"
    },
    {
        title: "mass Exit from Facebook",
        description: "a selenium bot that auto exit all groups since there is no feature for that in the app",
        projectType: "automated script",
        technologies: ['Maven', 'Java', 'Selenium'],
        techColors: ['#F52660', '#7dae34', '#bf6a14'],
        projectUrl: "https://github.com/bilelBoulhia/Mass-Leave-from-facebook--Script",
        githubUrl: "https://github.com/bilelBoulhia/Mass-Leave-from-facebook--Script"
    },
    {
        title: "Html-Pdf converter",
        description: "Stunning, customizable and open-source components for your next app. Time to give your code a vacation.",
        projectType: "CLI app",
        technologies: ['Maven', 'Pico ClI',],
        techColors: ['#F52660', '#10b37a'],
        projectUrl: "https://github.com/bilelBoulhia/Convert-Html-to-Pdf",
        githubUrl: "https://github.com/bilelBoulhia/Convert-Html-to-Pdf"
    },
    {
        title: "start apps from cmd",
        description: "Stunning, customizable and open-source components for your next app. Time to give your code a vacation.",
        projectType: "windows  app",
        technologies: ['Winform', 'Windows'],
        techColors: ['#3d719c', '#1450bf'],
        projectUrl: "https://github.com/bilelBoulhia/start-apps-from-cmd",
        githubUrl: "https://github.com/bilelBoulhia/start-apps-from-cmd"
    },
]


export const backendProjects = [
    {
        title: "backend of articles app",
        description: "a compete backend with auth and database for an articles app ",
        technologies: ['Asp net', 'JWT', 'Sql'],
        techColors: ['#102475', '#1074b3', '#bf3314'],
        projectUrl: "https://github.com/bilelBoulhia/backend-service-for-a-blog-post-app/pkgs/container/articlesapp",
        githubUrl: "https://github.com/bilelBoulhia/backend-service-for-a-blog-post-app"
    },
    {
        title: "wrt backend",
        description: "a backend that uses websockts for real time data",
        technologies: ['Asp.net', 'JWT', 'Sql', 'SignalR'],
        techColors: ['#102475', '#1074b3', '#bf3314', '#5814bf'],
        projectUrl: "https://github.com/bilelBoulhia/Wrt-backend-server",
        githubUrl: "https://github.com/bilelBoulhia/Wrt-backend-server"
    },
]


export const MobilePorjectsList = [
    {
        title: "hi qr code scanner",
        description: "a mobile app for auto checking event visitors on a google appsheet",
        technologies: ['React native', 'Google', 'TypeScript'],
        techColors: ['#0f21cf', '#ffffff', '#3178C6'],
        imageUrl: "https://i.ibb.co/8LRVmCD7/Untitled-1-1.png",
        projectUrl: "https://github.com/bilelBoulhia/QR-Scanner-Trigger",
        githubUrl: "https://github.com/bilelBoulhia/QR-Scanner-Trigger"
    },
    {
        title: "WRT (win rah train)",
        description: "a demo mobile app for sending real time reports of train location",
        technologies: ['React native', 'Asp.Net', 'TypeScript'],
        techColors: ['#0f21cf', '#9911a3', '#3178C6'],
        imageUrl: "https://i.ibb.co/B2JVWVjY/Untitled-1.png",
        projectUrl: "https://github.com/bilelBoulhia/WinRahTrain/releases/tag/v1",
        githubUrl: "https://github.com/bilelBoulhia/WinRahTrain"
    }
]
