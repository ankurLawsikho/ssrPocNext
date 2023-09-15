import classes from './course-detail.module.css';
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from '../icons/arrow-right-icon';


function CourseDetail (props) {
    const { course } = props;
    return (
        <div>
            <h1 style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'black',
                        backgroundColor: 'blue'
            }}>Course Detail</h1>
            
            <div className={classes.firstDiv}>
                
                <div className={classes.DivFirstChild}>
                    <h3>Courses For Remote International Work</h3>
                    <h1>{course.description}</h1>
                </div>

                <div className={classes.DivSecondChild}>
                    <h3>
                        <img src="https://skillarbitra.ge//assets/frontend/images/money2.png" alt="" />
                        If you do not like or benefit from the course, you can get a 100% 
                        refund after 30 days of full participation. Read the refund policy here
                        View syllabus
                    </h3>
                    <p>
                        <img src="https://skillarbitra.ge//assets/frontend/images/money2.png" alt="" /> 
                        Rs. {course.coursefee}
                    </p>
                </div>
            </div>

            <div className={classes.midcontainer}>
                <h1 style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'black'
                }}>Key Highlights</h1>

                <ul>
                    <li>This course enables you to build your profile and work with startups, SMEs and large companies, top executives, law firm partners and other successful professionals as a well paid freelancer, content writer, virtual assistant and other remote opportunities.</li>
                    <li>You don&rsquo;t have to be a software engineer, data scientist or lawyer to benefit from international remote work - people having skills and building profile in the ways taught in this course are always in great demand</li>
                    <li>Escape the office cubicle, exhausting daily commute and being forced to live in cramped spaces. After building such an online profile you can get a lot of freelance work which you can do while travelling the world, or living wherever you wish.&nbsp;</li>
                    <li>We can help you to get a very flexible job/ paid internships/ freelance work/ remote opportunities that enables you to earn up to $2000 per month while having time for your family and loved ones.</li>
                    <li>We will teach you to make the most in demand profile that will make you very attractive for fast-growing startups, influencers, busy entrepreneurs and executives, such that they would be delighted to pay you $10-20 per hour as you make their life easier and growth faster</li>
                    <li>All the skills to do such work can be learned in 3 months provided that your English communication skills are upto the mark. Knowing a foreign language can be a bonus.</li>
                    <li>3 months, 2 hours a day, that is all we ask from you to master these skills. At the end of the course, you will also get a recognized certificate from National Skill Development Corporation and Skill India after clearing requisite tests.</li>
                    <li>It is possible to get full time remote jobs, part time work or remote freelance assignments after this course as well if you prefer that.</li>
                    <li>We have helped more than 5000 students and professionals from India to get remote jobs and freelance work in the US, UK, Canada, Europe, Australia, the Middle East and other places. You could be our next success story!</li>
                </ul>
            </div>

            <div className={classes.midcontainer}>
                <h1 style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'black'
                }}>Introduction</h1>

<p><strong>Provided by Skill Arbitrage in association with NSDC and Skill India</strong></p>

<p>Do you want to secure decent earnings as a student/ fresh graduate to support yourself and your family?</p>

<p>Have people told you that it is not possible to earn as a student/ fresh graduate and you are still looking for a way out?</p>

<p>Are you stuck in a situation where you are not getting enough practical learning/ skills from your college which can be used to get financially independent?</p>

<p>Does it feel like opportunities to earn well as a normal graduate (without any professional degree) in your city/town have shut their doors on you?</p>

<p>Are you feeling confused about how to secure the right kind of training that can actually help you to work independently and remotely?</p>

<p>Are you feeling lost about how to find the right network or the right way to approach potential clients/ startups/ top executives to get work from them?</p>

<p>Do you believe that your communication methods for getting a project/ job/ clients may not be up to the mark and may need sharpening?</p>

<p>We have some bad news for you. And some good news.</p>

<p>If you are looking to secure work/ projects/ remote opportunities/ jobs in the traditional areas with your normal graduation degree/ without a professional degree or as a student/ fresh graduate and using the standard method of applying, it can be very difficult for you.&nbsp;</p>

<p>This is because these areas have been in existence for many years and there are a lot of people looking for opportunities in these areas in exactly the same manner.&nbsp;</p>

<p>You will not be able to secure these opportunities in the same way that you used to, before.&nbsp;</p>

<p>It means that if you actually want to earn well, you need to challenge the understanding that you grew up with, as regards earning money or getting a job.</p>

<p><strong>But the good news is that</strong> a different way of working is now gradually gaining acceptance and will prevail in the coming years. This may not be the work that you have traditionally seen, and it isn&rsquo;t something that your seniors have seen either!</p>

<p>The new normal has forced startups, firms, companies, SMEs, entrepreneurs and professionals to adopt the ways of the virtual world, learn to function in a virtual workplace, understand how the physical file storages have now been compressed into google drives, dropbox folders or other record management softwares, how the physical signatures have now been changed to digital, and how your market now extends not only beyond your city, but beyond your country.</p>

<p>The rewards of this new type of virtual/ remote work can be beyond your wildest dreams.&nbsp;</p>

<p>Imagine this: At one point of time, you can be struggling to find even the lowest paid jobs in your own city.</p>

<p>In a very short span of time, you can be calling people from all over the world your clients/ employer.</p>

<p>Seems too good to be true?</p>

<p>Have a look at the list of our students <a href="https://drive.google.com/file/d/1cQgbV1rYFczxZrsnq62M-jWbzyiucovh/view?usp=share_link">here</a> who got clients from the United States, Germany, Australia, Philippines, UAE, Mexico, Canada, Spain, Switzerland, Austria, UK, Hongkong, Singapore, Lithuania, China and other places.</p>

<p>This is what the new type of working style can yield.&nbsp;</p>

<p>The only thing that you need in order to achieve these results is to develop your skills, build your profile and then act on generating value for an employer and client. Just that the skills should be the ones that the industry needs and profile should be at places where they search.&nbsp;</p>
            </div>


        </div>
    )
}

export default CourseDetail;