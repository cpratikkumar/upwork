import React from 'react'
import Navbar from './components/Navbar'
import image3 from "/latest_white_todo.JPG"
import image2 from "/leads_white.JPG"
import image1 from "/White_dashboard.JPG"
import checkmark from "/checkmark.png"
import leadsWhite from "/leads_white.JPG"
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  const data = [{
    "heading1": "Managing Property Listings and",
    "heading2": "Inventory:"
  }, {
    "heading1": "Tracking Client Intrections and",
    "heading2": "Preferences:"
  },
  {
    "heading1": "Automating Follow-Ups and",
    "heading2": "Reminders:"
  },
  {
    "heading1": "Analyzing Market Trends and",
    "heading2": "Performances:"
  }]




  return (
    <div>
      <Navbar />
      <div className='section-1 flex justify-around items-center px-52 mt-36 sm:flex-col md:flex-col lg:flex-row ' >
        <div className='section-1-left lg:w-[70%] lg:h-[60%] lg:mr-5 flex flex-col justify-center md:w-[85vw] md:h-[60%] md:ml-5 sm:w-[85vw] sm:h-[60%] sm:ml-5' >
          <div className=' rounded-2xl bg-gray-100 w-[100px] h-[30px] text-center text-sm font-normal mb-5 flex items-center justify-center font-jakarta md:ml-[0vw]'>Gantt Charts</div>

          <div>
            <h1 className=' font-extrabold text-5xl mb-3 font-jakarta'>CRM Software for Real Estate</h1>
            <p style={{ textAlign: "left" }} className=' font-medium text-black mb-5 font-jakarta md:font-semibold sm:font-semibold md:text-center sm:text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad aliquid eius officiis? Unde, nam praesentium? Natus voluptatum, nam, enim sunt expedita ut consectetur fugiat ipsam at nesciunt architecto sed nobis, repellat doloremque. Fugiat quo veritatis dolorem delectus numquam sint, sapiente obcaecati atque illo qui modi distinctio quae minus amet animi consequatur iure illum blanditiis in cumque eaque. Sed dolore voluptas recusandae expedita. Odit,quaerat.</p>
          </div>


          <div className=' flex lg:justify-between md:ml-[0vw] sm:ml-[0vw] lg:items-center md:justify-between md:items-center sm:justify-between sm:items-center lg:w-[70%] mb-3 md:w-[50vw] sm:w-[50vw]'>
            <button className='rounded-lg bg-gradient-to-r from-indigo-400 to-cyan-400 lg:w-[250px] lg:h-[40px] md:w-[250px] md:h-[40px] sm:w-[250px] sm:h-[40px] text-white font-medium text-lg font-jakarta '>Get Started</button>
            <div className=' w-[20vw] ml-2'>
              <p className=' text-sm font-medium text-gray-700 font-jakarta'>Free forever.</p>
              <p className=' text-sm font-medium text-gray-700 font-jakarta'>No credit card.</p>
            </div>
          </div>

          <div className=' flex justify-between items-center lg:w-[80%] md:w-[50%] sm:w-[60%] md:ml-[0vw] sm:ml-[0vw] md:mb-10 sm:mb-10'> <span className=' md:text-xs sm:text-xs'>⭐ ⭐ ⭐ ⭐ ⭐</span>
            <p className=' font-jakarta text-cyan-400 flex lg:w-[20vw] md:w-[25vw] sm:w-[25vw] md:text-xs sm:text-xs md:items-center sm:items-center' >25,000+ reviews
              <img src="https://tse4.mm.bing.net/th?id=OIP.jHQLwTvVoKGcJNKN_5jL3QHaHa&pid=Api&P=0&h=180" alt="images" className=' lg:w-[20px] lg:h-[20px] ml-3 md:w-[15px] md:h-[15px] sm:w-[15px] sm:h-[15px]' />
              <img src="https://clipart.info/images/ccovers/1522453412Logo-Snapchat-Png.png" alt="images" className=' lg:w-[20px] lg:h-[20px] mx-3 md:w-[15px] md:h-[15px] sm:w-[15px] sm:h-[15px]' />
              <img src="https://tse1.mm.bing.net/th?id=OIP.EhTMbGiYfYzQnWLgjZaoJAHaHa&pid=Api&P=0&h=180" alt="images" className=' lg:w-[20px] lg:h-[20px] md:w-[15px] md:h-[15px] sm:w-[15px] sm:h-[15px]' />
            </p>
          </div>


        </div>
        <div className='section-1-right lg:w-[50%] lg:h-[60%] ml-5 flex justify-center items-center rounded-xl md:w-[80vw] md:h-[60%]'>

          <div className='images border-2 lg:w-[30vw] lg:h-[60vh] bg-white flex justify-center items-center rounded-xl shadow-slate-100 shadow-md md:w-[80vw] md:h-[60vh] sm:w-[30vw] sm:h-[60vh]'>
            <img src={image1} alt="images1" className=' absolute z-0 w-[18%] h-[250px] -mt-10 ml-24 rounded-lg animate-moveHorizontal shadow-lg' />
            <img src={image2} alt="images2" className=' absolute z-10 w-[18%] h-[250px] -mt-0 ml-18 rounded-lg animate-moveHorizontal shadow-lg' />
            <img src={image3} alt="images3" className=' absolute z-20 w-[18%] h-[250px] mt-20 -ml-20 rounded-lg animate-moveHorizontal shadow-lg' />

          </div>
        </div>
      </div>

      <div className='brand-promotion flex justify-between items-center my-24 px-52'>
        <img src="https://logos-world.net/wp-content/uploads/2020/11/Logitech-Symbol.png" alt="brandImage" className=' w-[100px] h-[50px]' />
        <img src="https://tse3.mm.bing.net/th?id=OIP.Z2fS0jPb8fBEFSdg26dR4gHaEK&pid=Api&P=0&h=180" alt="brandImage" className=' w-[100px] h-[50px]' />
        <img src="https://tse3.mm.bing.net/th?id=OIP.BclrukCQrK_hFarUfmZXLQHaEK&pid=Api&P=0&h=180" alt="brandImage" className=' w-[100px] h-[50px]' />
        <img src="https://purepng.com/public/uploads/large/purepng.com-ibm-logologobrand-logoiconslogos-251519939176ka7y8.png" alt="brandImage" className=' w-[100px] h-[50px]' />
        <img src="https://tse3.mm.bing.net/th?id=OIP.Z2fS0jPb8fBEFSdg26dR4gHaEK&pid=Api&P=0&h=180" alt="brandImage" className=' w-[100px] h-[50px]' />
        <img src="https://logos-world.net/wp-content/uploads/2020/11/Logitech-Symbol.png" alt="brandImage" className=' w-[100px] h-[50px]' />
      </div>

      <div className='section-2 flex justify-between items-center px-36 mb-28' >
        <div className=' w-[30vw] h-[45vh] bg-gradient-to-r from-cyan-400 to-violet-500 flex justify-center items-center rounded-xl ml-16 drop-shadow-2xl'><img src={image3} alt="images" className=' w-[30vw] h-[40vh] rounded-lg ml-10' /></div>
        <div className='flex flex-col w-[20vw] h-[45vh] p-4 mr-80'>
          <div className=' w-[100px] h-[30px] bg-gray-100 rounded-xl text-center mb-2 -mt-4 font-jakarta flex justify-center items-center text-sm'>CRM Views</div>
          <h1 className=' font-bold text-3xl mb-3 font-jakarta'>See client relationships at a glance.</h1>
          <p className=' font-jakarta'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. perspiciatis nihil consequatur dolorum veniam voluptates, adipisci aut? Nobis?</p>
        </div>

      </div>

      <div className=' w-[20vw] h-[30vh] p-4 text-left sticky top-24 right-10 ml-[70%] -mt-[55vh]'>
        <h3 className=' font-bold text-base mb-4 font-jakarta'>Start using Pantheon Vista today</h3>
        <div className='flex justify-between items-center mb-4'><img src={checkmark} alt="tickmark" className=' w-[20px]' /><p className=' font-medium text-sm w-[100%] ml-4 font-jakarta'>Manage all your work in one place</p></div>
        <div className='flex justify-between items-center mb-4'><img src={checkmark} alt="tickmark" className=' w-[20px]' /><p className=' font-medium text-sm w-[100%] ml-4 font-jakarta'>Collaborate with your team</p></div>
        <div className='flex justify-between items-center mb-4'><img src={checkmark} alt="tickmark" className=' w-[20px]' /><p className=' font-medium text-sm w-[100%] ml-4 font-jakarta'>Use Pantheon Vista for Free-forever</p></div>
        <button className='rounded-lg bg-gradient-to-r from-indigo-400 to-cyan-400 w-[250px] h-[40px] text-white font-medium text-lg ml-3' >Get Started</button>
      </div>


      <div className='section-3 w-[80vw] flex justify-evenly mb-24 mt-44'>
        <div className=' w-[15vw] ml-14'>
          <div className=' rounded-xl bg-gray-100 w-[100px] h-[30px] font-medium text-sm text-center mb-3 font-jakarta flex justify-center items-center'>Relationships</div>
          <h1 className=' font-extrabold text-4xl mb-3 font-jakarta'> Build the perfect customer database.</h1>
          <p className=' font-jakarta'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  fugit nostrum corporis, neque, corrupti impedit.</p>
        </div>
        <div className=' w-[30vw] h-[45vh] bg-gradient-to-r from-cyan-400 to-violet-500 flex justify-center items-center rounded-xl mr-16 drop-shadow-2xl'><img src={leadsWhite} alt="images" className=' w-[30vw] h-[40vh] rounded-lg mr-10' /></div>
      </div>


      <div className='section-4 w-[80vw] px-48 mb-24'>
        <h1 className=' font-extrabold text-4xl ml-8 mb-5 font-jakarta'>Ways To Use a CRM for Real Estate</h1>
        <h2 className=' font-extrabold text-2xl font-jakarta'>Lead Tracking and Qualification</h2>
        <p className=' font-jakarta'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit modi ex sed iste vero suscipit doloribus voluptas. Sint quaerat ipsum ullam fugiat pariatur reiciendis earum. Quam ipsam dicta dignissimos quasi.</p>
        <h2 className=' font-extrabold text-2xl font-jakarta'>Pipeline Management</h2>
        <p className=' font-jakarta'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit modi ex sed iste vero suscipit doloribus voluptas. Sint quaerat ipsum ullam fugiat pariatur reiciendis earum. Quam ipsam dicta dignissimos quasi.</p>
        <h2 className=' font-extrabold text-2xl font-jakarta'>Customer Analytics and Reporting</h2>
        <p className=' font-jakarta'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit modi ex sed iste vero suscipit doloribus voluptas. Sint quaerat ipsum ullam fugiat pariatur reiciendis earum. Quam ipsam dicta dignissimos quasi.</p>
        <h2 className=' font-extrabold text-2xl font-jakarta'>Account and Contact Management</h2>
        <p className=' font-jakarta'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit modi ex sed iste vero suscipit doloribus voluptas. Sint quaerat ipsum ullam fugiat pariatur reiciendis earum. Quam ipsam dicta dignissimos quasi.</p>
      </div>

      <div className='section-5 w-[80vw] px-28 ml-20 mb-24'>
        <h1 className=' font-extrabold text-4xl ml-24 font-jakarta'>Challenges a CRM Tool Solves for</h1>
        <h1 className='font-extrabold text-4xl text-center -ml-48 mb-16 font-jakarta'>Real Estate</h1>
        <div className=' grid grid-cols-2 gap-4 mr-32'>
          {data.map((item) => {
            return (
              <Card items={item} />
            )
          })}
        </div>
      </div>


      <h1 className=' font-extrabold text-5xl text-center mr-60 mb-10 font-jakarta'>Frequently Asked Questions</h1>
      <div className='section-6 flex justify-around w-[70vw] px-20 ml-20 mb-24'>
        <div className="faq-body w-[20vw] p-8 mx-5 rounded-xl border-[1px] border-slate-200 shadow-slate-500 shadow-md">
          <h1 className=' font-bold text-2xl font-jakarta mb-3'>How can CRM software help me manage my real estate leads and contacts more effectively?</h1>
          <p className=' font-medium text-sm font-jakarta'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo nulla autem, ducimus nisi corporis dolorum molestiae voluptas, cumque odit fuga, delectus adipisci expedita provident aliquam rerum sint commodi tempora? Repudiandae voluptas, cumque odit fuga, delectus adipisci expedita provident aliquam rerum sint commodi tempora? Repudiandae.</p>
        </div>
        <div className="faq-body w-[20vw] h-[55vh] p-8 mx-5 rounded-xl border-[1px] border-slate-200 shadow-slate-500 shadow-md">
          <h1 className=' font-bold text-2xl font-jakarta mb-3'>What features should i look for in a CRM software for real estate?</h1>
          <p className=' font-medium text-sm font-jakarta'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo nulla autem, ducimus nisi corporis dolorum molestiae voluptas, cumque odit fuga, delectus adipisci expedita provident aliquam rerum sint commodi tempora? Repudiandae.</p>
        </div>
        <div className="faq-body w-[20vw] p-8 mx-5 rounded-xl border-[1px] border-slate-200 shadow-slate-500 shadow-md">
          <h1 className=' font-bold text-2xl font-jakarta mb-3'>Can CRM software for real estate help me automate my marketing and follow-up processes?</h1>
          <p className=' font-medium text-sm font-jakarta'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo nulla autem, ducimus nisi corporis dolorum molestiae voluptas, cumque odit fuga, delectus adipisci expedita provident aliquam rerum sint commodi tempora? Repudiandae.</p>
        </div>

      </div>

      <div className='last-section w-[80vw] flex flex-col justify-center items-center mb-24'>
        <div className=' w-[100px] h-[30px] bg-gray-100 rounded-xl text-center mb-5 font-normal font-jakarta flex justify-center items-center'>Gantt Charts</div>
        <h1 className=' font-extrabold text-5xl mb-10 font-jakarta'>Get started with Gantt Charts now</h1>
        <button className=' bg-gradient-to-r from-blue-300 to-blue-800 rounded-lg h-[40px] w-[180px] font-semibold text-white'>Get Statred</button>
      </div>

      <img src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-and-lines-1/2/10-1024.png" alt="chat" className=' w-[50px] fixed right-8 bottom-4 z-50' />
      <Footer />
    </div>
  )
}

export default App
