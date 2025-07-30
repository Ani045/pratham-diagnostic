import React, { useState, useEffect,useRef } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Users, 
  Award, 
  Shield, 
  Clock, 
  Star,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  Heart,
  Microscope,
  Stethoscope,
  Activity,
  Brain,
  Eye,
  Zap,
  Target,
  CheckCircle,
  MessageCircle,
  TestTube
} from 'lucide-react';




function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [counters, setCounters] = useState({ ultrasound: 0, labTests: 0, patients: 0 });
  const [showPhoneOptions, setShowPhoneOptions] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Visible when page loads
  const widgetRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    investigation: ''
  });




  // Your phone numbers - customize these
  const phoneNumbers = [
    { label: "Sec 82 Gurugram", number: "+91-8744002727" },
    { label: "Manesar", number: "+91-7291071742" },
    { label: "Old Gurugram", number: "+91-9971108920" }
  ];

  // Hide widget when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsVisible(false);
        setShowPhoneOptions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Show widget when cursor/touch is near right edge - Same behavior for desktop and mobile
  useEffect(() => {
    const handleInteraction = (event: MouseEvent | TouchEvent) => {
      let clientX: number;
      
      if (event.type === 'mousemove') {
        clientX = (event as MouseEvent).clientX;
      } else if (event.type === 'touchstart' || event.type === 'touchmove') {
        clientX = (event as TouchEvent).touches[0].clientX;
      } else {
        return;
      }
      
      const isNearRightEdge = clientX > window.innerWidth - 100;
      
      if (isNearRightEdge) {
        setIsVisible(true);
      }
    };

    // Add both mouse and touch events for universal behavior
    document.addEventListener('mousemove', handleInteraction as EventListener);
    document.addEventListener('touchstart', handleInteraction as EventListener);
    document.addEventListener('touchmove', handleInteraction as EventListener);
    
    return () => {
      document.removeEventListener('mousemove', handleInteraction as EventListener);
      document.removeEventListener('touchstart', handleInteraction as EventListener);
      document.removeEventListener('touchmove', handleInteraction as EventListener);
    };
  }, []);


  // Hero slides data
  const heroSlides = [
    {
      title: "Get All Routine and Specialized Ultrasound Scans at the Most Affordable Price",
      subtitle: "State-of-the-art diagnostic equipments with cutting-edge technology",
      highlight: "Scans done by expert radiologists with MD Radio-Diagnosis from premium institutes like Safdarjung Hospital, New Delhi and Fetal Medicine Foundation, London (UK) certification",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Book All Lab Tests Easily from the Comfort of Your Home",
      subtitle: "Comprehensive diagnostic health packages at affordable prices for you and your family",
      highlight: "2 Lakh+ Ultrasound scans | 4 Lakh+ Lab tests | 6 Lakh+ Satisfied Patients",
      image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    
    {
      title: "Comprehensive Health Packages Designed for Your Family's Wellbeing",
      subtitle: "Preventive health check-ups with detailed reporting and analysis",
      highlight: "Trusted diagnostic centre since 2015",
      image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (!formData.fullName || !formData.mobile || !formData.email || !formData.investigation) {
      alert('Please fill all fields');
      return;
    }
    
    console.log('Form submitted:', formData);
    alert('Booking request submitted successfully!');
    
    setFormData({
      fullName: '',
      mobile: '',
      email: '',
      investigation: ''
    });
  };


  

  // Health packages data
  const healthPackages = [
    { 
        name: "BASIC EXECUTIVE HEALTH PACKAGE", 
        price: 3000, 
        mrp: 3850, 
        tests: "CBC, ESR, Blood Sugar (F), TSH, Urea, Creatinine, Cholesterol, SGOT, SGPT, Serum Bilirubin, Urine Routine Examination, X-ray Chest PA View, ECG, USG Whole Abdomen" 
    },
    { 
        name: "ADVANCED EXECUTIVE HEALTH PACKAGE", 
        price: 4500, 
        mrp: 6350, 
        tests: "CBC, ESR, Blood Sugar (F), TSH, Urea, Creatinine, Cholesterol, SGOT, SGPT, Serum Bilirubin, Urine Routine Examination, X-Ray Chest PA View, ECG, USG Whole Abdomen, Vitamin D3, Vitamin B12" 
    },
    { 
        name: "CARDIO-DIABETES HEALTH PACKAGE", 
        price: 5100, 
        mrp: 7050, 
        tests: "CBC, ESR, Blood Sugar (F & PP), Lipid Profile, HBA1C, Urine Routine Examination, X-ray Chest PA View, ECG, TMT, USG Whole Abdomen" 
    },
    { 
        name: "ORTHO-NEURO HEALTH PACKAGE", 
        price: 4100, 
        mrp: 5300, 
        tests: "CBC, ESR, Blood Sugar (F), Blood Urea, Serum Creatinine, Uric Acid, Serum Calcium, RA Factor, CRP, Vitamin D3, Vitamin B12, X-Ray Both Knee AP / LAT View" 
    },
    { 
        name: "DIABETES SCREENING", 
        price: 500, 
        mrp: 700, 
        tests: "Blood Sugar (F & PP), HBA1C" 
    },
    { 
        name: "ANC PROFILE (PREGNANCY)", 
        price: 1500, 
        mrp: 2250, 
        tests: "CBC, Blood Group, Blood Sugar Random, HBsAg, HIV (AIDS) I & II Antibody, VDRL, TSH, Urine Routine Examination" 
    },
    { 
        name: "FEVER PROFILE", 
        price: 1100, 
        mrp: 1550, 
        tests: "CBC, ESR, Malaria, Dengue Test, Typhi Dot IgG IgM" 
    }
];

  // Services data
  const services = [
    { name: "Ultrasound", icon: <Activity className="w-8 h-8" />, description: "Advanced ultrasound imaging" },
    { name: "Digital X-ray", icon: <Zap className="w-8 h-8" />, description: "High-quality digital radiography" },
    { name: "Colour Doppler", icon: <Heart className="w-8 h-8" />, description: "Blood flow assessment" },
    { name: "ECG", icon: <Activity className="w-8 h-8" />, description: "Electrocardiogram testing" },
    { name: "TMT", icon: <Target className="w-8 h-8" />, description: "Treadmill stress testing" },
    { name: "EEG", icon: <Brain className="w-8 h-8" />, description: "Brain activity monitoring" },
    { name: "NCV", icon: <Zap className="w-8 h-8" />, description: "Nerve conduction velocity" },
    { name: "EMG", icon: <Activity className="w-8 h-8" />, description: "Electromyography testing" },
    { name: "Audiometry", icon: <Eye className="w-8 h-8" />, description: "Hearing assessment" },
    { name: "PFT (Spirometry)", icon: <Activity className="w-8 h-8" />, description: "Pulmonary function test" },
    { name: "Uroflowmetry", icon: <Target className="w-8 h-8" />, description: "Urinary flow assessment" },
    { name: "IVP", icon: <Microscope className="w-8 h-8" />, description: "Intravenous pyelography" },
    { name: "HSG", icon: <Heart className="w-8 h-8" />, description: "Hysterosalpingography" },
    { name: "FNAC/Cytopathology", icon: <Microscope className="w-8 h-8" />, description: "Fine needle aspiration" },
    { name: "Path Lab Tests", icon: <Stethoscope className="w-8 h-8" />, description: "Comprehensive lab testing" },
    { name: "Health Packages", icon: <Shield className="w-8 h-8" />, description: "Complete health checkups" }
  ];

  // Team data
  const team = [
    { name: "DR. INDRAJEET KUNDU", qualification: "MBBS, MD (Radio-Diagnosis), FMF (London, UK) certified ", experience: "12+ years", image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=300" },
    { name: "DR. ANAM SINGH", qualification: "MBBS, MD (Pathology)", experience: "9+ years", image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=300" },
    { name: "DR. VIKAS GOYAL", qualification: "Senior Consultant Radiologist", experience: "22+ years", image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=300" },
    { name: "DR. AMIT BANSAL", qualification: "MBBS, PGDHM, Family Physician", experience: "20+ years", image: "https://images.pexels.com/photos/5452274/pexels-photo-5452274.jpeg?auto=compress&cs=tinysrgb&w=300" }
  ];

  // Testimonials data
  const testimonials = [
    { name: "Lekhraj Bairwa", rating: 5, text: "Excellent service and very professional staff. The ultrasound was done with great care and the report was detailed." },
    { name: "Virendra Meena", rating: 5, text: "Best diagnostic center in Gurugram. Affordable prices and accurate results. Highly recommended!" },
    { name: "Pankaj Yadav", rating: 5, text: "Great experience with home collection service. Very convenient and the staff was very polite." },
    { name: "Vinay Gowda", rating: 5, text: "Dr. Kundu is very experienced and explains everything clearly. The facility is well-maintained." },
    { name: "Suman Naiya", rating: 5, text: "Prompt service and reasonable pricing. The health package was comprehensive and value for money." },
    { name: "Manas Mahapatra", rating: 5, text: "Excellent diagnostic services. The team is professional and the equipment is modern." },
    { name: "Vyomika Teckchandani", rating: 5, text: "Very satisfied with the pregnancy ultrasound service. The doctor was very caring and professional." }
  ];

  // FAQ data
  const faqs = [
    {
      question: "What documents are needed for pregnancy ultrasounds?",
      answer: "You need to carry a Govt issued photo id proof (Aadhaar Card/Driving Licence/Voter ID/Passport etc) along with the prescription/referral slip from your obstetrician/ registered medical practitioner (doctor)."
    },
    {
      question: "What is Form F?",
      answer: "Form F under PCPNDT ACT 1994 is a form that has to be filled up before every Ultrasound scan in Pregnancy and signed by the pregnant person undergoing the scan. Prenatal sex determination is a punishable offence and it is not done here."
    },
    {
      question: "Is Ultrasound safe?",
      answer: "Ultrasound technology uses high frequency utrasonic sound waves which is free from any ionising radiation. It is completely safe even during pregnancy."
    },
    {
      question: "How often should ultrasound be done during pregnancy?",
      answer: <ul>
        <li>You should get an Ultrasound scan done when your Obstetrician advises you to do so. A rough outline is as follows :</li>
      <li>• Dating Scan: 6-8 weeks </li>
      <li>• NT Scan (Level 1): 11-14 weeks</li>
      <li>• TIFFA/Anomaly Scan (Level 2): 18-22 weeks</li>
      <li>• Colour Doppler: 30-32 weeks</li>
      <li>• Growth Scans: 34-38 weeks</li>
      </ul>

        
    }
  ];
  

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-testimonial rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Counter animation
  useEffect(() => {
    const animateCounters = () => {
      const targets = { ultrasound: 200000, labTests: 400000, patients: 600000 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      
      let step = 0;
      const interval = setInterval(() => {
        step++;
        const progress = step / steps;
        setCounters({
          ultrasound: Math.floor(targets.ultrasound * progress),
          labTests: Math.floor(targets.labTests * progress),
          patients: Math.floor(targets.patients * progress)
        });
        
        if (step >= steps) {
          clearInterval(interval);
          setCounters(targets);
        }
      }, stepDuration);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      });
    });

    const trustSection = document.getElementById('trust-indicators');
    if (trustSection) {
      observer.observe(trustSection);
    }

    return () => observer.disconnect();
  }, []);

  

  return (
    
    
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Top Contact Strip */}
      {/* <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-blue-900 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex space-x-6">
            <a href="tel:8744002727" className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">Sector 82 , Gurugram: 8744002727</span>
            </a>
            <a href="tel:7291071742" className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">Manesar: 7291071742</span>
            </a>
            <a href="tel:9971108920" className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">Old Gurugram: 9971108920</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="mailto:prathamultrasound@gmail.com" className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
              <Mail className="w-4 h-4" />
              <span className="font-medium">prathamultrasound@gmail.com</span>
            </a>
          </div>
        </div>
      </div> */}
      <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-blue-900 text-white py-3 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Desktop Layout - Hidden on mobile */}
        <div className="hidden md:flex justify-between items-center text-sm">
          <div className="flex space-x-6">
            <a href="tel:8744002727" className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">Sector 82  Gurugram: 8744002727</span>
            </a>
            <a href="tel:7291071742" className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">Manesar: 7291071742</span>
            </a>
            <a href="tel:9971108920" className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">Old Gurugram: 9971108920</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="mailto:prathamultrasound@gmail.com" className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
              <Mail className="w-4 h-4" />
              <span className="font-medium">prathamultrasound@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Mobile Layout - Visible only on mobile */}
        <div className="md:hidden text-xs">
          {/* First row - Primary contact */}
          <div className="flex justify-between items-center mb-2">
            <a href="tel:8744002727" className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
              <Phone className="w-3 h-3" />
              <span className="font-medium">Sector 82 Gurugram: 8744002727</span>
            </a>
            <a href="mailto:prathamultrasound@gmail.com" className="flex items-center space-x-1 hover:text-cyan-300 transition-colors">
              <Mail className="w-3 h-3" />
              <span className="font-medium">Email</span>
            </a>
          </div>
          
          {/* Second row - Other contacts */}
          <div className="flex justify-between items-center text-slate-300">
            <a href="tel:7291071742" className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
              <Phone className="w-3 h-3" />
              <span>Manesar: 7291071742</span>
            </a>
            <a href="tel:9971108920" className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
              <Phone className="w-3 h-3" />
              <span>Old Gurugram: 9971108920</span>
            </a>
          </div>
        </div>

      </div>
    </div>

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <img 
                src="logo-pra.png" 
                alt="Pratham Diagnostic Logo" 
                className="h-14 w-auto"
              />
              {/* <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">PRATHAM DIAGNOSTIC</h1>
                <p className="text-xs text-slate-600 font-medium tracking-wide">AUTHENTIC - DEDICATED - MEANINGFUL</p>
              </div> */}
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-slate-700 hover:text-cyan-600 transition-colors font-semibold relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-blue-700 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#about" className="text-slate-700 hover:text-cyan-600 transition-colors font-semibold relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-blue-700 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#services" className="text-slate-700 hover:text-cyan-600 transition-colors font-semibold relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-blue-700 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#packages" className="text-slate-700 hover:text-cyan-600 transition-colors font-semibold relative group">
                Packages
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-blue-700 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#team" className="text-slate-700 hover:text-cyan-600 transition-colors font-semibold relative group">
                Team
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-blue-700 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" className="text-slate-700 hover:text-cyan-600 transition-colors font-semibold relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-blue-700 group-hover:w-full transition-all duration-300"></span>
              </a>
              <button
               onClick={() => {
                const id = document.getElementById('contact-form');
                if (id) {
                  id.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-8 py-3 rounded-2xl hover:from-pink-600 hover:to-rose-700 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Book Test
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-3 rounded-2xl hover:bg-slate-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6 text-cyan-600" /> : <Menu className="w-6 h-6 text-cyan-600" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-6 border-t border-slate-200 bg-white/95 backdrop-blur-sm rounded-b-2xl">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-slate-700 hover:text-cyan-600 transition-colors font-semibold">Home</a>
                <a href="#about" className="text-slate-700 hover:text-cyan-600 transition-colors font-semibold">About</a>
                <a href="#services" className="text-slate-700 hover:text-cyan-600 transition-colors font-semibold">Services</a>
                <a href="#packages" className="text-slate-700 hover:text-cyan-600 transition-colors font-semibold">Packages</a>
                <a href="#team" className="text-slate-700 hover:text-cyan-600 transition-colors font-semibold">Team</a>
                <a href="#contact" className="text-slate-700 hover:text-cyan-600 transition-colors font-semibold">Contact</a>
                {/* <button 
                 onClick={() => {
                  const section = document.getElementById('form');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-8 py-3 rounded-2xl hover:from-pink-600 hover:to-rose-700 transition-all duration-300 font-bold w-fit">
                  Book Test
                </button> */}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative">
      {/* Hero Section */}
      <section id="home" className="relative min-h-[70vh] lg:h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Desktop Layout */}
            <div className="hidden lg:flex h-full">
              <div className="w-[60%] bg-gradient-to-br from-slate-100 via-blue-100 to-indigo-200 flex items-center">
                <div className="max-w-2xl mx-auto px-8">
                  <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-8 leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-xl text-slate-700 mb-10 leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl mb-10 border border-slate-200 shadow-xl">
                    <p className="text-cyan-800 font-bold text-lg">
                      {slide.highlight}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="w-[40%] relative">
                <img
                  src={slide.image}
                  alt="Medical Service"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Mobile Layout - Removed fixed height and padding bottom */}
            <div className="lg:hidden bg-gradient-to-br from-slate-100 via-blue-100 to-indigo-200 min-h-[70vh] flex flex-col justify-center">
              <div className="px-6 py-8 flex-1 flex flex-col justify-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-base sm:text-lg text-slate-700 mb-8 leading-relaxed">
                  {slide.subtitle}
                </p>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 shadow-xl">
                  <p className="text-cyan-800 font-bold text-sm sm:text-base">
                    {slide.highlight}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-cyan-600 w-10' : 'bg-white/60 w-3'
              }`}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        {/* <button
          onClick={() =>
            setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
          }
          className="absolute left--1 lg:left-6 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 lg:p-4 rounded-full hover:bg-white transition-all shadow-xl hover:shadow-2xl z-10"
        >
          <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-cyan-600" />
        </button>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right--1 lg:right-6 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 lg:p-4 rounded-full hover:bg-white transition-all shadow-xl hover:shadow-2xl z-10"
        >
          <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-cyan-600" />
        </button> */}

        {/* Desktop Form - Positioned absolute on desktop only */}
        <div className="hidden lg:block absolute top-8 right-8 w-96 z-50">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Book Your Test</h3>
            <div className="space-y-5" id="contact-form">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-5 py-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all font-medium"
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleInputChange}
                className="w-full px-5 py-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all font-medium"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-5 py-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all font-medium"
              />
              <select 
                name="investigation"
                value={formData.investigation}
                onChange={handleInputChange}
                className="w-full px-5 py-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all font-medium"
              >
                <option value="">Select Investigation</option>
                <option value="ultrasound">Ultrasound</option>
                <option value="lab-tests">Lab Tests</option>
                <option value="health-package">Health Package</option>
                <option value="x-ray">X-Ray</option>
              </select>
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-4 rounded-2xl hover:from-cyan-700 hover:to-blue-800 transition-all duration-300 font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Form Section - Completely separate section */}
      <section className="lg:hidden bg-gradient-to-br from-slate-50 to-blue-50 py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border border-slate-200 max-w-md mx-auto">
            <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Book Your Test</h3>
            <div className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all font-medium text-sm"
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all font-medium text-sm"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all font-medium text-sm"
              />
              <select 
                name="investigation"
                value={formData.investigation}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all font-medium text-sm"
              >
                <option value="">Select Investigation</option>
                <option value="ultrasound">Ultrasound</option>
                <option value="lab-tests">Lab Tests</option>
                <option value="health-package">Health Package</option>
                <option value="x-ray">X-Ray</option>
              </select>
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-3 rounded-2xl hover:from-cyan-700 hover:to-blue-800 transition-all duration-300 font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-sm"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
   

      {/* Trust Indicators */}
     
      <section id="trust-indicators" className="bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 bg-opacity-20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            📊 Trusted Excellence
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-purple-600">Impact</span> in Numbers
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Delivering healthcare excellence across Gurugram and Manesar
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-center shadow-lg">
            <div className="bg-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Activity className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold mb-2 text-white">
              {counters.ultrasound.toLocaleString()}+
            </div>
            <div className="text-blue-100 font-medium">Ultrasound Scans</div>
            <div className="text-blue-200 text-sm mt-1">Precision in imaging services</div>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-8 text-center shadow-lg">
            <div className="bg-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <TestTube className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold mb-2 text-white">
              {counters.labTests.toLocaleString()}+
            </div>
            <div className="text-purple-100 font-medium">Lab Tests</div>
            <div className="text-purple-200 text-sm mt-1">Accurate diagnostic reports</div>
          </div>

          <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-8 text-center shadow-lg">
            <div className="bg-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold mb-2 text-white">
              {counters.patients.toLocaleString()}+
            </div>
            <div className="text-teal-100 font-medium">Satisfied Patients</div>
            <div className="text-teal-200 text-sm mt-1">Happy families served</div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex justify-center items-center space-x-6 flex-wrap gap-4">
          <div className="flex items-center space-x-3 bg-white bg-opacity-10 backdrop-blur-sm px-6 py-3 rounded-full border border-white border-opacity-20">
            <Award className="w-5 h-5 text-yellow-400" />
            <span className="font-medium text-white">Trusted by Leading Hospitals</span>
          </div>
          <div className="flex items-center space-x-3 bg-white bg-opacity-10 backdrop-blur-sm px-6 py-3 rounded-full border border-white border-opacity-20">
            <Shield className="w-5 h-5 text-blue-400" />
            <span className="font-medium text-white">ISO Certified Quality</span>
          </div>
          <div className="flex items-center space-x-3 bg-white bg-opacity-10 backdrop-blur-sm px-6 py-3 rounded-full border border-white border-opacity-20">
            <Award className="w-5 h-5 text-green-400" />
            <span className="font-medium text-white">International Standards</span>
          </div>
        </div>
      </div>
    </section>


      {/* About Us */}
      <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
  <div className="max-w-6xl mx-auto px-4">
    {/* Header */}
    <div className="text-center mb-16">
      <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
        🏥 About Us
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        About <span className="text-blue-600">Pratham</span> <span className="text-purple-600">Diagnostic</span> & Imaging Centre
      </h2>
      <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
      Redefining medical diagnostics with centres at multiple locations in Gurugram and Manesar, providing comprehensive medical imaging and laboratory services since 2015.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Image */}
      <div>
        <img
          src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Medical Equipment"
          className="rounded-2xl shadow-lg w-full"
        />
      </div>

      {/* Content */}
      <div className="space-y-8">
        {/* Services Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Services Include:</h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center space-x-4 p-3 bg-blue-50 rounded-xl">
              <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
              <span className="font-medium text-gray-700">5D Ultrasound & Colour Doppler</span>
            </div>
            <div className="flex items-center space-x-4 p-3 bg-green-50 rounded-xl">
              <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
              <span className="font-medium text-gray-700">Digital X-ray & HSG</span>
            </div>
            <div className="flex items-center space-x-4 p-3 bg-purple-50 rounded-xl">
              <div className="w-3 h-3 bg-purple-500 rounded-full flex-shrink-0"></div>
              <span className="font-medium text-gray-700">ECG & TMT</span>
            </div>
            <div className="flex items-center space-x-4 p-3 bg-orange-50 rounded-xl">
              <div className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0"></div>
              <span className="font-medium text-gray-700">EEG & PFT </span>
            </div>
            <div className="flex items-center space-x-4 p-3 bg-pink-50 rounded-xl">
              <div className="w-3 h-3 bg-pink-500 rounded-full flex-shrink-0"></div>
              <span className="font-medium text-gray-700">Audiometry  </span>
            </div>
            <div className="flex items-center space-x-4 p-3 bg-teal-50 rounded-xl">
              <div className="w-3 h-3 bg-teal-500 rounded-full flex-shrink-0"></div>
              <span className="font-medium text-gray-700">Comprehensive Pathlab</span>
            </div>
          </div>
        </div>

        {/* What Makes Us Special Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">What Makes Us Special:</h3>
          <div className="space-y-4">

          <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-xl">
              <div className="bg-orange-100 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-orange-600" />
              </div>
              <span className="text-gray-700 leading-relaxed">MD Radio-diagnosis experts from Safdarjung Hospital</span>
            </div>
           
            <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-xl">
              <div className="bg-green-100 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-gray-700 leading-relaxed">Fetal Medicine Foundation (FMF), London (UK) certified radiologist for international standard pregnancy scans.</span>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-xl">
              <div className="bg-purple-100 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-gray-700 leading-relaxed">One-on-one report discussion with doctors</span>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl">
              <div className="bg-blue-100 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-gray-700 leading-relaxed">Home collection services for your convenience</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Health Packages */}
      <section id="packages" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            {/* Health Packages Badge */}
            <div className="inline-flex items-center bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
              Health Packages
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive <span className="text-cyan-500">Health Packages</span> at Unbeatable Prices
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Choose from our specially designed health packages for complete wellness and preventive care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {healthPackages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                  index === 0 ? 'bg-red-500' : 
                  index === 1 ? 'bg-pink-500' : 
                  index === 2 ? 'bg-orange-500' : 
                  index === 3 ? 'bg-blue-500' : 
                  index === 4 ? 'bg-purple-500' : 
                  index === 5 ? 'bg-teal-500' : 'bg-purple-500'
                }`}>
                  <span className="text-white font-bold text-lg">
                    {index === 0 ? 'B' : 
                     index === 1 ? 'A' : 
                     index === 2 ? '♥' : 
                     index === 3 ? 'O' : 
                     index === 4 ? '⚕' : 
                     index === 5 ? '♥' : 'F'}
                  </span>
                </div>

                {/* Save Badge */}
                <div className="absolute top-4 right-4 bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
                  Save ₹{pkg.mrp - pkg.price}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-4">{pkg.name}</h3>
                
                <div className="mb-6">
                  <div className="flex items-baseline space-x-2 mb-2">
                    <span className="text-3xl font-bold text-gray-900">₹{pkg.price}</span>
                    <span className="text-gray-400 line-through text-lg">₹{pkg.mrp}</span>
                  </div>
                  <div className="text-sm text-green-600 font-semibold">
                    {Math.round(((pkg.mrp - pkg.price) / pkg.mrp) * 100)}% OFF
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{pkg.tests}</p>
                
                <button 
  onClick={() => {
    const section = document.getElementById('home');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  className={`w-full text-white py-3 rounded-xl font-semibold transition-all duration-300 ${
    index === 0 ? 'bg-red-500 hover:bg-red-600' : 
    index === 1 ? 'bg-pink-500 hover:bg-pink-600' : 
    index === 2 ? 'bg-orange-500 hover:bg-orange-600' : 
    index === 3 ? 'bg-blue-500 hover:bg-blue-600' : 
    index === 4 ? 'bg-purple-500 hover:bg-purple-600' : 
    index === 5 ? 'bg-teal-500 hover:bg-teal-600' : 'bg-purple-500 hover:bg-purple-600'
  }`}
>
  Book Now
</button>
              </div>
            ))}
          </div>
          
          {/* View All Packages Button */}
          {/* <div className="text-center">
            <button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center space-x-2">
              <span>View All Packages</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div> */}
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            {/* Our Services Badge */}
            <div className="inline-flex items-center bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              Our Services
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive <span className="text-cyan-500">Diagnostic</span> <span className="text-purple-500">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              State-of-the-art medical equipment and expert healthcare professionals delivering precise diagnostics
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Row 1 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <img className='h-9' src='Ultrasound.png' ></img>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Ultrasound</h3>
              <p className="text-gray-600 text-sm">Advanced ultrasound imaging with 5D technology</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <img className='h-9' src='digital x-ray.png' ></img>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Digital X-ray</h3>
              <p className="text-gray-600 text-sm">High-resolution digital radiography</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <img className='h-9' src='Colour-Doppler.png' ></img>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Colour Doppler</h3>
              <p className="text-gray-600 text-sm">Blood flow assessment & vascular imaging</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <img className='h-9' src='ECG.png' ></img>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">ECG</h3>
              <p className="text-gray-600 text-sm">Electrocardiogram testing & monitoring</p>
            </div>

            {/* Row 2 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <img className='h-9' src='TMT.png' ></img>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">TMT</h3>
              <p className="text-gray-600 text-sm">Treadmill stress testing</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <img className='h-9' src='EEG.png' ></img>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">EEG</h3>
              <p className="text-gray-600 text-sm">Brain activity monitoring & analysis</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <img className='h-9' src='NCV.png' ></img>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">NCV</h3>
              <p className="text-gray-600 text-sm">Nerve conduction velocity testing</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <img className='h-9' src='EMG.png' ></img>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">EMG</h3>
              <p className="text-gray-600 text-sm">Electromyography muscle testing</p>
            </div>

            {/* Row 3 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <img className='h-9' src='Audiometry.png' ></img>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Audiometry</h3>
              <p className="text-gray-600 text-sm">Comprehensive hearing assessment</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <img className='h-9' src='PFT (Spirometry.png' ></img>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">PFT (Spirometry)</h3>
              <p className="text-gray-600 text-sm">Pulmonary function testing</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <img className='h-9' src='Uroflowmetry.png' ></img>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Uroflowmetry</h3>
              <p className="text-gray-600 text-sm">Urinary flow assessment</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <img className='h-9' src='Uroflowmetry-1.png' ></img>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">IVP</h3>
              <p className="text-gray-600 text-sm">Intravenous pyelography imaging</p>
            </div>

            {/* Row 4 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <img className='h-9' src='HSG.png' ></img>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">HSG</h3>
              <p className="text-gray-600 text-sm">Hysterosalpingography examination</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <img className='h-9' src='FNAC-Cytopathology.png' ></img>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">FNAC/Cytopathology</h3>
              <p className="text-gray-600 text-sm">Fine needle aspiration cytology</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <img className='h-9' src='Path-Lab-Tests.png' ></img>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Path Lab Tests</h3>
              <p className="text-gray-600 text-sm">Comprehensive laboratory testing</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gray-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <img className='h-9' src='Health-Packages.png' ></img>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Health Packages</h3>
              <p className="text-gray-600 text-sm">Complete health checkup packages</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4">
    {/* Header */}
    <div className="text-center mb-16">
      <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
        🏥 Why Choose Us
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Six Reasons to <span className="text-teal-600">Trust</span> <span className="text-purple-600">Pratham</span>
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
        Discover what makes us the preferred choice for healthcare diagnostics in Gurugram and Manesar
      </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="relative text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-2 right-2 w-12 h-12 bg-blue-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-2 left-2 w-8 h-8 bg-blue-300 rounded-full opacity-25"></div>
        <div className="absolute top-1/2 right-1 w-6 h-6 bg-blue-400 rounded-full opacity-20"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="bg-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <img src='Fast-and-Accurate-Results.png' className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Fast and Accurate Results
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Latest state-of-the-art technology ensures quick and precise diagnostics with minimal waiting time
          </p>
        </div>
      </div>

      <div className="relative text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-2 right-2 w-12 h-12 bg-green-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-2 left-2 w-8 h-8 bg-green-300 rounded-full opacity-25"></div>
        <div className="absolute top-1/2 right-1 w-6 h-6 bg-green-400 rounded-full opacity-20"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="bg-green-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <img src='Trusted-and-Ethical-Care.png' className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Trusted and Ethical Care
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Following best industry practices and maintaining highest ethical standards in patient care
          </p>
        </div>
      </div>

      <div className="relative text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-2 right-2 w-12 h-12 bg-purple-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-2 left-2 w-8 h-8 bg-purple-300 rounded-full opacity-25"></div>
        <div className="absolute top-1/2 right-1 w-6 h-6 bg-purple-400 rounded-full opacity-20"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="bg-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <img src='World-Class-Technology.png' className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            World Class Technology
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Equipment from globally renowned brands for superior diagnostic quality and reliability
          </p>
        </div>
      </div>

      <div className="relative text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-2 right-2 w-12 h-12 bg-orange-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-2 left-2 w-8 h-8 bg-orange-300 rounded-full opacity-25"></div>
        <div className="absolute top-1/2 right-1 w-6 h-6 bg-orange-400 rounded-full opacity-20"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="bg-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <img src='Skilled-Expert-Team.png' className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Skilled Expert Team
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Highly trained and experienced doctors with specialized expertise in their respective fields
          </p>
        </div>
      </div>

      <div className="relative text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-2 right-2 w-12 h-12 bg-pink-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-2 left-2 w-8 h-8 bg-pink-300 rounded-full opacity-25"></div>
        <div className="absolute top-1/2 right-1 w-6 h-6 bg-pink-400 rounded-full opacity-20"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="bg-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <img src='One-Stop-Healthcare-Hub.png' className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            One Stop Healthcare Hub
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Wide range of diagnostic services available under one roof for your convenience
          </p>
        </div>
      </div>

      <div className="relative text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-2 right-2 w-12 h-12 bg-teal-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-2 left-2 w-8 h-8 bg-teal-300 rounded-full opacity-25"></div>
        <div className="absolute top-1/2 right-1 w-6 h-6 bg-teal-400 rounded-full opacity-20"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="bg-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <img src='Affordable-Excellence.png' className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Affordable Excellence
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Best quality healthcare services at the most competitive prices without compromising quality
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Our Expert Team */}
      <section id="team" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              👨‍⚕️ Our Team
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Meet Our <span className="text-blue-600">Expert</span> <span className="text-purple-600">Team</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Experienced medical professionals dedicated to providing exceptional healthcare services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((doctor, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{doctor.name}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-2">{doctor.qualification}</p>
                  <p className="text-gray-500 text-sm">{doctor.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Patient Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              ⭐ Patient Reviews
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What Our <span className="text-blue-600">Patients</span> <span className="text-purple-600">Say</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Real experiences from our satisfied patients across Gurugram and Manesar
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-sm p-10 text-center border border-gray-100 overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-16 h-16 bg-blue-200 rounded-full opacity-30"></div>
              <div className="absolute top-8 right-6 w-12 h-12 bg-purple-200 rounded-full opacity-40"></div>
              <div className="absolute bottom-6 left-8 w-20 h-20 bg-pink-200 rounded-full opacity-25"></div>
              <div className="absolute bottom-4 right-4 w-10 h-10 bg-yellow-200 rounded-full opacity-35"></div>
              <div className="absolute top-1/2 left-2 w-8 h-8 bg-green-200 rounded-full opacity-30"></div>
              <div className="absolute top-1/3 right-2 w-14 h-14 bg-indigo-200 rounded-full opacity-25"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-8 italic leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div className="bg-blue-600 text-white w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-lg">{testimonials[currentTestimonial].name.charAt(0)}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-1">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-blue-600 text-sm font-medium">Verified Patient</p>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-blue-600 w-8' : 'bg-gray-300 w-2'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              ❓ FAQ
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Get answers to common questions about our diagnostic services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-800 text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ml-4 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Locations */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              📍 Contact Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Visit Our <span className="text-blue-600">Locations</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Three convenient locations to serve you better across Gurugram and Manesar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gurugram Centre */}
            <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-blue-200 rounded-full opacity-30"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-300 rounded-full opacity-25"></div>
              <div className="absolute top-1/2 right-2 w-8 h-8 bg-blue-400 rounded-full opacity-20"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-500 text-white w-10 h-10 rounded-xl flex items-center justify-center mr-3">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Sector 82 Gurugram Centre</h3>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 text-gray-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-700 text-sm">Address</p>
                      <p className="text-gray-600 text-sm">A1/145, Ground Floor, Vatika Town Square 2, Town Sq Ave, Sector 82, Gurugram, Haryana 122004</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-4 h-4 text-gray-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-700 text-sm">Phone</p>
                      <a href="tel:8744002727" className="text-blue-600 text-sm font-medium">+91-8744002727</a>
                    </div>
                  </div>
                </div>

                {/* <div className="bg-white bg-opacity-50 rounded-xl p-3 text-center">
                  <MapPin className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 text-xs font-medium">Google Maps</p>
                  <p className="text-gray-500 text-xs">Gurugram Location</p>
                </div> */}
              </div>
            </div>

            {/* Old Gurugram Centre */}
            <div className="relative bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-green-200 rounded-full opacity-30"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-green-300 rounded-full opacity-25"></div>
              <div className="absolute top-1/2 right-2 w-8 h-8 bg-green-400 rounded-full opacity-20"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="bg-green-500 text-white w-10 h-10 rounded-xl flex items-center justify-center mr-3">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Old Gurugram Centre</h3>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 text-gray-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-700 text-sm">Address</p>
                      <p className="text-gray-600 text-sm">Redcross complex, Opp. Old Civil Hospital, Near MCG office, Gurugram, Haryana</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-4 h-4 text-gray-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-700 text-sm">Phone</p>
                      <a href="tel:9971108920" className="text-green-600 text-sm font-medium">+91-9971108920</a>
                    </div>
                  </div>
                </div>

                {/* <div className="bg-white bg-opacity-50 rounded-xl p-3 text-center">
                  <MapPin className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 text-xs font-medium">Google Maps</p>
                  <p className="text-gray-500 text-xs">Old Gurugram Location</p>
                </div> */}
              </div>
            </div>

            {/* Manesar Centre */}
            <div className="relative bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-purple-200 rounded-full opacity-30"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-purple-300 rounded-full opacity-25"></div>
              <div className="absolute top-1/2 right-2 w-8 h-8 bg-purple-400 rounded-full opacity-20"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-500 text-white w-10 h-10 rounded-xl flex items-center justify-center mr-3">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Manesar Centre</h3>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 text-gray-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-700 text-sm">Address</p>
                      <p className="text-gray-600 text-sm">Power Supply Colony, NH8, Opposite Hyundai Showroom,
                      Manesar, Gurugram, Haryana 122051</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-4 h-4 text-gray-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-700 text-sm">Phone</p>
                      <a href="tel:7291071742" className="text-purple-600 text-sm font-medium">+91-7291071742</a>
                    </div>
                  </div>
                </div>

                {/* <div className="bg-white bg-opacity-50 rounded-xl p-3 text-center">
                  <MapPin className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 text-xs font-medium">Google Maps</p>
                  <p className="text-gray-500 text-xs">Manesar Location</p>
                </div> */}
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="flex justify-center items-center space-x-6 flex-wrap gap-4">
              <a href="mailto:prathamultrasound@gmail.com" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors bg-gray-50 px-6 py-3 rounded-full border border-gray-200">
                <Mail className="w-5 h-5" />
                <span className="font-medium">prathamultrasound@gmail.com</span>
              </a>
              <a
  href="https://api.whatsapp.com/send/?phone=7291071742&text=Hello%2C+I+want+to+book+an+appointment&type=phone_number&app_absent=0"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center space-x-3 text-gray-700 hover:text-green-600 transition-colors bg-gray-50 px-6 py-3 rounded-full border border-gray-200"
>
  <MessageCircle className="w-5 h-5" />
  <span className="font-medium">WhatsApp</span>
</a>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-800 via-slate-900 to-blue-900 text-white py-20">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      <div>
        <div className="flex items-center space-x-4 mb-8">
          <img 
            src="logo-pra.png" 
            alt="Pratham Diagnostic Logo" 
            className="h-14 w-auto"
          />
          {/* <div>
            <h3 className="text-xl font-bold">PRATHAM DIAGNOSTIC</h3>
            <p className="text-xs text-slate-400 font-medium tracking-wide">AUTHENTIC - DEDICATED - MEANINGFUL</p>
          </div> */}
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">
          Leading diagnostic centre providing comprehensive medical imaging and laboratory services since 2015.
        </p>
      </div>

      <div>
        <h4 className="text-xl font-bold mb-6"> Sector 82 Gurugram</h4>
        <div className="text-slate-400 space-y-3">
          <div>
            <p className="text-white font-semibold mb-1">Address</p>
            <p className="text-sm leading-relaxed">A1/145, Ground Floor, Vatika Town Square 2, Town Sq Ave, Sector 82, Gurugram, Haryana 122004</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-1">Phone</p>
            <p className="font-medium">+91-8744002727</p>
          </div>
          <div>
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors font-medium text-sm">
              📍 View on Google Maps
            </a>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-xl font-bold mb-6">Old Gurugram Centre</h4>
        <div className="text-slate-400 space-y-3">
          <div>
            <p className="text-white font-semibold mb-1">Address</p>
            <p className="text-sm leading-relaxed">Redcross complex, Opp. Old Civil Hospital, Near MCG office, Gurugram, Haryana</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-1">Phone</p>
            <p className="font-medium">+91-9971108920</p>
          </div>
          <div>
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors font-medium text-sm">
              📍 View on Google Maps
            </a>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-xl font-bold mb-6">Manesar Centre</h4>
        <div className="text-slate-400 space-y-3">
          <div>
            <p className="text-white font-semibold mb-1">Address</p>
            <p className="text-sm leading-relaxed">NH8, Opposite Hyundai Showroom, Manesar, Gurugram, Haryana 122051</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-1">Phone</p>
            <p className="font-medium">+91-7291071742</p>
          </div>
          <div>
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors font-medium text-sm">
              📍 View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-slate-700 mt-16 pt-10 text-center text-slate-400">
      <p className="font-medium">&copy; 2022 Pratham Diagnostic & Imaging Centre. Made by Branding Pioneers</p>
    </div>
  </div>
</footer>





      



      {/* Transparent Contact Widget - Same behavior for Desktop and Mobile */}
      <div 
        ref={widgetRef}
        className={`fixed right-0 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-300 ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-12 pointer-events-none'
        }`}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => {
          setIsVisible(false);
          setShowPhoneOptions(false);
        }}
        onTouchStart={(e) => {
          e.preventDefault();
          setIsVisible(true);
        }}
        onTouchEnd={() => {
          // Keep visible on touch, don't auto-hide immediately
        }}
      >
        <div className="flex flex-col bg-white/20 backdrop-blur-sm shadow-lg rounded-lg">
          {/* Phone Section - Special Orange/Red Color */}
          <div className="relative">
            <button
              onClick={() => setShowPhoneOptions(!showPhoneOptions)}
              className="w-16 h-16 bg-orange-500/80 hover:bg-orange-600/90 backdrop-blur-sm transition-colors duration-300 flex items-center justify-center group rounded-t-lg shadow-lg"
              title="Phone Numbers"
            >
              <svg 
                className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform duration-300" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
            </button>
            
            {/* Phone Options Dropdown */}
            {showPhoneOptions && (
              <div className="absolute right-16 top-0 bg-white/90 backdrop-blur-md shadow-xl rounded-l-lg overflow-hidden min-w-64 animate-in slide-in-from-right duration-200">
                {phoneNumbers.map((phone, index) => (
                  <a
                    key={index}
                    href={`tel:${phone.number}`}
                    className="block px-4 py-3 text-sm text-gray-800 hover:bg-teal-50/80 border-b border-gray-200/50 last:border-b-0 transition-colors duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="font-semibold text-teal-700">{phone.label}</div>
                    <div className="text-gray-600">{phone.number}</div>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/917291071742"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-green-500/70 hover:bg-green-600/80 backdrop-blur-sm transition-colors duration-300 flex items-center justify-center group border-t border-white/20"
            title="WhatsApp"
            onClick={(e) => e.stopPropagation()}
          >
            <svg 
              className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform duration-300" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386"/>
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:prathamultrasound@gmail.com"
            className="w-16 h-16 bg-blue-500/70 hover:bg-blue-600/80 backdrop-blur-sm transition-colors duration-300 flex items-center justify-center group border-t border-white/20"
            title="Email"
            onClick={(e) => e.stopPropagation()}
          >
            <svg 
              className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform duration-300" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=100075441117910&mibextid=JRoKGi"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-blue-600/70 hover:bg-blue-700/80 backdrop-blur-sm transition-colors duration-300 flex items-center justify-center group border-t border-white/20"
            title="Facebook"
            onClick={(e) => e.stopPropagation()}
          >
            <svg 
              className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform duration-300" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/prathamdiagnostic"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-pink-500/70 hover:bg-pink-600/80 backdrop-blur-sm transition-colors duration-300 flex items-center justify-center group border-t border-white/20"
            title="Instagram"
            onClick={(e) => e.stopPropagation()}
          >
            <svg 
              className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform duration-300" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>

    </div>

   
 
  
    
  );
}

export default App;