import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Dummy reviews data
const dummyReviews = [
  {
    name: "Sarah Johnson",
    photo: "https://i.pravatar.cc/150?img=1",
    review: "Working with this agency has been transformative for our business. Their innovative approach to design and development helped us achieve remarkable results.",
    createdAt: new Date()
  },
  {
    name: "Michael Chen",
    photo: "https://i.pravatar.cc/150?img=2",
    review: "The team's creativity and technical expertise are outstanding. They delivered our project ahead of schedule and exceeded all expectations.",
    createdAt: new Date()
  },
  {
    name: "Emma Williams",
    photo: "https://i.pravatar.cc/150?img=3",
    review: "Their attention to detail and commitment to excellence is unmatched. The final product was exactly what we envisioned and more.",
    createdAt: new Date()
  },
  {
    name: "David Miller",
    photo: "https://i.pravatar.cc/150?img=4",
    review: "Exceptional service from start to finish. The team's communication was clear, and they were always ready to go the extra mile.",
    createdAt: new Date()
  }
];

export default function ClientTestimonials() {
  const [user, setUser] = useState(null);
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState(dummyReviews); // Initialize with dummy data

  useEffect(() => {
    // Listen for auth state changes
    // const unsubscribe = auth.onAuthStateChanged(setUser);
    // Fetch reviews
    // const fetchReviews = async () => {
    //   const q = query(collection(db, "testimonials"), orderBy("createdAt", "desc"));
    //   const snapshot = await getDocs(q);
    //   setReviews(snapshot.docs.map(doc => doc.data()));
    // };
    // fetchReviews();
    // return unsubscribe;
  }, []);

  const handleLogin = async (provider) => {
    // try {
    //   await signInWithPopup(auth, provider);
    // } catch (e) {
    //   alert("Login failed");
    // }
  };

  const handleLogout = () => {
    // signOut(auth);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!review.trim()) return;
    
    // Add new review to the existing reviews (temporary, without Firebase)
    const newReview = {
      name: "Guest User",
      photo: "https://i.pravatar.cc/150?img=5",
      review: review,
      createdAt: new Date()
    };
    
    setReviews([newReview, ...reviews]);
    setReview("");
  };

  return (
    <section className="relative min-h-screen bg-black py-20">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
        >
          Client Testimonials
        </motion.h2>

        {!user ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
            <button 
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white 
                         hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg 
                         hover:shadow-purple-500/25"
              onClick={() => handleLogin(providerGoogle)}
            >
              Login with Google
            </button>
            <button 
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white 
                         hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg 
                         hover:shadow-blue-500/25"
              onClick={() => handleLogin(providerTwitter)}
            >
              Login with Twitter
            </button>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-2xl mx-auto mb-12 bg-gray-900/50 p-6 rounded-xl backdrop-blur-sm"
          >
            <div className="flex items-center gap-4 mb-4">
              <img src={user.photoURL} alt={user.displayName} 
                   className="w-12 h-12 rounded-full ring-2 ring-purple-500" />
              <span className="text-gray-200">{user.displayName}</span>
              <button 
                onClick={handleLogout}
                className="ml-auto px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Logout
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <textarea
                value={review}
                onChange={e => setReview(e.target.value)}
                placeholder="Share your experience..."
                className="w-full min-h-[120px] bg-gray-800 text-gray-200 rounded-lg p-4 
                           border border-gray-700 focus:border-purple-500 focus:ring-1 
                           focus:ring-purple-500 transition-all duration-300"
              />
              <button 
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg 
                           text-white hover:from-purple-700 hover:to-pink-700 transition-all 
                           duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                Submit Review
              </button>
            </form>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 hover:shadow-xl 
                         hover:shadow-purple-500/10 transition-all duration-300 
                         border border-gray-800 hover:border-purple-500/50"
            >
              <div className="flex items-center gap-4 mb-4">
                <img src={r.photo} alt={r.name} 
                     className="w-12 h-12 rounded-full ring-2 ring-purple-500" />
                <strong className="text-gray-200">{r.name}</strong>
              </div>
              <p className="text-gray-300 leading-relaxed">{r.review}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}