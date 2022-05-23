import React, { Component } from "react"
import { NextSeo } from 'next-seo'

export default class extends Component {
  render () {
    return (
 <> 
 <NextSeo
        title="Backyard"
        description="Vestibule to Ahmed Saheed's brain datasets"
        canonical="https://saheed.codes/blog"
        openGraph={{
          url: 'https://saheed.codes/blog',
          title: "Ahmed Saheed",
          description: 'Vestibule to Ahmed Saheed brain datasets',
        }}
      />
 <head>
 <meta charset="UTF-8"/>
 <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
 <link href="../styles/blog.css" rel="stylesheet"/>
 <title>Backyard 🌼 | Ahmed Saheed </title>
 <link rel="icon" type="image/x-icon" href="./favicon.ico"/>
</head>

<body>
  <nav class="top-0 px-5 py-2.5 w-full z-10 font-am mb-10" ><div class="bg-am-black text-am-white px-5 py-2.5 w-full rounded-lg sm:flex justify-between" data-theme="business" style = {{fontfamily: "ui-serif"}}><a class ="text" href="/">AHMED</a><div class="space-x-4 flex items-center hover:text-blue-600"><a class="text false" href="/books">books</a><a class="text text-am-green-light" href="/projects">projects</a><a class="text false" href="/internet/internetHome">internet</a><a class="text false" href="/uses">tools</a><a class="text false" href="/me">me</a><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="hover:cursor-pointer hover:text-am-green-light" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path></svg></div></div></nav>
  <header class="mx-auto max-w-3xl space-y-5"><h1 class="text-3xl font-am px-10" style = {{fontfamily: "ui-serif"}}>BACKYARD 🌼</h1><div class="page-summary bg-am-black text-am-white mx-2 md:mx-0 p-10 rounded-lg prose max-w-full" data-theme="business"><p class="first-line:uppercase first-line:tracking-widest
    first-letter:text-7xl first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left">
    Throughout the world there are many different gardens that people have designed. In a Japanese garden, every tree is perfectly pruned, without a leaf out of place. Nothing is planted without forethought as to the exact place appropriate to it.There are English gardens that are famous for their roses and perfect lines of shrubbery. The number of garden types are too numerous to mention. One thing is true of all gardens. It is joint creation between man's intention to create a space of tranquility and nature's ability to comply. WELCOME TO MY GARDEN</p></div></header>
    <main class="m-10 px-10 space-y-20"><section class="grid grid-cols-1 md:grid-cols-2 md:gap-28 xl:gap-56 space-y-28 md:space-y-0"><div class="col-span-1 space-y-10"><div class="flex justify-between items-center"><h2 class="text-4xl font-am">Projects</h2><div class="text arrow-link flex items-center space-x-1"><a class="text-sm" href="/projects"><span >all projects</span></a><div class="arrow transition-all duration-300"><svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></div></div></div><div class="space-y-10"><a class="content-card block" href="/projects/war-room"><div class="flex justify-between items-center"><div class="text text-lg font-medium mb-1 font-am">Donation Hub</div><div class="text-xs">Completed</div></div><div class="text-sm">An App which habours many donation bodies</div></a><a class="content-card block" href="/projects/poke"><div class="flex justify-between items-center"><div class="text text-lg font-medium mb-1 font-am">Boomerang</div><div class="text-xs">Completed</div></div><div class="text-sm">Child care webapp</div></a><a class="content-card block" href="/projects/stx-me"><div class="flex justify-between items-center"><div class="text text-lg font-medium mb-1 font-am">This Garden</div><div class="text-xs">In Progress</div></div><div class="text-sm">Retouch on my personal webpage</div></a><a class="content-card block" href="/projects/gme"><div class="flex justify-between items-center"><div class="text text-lg font-medium mb-1 font-am">Naija Jobs</div><div class="text-xs">In Progress</div></div><div class="text-sm">Flutter app to help Nigerians find jobs</div></a></div></div>
    <div class="col-span-1 space-y-10"><div class="flex justify-between items-center"><h2 class="text-4xl font-am">Books</h2><div class="text arrow-link flex items-center space-x-1"><a class="text-sm" href="/books"><span>Library</span></a><div class="arrow transition-all duration-300"><svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></div></div></div><div class="space-y-10"><a class="content-card block" href="/books"><div class="flex justify-between items-center"><div class="text text-lg font-medium mb-1 font-am">Man Search For Meaning</div><div class="text-xs">Viktor Frankl</div></div><div class="text-sm">An enduring work of survival literature</div></a><a class="content-card block" href="/books"><div class="flex justify-between items-center"><div class="text text-lg font-medium mb-1 font-am">Normal People</div><div class="text-xs">Sally Roony</div></div><div class="text-sm">Subtle</div></a><a class="content-card block" href="/books"><div class="flex justify-between items-center"><div class="text text-lg font-medium mb-1 font-am">The Death Of Ivan Ilyich & Other stories</div><div class="text-xs">Leo Tolstoy</div></div><div class="text-sm">There was no death instead there was light.</div></a><a class="content-card block" href="/books"><div class="flex justify-between items-center"><div class="text text-lg font-medium mb-1 font-am">MK Gandhi An AutoBiography</div><div class="text-xs">MK Gandhi</div></div><div class="text-sm">Absolute teaching of non-violence</div></a></div></div></section></main>
    <footer><nav class="sticky top-0 px-5 py-2.5 w-full z-10 font-am mb-10" ><div class="bg-am-black text-am-white px-5 py-2.5 sw-full rounded-lg sm:flex justify-between" data-theme="business" style = {{fontfamily: "ui-serif"}}><a href="/">Made with ❤️ by Ahmed</a><div class="space-x-4 flex items-center"><a class="false" href="/">© Ahmed Saheed 2022</a></div></div></nav>
</footer>

</body>

</>

    )
  }
}