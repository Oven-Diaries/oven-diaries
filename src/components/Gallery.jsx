import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { galleryImages } from '../data';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [failedImages, setFailedImages] = useState(new Set());

  // Filter out any image indexes that have errored out
  const activeImages = galleryImages
    .map((src, index) => ({ src, index }))
    .filter(item => !failedImages.has(item.index));

  // Determine which images are displayed based on 'showAll' mode
  const displayedImages = showAll ? activeImages : activeImages.slice(0, 7);
  const showViewAllButton = !showAll && activeImages.length > 7;

  return (
    <section id="gallery" className="pb-24 pt-12 bg-[#1c2070]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8 flex justify-between items-end">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#b8a35e] mb-2 sm:mb-4">Visual Journal</h3>
        </div>

        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          <AnimatePresence>
            {displayedImages.map((item, displayIndex) => (
              <motion.div
                layout
                key={item.index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (displayIndex % 8) * 0.05 }}
                onClick={() => setSelectedImage(item.src)}
                className="aspect-square rounded-sm relative group cursor-pointer overflow-hidden border border-white/5"
              >
                <img 
                  src={item.src} 
                  alt={`Gallery image ${item.index + 1}`} 
                  className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 grayscale group-hover:grayscale-0"
                  onError={() => {
                    setFailedImages(prev => {
                      const next = new Set(prev);
                      next.add(item.index);
                      return next;
                    });
                  }}
                />
              </motion.div>
            ))}
            
            {showViewAllButton && (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                onClick={() => setShowAll(true)}
                className="aspect-square border border-[#b8a35e]/20 flex flex-col items-center justify-center rounded-sm text-[10px] text-[#b8a35e] uppercase tracking-widest hover:bg-[#b8a35e]/10 transition-colors cursor-pointer"
              >
                <span>View All</span>
                <span>&rarr;</span>
              </motion.div>
            )}

            {showAll && activeImages.length > 7 && (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                onClick={() => setShowAll(false)}
                className="aspect-square border border-[#b8a35e]/20 flex flex-col items-center justify-center rounded-sm text-[10px] text-[#b8a35e] uppercase tracking-widest hover:bg-[#b8a35e]/10 transition-colors cursor-pointer"
              >
                <span>View Less</span>
                <span>&larr;</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X size={36} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Expanded gallery view"
              className="max-w-full max-h-[90vh] object-contain rounded-md shadow-2xl"
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
