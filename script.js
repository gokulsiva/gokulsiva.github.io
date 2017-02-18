var captionLength = 0;
var caption = " cat gokul's_resume <h1>Gokul Sivanesan</h1>"+
    " <p>160,Elango Street,<br>Sivagiri, <br>Erode. <br>Mobile:+919944432122 <br><code>Github profile : <a href='https://github.com/gokulsiva' target='_blank'>Gokul Siva - git</a></code><br><code>Linkedin profile : <a href='https://in.linkedin.com/in/gokulsivanesan' target='_blank'>Gokul Siva - linkedin</a></code></p><hr><br>"+
    "<b>Career Objective</b><p><ul style='list-style-type:none'><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Seeking a challenging and progressive carrier which will enable me to provide the best of my Technical, analytical & professional skills and ample opportunities to earn knowledge and to contribute towards the growth of the organization and growth of myself.</li></ul>"+
    "<b>Educational Profile</b> <ul><li>Secured 8.09 CGPA (up to 6th semester) in “K.S.R. College of Engineering”, Tiruchengode (2013-2017).</li><li>Secured 90.16% in 12th board exam at “Thamarai Matriculation Higher Secondary School”, Thamaraipalayam (2013).</li><li>Secured 94% in 10th board exam at “S.S.V. Matriculation Higher Secondary School”, Sivagiri (2011).</li></ul>"+
    "<b>Areas of Interest</b><ul><li>Ruby on Rails.</li><li>Java.</li><li>Android.</li></ul>"+
    "<b>Technical Skills</b><ul><li>Ruby, Python, Java, C++, C.</li><li>Web Development using Ruby on Rails, Python CGI, J2EE.</li><li>Databases: MySQL, Oracle.</li><li>Embedded C.</li></ul>"+
    "<b>Additional Courses</b><ul><li>Printed Circuit Board Designing (Logic Mind Technologies, Salem).</li><li>Embedded C (Raana Power Solutions, Salem).</li></ul>"+
    "<b>Achievements</b><ul><li>Cleared 1st round online Hackathon called TechNgage conducted by Nasscom and participated in 2nd round (offline) held at Tech Mahindra, Chennai on 11th June 2016.</li><li>Got 3rd price in national level TECHNICAL QUIZ competition at “Nandha Engineering College”, Erode (2015).</li><li>Got 3rd price in “Group Discussion” conducted by “English Literary Club” of KSR College of Engineering on 09.02.2016.</li><li>Got 3rd price in “Debate” conducted by “English Literary Club” of KSR College of Engineering on 09.02.2016.</li></ul>"+
    "<b>Roles in College</b><ul><li>Placement Coordinator of ECE department at KSR College of Engineering.</li><li>Student committee member at KSR College of Engineering.</li><li>Member of Master of Commentary (MOC) committee in “BLOOM2K15” technical symposium conducted by KSR College of Engineering.</li></ul>"+
    "<b>Papers Presented</b><ul><li>Presented a paper on “Opto Electric Nuclear Battery” at Nandha Engineering College, Erode (2014).</li><li>Presented a paper on “Automatic car for disabled persons” at Sri Krishna College of Engineering, Coimbatore (2015).</li></ul>"+
    "<b>Projects Presented</b><ul><li>Presented a project “Public Services” (an Android application) in offline round at TechNgage conducted by Nasscom held at Tech Mahindra, Chennai on 11th June 2016.</li><li>Presented a project “KSRCE” (an Android application) in my college for the betterment of my college student and staffs.</li><li>Presented a project “Low Cost Fire Alarm” at Nandha Engineering College, Erode on 27.02.2015.</li></ul>"+
    "<b>Extracurricular Activities</b><ul><li>Participated in official “Largest Human Currency Symbol-India” Guinness World Record Attempt.</li><li>Attended Inplant Training on “Web Development” in Abile Technologies, Coimbatore on 21.12.2015 to 23.12.2015.</li><li>Participated in Workshop “SAN (Storage Area Network Configuration and Management)” at CIT Coimbatore on 9.9.2015.</li><li>Shuttle cork player, Carrom and Chess player.</li></ul>"+
    "<b>Personal Information</b><ul style='list-style-type:none'><li>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Gokul.S</li><li>Father’s Name	&nbsp;&nbsp;: Sivanesan.S</li><li>Mother’s Name	&nbsp;&nbsp;: Shreedevi.S</li><li>Date of Birth		&nbsp;&nbsp;: 28 March 1996</li><li>Gender&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Male</li><li>Languages Known	: English, Tamil</li><li>Nationality&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Indian</li><li>Hobbies&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Coding, Playing Chess</li></ul><hr><br>"+
    "<p><span id='d'>Do you like my profile ?<!-- laglaglaglaglaglaglaglaglaglaglaglaglag --></span></p><p><span id='e'>Want to hire me ?<!-- laglaglaglaglaglaglaglaglaglaglaglaglaglag --></span></p><p><a id='f' href='mailto:gokulsiva1996@gmail.com'>Click here to mail me.😉</a><br></p>"+
    "<p><span id='a'>resume@gokul</span>:<span id='b'>~</span><span id='c'>$</span></p>";




$(document).ready(function() {
    setInterval ('cursorAnimation()', 100);
    captionEl = $('#caption');

    testTypingEffect();

});

function testTypingEffect() {

    type();
}

function type() {
    captionEl.html(caption.substr(0, captionLength++));
    if(captionLength < caption.length+1) {
        setTimeout('type()', 10);
        window.scrollBy(0,50); // horizontal and vertical scroll increments
    } else {
        captionLength = 0;
        caption = '';
    }
}


function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}
