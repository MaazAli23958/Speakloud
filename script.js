const topics = [
    "Is India ready to become a developed nation?",
    "Should voting be made compulsory?",
    "Is social media a blessing or a curse?",
    "Should governments ban fake news?",
    "Is globalization beneficial for developing countries?",
    "Should India have a four-day working week?",
    "Is population growth a problem or an opportunity?",
    "Should celebrities be responsible for their public statements?",
    "Is freedom of speech absolute?",
    "Should public transport be free?",
    "Online education vs. traditional classroom education.",
    "Should exams be replaced with continuous assessment?",
    "Is the Indian education system preparing students for the future?",
    "Should attendance be compulsory in colleges?",
    "Is academic performance more important than practical skills?",
    "Should education be free for everyone?",
    "Is studying abroad better than studying in India?",
    "Should students be allowed to use AI for assignments?",
    "Is homework necessary for students?",
    "Should schools teach financial literacy?",
    "Gender equality: Reality or just a slogan?",
    "Should dowry be completely eliminated?",
    "Is nuclear family better than joint family?",
    "Should social media influencers be regulated?",
    "Is urbanization destroying traditional values?",
    "Is reservation necessary in modern India?",
    "Should elderly parents live with their children?",
    "Is society becoming more individualistic?",
    "Should men and women have equal parental leave?",
    "Is poverty the biggest challenge facing society?",
    "Is entrepreneurship better than a traditional job?",
    "Should the government support small businesses more?",
    "Cashless economy vs. cash-based economy.",
    "Is inflation the biggest threat to the middle class?",
    "Should there be a universal basic income?",
    "Is foreign investment beneficial for India?",
    "Work from home vs. work from office.",
    "Should companies prioritize employee welfare over profits?",
    "Is economic growth possible without environmental damage?",
    "Should internships be mandatory for college students?",
    "Climate change: Who is responsible?",
    "Should plastic bags be completely banned?",
    "Is renewable energy the future?",
    "Development vs. environmental protection.",
    "Should individuals be punished for wasting water?",
    "Is climate change more dangerous than economic slowdown?",
    "Should cities restrict private vehicles?",
    "Can electric vehicles completely replace petrol and diesel vehicles?",
    "Should deforestation be treated as a criminal offense?",
    "Is sustainable development achievable in developing countries?",
    "Artificial Intelligence: Opportunity or threat?",
    "Is technology making humans lazy?",
    "Should children have limited screen time?",
    "Is privacy more important than national security?",
    "Can robots replace human jobs?",
    "Is the internet a basic human necessity?",
    "Should smartphones be banned in classrooms?",
    "Does social media improve communication?",
    "Is online shopping destroying local businesses?",
    "Should AI-generated content be labeled?",
    "Should politicians have minimum educational qualifications?",
    "Is democracy the best form of government?",
    "Should election campaigns have spending limits?",
    "Is political awareness important for students?",
    "Should there be a two-child policy?",
    "Is decentralization important for development?",
    "Should government services be fully digital?",
    "Is corruption the biggest obstacle to development?",
    "Should voting age be reduced to 16?",
    "Can technology improve government transparency?",
    "Cricket vs. other sports: Why does cricket dominate India?",
    "Should sports be compulsory in schools?",
    "Is sports as important as academics?",
    "Should athletes receive government jobs?",
    "Is commercial sponsorship good for sports?",
    "Should esports be recognized as a professional sport?",
    "Are reality TV shows influencing society negatively?",
    "Is cinema a reflection of society?",
    "Should celebrities promote social causes?",
    "Is winning more important than participation in sports?",
    "Is honesty always the best policy?",
    "Should money be the primary measure of success?",
    "Is it ethical to lie to protect someone's feelings?",
    "Should rich people pay higher taxes?",
    "Can success be achieved without compromising ethics?",
    "Is competition good or bad for students?",
    "Should people prioritize personal happiness over social expectations?",
    "Is forgiveness more important than punishment?",
    "Does power always corrupt people?",
    "Should whistleblowers receive legal protection?",
    "The color of success.",
    "Time is money.",
    "Silence speaks louder than words.",
    "The journey is more important than the destination.",
    "Failure is the pillar of success.",
    "If I were the Prime Minister for one day.",
    "Money can buy happiness.",
    "The world without borders.",
    "The last day on Earth.",
    "Is the glass half-full or half-empty?"
];

const homeScreen = document.getElementById('home-screen');
const topicScreen = document.getElementById('topic-screen');
const generateBtn = document.getElementById('generate-btn');
const generateAnim = document.getElementById('generating-animation');
const randDisplay = document.getElementById('random-number-display');
const cardNumberDisplay = document.getElementById('card-number');
const cardTopicDisplay = document.getElementById('card-topic');
const timeInput = document.getElementById('time-input');
const startTimerBtn = document.getElementById('start-timer-btn');
const timerDisplay = document.getElementById('timer-display');
const homeBtn = document.getElementById('home-btn');

let timerInterval;
let remainingSeconds = 0;

generateBtn.addEventListener('click', () => {
    generateBtn.classList.add('hidden');
    generateAnim.classList.remove('hidden');
    
    let counter = 0;
    const duration = 2000; // 2 seconds animation
    const interval = 50;
    const maxSteps = duration / interval;
    
    const shuffle = setInterval(() => {
        randDisplay.innerText = Math.floor(Math.random() * 100) + 1;
        counter++;
        
        if (counter >= maxSteps) {
            clearInterval(shuffle);
            const finalNumber = Math.floor(Math.random() * 100) + 1;
            randDisplay.innerText = finalNumber;
            
            setTimeout(() => {
                showTopic(finalNumber);
            }, 1000);
        }
    }, interval);
});

function showTopic(number) {
    homeScreen.classList.add('hidden');
    topicScreen.classList.remove('hidden');
    document.body.classList.remove('timer-active');
    
    // Reset timer UI
    clearInterval(timerInterval);
    timerDisplay.innerText = "00:00";
    timerDisplay.style.color = '';
    timeInput.value = "";
    document.querySelector('.timer-controls').style.display = 'flex';
    
    cardNumberDisplay.innerText = `Card #${number}`;
    cardTopicDisplay.innerText = topics[number - 1]; // Array is 0-indexed
}

startTimerBtn.addEventListener('click', () => {
    const minutes = parseInt(timeInput.value);
    if (isNaN(minutes) || minutes <= 0) {
        alert("Please enter a valid number of minutes.");
        return;
    }
    
    remainingSeconds = minutes * 60;
    updateTimerDisplay();
    
    document.body.classList.add('timer-active');
    document.querySelector('.timer-controls').style.display = 'none';
    
    timerInterval = setInterval(() => {
        remainingSeconds--;
        updateTimerDisplay();
        
        if (remainingSeconds <= 0) {
            clearInterval(timerInterval);
            finishGD();
        }
    }, 1000);
});

function updateTimerDisplay() {
    const m = Math.floor(remainingSeconds / 60);
    const s = remainingSeconds % 60;
    timerDisplay.innerText = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function finishGD() {
    timerDisplay.style.color = '#ef4444';
    setTimeout(() => {
        alert("Time is up! Redirecting to Home.");
        resetToHome();
    }, 500);
}

homeBtn.addEventListener('click', resetToHome);

function resetToHome() {
    clearInterval(timerInterval);
    topicScreen.classList.add('hidden');
    homeScreen.classList.remove('hidden');
    generateBtn.classList.remove('hidden');
    generateAnim.classList.add('hidden');
    timerDisplay.style.color = '';
    document.body.classList.remove('timer-active');
}
