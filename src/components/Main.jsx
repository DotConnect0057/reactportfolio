import React, { useEffect, useState } from 'react'
import * as Progress from '@radix-ui/react-progress';
import profile from '../assets/profile_1.png';
import { useDarkMode } from '../hooks/useDarkMode';

import profile_white from '../assets/profile-white-1.png';
import compute from '../assets/compute.png';
import compute_white from '../assets/compute_white.png';
import network from '../assets/network.png';
import network_white from '../assets/network_white.png';
import cloud from '../assets/cloud.png';
import cloud_white from '../assets/cloud_white.png';
import database from '../assets/database.png';
import database_white from '../assets/database_white.png';

import cloud_sw from '../assets/cloud_software.png';
import cloud_sw_white from '../assets/cloud_software_white.png';
import frontface from '../assets/front_face.png';
import frontface_white from '../assets/front_face_white.png';

import { BsTwitter, BsYoutube, BsTwitch, BsGithub, BsDiscord } from 'react-icons/bs';
import * as Separator from '@radix-ui/react-separator';
import * as Label from '@radix-ui/react-label';


const Main = () => {

    const [perFrontEnd, setPerFrontEnd] = useState(0);
    const [perBackEnd, setPerBackend] = useState(0);
    const [perDataBase, setPerDataBase] = useState(0);
    const [perCloud, setPerCloud] = useState(0);
    const [perNetwork, setPerNetwork] = useState(0);
    const [perCompute, setPerCompute] = useState(0);

  const status = useDarkMode();

  useEffect(() => {
    setTimeout(() => {
        setPerFrontEnd(70);
        setPerBackend(70);
        setPerDataBase(30);
        setPerCloud(100);
        setPerNetwork(100);
        setPerCompute(80);    
    }, 500);
  },[])


  console.log(perFrontEnd);

  



//   const Logo = (img) => {
//     return (
//       <Avatar.Root className="bg-blackA3 inline-flex h-[37px] w-[37px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
//       <Avatar.Image
//         className="h-full w-full rounded-[inherit] object-cover"
//       >
//         {img}
//       </Avatar.Image>
//       <Avatar.Fallback
//         className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
//         delayMs={600}
//       >
//         CT
//       </Avatar.Fallback>
//     </Avatar.Root>
//     )
//   }


  return (
    <div className="flex flex-wrap ml-[64px]">
        {/* left */}
        <div className="flex flex-col w-1/2 h-[802px] border-dashed border-b border-[#F30000]">
            <div className="flex w-full h-fit justify-center">
              {status.isDarkMode ? <img src={profile} alt="profile" className="w-[439px] h-[428px] mix-blend-darken dark:mix-blend-lighten" /> : 
               <img src={profile_white} alt="profile" className="w-[439px] h-[428px] mix-blend-darken dark:mix-blend-lighten" /> 
              } 
            </div>
            <div className="flex text-6xl mt-[16px] items-start font-bold">
            My journey was fulfilled when I became a True Full-Stack developer
            </div>
            <div className="flex text-2xl mt-[21px]">
              Write a code, design web site, build infrastructure and automate our framework for my life.
            </div>
        </div>

        <div className="flex flex-wrap w-1/2 h-[802px]">
            {/*  right */}
            <div className="relative w-full h-[505px]">
                <div className="absolute w-[384px] h-[384px] right-0 top-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] 
                from-[#454B79] via-[#f0f0ef] to-[#f0f0ef]
                dark:from-[#454B79] dark:via-[#1b1b1b] dark:to-[#1b1b1b]">
                </div>
                <div className="flex w-full mt-[115px] h-[198px] bg-gradient-to-b from-[#48319D] via-[#F4BF4F] to-[#9797A4]">
                    <div className="flex w-full ml-1 bg-[#f0f0ef] dark:bg-[#1b1b1b]">

                      <div className="absolute top-[115px] left-0 w-10 border border-[#6000C7]"></div>
                      {/* box of skills */}
                      <div className="absolute top-[96px] left-10">
                        <Progress.Root
                                className="relative overflow-hidden bg-[#A1A1A1] rounded-full w-[508px] h-[46px]"
                                style={{
                                  // Fix overflow clipping in Safari
                                  // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
                                  transform: 'translateZ(0)',
                                }}
                                value={perFrontEnd}
                              >
                                <Progress.Indicator
                                  className="bg-[#6000C7] w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
                                  style={{ transform: `translateX(-${100 - perFrontEnd}%)` }}
                                />
                        </Progress.Root>
                      </div>
                      <div className="absolute top-[98px] left-20 text-4xl font-mono font-bold text-white">FrontEnd</div>
        
                      <div className="absolute top-[190px] left-1 w-10 border border-[#F4BF4F]"></div>
                      {/* box of skills */}
                      <div className="absolute top-[167px] left-10">
                        <Progress.Root
                                className="relative overflow-hidden bg-[#A1A1A1] rounded-full w-[508px] h-[46px]"
                                style={{
                                  // Fix overflow clipping in Safari
                                  // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
                                  transform: 'translateZ(0)',
                                }}
                                value={perBackEnd}
                              >
                                <Progress.Indicator
                                  className="bg-[#C7AC00] w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
                                  style={{ transform: `translateX(-${100 - perBackEnd}%)` }}
                                />
                        </Progress.Root>
                      </div>
                      <div className="absolute top-[169px] left-20 text-4xl font-mono font-bold text-black">BackEnd</div>

                      <div className="absolute top-[260px] left-1 w-10 border border-[#D9D9D9]"></div>
                      {/* box of skills */}
                      <div className="absolute top-[238px] left-10">
                        <Progress.Root
                                className="relative overflow-hidden bg-[#A1A1A1] rounded-full w-[508px] h-[46px]"
                                style={{
                                  // Fix overflow clipping in Safari
                                  // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
                                  transform: 'translateZ(0)',
                                }}
                                value={perDataBase}
                              >
                                <Progress.Indicator
                                  className="bg-[#D9D9D9] w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
                                  style={{ transform: `translateX(-${100 - perDataBase}%)` }}
                                />
                        </Progress.Root>
                      </div>
                      <div className="absolute top-[240px] left-20 text-4xl font-mono font-bold text-black">DataBase</div>


                    </div>
                </div>
                <div className="flex h-[198px] border-b border-[#F30000] mr-[64px] bg-gradient-to-b from-[#14C74D] via-[#22D7FF] to-[#C72470]">
                    <div className="flex w-full ml-1 bg-[#f0f0ef] dark:bg-[#1b1b1b]">

                    <div className="absolute top-[330px] left-0 w-10 border border-[#14C74D]"></div>
                      {/* box of skills */}
                      <div className="absolute top-[308px] left-10">
                        <Progress.Root
                                className="relative overflow-hidden bg-[#A1A1A1] rounded-full w-[508px] h-[46px]"
                                style={{
                                  // Fix overflow clipping in Safari
                                  // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
                                  transform: 'translateZ(0)',
                                }}
                                value={perCloud}
                              >
                                <Progress.Indicator
                                  className="bg-[#14C74D] w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
                                  style={{ transform: `translateX(-${100 - perCloud}%)` }}
                                />
                        </Progress.Root>
                      </div>
                      <div className="absolute top-[310px] left-20 text-4xl font-mono font-bold text-black">Cloud</div>

                      <div className="absolute top-[400px] left-0 w-10 border border-[#10AFC7]"></div>
                      {/* box of skills */}
                      <div className="absolute top-[378px] left-10">
                        <Progress.Root
                                className="relative overflow-hidden bg-[#A1A1A1] rounded-full w-[508px] h-[46px]"
                                style={{
                                  // Fix overflow clipping in Safari
                                  // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
                                  transform: 'translateZ(0)',
                                }}
                                value={perNetwork}
                              >
                                <Progress.Indicator
                                  className="bg-[#10AFC7] w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
                                  style={{ transform: `translateX(-${100 - perNetwork}%)` }}
                                />
                        </Progress.Root>
                      </div>
                      <div className="absolute top-[380px] left-20 text-4xl font-mono font-bold text-black">Network</div>

                      <div className="absolute top-[470px] left-0 w-10 border border-[#C72470]"></div>
                      {/* box of skills */}
                      <div className="absolute top-[448px] left-10">
                        <Progress.Root
                                className="relative overflow-hidden bg-[#A1A1A1] rounded-full w-[508px] h-[46px]"
                                style={{
                                  // Fix overflow clipping in Safari
                                  // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
                                  transform: 'translateZ(0)',
                                }}
                                value={perCompute}
                              >
                                <Progress.Indicator
                                  className="bg-[#C72470] w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
                                  style={{ transform: `translateX(-${100 - perCompute}%)` }}
                                />
                        </Progress.Root>
                      </div>
                      <div className="absolute top-[450px] left-20 text-4xl font-mono font-bold text-black">Compute</div>

                    </div>
                </div>
            </div>
            <div className="w-full h-[297px] mr-[64px] border-dashed border-r border-b border-[#F30000]">
                <div className="flex mt-[64px] ml-2 gap-[32px]">
                    <div className="flex justify-center items-center rounded-full w-[64px] h-[64px] bg-blue-500 text-4xl text-white">
                        <BsTwitter />
                    </div>
                    <div className="flex justify-center items-center rounded-full w-[64px] h-[64px] bg-white text-5xl text-red-500">
                        <BsYoutube />
                    </div>
                    <div className="flex justify-center items-center rounded-full w-[64px] h-[64px] bg-purple-400 text-4xl text-black">
                        <BsTwitch />
                    </div>
                    <div className="flex justify-center items-center rounded-full w-[64px] h-[64px] border bg-white text-6xl text-black">
                        <BsGithub />
                    </div>
                    <div className="flex justify-center items-center rounded-full w-[64px] h-[64px] bg-[#5865f2] text-5xl text-white">
                        <BsDiscord />
                    </div>
                </div>
                <div className="">
                    <button className="inline-flex items-center justify-center rounded bg-black text-white dark:bg-white dark:text-black font-bold text-xl mt-[54px] ml-2 px-[15px] h-[54px]">Download CV</button>
                </div>
            </div>

        </div>

        {/* compute area */}
        <div id="Experience" className="flex flex-wrap w-full h-[672px] justify-start border-dashed border-l border-[#F30000]">
            <div className="w-full h-min">
              <div className="flex w-[482px] h-[74px] bg-[#C72470] pl-5 justify-start items-center font-mono font-bold text-5xl text-white">Compute</div>
            </div>
            <div className="flex w-full h-max mr-[64px]">
                <div className="flex flex-wrap w-2/3 gap-y-[146px]">
                    <div className="flex w-full">
                      <div className="min-w-[48px] h-[48px] ml-[24px] rounded-full border border-[#C72470] text-[#1b1b1b]">
                      </div>
                      <div className="flex ml-[48px] justify-start items-start text-2xl">
                        Expertise in service provider/enterprise building for many type of
                        datacenter that customer has. main focus is to deploy HPE and DELL Rack mount server as a COTS. 
                        Aware sizing server workload and power planning.
                      </div>
                    </div>
                    <div className="flex w-full">
                      <div className="min-w-[48px] h-[48px] ml-[24px] rounded-full border border-[#C72470] text-[#1b1b1b]">
                      </div>
                      <div className="flex ml-[48px] justify-start items-start text-2xl">
                        Experiences HPE rackmount, blade server and Dell rackmount server for a deployment of cloud software 
                        infrastructure as a compute node. Aware hardware settings that necessary fine tuning for telco workload.
                        Power consumption management is a key skills of the datacenter building and planning that i had experience. 
                      </div>
                    </div>

                </div>
                <div className="flex w-1/3">
                  <div className="flex w-full h-fit justify-center">
                    {status.isDarkMode ?
                      <img src={compute} alt="compute" className="w-[439px] h-[428px] dark:mix-blend-lighten" />
                      :
                      <img src={compute_white} alt="compute" className="w-[439px] h-[428px] mix-blend-darken dark:mix-blend-lighten" />
                    }
                  </div>
                </div>
            </div>
        </div>

        {/* network area */}
        <div className="flex flex-wrap w-full h-[672px] mr-[64px] justify-end border-dashed border-t border-r border-[#10AFC7]">
            <div className="flex flex-row-reverse w-full h-min">
              <div className="flex w-[482px] h-[74px] bg-[#10AFC7] pl-5 justify-start items-center font-mono font-bold text-5xl text-white">Network</div>
            </div>
            <div className="flex w-full h-max mr-[64px]">                
                <div className="flex w-1/3">
                  <div className="flex w-full h-fit justify-center">
                  {status.isDarkMode ?
                      <img src={network} alt="network" className="w-[439px] h-[428px] dark:mix-blend-lighten" />
                      :
                      <img src={network_white} alt="network" className="w-[439px] h-[428px] mix-blend-darken dark:mix-blend-lighten" />
                    }
                  </div>
                </div>

                <div className="flex flex-wrap w-2/3 gap-y-[50px]">
                    <div className="flex w-full">
                      <div className="flex ml-[48px] justify-start items-start text-2xl">
                       Expertise TCP/IP and ethernet technologies for service provider networking 
                       based on Cisco and Juniper products. MPLS/VPN technology aware as 
                       i was verification engineer of this domain to perform test with analysis of RFC. 
                      </div>
                      <div className="min-w-[48px] h-[48px] ml-[24px] rounded-full border border-[#10AFC7] text-[#1b1b1b]">
                      </div>
                    </div>
                    <div className="flex w-full">
                      <div className="flex ml-[48px] justify-start items-start text-2xl">
                       Expertise Network automation by using script such as shell, python and perl. 
                       I had created more than handled script in order to do network operation and maintenance also automate testing tool.
                      </div>
                      <div className="min-w-[48px] h-[48px] ml-[24px] rounded-full border border-[#10AFC7] text-[#1b1b1b]">
                      </div>
                    </div>

                    <div className="flex w-full">
                      <div className="flex ml-[48px] justify-start items-start text-2xl">
                       Experience 7years as a Network verification engineer, system integration engineer and network architect to design datacenter networking. 
                      </div>
                      <div className="min-w-[48px] h-[48px] ml-[24px] rounded-full border border-[#10AFC7] text-[#1b1b1b]">
                      </div>
                    </div>
                </div>

            </div>
        </div>

        {/* Cloud/OS area */}
        <div className="flex flex-wrap w-full h-[672px] mr-[64px] justify-start border-dashed border-t border-l border-[#14C74D]">
            <div className="w-full h-min">
              <div className="flex w-[482px] h-[74px] bg-[#14C74D] pl-5 justify-start items-center font-mono font-bold text-5xl text-white">Cloud</div>
            </div>
            <div className="flex w-full h-max mr-[64px]">
                <div className="flex flex-wrap w-2/3 gap-y-[50px]">
                    <div className="flex w-full">
                      <div className="min-w-[48px] h-[48px] ml-[24px] rounded-full border border-[#14C74D] text-[#1b1b1b]">
                      </div>
                      <div className="flex ml-[48px] justify-start items-start text-2xl">
                      Expertise OpenStack as a Cloud Infrastructure software. I've started very beginning of this community
                      and deploy on telco customer to run telco applications. Ubuntu/Redhat Linux Operating System are using for infrastructure.
                      </div>
                    </div>
                    <div className="flex w-full">
                      <div className="min-w-[48px] h-[48px] ml-[24px] rounded-full border border-[#14C74D] text-[#1b1b1b]">
                      </div>
                      <div className="flex ml-[48px] justify-start items-start text-2xl">
                       Expertise Kubernetes as a Container Infrastructure software that i had build up on premiss model instead of managed service provided 
                       pre-build solution. also aware tiny k8s deployment such as k3s/k0s ad minikube.
                      </div>
                    </div>
                    <div className="flex w-full">
                      <div className="min-w-[48px] h-[48px] ml-[24px] rounded-full border border-[#14C74D] text-[#1b1b1b]">
                      </div>
                      <div className="flex ml-[48px] justify-start items-start text-2xl">
                       Experience 8 years as a Cloud Engineer and Solution Architect/Management for a telco domain big tech industry.  
                      </div>
                    </div>
                </div>
                <div className="flex w-1/3">
                  <div className="flex w-full h-fit justify-center">
                  {status.isDarkMode ?
                      <img src={cloud} alt="cloud" className="w-[439px] h-[428px] mix-blend-darken dark:mix-blend-lighten" />
                      :
                      <img src={cloud_white} alt="cloud" className="w-[439px] h-[428px] mix-blend-darken dark:mix-blend-lighten" />
                    }

                    
                  </div>
                </div>
            </div>
        </div>


        {/* Database area */}
        <div className="flex flex-wrap w-full h-[672px] mr-[64px] justify-end border-dashed border-t border-r border-[#C4C4D0]">
            <div className="flex flex-row-reverse w-full h-min">
              <div className="flex w-[482px] h-[74px] bg-[#EBEBF5] pl-5 justify-start items-center font-mono font-bold text-5xl text-black">Database</div>
            </div>
            <div className="flex w-full h-max mr-[64px]">                
                <div className="flex w-1/3">
                  <div className="flex w-full h-fit justify-center">
                    {status.isDarkMode ? 
                      <img src={database} alt="database" className="w-[439px] h-[428px] mix-blend-darken dark:mix-blend-lighten" />
                      :
                      <img src={database_white} alt="database" className="w-[439px] h-[428px] mix-blend-darken dark:mix-blend-lighten" />
                    }
                    
                  </div>
                </div>

                <div className="flex flex-wrap w-2/3 gap-y-[50px]">
                    <div className="flex w-full">
                      <div className="flex ml-[48px] justify-start items-start text-2xl">
                       Expertise major key value database for a cloud native platform. And RDBMS for a subsystem of cloud infrastructure such MariaDB.
                       Besides that, mongoDB, etcd, MySQL are the experienced one but not deep enough as i was not database engineer.
                      </div>
                      <div className="min-w-[48px] h-[48px] ml-[24px] rounded-full border border-[#C4C4D0] text-[#1b1b1b]">
                      </div>
                    </div>
                </div>

            </div>
        </div>


        {/* frontend and backend area */}
        <div className="flex flex-wrap w-full h-[674px] mr-[64px] justify-end border-dashed border dark:border-[#1b1b1b] bg-gradient-to-r from-[#C7AC00] to-[#6000C7]">
            <div className="flex flex-wrap w-full h-[672px] justify-end bg-[#f0f0ef] dark:bg-[#1b1b1b]">

              <div className="flex flex-row-reverse justify-between w-full h-min">
                <div className="flex w-[482px] h-[74px] bg-[#C7AC00] pl-5 justify-start items-center font-mono font-bold text-5xl text-black">BackEnd</div>
                <div className="flex w-[482px] h-[74px] bg-[#6000C7] pl-5 justify-start items-center font-mono font-bold text-5xl text-black">FrontEnd</div>
              </div>
              <div className="flex w-full h-max mr-[64px]">                

                  <div className="flex flex-wrap w-1/3 gap-y-[10px]">
                      <div className="flex w-full">
                        <div className="min-w-[48px] h-[48px] ml-[24px] rounded-full border border-[#6000C7] text-[#1b1b1b]">
                        </div>
                        <div className="flex ml-[48px] justify-start items-start text-2xl">
                          Expertise React, NextJS, SolidJS and Angular as web app development. using Radix UI framework and tailwindcss is favorite to make beautiful style.
                        </div>
                      </div>
                      <div className="flex w-full">
                        <div className="min-w-[48px] h-[48px] ml-[24px] rounded-full border border-[#6000C7] text-[#1b1b1b]">
                        </div>
                        <div className="flex ml-[48px] justify-start items-start text-2xl">
                          Starting as a Side job for a web developer from 2 years ago.  
                        </div>
                      </div>
                  </div>

                  <div className="flex w-1/3">
                    <div className="flex w-full h-fit justify-center">
                        {status.isDarkMode ?
                          <img src={cloud_sw} alt="cloud_sw" className="w-[439px] h-[428px] mix-blend-darken dark:mix-blend-lighten" />
                          :
                          <img src={cloud_sw_white} alt="cloud_sw" className="w-[439px] h-[428px] mix-blend-darken dark:mix-blend-lighten" />
                        }
                    </div>
                  </div>
  
                  <div className="flex flex-wrap w-1/3 gap-y-[10px]">
                      <div className="flex w-full">
                        <div className="flex ml-[48px] justify-start items-start text-2xl">
                          Expertise python for data analytics, automate operation for my daily work.
                        </div>
                        <div className="min-w-[48px] h-[48px] ml-[24px] rounded-full border border-[#C7AC00] text-[#1b1b1b]">
                        </div>
                      </div>
                      <div className="flex w-full">
                        <div className="flex ml-[48px] justify-start items-start text-2xl">
                          Python - tensorflow, keras, pandas, numpy, jupyter
                          And NodeJS
                        </div>
                        <div className="min-w-[48px] h-[48px] ml-[24px] rounded-full border border-[#C7AC00] text-[#1b1b1b]">
                        </div>
                      </div>
                  </div>
              </div>
            </div>
        </div>

        {/* Myself area */}
        <div id="My Self" className="flex flex-wrap w-full h-[512px] mt-[182px] justify-between">
            <div className="flex flex-wrap w-2/3">
                <div className="flex w-full">
                  <p className="text-3xl font-bold">
                    About Myself
                  </p>
                  <Separator.Root className="ml-[44px] bg-[#2E335A] data-[orientation=horizontal]:h-px 
                    data-[orientation=horizontal]:w-2/3 data-[orientation=vertical]:h-full 
                    data-[orientation=vertical]:w-px my-[15px]" />
                </div>
                {/* <div className="flex flex-wrap w-full mr-5 h-[337px] bg-gradient-to-b from-[#1b1b1b] to-[#48319D]"> */}
                <div className="flex flex-wrap w-full mr-5 h-[337px]">
                  <p className="w-full p-5 text-2xl">
                    Hi, My name is Shun. I'm a software developer with 15 years of experience
                    in Tech industry and starting recent 5 years for web application using Javascript mainly React framework. 
                    I have experience Data Analytics, Machine Learning with using python plus
                    tensorflow, keras and so on for financial domain.
                    My technology backbone is networking and cloud computing that influence
                    stable approach for my tech journey.
                  </p> 
                  <p className="w-full p-5 text-2xl">
                    As a second work, I'm streaming on Youtube and Twitch for a my daily 
                    software development work and also my hobby. I love devices that i using for my work. keyboard, mouse, display, tools etc.
                  </p>

                </div>
            </div>
            <div className="w-1/3">
                {status.isDarkMode ?
                  <img src={frontface} alt="frontface" className="w-[439px] h-[428px] mix-blend-darken dark:mix-blend-lighten" />
                  :
                  <img src={frontface_white} alt="frontface" className="w-[439px] h-[428px] mix-blend-darken dark:mix-blend-lighten" />
                }
            </div>

        </div>


        {/* Contact area */}
        <div id="Contact" className="flex flex-wrap w-full h-[512px] mt-[122px] justify-between">
            <div className="flex flex-wrap w-full">
                <div className="flex w-full">
                  <p className="text-3xl font-bold">
                    Contact
                  </p>
                  <Separator.Root className="ml-[44px] bg-[#2E335A] data-[orientation=horizontal]:h-px 
                    data-[orientation=horizontal]:w-2/3 data-[orientation=vertical]:h-full 
                    data-[orientation=vertical]:w-px my-[15px]" />
                </div>
                {/* <div className="flex flex-wrap w-full mr-5 h-[337px] bg-gradient-to-b from-[#1b1b1b] to-[#48319D]"> */}
                <div className="flex flex-wrap w-full mr-5 h-[337px]">

                  <div className="flex w-full items-center gap-[15px] px-5">
                    <Label.Root className="w-[100px] text-[15px] font-medium leading-[35px] text-black dark:text-white" htmlFor="firstName">
                      Name: 
                    </Label.Root>
                    <input
                      className="ml-[37px] dark:bg-[#1D1C34] shadow-black inline-flex h-[35px] w-[200px] appearance-none
                      items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black dark:text-white 
                      shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-[#2E335A]"
                      type="text"
                      id="Name"
                      defaultValue=""
                    />
                  </div>

                  <div className="flex w-full items-center gap-[15px] px-5">
                    <Label.Root className="w-[100px] text-[15px] font-medium leading-[35px] text-black dark:text-white" htmlFor="firstName">
                      Email: 
                    </Label.Root>
                    <input
                      className="ml-[37px] dark:bg-[#1D1C34] shadow-black inline-flex h-[35px] w-[200px] appearance-none
                      items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white 
                      shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-[#2E335A]"
                      type="text"
                      id="Email"
                      defaultValue=""
                    />
                  </div>

                  <div className="flex w-full items-center gap-[15px] px-5">
                    <Label.Root className="w-[100px] text-[15px] font-medium leading-[35px] text-black dark:text-white" htmlFor="firstName">
                      Message: 
                    </Label.Root>
                    <input
                      className="ml-[37px] dark:bg-[#1D1C34] shadow-black inline-flex h-[228px] w-[1000px] appearance-none
                      items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white 
                      shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-[#2E335A]"
                      type="text"
                      id="Message"
                      defaultValue=""
                    />
                  </div>
                </div>
                <div class="flex justify-end w-full mr-[252px]">
                    <button className="inline-flex items-center justify-center rounded bg-black text-white dark:bg-white 
                      dark:text-black font-bold text-xl px-[15px] h-[54px] w-[158px]">Submit</button>
                </div>
            </div>


        </div>


    </div>
  )
}

export default Main