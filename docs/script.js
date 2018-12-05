var quiz = function(subject,organiser,marks,questions,id,passingmarks,hh,min){
      this.subject = subject;
     this.organiser = organiser;
     this.marks=marks;
     this.questions = questions;
     this.id = id;
     this.passingmarks = passingmarks;
     this.hh =hh;
     this.min = min; 
}

var topic = function(nameOfTheTopic,factlist)
{
    this.name = nameOfTheTopic;
    this.factlist = factlist;
}
var topic1,topic2,topic3,topic4,topic5,topic6,topic7,topic8,topic9,topic10,topic11,topic12;
topic1 = new topic("Oppo R17 Pro",["Oppo R17 Pro will launch in India on December 4","Super VOOC supports up to 10V/ 5A (50W) fast charging","Oppo Find X did not support Super VOOC on the Find X","The phone is powered by an octa-core Qualcomm Snapdragon 710 SoC, coupled with 8GB of RAM and 128GB of internal storage.","Triple rear camera setup with a 12-megapixel sensor(f/1.5-2/4 aperture), a 20-megapixel sensor with f/2.6 aperture,and a third sensor which is a TOF 3D stereo camera","The Oppo Find X ₹ 59,990 was its first phone with this technology,however the units sold in India only support up to 5V/ 4A (20W) VOOC Flash fast charging, found in most premium Oppo smartphones.","Oppo R17 Pro to be charged up to 40 percent within just 10 minutes."]);
topic2 = new topic("Recent Election News",["There has been a 71% increase in assets of the MLAs re-contesting in Madhya Pradesh Assembly elections 2018","PM Modi attacks Congress for dragging his mother into election debate","MP Assembly Election: 1,80,000 security personnel deployed, state borders sealed ahead of polls","Assembly Elections 2018: Cong’s Clear Sway in 2 Out of 5 States","Chhattisgarh Elections 2018 LIVE Updates: 71.93 % Voter Turnout In Second Phase Of Chhattisgarh Polls"]);
topic3 = new topic("Microsoft Windows 10",["Microsoft may want to consider renaming the now-infamous Windows 10 October Update version 1809.","Microsoft reveals new Windows 10 light theme."," The Ockel Sirius B Black Cherry is a Windows 10 32GB PC that fits in your pocket, and there’s $100 off the list price this week.","Microsoft starts testing ads in Windows 10 default email app","Samsung and Lenovo have launched new second-gen Windows 10 on ARM devices powered by the Snapdragon 850 processor and offering beyond-all-day battery.","Google and Microsoft are building Chrome for Windows 10 on ARM"]);
topic4 = new topic("ROBOT 2.0",["2.0 is set to hit the screens on Friday, November 30.","Amazon, Paytm and ICICI Bank have come up with discounts for their users who wish to book tickets for 2.0 in advance","Rajinikanth's 2.0 breaks Baahubali 2: The Conclusion's this record even before its release!","2.0 First Song Tu Hi Re Is Here And It Is Hugely Reminiscent Of Robot's Arima Arima!","Rajinikanth and Akshay Kumar's 2.0 passed by the Censor Board with a U/A certificate, without any cuts.","The actual budget of Robot 2.0 is RS 400 crore","Akshay Kumar,“Prepare for #2Point0! Teaser out on September 13, 2018. @2Point0movie @LycaProductions @DharmaMovies,” he wrote in his tweet."]);
topic5 = new topic("Lastest Sports News",["India vs Australia (IND vs AUS), 1st Test: Former Australian skipper Ricky Ponting has chosen his Aussie playing XI for the Adelaide clash on December 6 against the No.1 ranked Test side.","Mary Kom: Flag bearer for women’s boxing at Olympics, six time world champion, tormentor at 35","The International Cricket Council (ICC) today confirmed it has submitted a bid for the inclusion of T20 women’s cricket into the Commonwealth Games in Birmingham 2022.","Yasir Shah emulates Anil Kumble, becomes first bowler to pick 10 wickets in a day in Test cricket after almost 20 years","ICC T20I Rankings: Kuldeep Yadav enters top 5 of bowlers rankings"]);
topic6 = new topic("Business News",["The government’s plan for 14 mega national employment zones in the country moved a step forward with the project appraisal and management division of Niti Aayog giving its go-ahead to the Rs 1 lakh crore proposal of the shipping ministry","Reliance Jio Infocomm Ltd. has been gaining revenue market share in non-metro cities, aided by increasing traction of its 4G-enabled feature phone JioPhone.","Investors will look for cues from F&O expiry, November auto sales, GDP and state elections along with global developments around Brexit and Italy in this week.","Foreign investors have pumped in Rs 6,310 crore into Indian capital markets this month so far, after pulling out massive funds in October, on easing crude oil prices and a strengthening rupee","Next week, Nifty is expected to trade between 10,500-10,900 points, while bank Nifty is expected to move in the range of 25,800-26,600 points.","Top six companies lose Rs 74,034 crore in market cap last week"]);
topic7 = new topic("Lastest Economy News",["The government may infuse around Rs 42,000 crore—the remaining amount of its Rs 2.11-lakh-crore recapitalisation programme announced last year—by Dec. 15, a senior government official told reporters.","Demand uncertainty, high production and skepticism about the Organization of Petroleum Exporting Countries’ resolve to curb output have come together to drive oil prices sharply lower.","India’s jewelry exporters expect tighter lending to douse any recovery in overseas sales this year, stoking fears that buyers will shift to rivals China and Thailand.","India is eyeing investment opportunities in Saudi Arabia’s $500 billion futuristic infrastructure projects, the government said on Monday.","The Reserve Bank has more than adequate reserves and that it can transfer over Rs 1 trillion to the government after a specially constituted panel identifies the excess capital, says a report.","India’s Solar Exports Jumped by 223% While Imports Increased by 38% in Q3 2018"]);
topic8 = new topic("Artificial intelligence",["Scientists have developed an artificial intelligence tool that can synthesise fake human fingerprints and potentially fool biometric authentication systems.","Now artificial intelligence to assist you in everyday tasks of dressing - details inside","Israel artificial intelligence is helping improve safety along a stretch of Las Vegas’ busiest highway.","IIT Delhi establishes artificial intelligence chair in name of distinguished alumnus","Samsung Electronics has applied its AI algorithms to its imaging devices, the company announced","Photographic aging clock uses advances in Artificial Intelligence to predict human age"]);
topic9 = new topic("Education News",["Chandigarh High Court has rejected the appeal of the engineering student of NIT, Kurukshetra to let him appear for his compartment exams.","Kids Hour sessions will help children aged six to 12 explore coding with robots, while those aged 12 and above can attend sessions using Swift Playgrounds and iPad to learn coding concepts, Apple said.","RPSC has released the exam schedule for School Lecturer (School Education) Exam 2018. RPSC School Lecturer Exam 2018 will begin from January 15, 2019, and will continue till January 23, 2019.","CAT 2018: Experts Say Question Paper Moderately Difficult, QA Toughest Section","NDA & NA (I) 2018 Final Result Out; 379 Selected","Final-year B.Tech Mechanical student at IIT-Mandi, 21-year-old, Atul Yadav, says school education should be improved to end the unhealthy coaching industry.","SSLC students won’t be allowed to wear watches while writing examinations","Union Public Service Commission (UPSC) has released the admit cards for recruitment exams to be held on December 15, 2018."]);
topic10 = new topic("Terrorist attack",["US mobilised special forces to neutralise LeT terrorists during 26/11 attack: Former US official","US embassy in Kinshasa closes following ‘terrorist attack’ threat","Terror attack on Chinese consulate in Karachi foiled; 7 killed","26/11 Mumbai attacks: 10 years on survivors share their stories","Pakistan: UN Security Council condemns ‘heinous and cowardly’ terrorist attacks","A three-member team of National Investigation Agency will reach the blast site in Amritsar today: news agency ANI"]);
topic11 = new topic("MIT Technology",["MIT researchers report that they have created and flown the first plane that doesn’t require any moving parts. This 2.45-kilogram (5.4-pound) experimental aircraft did not spin turbine blades to propel itself 60 meters (200 feet, the length of a school gym): it used electricity directly.","Blockchain smart contracts are finally good for something in the real world","Using Wi-Fi to “see” behind closed doors is easier than anyone thought","Donna Strickland won the Nobel Prize in physics this year, she was the first woman to receive the honor in 55 years.","B2B marketers share strong convictions about how data analytics can help them understand—and reach—their customers. The more benefits they have witnessed, the greater possibilities they see."]);
topic12 = new topic("Health",["Study Finds Obese Children Are At a Greater Risk of Asthma Than Healthy Weighing Kids","Reliance on 'YouTube videos' for cancer treatment dangerous","Lulu and Nana: First genetically modified babies born in China, researcher says","The virus called acute flaccid myelitis or AFM has doctors and the CDC scratching their heads. 10 On Your Side's Laura Caso reports","First-of-its-kind Ebola treatment trial underway in Congo as outbreak surpasses 400 cases","A recent study as observed that smoke-free policies in public spaces are associated with lower blood pressure readings among non-smokers."]);
var topiclist = [topic1,topic2,topic3,topic4,topic5,topic6,topic7,topic8,topic9,topic10,topic11,topic12];

function CompareDate(h1,min1,sec1,h2,min2,sec2) {       
    var dateOne = new Date(2018, 11, 25, h1, min1, sec1);  
    var dateTwo = new Date(2018, 11, 25, h2, min2, sec2);  
     
    if (dateOne > dateTwo) {  
         return false;
    }else {  
         return true;  
    }  
} 
 
var popup_window_1 = `<div class="popup">
<div class="popup-container">
       <div class="close-button">
           <button class="btn btn-close">&times;</button>
       </div>
       <div class="sad-emoji">
           <img src="./images/Sad_Face_Emoji.png" alt=""class="image-4">
       </div>
      <div class="message">
          <h5 class="sorry-msg">Sorry! you can't participate in this Quiz at this time 
              Come at the time when it is going to be held.
          </h5>
      </div>
</div>
</div>`;
var popup_window_2 =   `<div class="popup-1">
<div class="popup-container-1">
        <div class="close-button">
                <button class="btn btn-close close-1">&times;</button>
            </div>
    <div class="orgainser">
        <h5 class="name">Organised by Terminetor</h5>
    </div>
    <div class="marks">
        <h5 class="noofmarks">Maximum Marks : 25</h5>
    </div>
    <div class="questions">
        <h5 class="noofque">No. of Questions : 5</h5>
    </div>
    <div class="instructions">
        <ul class="instruction-list">
            <li class="list-1">Each Que carries 5 marks</li>
            <li class="list-1">All questions are objective type</li>
            <li class="list-1">Passing marks for this quiz is 80%</li>
        </ul>
    </div>
    <div class="button-hit">
        <button class="btn btn-success btn-enter" value="enter">Click here to appear in this quiz</button>
    </div>
</div>
</div>`;
var quizlist = [];
var que1 = [["Which cricketer had scored highest individual score in first-class cricket?","Don Bradman","Brian Lara","Lane Hutton","Gary Sobers","Brian Lara"],["Which cricketer had scored highest individual score in ODI cricket?","Virender Sehwag","Chris Gayle","Martin Guptill","Rohit Sharma","Rohit Sharma"],["Which cricketer had scored most centuries in first-class cricket?","Lane Hutton","Wally Hammond","Jack Hobbs","Sachin Tendulkar","Jack Hobbs"],["Which cricketer had scored fastest century in ODI cricket?","Vivian Richards","Corey Anderson","Shahid Afridi","AB de Villiers","AB de Villiers"],["Which cricketer has taken most catches in ODI cricket?","Ricky Ponting","Mahela Jayawardene","Jacques Kallis","Mark Waugh","Mahela Jayawardene"]];
var que2 = [["In which decade was the American Institute of Electrical Engineers (AIEE) founded?","1850s","1880s","1880s","1950s","1880s"],["What is part of a database that holds only one type of information?","Report","Field","Record","File","Field"],["'OS' computer abbreviation usually means ?","Order of Significance","Open Software","Operating System","Optical Sensor","Operating System"],["In which decade with the first transatlantic radio broadcast occur?","1850s","1860s","1870s","1900s","1900s"],["'.MOV' extension refers usually to what kind of file?","Image file","Animation/movie file","Audio file","MS Office document","Animation/movie file"]];
var que3 = [["In which year was the Election Commission of India formed?",1949,1950,1951,1958,1959],["Which Article of the constitution deals with the powers of the Election Commission of India?",324,524,754,254,234],["Who is the current Chief Election Commissioner of India?","R.K.Trivedi","Syed Nasim Ahmad Zaidi","V.S.Sampath","S.P.Sen Verma","Syed Nasim Ahmad Zaidi"],["Elections in India come under the ___th Amendment to the constitution.",7,18,19,10,19],["In which year was None of the above”(NOTA) button introduced in EVMs (Electronic Voting Machines) and ballots?",2010,2007,2016,2013,2013]];
var que4 = [["Which of the following are the examples of Open loop control systems?","Washing Machines","Light switches","Burglar Alarm systems","All the above","All the above"],["Which of the following are the examples of Closed loop control systems?","Air Conditioners","Refrigerators"," Automatic Rice cookers","All the above","All the above"],["In an open loop control system","Output is independent of control input?","Output is dependent on control input","Only system parameters have effect on the control output","None of the above","Output is independent of control system"],["A control system in which the control action is somehow dependent on the output is known as?","Closed loop system","Semiclosed loop system","Open system","None of the above","Closed loop control system"],["In closed loop control system, with positive value of feedback gain, the overall gain of the system will?","Decrease","Increase","Be unaffected","Any of the above","Increase"]];
var que5 = [["The type of systems which are characterized by input and the output quantized at certain levels are called as","analog","discrete","continuous","digital","discrete"],["An example of a discrete set of information/system is","An example of a discrete set of information/system is","data on a CD","universe time scale","movement of water through a pipe","data on a CD"],["A system which is linear is said to obey the rules of","scaling","additivity","both scaling and additivity","homogeneity","both scaling and additivity"],["All real time systems concerned with the concept of causality are","non causal","causal","neither causal nor non causal","memoryless","causal"]];
var que6 = [["In a loss-free R-L-C circuit the transient current is","oscillating","square wave","sinusoidal","non-oscillating","sinusoidal"],["Power factor of the following circuit will be zero","resistance","inductance","capacitance","both (b) and (c)","both (b) and (c)"],["The time constant of the capacitance circuit is defined as the time during which voltage","falls to 36.8% of its final steady valu","rises to 38.6% of its final steady value","rises to 63.2% of its final steady value","none of the above","rises to 63.2% of its final steady value"],["In a purely inductive circuit","actual power is zero","reactive power is zero","apparent power is zero","none of above is zero","actual power is zero"]];
var que7 = [["IDFC's Infrastructure Finance Limited was acquired by","SEBI","NIIF","Bajaj Capital Limited","L & T Finance","NIIF"],["Name the first indian who won Asian Snooker Tour title in China.","Manan Chandra","Geet Sethi","Pankaj Advani","Yasin Merchant","Pankaj Advani"],["Which two countries jointly launched the Oceanography Satellite recently?","China and France","France and Russia","India and China","US and Russia","China and France"],["Which team get the overall champions of 1st edition of North East Olympic Games 2018?","Tripura","Nagaland","Manipur","Sikkim","Manipur"],["The theme of 2018 World Cities Day is;","Promoting a better urban future","Building Sustainable and Resilient Cities","Inclusive Cities, Shared Development","Innovative Governance, Open Cities","Building Sustainable and Resilient Cities"]];
var quiz1 = new quiz("Cricket Fan","sanskar jain",100,que1,1,90,1,00);
var quiz2 = new quiz("Technology","parijat mitra",100,que2,2,90,1,00);
var quiz3 = new quiz("Election Question","mahto ji",100,que3,3,90,1,00);
var quiz4 = new quiz("Control System Quiz","sanskar",100,que4,4,90,1,00);
var quiz5 = new quiz("Signal And System","parijat",100,que5,5,90,1,00);
var quiz6 = new quiz("Circuit Theory","Shivk",100,que6,6,90,1,00);
var quiz7 = new quiz("Current Affairs","Shivk",100,que7,3,90,1,00);
quizlist.push(quiz1);
quizlist.push(quiz2);
quizlist.push(quiz3);
quizlist.push(quiz4);
quizlist.push(quiz5);
quizlist.push(quiz6);
quizlist.push(quiz7);
$(document).ready(function(){
    $(".btn-quiz-recent").click(function(e){
            var g = e.target.value;
            console.log(g);
          
            var a,b,c,d,e,result;
            a = quizlist[g-1].hh
            b  = quizlist[g-1].min;
            c = new Date();
            d = c.getHours();
            e = c.getMinutes();
            result = CompareDate(a,b,0,d,e,0);
            
            if (result==false)
            {
                $(".whole-body").prepend(popup_window_1);
                $(".popup").css("display","block");
                $(".popup-container").animate({
                         opacity : "1",
                         top : "50%"
                });
                $(".btn-close").click(function(){
                    $(".popup-container").animate({
                        opacity : "0",
                        top : "0"
            
                    },1000,function(){
                        $(".popup").css("display","none");
                        $(".popup").remove();
                    });
               });
            }
            else{
                $(".whole-body").prepend(popup_window_2);
                $(".popup-1").css("display","block");
                $(".popup-container-1").animate({
                    opacity : "1",
                    top : "50%"
                });
                $(".close-1").click(function(){
                    $(".popup-container-1").animate({
                        opacity : "0",
                        top : "0"
                
                    },1000,function(){
                        $(".popup-1").css("display","none");
                        $(".popup-1").remove();
                    }); 
                });
                $(".btn-enter").click(function(){
                     
                    $(".popup-container-1").css({
                        opacity : "0",
                        top : "0"
                    });
                    $(".popup-1").css("display","none");
                    $(".popup-1").remove();  
                    var new_quiz_html= ` <div class="popup-quiz col-md-8">
                    <div class="popup-quiz-container">
                  <div class="subject-row row justify-content-center">
                      <div class="col-md-6 subject-column">
                            <h5 class="quiz-sub-name">${quizlist[g-1].subject}</h5>
                      </div>
                  </div>
                  <div class="row time-marks-row justify-content-around">
                      <div class="col-md-2 time-marks">
                            <h6 class="max-marks">Max.Marks : ${quizlist[g-1].marks}</h6>
                      </div>
                      <div class="col-md-2 time-marks">
                            <h6 class="time">Time : ${quizlist[g-1].hh}:${quizlist[g-1].min} hrs</h6>
                      </div>
                  </div>`;
                  
                  var html_of_questions = ``;
                  var no_of_que = quizlist[g-1].questions.length;
                  for(i=0;i<no_of_que;i++)
                  {
                      html_of_questions +=`<div class="que-${i+1} que-quiz">
                      <div class="question-quiz">
                            <h6 class="question-head">${quizlist[g-1].questions[i][0]}</h6>
                      </div>
                      <div class="custom-control custom-radio"><input type="radio" class="custom-control-input que-${i+1}-input-1 "id="input-1-que-${i+1}" value="${quizlist[g-1].questions[i][1]}" name="same-input-${i+1}"><label for="input-1-que-${i+1}" class="custom-control-label">${quizlist[g-1].questions[i][1]}</label></div>
                      <div class="custom-control custom-radio"><input type="radio" class="custom-control-input que-${i+1}-input-2" id="input-2-que-${i+1}" value="${quizlist[g-1].questions[i][2]}" name="same-input-${i+1}"><label for="input-2-que-${i+1}" class="custom-control-label">${quizlist[g-1].questions[i][2]}</label></div>
                      <div class="custom-control custom-radio"><input type="radio" class="custom-control-input que-${i+1}-input-3" id="input-3-que-${i+1}" value="${quizlist[g-1].questions[i][3]}" name="same-input-${i+1}"><label for="input-3-que-${i+1}" class="custom-control-label">${quizlist[g-1].questions[i][3]}</label></div>
                      <div class="custom-control custom-radio"><input type="radio" class="custom-control-input que-${i+1}-input-4" id="input-4-que-${i+1}" value="${quizlist[g-1].questions[i][4]}" name="same-input-${i+1}"><label for="input-4-que-${i+1}" class="custom-control-label">${quizlist[g-1].questions[i][4]}</label></div>
                  </div>`;
                  }
                  
                  var html_of_submit_button =`<div class="quiz-submission row justify-content-center">
                  <div class="col-md-6 quiz-submission-button-column">
                  <button class="quiz-submission-button">Submit and evaluate  <span class="arrow-10">&rarr;</span>  </button>
                  </div>
              </div>`;
              
              var total_html =  `<div class="fluid-container row justify-content-center quiz-container">` + new_quiz_html+html_of_questions+html_of_submit_button + `</div>`+ `<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
              <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
              <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
              <script src="./script.js"></script>`;
            
               var old_html = $(".whole-body").html();
              $(".whole-body").html(total_html);
              $(".quiz-submission-button").click(function(){
                  
                  var total_marks=0;
                  var correct=0;
                  var wrong=0;
                  var marks_per_que = quizlist[g-1].marks/quizlist[g-1].questions.length;

                    for(i=0;i<no_of_que;i++)
                    {
                        for(j=0;j<4;j++)
                        {
                            if($(`.que-${i+1}-input-${j+1}`).prop("checked")==true)
                            {
                                if($(`.que-${i+1}-input-${j+1}`).val()==quizlist[g-1].questions[i][5])
                                {
                                           total_marks+=marks_per_que;
                                           correct+=1;
                                }
                                else{
                                    wrong+=1;
                                }
                            } 
                        }
                    }
                    var percent =  (total_marks/quizlist[g-1].marks)*100;
                    
                    if(total_marks>=quizlist[g-1].passingmarks)
                    {
                         var new_passed_popup_window = `<div class="popup-2">
                         <div class="popup-container-2">
                             <div class="image-happy">
                                 <img src="./images/happy (1).png" alt="">
                             </div>
                             <div class="message-status">
                                 <h5 class="passed-failed">You passed successfully</h5>
                             </div>
                             <div class="correct-ans">
                                 <h5 class="correct-answer">No. of correct Answers = ${correct}</h5>
                             </div>
                             <div class="wrong-ans">
                                 <h5 class="wrong-answer">No. of wrong Answers = ${wrong}</h5>
                             </div>
                             <div class="score">
                                 <h5 class="score">Your Score = ${total_marks}</h5>
                             </div>
                             <div class="percentage">
                                 <h5 class="percent">Your Percentage = ${percent}%</h5>
                             </div>
                             <div class="again-quiz">
                                 <button class="btn btn-success again-quiz-button">Click here to appear again <span class="arrow-1">&rarr;</span>  </button>
                             </div>
                             <div class="prev">
                                 <button class="btn btn-success prev-quiz-button">Click here to explore more quizzes <span class="arrow-1">&rarr;</span>  </button>
                             </div>
                         
                         </div>
                         </div>`;
                         $(".whole-body").prepend(new_passed_popup_window);
                         $(".popup-2").css("display","block");
                        $(".popup-container-2").animate({
                             opacity: "1",
                             top : "50%"
                        },1000); 
                        $(".again-quiz-button").click(function(){

                            
                            for(i=0;i<no_of_que;i++)
                    {
                        for(j=0;j<4;j++)
                        {
                            if($(`.que-${i+1}-input-${j+1}`).prop("checked")==true)
                            {   
                                $(`.que-${i+1}-input-${j+1}`).prop("checked",false);
                            } 
                        }
                    }
                              $(".popup-container-2").animate({
                                  opacity:"0",
                                  top : "0"
                              },1000,function(){
                                   $(".popup-2").css("display","none");
                                   $(".popup-2").remove();
                              });
                        }); 
                        $(".prev-quiz-button").click(function(){
                            for(i=0;i<no_of_que;i++)
                            {
                                for(j=0;j<4;j++)
                                {
                                    if($(`.que-${i+1}-input-${j+1}`).prop("checked")==true)
                                    {   
                                        $(`.que-${i+1}-input-${j+1}`).prop("checked",false);
                                    } 
                                }
                            }  
                                    $(".popup-container-2").animate({
                                        opacity:"0",
                                        top : "0"
                                    },1000,function(){
                                         $(".popup-2").css("display","none");
                                         $(".popup-2").remove();
                                         $(".whole-body").html(old_html);
                                         location.assign('../Upcomming quizzes/quizzes.html');
                                    });
                          });                
                    }
                    else{
                        var new_failed_quiz_window =   `<div class="popup-2">
                        <div class="popup-container-2">
                            <div class="image-happy">
                                <img src="./images/Sad_Face_Emoji.png" alt="" class="image-5">
                            </div>
                            <div class="message-status">
                                <h5 class="passed-failed">Sorry! but you failed in this quiz</h5>
                            </div>
                            <div class="correct-ans">
                                <h5 class="correct-answer">No. of correct Answers = ${correct}</h5>
                            </div>
                            <div class="wrong-ans">
                                <h5 class="wrong-answer">No. of wrong Answers = ${wrong}</h5>
                            </div>
                            <div class="score">
                                <h5 class="score">Your Score =${total_marks}</h5>
                            </div>
                            <div class="percentage">
                                <h5 class="percent">Your Percentage = ${percent}%</h5>
                            </div>
                            <div class="again-quiz">
                                <button class="btn btn-success again-quiz-button">Click here to appear again <span class="arrow-1">&rarr;</span>  </button>
                            </div>
                            <div class="prev">
                                <button class="btn btn-success prev-quiz-button">Click here to explore more quizzes <span class="arrow-1">&rarr;</span>  </button>
                            </div>
                        
                        </div>
                        </div>`;
                        $(".whole-body").prepend(new_failed_quiz_window);
                         $(".popup-2").css("display","block");
                        $(".popup-container-2").animate({
                             opacity: "1",
                             top : "50%"
                        },1000); 
                        $(".again-quiz-button").click(function(){
                            for(i=0;i<no_of_que;i++)
                    {
                        for(j=0;j<4;j++)
                        {
                            if($(`.que-${i+1}-input-${j+1}`).prop("checked")==true)
                            {   
                                $(`.que-${i+1}-input-${j+1}`).prop("checked",false);
                            } 
                        }
                    }
                            $(".popup-container-2").animate({
                                opacity:"0",
                                top : "0"
                            },1000,function(){
                                 $(".popup-2").css("display","none");
                                 $(".popup-2").remove();
                        });
                    });
                    $(".prev-quiz-button").click(function(){
                        for(i=0;i<no_of_que;i++)
                        {
                            for(j=0;j<4;j++)
                            {
                                if($(`.que-${i+1}-input-${j+1}`).prop("checked")==true)
                                {   
                                    $(`.que-${i+1}-input-${j+1}`).prop("checked",false);
                                } 
                            }
                        }      
                        $(".popup-container-2").animate({
                            opacity:"0",
                            top : "0"
                        },1000,function(){
                            $(".popup-2").css("display","none");
                            $(".popup-2").remove();
                                location.assign('../Upcomming quizzes/quizzes.html');  
                            });
                    }); 
                }
            });     
        });   
    }
});
$(".show-more-button").click(function(){
    location.assign('../Upcomming quizzes/quizzes.html');
});
$(".topic-details-button").click(function(e){
        
         var targeted_topic = e.target.value;
         if (targeted_topic > topiclist.length)
         {
             alert("we are currently updating information about this topic please visit this site later");
         }
         else{

         var topic_html =  `<div class="popup-3">
         <div class="popup-container-3">
            <div class="name-of-topic">
                <h5 class="topic-name">${topiclist[targeted_topic-1].name}</h5>
            </div>
            <div class="facts">
                <ul class="facts-list">`;
            var no_of_facts = ``;
            for(w=0;w<topiclist[targeted_topic-1].factlist.length;w++)
            {
                no_of_facts+=` <li class="fact-item">${topiclist[targeted_topic-1].factlist[w]}</li>`;
            }
            var total_topic_html = topic_html+no_of_facts+` </ul>
            </div>
            <div class="close-facts">
             <button class="btn btn-danger btn-topic-facts-close">Close <span class="arrow-1">&rarr;</span>  </button>
         </div>
         </div>
         
     </div>`;
        $(".whole-body").prepend(total_topic_html);
         $(".popup-3").css("display","block");
         $(".popup-container-3").animate({
             opacity : "1",
             top : "50%"
         },500);
         $(".btn-topic-facts-close").click(function(){
             $(".popup-container-3").animate({
                 opacity:"0",
                 top : "0"
             },500,function(){
                  $(".popup-3").css("display","none");
                  $(".popup-3").remove();
             });
         });  
      }
});
$(".submission-topic-search-button").click(function(){
    var user_input = $(".search-input").val();
    var success = 0;
    for(var z=0;z<topiclist.length;z++)
    {
        if(user_input==topiclist[z].name)
        {
            var topic_html =  `<div class="popup-3">
         <div class="popup-container-3">
            <div class="name-of-topic">
                <h5 class="topic-name">${topiclist[z].name}</h5>
            </div>
            <div class="facts">
                <ul class="facts-list">`;
            var no_of_facts = ``;
            for(w=0;w<topiclist[z].factlist.length;w++)
            {
                no_of_facts+=` <li class="fact-item">${topiclist[z].factlist[w]}</li>`;
            }
            var total_topic_html = topic_html+no_of_facts+` </ul>
            </div>
            <div class="close-facts">
             <button class="btn btn-danger btn-topic-facts-close">Close <span class="arrow-1">&rarr;</span>  </button>
         </div>
         </div>
         
     </div>`;
        $(".whole-body").prepend(total_topic_html);
         $(".popup-3").css("display","block");
         $(".popup-container-3").animate({
             opacity : "1",
             top : "50%"
         },500);
         $(".btn-topic-facts-close").click(function(){
             $(".popup-container-3").animate({
                 opacity:"0",
                 top : "0"
             },500,function(){
                  $(".popup-3").css("display","none");
                  $(".popup-3").remove();
             });
         });
         success=1;
         $(".search-input").val("");
         break;
        }
    }
    if(success==0)
    {   if($(".search-input").val()!="")
    {
        alert("the topic you searched is currently unavailable,try to search some different topic or visit this site later");
        $(".search-input").val("");
    }
    else{
        alert("write the name of the topic and then click on submit to continue");
        $(".search-input").focus();

    }
    }
})
$(".view-more-link").click(function(e){
    
    var id_of_link = e.target.id;
    var id_of_para = `para-${id_of_link[id_of_link.length-1]}`;
    if($(`#${id_of_link}`).hasClass(`more`))
    {   
        $(`#${id_of_para}`).css("display","block");
        $(`#${id_of_link}`).html(`view less <span class="arrow-1">&rarr;</span>`);
        $(`#${id_of_link}`).removeClass(`more`);
        $(`#${id_of_link}`).addClass(`less`);

    }
    else if($(`#${id_of_link}`).hasClass(`less`))
    {
        
        $(`#${id_of_para}`).css("display","none");
        $(`#${id_of_link}`).html(`view more <span class="arrow-1">&rarr;</span>`);
        $(`#${id_of_link}`).removeClass(`less`);
        $(`#${id_of_link}`).addClass(`more`);
    }
});
$(".show-more-button-answer").click(function(){
   location.assign('../question-answers/que-ans.html');
});
$(".btn-give-answer").click(function(e){
    
    var question_unanswered = $(`#que-${e.target.value}`).text();
    var new_answer_window = `<div class="popup-4">
    <div class="popup-container-4">
        <div class="btn-close-container">
            <button class="close-button-ans btn btn-success">&times;</button>
        </div>
        <div class="answer-heading">
        <h6 class="write-answer-head">${question_unanswered} <span class="arrow-1">&rarr;</span> </h6>
        </div>
        <div class="answer-heading">
       <h6 class="write-answer-head">Write Your Answer Here <span class="arrow-1">&rarr;</span> </h6>
       </div>
       <div class="ans-write-area">
           <textarea name="" id="text-field" cols="40" rows="15" placeholder="write your thoughts here"></textarea>
       </div>
       <div class="submit-button-div">
           <button class="submit-ans-button btn-success btn">Submit <span class="arrow-1">&rarr;</span> </button>
       </div>
    </div>
</div>`;
      $(".whole-body").prepend(new_answer_window);
      $(".popup-4").css("display","block");
      $(".popup-container-4").animate({
          opacity : "1",
          top : "50%"
      });
      $(".close-button-ans").click(function(){
              $(".popup-container-4").animate({
                  opacity : "0",
                  top : "0"
              },500,function(){
                 $(".popup-4").css("display","none");
                 $(".popup-4").remove();
              }); 
      });
      $(".submit-ans-button").click(function(){
            if($("#text-field").val()=="")
            {
                alert("please write the answer");
                $("#text-field").focus();

            }
            else{
                var answer_given_by_user = $("#text-field").val().split(" ");
                var new_answered_question_html;
                var noofelements = $(".que-ans-row").length +1;
                
                if(answer_given_by_user.length<20)
                {

                new_answered_question_html = `<div class="row que-ans-row justify-content-center align-items-center">
                <div class="col-md-10 que-ans-column">
                     <div class="que">
                         <h5 class="question">${question_unanswered}</h5>
                     </div>
                     <div class="ans">
                         <p class="answer">
                            ${$("#text-field").val()} 
                         </p>
                     </div>
                </div>
                </div>`;
                }
                else{
                    var string_1 = answer_given_by_user.slice(0,20);
                    var string_2 = answer_given_by_user.slice(20,answer_given_by_user.length);
                    new_answered_question_html = `<div class="row que-ans-row justify-content-center align-items-center">
                    <div class="col-md-10 que-ans-column">
                         <div class="que">
                             <h5 class="question">${question_unanswered}</h5>
                         </div>
                         <div class="ans">
                             <p class="answer"> ${string_1.join(' ')} 
                                 <span class="arrow-3"> <a href="#para-${noofelements}" class="view-more-link more"id="view-more-link-${noofelements}">view more <span class="arrow-1">&rarr;</span>  </a> </span>
                                 <p class="para-remain answer" id="para-${noofelements}"> ${string_2.join(' ')}  </p></p>
                         </div>
                    </div>
                    </div>`;
                }
                $(".recent-quiz-heading-container").after(new_answered_question_html);
                $("#text-field").val('');
                $(".popup-container-4").animate({
                    opacity : "0",
                    top : "0"
                },500,function(){
                    $(".popup-4").css("display","none");
                $(".popup-4").remove();
                var submission_msg_success_html = `<div class="popup-5">
                <div class="popup-container-5">
                    <div class="image-division">
                        <img src="./images/happy (1).png" alt="" class="image-4">
                    </div>
                    <div class="message">
                        <h6 class="submission-msg">Your answer submitted successfully!</h6>
                    </div>
                    <div class="message">
                        <h6 class="submission-msg">You can see your answer in 'recent question' section of this site</h6>
                    </div>
                    <div class="button-division">
                        <button class="btn btn-success ans-ok-button">OK <span class="arrow-1">&rarr;</span>  </button>
                    </div>
                </div>
            </div>`;
            
            $(".whole-body").prepend(submission_msg_success_html);
            $(".popup-5").css("display","block");
            $(".popup-container-5").animate({
                    opacity : "1",
                    top : "50%"
            });
            $(".ans-ok-button").click(function(){
                    $(".popup-container-5").animate({
                        opacity : "0",
                        top : "0"
                    },500,function(){
                        $(".popup-5").css("display","none");
                        $(".popup-5").remove();
                    });
                });
            });
        }
    });  
});
$(".btn-show-more-questions").click(function(){
       location.assign('../no-answer-questions/no-ans-questions.html');
});
$(".btn-ask").click(function(){
     var new_ask_popup_window = `<div class="popup-6">
     <div class="popup-container-6">
         <div class="btn-close-container">
             <button class="btn btn-success close-button-que-post">&times;</button>
         </div>
         
         <div class="answer-heading">
        <h6 class="write-answer-head">What you want to ask? write your question here  <span class="arrow-1">&rarr;</span> </h6>
        </div>
        <div class="ans-write-area">
            <textarea name="" id="text-field-que" cols="40" rows="6" placeholder="write your thoughts here"></textarea>
        </div>
        <div class="submit-button-div">
            <button class="btn-success btn submit-que-button">Submit <span class="arrow-1">&rarr;</span> </button>
        </div>
     </div>
 </div>`;
   $(".whole-body").prepend(new_ask_popup_window);
   $(".popup-6").css("display","block");
   $(".popup-container-6").animate({
       opacity:"1",
       top: "50%"
   });
   $(".close-button-que-post").click(function(){
    $(".popup-container-6").animate({
        opacity : "0",
        top : "0"
    },500,function(){
        $(".popup-6").css("display","none");
        $(".popup-6").remove();
    });
   });
   $(".submit-que-button").click(function(){
           if($('#text-field-que').val()=="")
           {
               alert("please write your question in input field");
           }
           else{
               var noofelements_que  = $(".unanswered-row").length +1;
               var new_question_html = `<div class="row unanswered-row justify-content-center">
               <div class="col-md-10 unanswered-column">
                   <div class="unanswered-que">
                       <h5 class="unanswered" id="que-${noofelements_que}">${$('#text-field-que').val()}</h5>
                   </div>
                   <div class="button ans-button">
                        <button class="btn btn-secondary btn-give-answer" value="${noofelements_que}"> Give an answer <span class="arrow-1">&rarr;</span>  </button>
                   </div>
               </div>
           
      </div> `;
        $(".show-more-button-container").before(new_question_html);
        $(".popup-container-6").animate({
            opacity : "0",
            top : "0"
        },500,function(){
            $(".popup-6").css("display","none");
            $(".popup-6").remove();
            var new_success_popup = `<div class="popup-7">
            <div class="popup-container-7">
                <div class="image-division">
                    <img src="./images/happy (1).png" alt="" class="image-4">
                </div>
                <div class="message">
                    <h6 class="submission-msg">Your question submitted successfully!</h6>
                </div>
                <div class="message">
                    <h6 class="submission-msg">You can see your question in 'recently added' section of this site</h6>
                </div>
                <div class="button-division">
                    <button class="btn btn-success ans-ok-button-que-post">OK <span class="arrow-1">&rarr;</span>  </button>
                </div>
            </div>
        </div>`;
        $(".whole-body").prepend(new_success_popup);
        $(".popup-7").css("display","block");
        $(".popup-container-7").animate({
       opacity:"1",
       top: "50%"
   });
       $(".ans-ok-button-que-post").click(function(){
            $(".popup-container-7").animate({
                opacity : "0",
                top : "0"
            },500,function(){
                 $(".popup-7").css("display","none");
                 $(".popup-7").remove();
              });
            });
         });
      }
   });
});

$(".own-quiz-host-button").click(function(){
     var new_popup_quiz_hosting_window = `<div class="popup-8">
     <div class="popup-container-8">
         <div class="close-button-division">
              <div class="close-info-quiz-button">&times;</div>
         </div>
         <div class="fill-out">
             <h5 class="heading-form-quiz">Please fill out this form</h5>
         </div>
         
         <form action="" class="enquiry-form">
             <div class="form-group">
                 <label for="name">Enter your name:</label>
                 <input type="text" class="form-control" id="name" placeholder="name" required>
             </div>
             <div class="form-group">
                 <label for="subject">Subject of the quiz:</label>
                 <input type="text" class="form-control" id="subject" placeholder="subject of the quiz" required>
             </div>
             <div class="form-group">
                 <label for="marks">Maximum marks:</label>
                 <input type="number" class="form-control" id="marks" placeholder="max. marks" required>
             </div>
             <div class="form-group">
                 <label for="marks">No. of Questions:</label>
                 <input type="number" class="form-control" id="questions" placeholder="no. of questions" required>
             </div>
             
             <div class="form-group">
                 <label for="passingmarks">Passingmarks:</label>
                 <input type="number" class="form-control" id="passingmarks" placeholder="passingmarks" required>
             </div>
             <div class="form-group">
                  <div class="input-group">
                      <label for="time">Enter the time when quiz will be held in HH:MIN:</label>
                      <br>
                      <input type="number" class="form-control" id="time" placeholder="hrs" required><input type="number" class="form-control" id="time1" placeholder="minutes" required>
                  </div>
             </div>
             <div class="submit-button-division">
                 <button class="btn btn-primary btn-quiz-info-submit-button">Submit  <span class="arrow-1">&rarr;</span> </button>
             </div>
         </form>
     </div>
 </div>`;
   $(".whole-body").prepend(new_popup_quiz_hosting_window);
   $(".popup-8").css("display","block");
   $(".popup-container-8").animate({
       opacity : "1",
       top : "50%"
   },500);
   $(".close-info-quiz-button").click(function(){
           $(".popup-container-8").animate({
               opacity: "0",
               top : "0"
           },500,function(){
                 $(".popup-8").css("display","none");
                 $(".popup-8").remove();
           });
   });
   $(".btn-quiz-info-submit-button").click(function(){
         if($("#name").val()=="")
         {
             alert("please fill out your name to continue");
             $("#name").focus();
         }
         else if($("#subject").val()=="")
         {
             alert("fill out the subject of the quiz");
             $("#subject").focus();
 
         }
         else if($("#marks").val()=="")
         {
             alert("fill out the maximum marks for the quiz. this will help us in evaluation of the quiz");
             $("#marks").focus();
         }
        
         else if($("#passingmarks").val()=="")
         {
             alert("fill out the passing marks for this quiz");
             $("#passingmarks").focus();
         }
         else if($("#time").val()=="")
         {
             alert("fill out the time at which quiz can be held");
             $("#time").focus();
         }
         else if($("#time1").val()=="")
         {
            alert("fill out the time at which quiz can be held");
            $("#time1").focus();
         }
        
         else{
            
             var new_quiz_by_user = new quiz($("#subject").val(),$("#name").val(),$("#marks").val(),[],quizlist.length,$("#passingmarks").val(),$("#time").val(),$("#time1").val());
             quizlist.push(new_quiz_by_user);
             $(".popup-8").css("display","none");
            
             $(".popup-container-8").css({
                 opacity :"0",
                 top :"0"
             });
             $(".popup-8").remove();
             var new_popup_quiz_form = `<div class="popup-9">
             <div class="popup-container-9">
                     <div class="quiz-form-heading">
                             <h4>QUIZ FORMATION FORM</h4>
                         </div>
                         <form action="" class="quiz-questions-form">
                          <div class="form-group">
                              <label for="que-1">Enter your question:</label>
                              <input type="text" class="form-control" id="que-1" placeholder="write your question here">
                              <div class="input-group">
                                  <div class="input-group-prepend">
                                      <span class="bg-primary">options:</span>
                                  </div>
                                  <input type="text" class="form-control que-1-1" placeholder="option-1">
                                  <input type="text" class="form-control que-1-2"placeholder="option-2">
                                  <input type="text" class="form-control que-1-3" placeholder="option-3">
                                  <input type="text" class="form-control que-1-4" placeholder="option-4">
                                  <input type="text" class="form-control que-1-ans" placeholder="answer">
                              </div>
                              
                          </div>
                          <div class="form-group">
                                  <label for="que-2">Enter your question:</label>
                                  <input type="text" class="form-control" id="que-2" placeholder="write your question here">
                                  <div class="input-group">
                                      <div class="input-group-prepend">
                                          <span class="bg-primary">options:</span>
                                      </div>
                                      <input type="text" class="form-control que-2-1" placeholder="option-1">
                                      <input type="text" class="form-control que-2-2"placeholder="option-2">
                                      <input type="text" class="form-control que-2-3" placeholder="option-3">
                                      <input type="text" class="form-control que-2-4" placeholder="option-4">
                                      <input type="text" class="form-control que-2-ans" placeholder="answer">
                                  </div>
                                  
                              </div>
                              <div class="form-group">
                                      <label for="que-3">Enter your question:</label>
                                      <input type="text" class="form-control" id="que-3" placeholder="write your question here">
                                      <div class="input-group">
                                          <div class="input-group-prepend">
                                              <span class="bg-primary">options:</span>
                                          </div>
                                          <input type="text" class="form-control que-3-1" placeholder="option-1">
                                          <input type="text" class="form-control que-3-2"placeholder="option-2">
                                          <input type="text" class="form-control que-3-3" placeholder="option-3">
                                          <input type="text" class="form-control que-3-4" placeholder="option-4">
                                          <input type="text" class="form-control que-3-ans" placeholder="answer">
                                      </div>
                                      
                                  </div>
                                  <div class="form-group">
                                          <label for="que-4">Enter your question:</label>
                                          <input type="text" class="form-control" id="que-4" placeholder="write your question here">
                                          <div class="input-group">
                                              <div class="input-group-prepend">
                                                  <span class="bg-primary">options:</span>
                                              </div>
                                              <input type="text" class="form-control que-4-1" placeholder="option-1">
                                              <input type="text" class="form-control que-4-2"placeholder="option-2">
                                              <input type="text" class="form-control que-4-3" placeholder="option-3">
                                              <input type="text" class="form-control que-4-4" placeholder="option-4">
                                              <input type="text" class="form-control que-4-ans" placeholder="answer">
                                          </div>
                                          
                                      </div>
                                      <div class="form-group">
                                              <label for="que-5">Enter your question:</label>
                                              <input type="text" class="form-control" id="que-5" placeholder="write your question here">
                                              <div class="input-group">
                                                  <div class="input-group-prepend">
                                                      <span class="bg-primary">options:</span>
                                                  </div>
                                                  <input type="text" class="form-control que-5-1" placeholder="option-1">
                                                  <input type="text" class="form-control que-5-2"placeholder="option-2">
                                                  <input type="text" class="form-control que-5-3" placeholder="option-3">
                                                  <input type="text" class="form-control que-5-4" placeholder="option-4">
                                                  <input type="text" class="form-control que-5-ans" placeholder="answer">
                                              </div>
                                          </div>
                         </form>
                         <div class="submit-button-form-group form-group">
                         <button class=" btn btn-success btn-submit-quiz-form-form">Submit <span class="arrow-9000">&rarr;</span>  </button>
                     </div>
             </div>
         </div>`;
         $(".whole-body").prepend(new_popup_quiz_form);
         $(".popup-9").css("display","block");
         $(".popup-container-9").css({
             opacity : "1",
             top : "50%"
         });
         $(".btn-submit-quiz-form-form").click(function(){
            
            for(i=0;i<5;i++){
                new_quiz_by_user.questions.push([]);
                new_quiz_by_user.questions[i].push($(`#que-${i+1}`).val());
                for(w=0;w<4;w++)
                {
                    new_quiz_by_user.questions[i].push($(`.que-${i+1}-${w+1}`).val());
                }
                new_quiz_by_user.questions[i].push($(`.que-${i+1}-ans`).val());

            }
            console.log(new_quiz_by_user);
            $(".popup-container-9").animate({
                opacity : "0",
                top  : "0"
            },500,function(){
                 $(".popup-9").css("display","none");
                 $(".popup-9").remove();
                 var last_popup_window  = `<div class="popup-10">
                 <div class="popup-container-10">
                        
                        <div class="sad-emoji">
                            <img src="./images/happy (1).png" alt=""class="image-4">
                        </div>
                       <div class="message">
                           <h5 class="sorry-msg">your quiz is formed successfully!
                           </h5>
                       </div>
                       <div class="ok-last-button">
                          <button class="btn btn-success  last-ok-button">OK!</button> 
                       </div>
                       
                 </div>
                 </div>`;
                 $(".whole-body").prepend(last_popup_window);
                 $(".popup-10").css("display","block");
                 $(".popup-container-10").animate({
                     opacity : "1",
                     top :"50%"
                 },500);
                 $(".last-ok-button").click(function(){
                          $(".popup-container-10").animate({
                              top : "0",
                              opacity : "0"
                          },500,function(){
                              $(".popup-10").css("display","none");
                              $(".popup-10").remove();
                            });
                        });
                    });  
                });
            }
        });
    }); 
 });  