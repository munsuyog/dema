'use client'
import React, { useEffect, useState } from 'react'
import './team-section.css';
import {motion} from 'framer-motion'
import { getTeams } from '@/utils/strapi-cms';
import TeamCard from './team/team';

const TeamSection = () => {
    const [teams, setTeams] = useState(null);
    useEffect(()=> {
        const fetchTeams = async () => {
            try {
                const data = await getTeams();
                setTeams(data.data)
            }
            catch(error) {
                console.error(error)
            }
        }
        fetchTeams();
    },[])
  return (
    <section id='team-section' className='section-padding'>
        <div className='team-title-section'>
            <h2>Our Team?</h2>
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="50"
                viewBox="0 0 187 97"
                fill="none"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                  }}
                  d="M4 30.8606C37.8142 110.659 127 37.7597 80 30.8606C33 23.9615 63 103.861 182 62.8605"
                  stroke="#22E393"
                  stroke-width="6"
                  stroke-linecap="round"
                ></motion.path>
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{once: true}}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 1.6
                  }}
                  d="M169.433 55.4229C169.433 55.4229 181.518 59.0801
                    182.5 63.5C183.5 68 174.628 76.5121 174.628 76.5121"
                  stroke="#22E393"
                  stroke-width="6"
                  stroke-linecap="round"
                ></motion.path>
                <defs>
                  <lineargradient
                    id="paint0_linear_1_6137"
                    x1="191"
                    y1="42.3605"
                    x2="-10.5"
                    y2="42.4637"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.415" stop-color="#3830C9"></stop>
                    <stop offset="0.815" stop-color="#22E393"></stop>
                  </lineargradient>
                </defs>
        </motion.svg>
        </div>
        <div className='teams-container'>
            {teams && teams.map((team, index) => (
                <TeamCard info={team} key={index} />
            ))}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none" className='team-triangle-vector'>
<path d="M13.5666 41.9435C7.61764 40.344 5.63168 32.9146 9.99099 28.5672L28.6239 9.98556C32.9832 5.63824 40.4203 7.63156 42.0139 13.5744L48.8319 38.9991C50.427 44.9474 44.9718 50.3876 39.0174 48.7866L13.5666 41.9435ZM41.0337 17.7003C39.4454 11.7521 32.0035 9.75324 27.6415 14.1032L14.1157 27.5918C9.75373 31.9418 11.7452 39.3761 17.6995 40.9703L36.1458 45.9091C42.0946 47.5018 47.5411 42.0703 45.9542 36.1276L41.0337 17.7003Z" fill="#857EFF"/>
<path d="M27.4508 17.6362C29.0517 23.6145 23.5361 29.0642 17.5668 27.4021L15.475 26.8197L13.3131 26.2302C7.38219 24.6128 5.41481 17.1997 9.76513 12.8613L11.2701 11.3605L12.8976 9.7375C17.2479 5.39915 24.6686 7.3739 26.2802 13.2988L26.8676 15.4584L27.4508 17.6362Z" fill="#1EBEC4"/>
</svg>
    </section>
  )
}

export default TeamSection