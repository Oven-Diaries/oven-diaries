import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#1c2070] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] w-full rounded-lg overflow-hidden flex-shrink-0"
          >
            <img 
              // src="https://lh3.googleusercontent.com/p/AF1QipOUtEJoWUcy3k04ELmn_bS_J47j2rz_k4a_YcJh=s1360-w1360-h1020-rw" 
              src="https://lh3.googleusercontent.com/p/AF1QipOu8DsycZpWo-R3N1tirhytw03MCxc1J4Ga0e7x=s1360-w1360-h1020-rw"
              alt="Baker preparing dough" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-lg"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#b8a35e] font-bold mb-2">Our Story</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-tighter leading-[0.9]">
              Where Quality Meets Craft
            </h3>
            <div className="text-white/70 mb-4 leading-relaxed text-sm">
              <div>
              Located in the vibrant heart of Eluru Bazaar, Oven Diaries has grown into a renowned bakery known for its irresistible range of freshly baked goods and pastries. What began as a commitment to delivering genuine quality has evolved into a trusted destination for food lovers across the city. Backed by a strong 4.6 rating and the appreciation of over a thousand customers, our journey is built on consistency and taste.
              </div>
              
              <div className='mt-2'>
                At Oven Diaries, we take pride in curating a diverse selection of baked delights, from soft, fresh breads and handcrafted cakes to flavorful cookies and pastries. Every product reflects our dedication to excellence and attention to detail.
              </div>
              
              <div className='mt-2'>
                To elevate the experience, we offer customized cakes for birthdays, weddings, and special occasions, along with convenient pre-order services to ensure your favorites are always within reach. For larger celebrations, our delivery and bulk order services are designed to bring the Oven Diaries experience straight to you.
              </div>
              
              <div className='mt-2'>
                Quality is not just a promise, it is our standard. Every item is made using carefully selected ingredients, delivering freshness and flavor in every bite. With a growing community of loyal customers, Oven Diaries continues to be a place where tradition, taste, and trust come together.
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-white/10 pt-6 mt-6">
              <div>
                <div className="text-[#b8a35e] text-2xl font-bold">4.6/5</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest mt-1">1000+ Reviews</div>
              </div>
              <div>
                <div className="text-[#b8a35e] text-2xl font-bold">Custom</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Special Orders</div>
              </div>
              <div className="hidden sm:block">
                <div className="text-[#b8a35e] text-2xl font-bold">Daily</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Freshly Baked & Cooked</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
