
import { WeddingInfo, Language } from './types';

export const WEDDING_DATA: Record<Language, WeddingInfo> = {
  en: {
    coupleNames: "Arina & Valeriya",
    date: "September 5th, 2026",
    time: "7:00 PM",
    location: "PeaksView Chalets",
    address: "Kovačka Dolina bb, 84220, Montenegro",
    receptionLocation: "PeaksView Chalets",
    receptionAddress: "Kovačka Dolina bb, 84220, Montenegro",
    dressCode: "Slumber Valley - Elevated Comfort and Romantic Ease.",
    registryLink: "https://example.com/registry",
    rsvpDeadline: "May 5th, 2026",
    story: "Dear friends and family, we are thrilled to invite you to our wedding in the mountains of Montenegro. We have planned three days filled with gorgeous views, delicious Balkan food and wedding festivities. We can't wait to spend time with you and have you witness the start of a new chapter in our lives. In this invitation we have included everything you need to know, if you have questions please get in touch.",
    schedule: [
      { time: "6:30 PM", event: "Guest Arrival", description: "Welcome buffet and cocktails" },
      { time: "7:00 PM", event: "The Ceremony", description: "Vows exchanged with a view of the Durmitor Peaks." },
      { time: "7:30 PM", event: "Dinner", description: "A homecooked Balkan feast." },
      { time: "8:30 PM", event: "Cocktails and Entertainment", description: "Signature cocktails, sparkling wine and performances." },
      { time: "10:30 PM", event: "Gulyanka", description: "Party party party." }
    ],
    weekendActivities: [
      {
        day: "Friday",
        date: "Sept 4th",
        title: "Arrival",
        description: "Upon your arrival, you will be welcomed by Arina and Valeriya at Peaksview Chalets. After some post-travel rest which can include using the provided hot tubs, we will grill dinner together and enjoy quality time by the bonfire filled with festivities and music.",
        location: "PeaksView Chalets"
      },
      {
        day: "Saturday",
        date: "Sept 5th",
        title: "The Big Day",
        description: "In the morning guests will be invited to a light hike in the Durmitor National Park, A UNESCO World Heritage Sight. After lunch at Durmitor Park guests will return back to Peaksview Chalets with enough time to get ready for the ceremony. Please see the detailed itinerary below for the ceremony and reception timing.",
        location: "Durmitor National Park"
      },
      {
        day: "Sunday",
        date: "Sept 6th",
        title: "Recovery",
        description: "A sobering swim in the Tara River Canyon followed by brunch with enough time to snooze and pack.",
        location: "Tara River Canyon"
      }
    ]
  },
  ru: {
    coupleNames: "Арины и Валерии",
    date: "5 сентября 2026",
    time: "18:00",
    location: "PeaksView Chalets",
    address: "Kovačka Dolina bb, 84220, Черногория",
    receptionLocation: "PeaksView Chalets",
    receptionAddress: "Kovačka Dolina bb, 84220, Черногория",
    dressCode: "Долина Снов — Элегантный комфорт и романтическая легкость.",
    registryLink: "https://example.com/registry",
    rsvpDeadline: "5 мая 2026",
    story: "Дорогие друзья и близкие, мы счастливы пригласить вас на нашу свадьбу в горах Черногории. Мы запланировали три дня, наполненных великолепными видами, вкуснейшей балканской кухней и праздничным настроением. Мы с нетерпением ждем возможности провести это время с вами и разделить начало нашей главы нашей жизни. Мы предоставили всю нужную информацию ниже, если у вас появяться вопросы, пожалуйста обращяйтесь к нам. ",
    schedule: [
      { time: "18:30", event: "Прибытие гостей", description: "Приветственный фуршет и коктейли" },
      { time: "19:00", event: "Церемония", description: "Обмен клятвами с видом на вершины." },
      { time: "19:30", event: "Ужин", description: "Домашний балканский пир." },
      { time: "20:30", event: "Коктейльный час и программа", description: "Авторские коктейли, игристое вино и горные виды." },
      { time: "22:30", event: "Гулянка", description: "Танцы до упаду" }
    ],
    weekendActivities: [
      {
        day: "Пятница",
        date: "4 сент",
        title: "Прибытие",
        description: "По прибытии вас встретят Арина и Валерия в шале Peaksview. После отдыха с дороги мы вместе устроим гриль-ужин и насладимся временем у костра с песнями и музыкой.",
        location: "PeaksView Chalets"
      },
      {
        day: "Суббота",
        date: "5 сент",
        title: "День Свадьбы",
        description: "Утром гости приглашаются на прогулку в национальный парк Дурмитор, объект всемирного наследия ЮНЕСКО. После обеда в парке мы вернемся в шале, чтобы подготовиться к церемонии.",
        location: "Национальный парк Дурмитор"
      },
      {
        day: "Воскресенье",
        date: "6 сент",
        title: "Восстановление",
        description: "Бодрящее купание в каньоне реки Тара, затем бранч, время для сна и сборов.",
        location: "Каньон реки Тара"
      }
    ]
  }
};

export const UI_TRANSLATIONS = {
  en: {
    celebration: "The Celebration",
    attire: "Attire",
    viewDressCode: "View the Dress Code",
    accommodation: "Accommodation",
    accommodationSub: "Our home in the clouds",
    provided: "Accommodation for all guests is provided at PeaksView Chalets for the entire wedding weekend.",
    amenities: "Stay Amenities",
    amenitiesList: [
      "Hot Tubs",
      "BBQ Zones",
      "Bike Rental",
      "Car Rental",
      "Mountain Gear",
      "Yoga Deck"
    ],
    checkIn: "Guest Check-in: Sept 4th",
    checkOut: "Guest Check-out: Sept 6th",
    viewProperty: "View Property Details",
    clickReel: "Click to watch Reel →",
    pantry: "The Chalet Pantry",
    pantrySub: "Each house pantry is thoughtfully provisioned with breakfast ingredients and snacks",
    dietary: "Dietary Stocking Requests",
    dietaryHelp: "Help us tailor your pantry",
    dietaryPlaceholder: "E.g. We require oat milk, no peanuts, extra coffee...",
    updatePantry: "Update Pantry Needs",
    saved: "✓ Preference Saved",
    mealsNote: "A Note on Meals",
    mealsSub: "Combining our love for cooking with friends and spoiling them with our favorite local foods",
    packing: "Mountain Essentials",
    packingSub: "Though we call early September the Velvet Season for its daytime warmth of 18-22°C, as soon as the sun dips behind the Durmitor peaks, the temperature can drop quickly to 10-15°C.",
    packingTip: "",
    journey: "The Journey to the Peaks",
    step1: "Step 1: Arrive in Montenegro",
    flights: "Flight Recommendations",
    step2: "Step 2: The Mountain Drive",
    ground: "Ground Directions",
    openMaps: "Open in Google Maps",
    beyond: "Beyond the Ceremony",
    weekend: "Wedding Weekend",
    welcome: "Welcome",
    noteFrom: "A Note from Arina & Valeriya",
    backToInv: "Back to Invitation",
    theme: "Theme",
    slumberTitle: "Slumber Valley",
    slumberDesc: "A dreamscape of comfort and elegance.",
    colorPalette: "Colour Palette",
    textureTitle: "Textural Inspiration",
    moodboardNote: "Feel free to mix and match these tones & textures",
    rsvp: "RSVP",
    respondBy: "Kindly respond by",
    rsvpNote: "To ensure we can accommodate everyone comfortably in the chalets that are limited to 30 guests, we are unable to extend invitations to plus ones. We hope you understand and can't wait to celebrate with you!",
    yourName: "Your Name",
    attending: "Attending?",
    accepts: "Joyfully Accepts",
    declines: "Regretfully Declines",
    dietaryLabel: "Dietary Restrictions",
    dietaryRSVPPlaceholder: "Please let us know if you have any allergies...",
    sendRSVP: "Send RSVP",
    sending: "Sending...",
    thankYou: "Thank You!",
    received: "We have received your response. We can't wait to celebrate with you!",
    submitAnother: "Submit another response",
    heroSub: "The Wedding Celebration of",
    heroLoc: "Durmitor, Montenegro",
    dressCodeBtn: "Dress Code",
    category: "Category",
    nowPlaying: "Now Playing",
    cashNoticeTitle: "Cash in the Mountains",
    cashNoticeDesc: "Please note that in regions like Žabljak and Durmitor, card machines are rare. Small shops, mountain huts, and local restaurants often only accept cash (Euros). We highly recommend withdrawing cash at the airport or in Podgorica before heading to the peaks.",
    travelerNote: "A Note for Travelers",
    hireCarBtn: "I would like to hire a car",
    hireCarContact: "For local car hire company contacts and arrangements, please reach out to Valeriya.",
    visitPark: "Explore Durmitor National Park"
  },
  ru: {
    celebration: "Торжество",
    attire: "Дресс-код",
    viewDressCode: "Посмотреть дресс-код",
    accommodation: "Проживание",
    accommodationSub: "Наш дом в облаках",
    provided: "Проживание для всех гостей организовано в шале PeaksView на все свадебные выходные.",
    amenities: "Удобства",
    amenitiesList: [
      "Джакузи",
      "Зоны барбекю",
      "Прокат велосипедов",
      "Прокат автомобилей",
      "Горное снаряжение",
      "Площадка для йоги"
    ],
    checkIn: "Заезд: 4 сентября",
    checkOut: "Выезд: 6 сентября",
    viewProperty: "Детали объекта",
    clickReel: "Смотреть видео →",
    pantry: "Еда в Шале",
    pantrySub: "Холодильник в каждом доме заботливо наполнен ингредиентами для завтрака и закусками",
    dietary: "Пожелания по питанию",
    dietaryHelp: "Помогите нам наполнить ваш холодильник",
    dietaryPlaceholder: "Например: нам нужно овсяное молоко, нельзя арахиса...",
    updatePantry: "Указать предпочтения",
    saved: "✓ Сохранено",
    mealsNote: "О питании",
    mealsSub: "Сочетаем нашу любовь к кулинарии с желанием побаловать друзей любимыми местными блюдами",
    packing: "Горные необходимости",
    packingSub: "Хотя мы называем начало сентября «Бархатным сезоном» за его дневное тепло в 18-22°C, как только солнце скрывается за пиками Дурмитора, температура может быстро упасть до 10-15°C.",
    packingTip: "",
    journey: "Путь к вершинам",
    step1: "Шаг 1: Прибытие в Черногорию",
    flights: "Рекомендации по перелетам",
    step2: "Шаг 2: Горная дорога",
    ground: "Наземный маршрут",
    openMaps: "Открыть в Google Картах",
    beyond: "Помимо церемонии",
    weekend: "Свадебный уикенд",
    welcome: "Добро пожаловать",
    noteFrom: "Записка от Арины и Валерии",
    backToInv: "Назад к приглашению",
    theme: "Тема",
    slumberTitle: "Долина Снов",
    slumberDesc: "Мир комфорта и элегантности.",
    colorPalette: "Цветовая палитра",
    textureTitle: "Текстурное вдохновение",
    moodboardNote: "Не стесняйтесь смешивать эти тона и текстуры",
    rsvp: "RSVP",
    respondBy: "Просим ответить до",
    rsvpNote: "Чтобы с комфортом разместить всех гостей в шале, количество мест в которых ограничено 30 гостями, мы, к сожалению, не можем пригласить дополнительных спутников. Надеемся на ваше понимание и очень ждем встречи с вами!",
    yourName: "Ваше имя",
    attending: "Приедете?",
    accepts: "С радостью принимаю",
    declines: "К сожалению, не смогу",
    dietaryLabel: "Пищевые ограничения",
    dietaryRSVPPlaceholder: "Пожалуйста, сообщите об аллергиях...",
    sendRSVP: "Отправить ответ",
    sending: "Отправка...",
    thankYou: "Спасибо!",
    received: "Мы получили ваш ответ. Не терпится отпраздновать вместе с вами!",
    submitAnother: "Отправить другой ответ",
    heroSub: "Свадебное торжество",
    heroLoc: "Дурмитор, Черногория",
    dressCodeBtn: "Дресс-код",
    category: "Category",
    nowPlaying: "Сейчас играет",
    cashNoticeTitle: "Наличные в горах",
    cashNoticeDesc: "Обратите внимание, что в таких регионах, как Жабляк и Дурмитор, платежные терминалы встречаются редко. Маленькие магазины, горные хижины и местные рестораны часто принимают только наличные (евро). Мы настоятельно рекомендуем снять наличные в аэропорту или в Подгорице перед отправлением в горы.",
    travelerNote: "Заметка для путешественников",
    hireCarBtn: "Я хочу арендовать машину",
    hireCarContact: "Для получения контактов компаний по прокату автомобилей и помощи с бронированием, пожалуйста, свяжитесь с Валерией.",
    visitPark: "Национальный парк Дурмитор"
  }
};

export const PANTRY_ITEMS = {
  en: [
    { name: "Kajmak & Ajvar", desc: "Local cream & pepper spreads" },
    { name: "Mountain Honey", desc: "Wildflower nectar from the peaks" },
    { name: "Seasonal Berries", desc: "Rasberries, blackberries and gooseberries" },
    { name: "Bread", desc: "Warm loaves from the village" },
    { name: "Balkan Coffee", desc: "Rich, aromatic mountain blend" },
    { name: "Eggs" },
    { name: "Local Milk", desc: "Fresh organic dairy" },
    { name: "Wild Herbal Tea"},
    { name: "Spring Water"},
    { name: "Wine", desc: "A complementary bottle of Vranac" },
    { name: "Homemade Cheese", desc: "Aged local goat & sheep selection" },
    { name: "Biscuits", desc: "Sweet treats for tea time" }
  ],
  ru: [
    { name: "Каймак и Айвар", desc: "Местные кремовые и перцевые пасты" },
    { name: "Горный мед"},
    { name: "Сезонные ягоды"},
    { name: "Хлеб", desc: "Хлеб" },
    { name: "Кофе",},
    { name: "Деревенские яйца", },
    { name: "Молоко",},
    { name: "Травяной чай"},
    { name: "Вода", },
    { name: "Местное вино", desc: "Бутылка Вранаца в подарок" },
    { name: "Домашний сыр", desc: "Выдержанные козьи и овечьи сыры" },
    { name: "Печенье", desc: "Сладкое угощение к чаю" }
  ]
};

export const PACKING_CATEGORIES = {
  en: [
    {
      title: "Mountain Layers",
      items: ["A cardigan or sweater", "Light jacket", "Swimwear for the pool"],
    },
    {
      title: "The Footwear",
      items: ["Hiking boots or sturdy sneakers", "Comfortable loafers/ballet flats", "Flip flops", "Event shoes (avoid thin stilettos)"],
      description: "We'll be walking on mountain paths and grass. Flat or block heels are highly recommended."
    },
    {
      title: "High Altitude Care",
      items: ["SPF 30+ Sunscreen", "Sunglasses", "Mosquito spray", "Reusable water bottle"],
    }
  ],
  ru: [
    {
      title: "Одежда",
      items: ["Кардиган или свитер", "Легкая куртка", "Купальник для бассейна"],

    },
    {
      title: "Обувь",
      items: ["Трекинговые ботинки или кроссовки", "Удобные лоферы или балетки", "Шлепанцы", "Обувь для торжества (избегайте шпилек)"],
      description: "Мы будем ходить по горным тропам и траве. Рекомендуем плоскую подошву или устойчивый каблук."
    },
    {
      title: "Уход в высокогорье",
      items: ["Солнцезащитный крем SPF 30+", "Солнечные очки", "Спрей от комаров", "Бутылка для воды"],
    }
  ]
};

export const DRESS_CODE_PALETTE = [
  { name: "Cloudy Pink", hex: "#F4D6CB", text: "stone-700" },
  { name: "Teracotta", hex: "#A8503A", text: "stone-700" },
  { name: "Warm Fig", hex: "#7C3230", text: "white" },
  { name: "Pearly Silver", hex: "#FEFBF4", text: "white", image: "https://i.pinimg.com/1200x/3c/21/09/3c210942b6e07805efd7956d5ee29cbc.jpg" },
  { name: "Olive Green", hex: "#695D21", text: "white" },
  { name: "Deep Brown", hex: "#34170D", text: "white" }
];

export const FABRIC_PALETTE = [
  { 
    name: "Velvet", 
    description: "Deep, textures in Burnt Maroon",
    image: "https://i.pinimg.com/1200x/64/d7/b6/64d7b62a856fc2d70d5b3f4f598898b1.jpg"
  },
  { 
    name: "Pearls", 
    description: "If you want to jewl-up your outfit",
    image: "https://i.pinimg.com/736x/5f/50/a3/5f50a379d21e0a2e634b42937ff3677c.jpg"
  },
  { 
    name: "Ruffles", 
    description: "textured, petal-like",
    image: "https://i.pinimg.com/736x/e1/01/4b/e1014be8fce320f587df7d56f0f95fde.jpg"
  },
  { 
    name: "Linen", 
    description: "Breathable, natural soft-toned weaves",
    image: "https://i.pinimg.com/736x/6b/14/3b/6b143bdd689e13a8b13a852bc4c29d53.jpg"
  },
  { 
    name: "Silk", 
    description: "Natural glow complimenting the landscape",
    image: "https://i.pinimg.com/736x/ab/1c/5a/ab1c5a32d4f702d7c85c5e902e9d7619.jpg"
  },
  { 
    name: "Cotton", 
    description: "Smart, classic",
    image: "https://i.pinimg.com/736x/54/20/d4/5420d411c6dbc65a2f821cbefece0e6b.jpg"
  },
  
];
