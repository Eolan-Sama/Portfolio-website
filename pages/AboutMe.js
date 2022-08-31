import Links from "../components/Links"
import Image from "next/image"
import profilePic from '../public/me.jpg'
import Head from "next/head"
function AboutMe() {
  
  return (
    <div className="page">
      <Head>
        <title>About Me</title>
        <meta name="description" content="Everything About Ahmet Emre Karaca" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <h1 className="title">Who Am I ?</h1>
      <Image src={profilePic} alt='Picture of Ahmet'/>
      <div className="aboutMe">
        <p className="textTopic"><i>Metal music, coding, gaming enjoyer...</i></p>
        <p> &emsp;Born in 1998 in Uskudar/Istanbul in a snowy day. 
          I have been doing something with computer since I was 3. I always wanted to have a career connected to computers and here I am.
          My first meeting with programming world was when I was 11 thanks to my computer teacher. It didn't really go well with Java :D. </p>
        <p> &emsp;But I didn't give up. To reach my dreams, I started to learn HTML,CSS and JavaScript when I hit 16 on High School. It was really difficult for me to study programming lanugages while studying my own school lectures.
          So, it was really slow progression for me but was a progression at least. On university, I had to learn basic C++, Java and Python to beat lectures and I had to leave web programming for a while.
          Sadly, our university doesn't have web programming lectures so I had to learn on my own. I bought lots of Udemy courses. Started from the beginning even I knew basics of HTML and CSS. And finally, started to learn React, React-Native and MongoDB.</p>
          <p>&emsp;JavaScript frameworks was something I never heard about when I first met them. It wasn't hard to learn the basics and fundamentals but it was hard to adapt to write almost everything in JS including backend.
            It took me 1 year to learn to make a website without getting any help which is this portfolio website.
          </p>
        <p className="textTopic"><i>On the other hand, what this guy do on his free times?</i></p>
        <p>&emsp;Well, I love metal music and I love both playing and listening. I can play drums and bass guitar. I was playing in couple music bands before and I love being on a stage. We even made our own album with one of my band but couldn't release yet sadly.
          I love playing video games, especially multiplayer games such as League of Legends, Valorant, Final Fantasy IV, The Elder Scrolls Online, etc. I spend most of my free time with gaming with my friends these days.
        </p>
        <p className="textTopic"><i>So you are not a social person since you play that much games ?</i></p>
        <p>&emsp;This is definetely not true. Since I am a college student (since 2016) I am one of the board member of Music Club of university. I was chairman for 2 years. So, I was really active on club. What I was doing? Talking with chairmen of bars and cafes to make an event on their place, 
          talking with school to get permission for each event, preparing event reports to give school our data, talking with almost everyone in club so they will have fun in club. So, lots of communication with lots of people. </p>
        
      
      </div>
      <Links page={'aboutMe'}/>
    </div>
  )
}

export default AboutMe

