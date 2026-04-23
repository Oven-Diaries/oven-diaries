import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { menuData } from '../data';

const DietIcon = ({ type }) => {
  if (type === 'veg') return (
    <div title="Vegetarian" className="w-3.5 h-3.5 border border-[#3BB77E] rounded-sm flex items-center justify-center shrink-0">
      <div className="w-1.5 h-1.5 bg-[#3BB77E] rounded-full"></div>
    </div>
  );
  if (type === 'non-veg') return (
    <div title="Non-Vegetarian" className="w-3.5 h-3.5 border border-[#E23744] rounded-sm flex items-center justify-center shrink-0">
      <div className="w-1.5 h-1.5 bg-[#E23744] rounded-full"></div>
    </div>
  );
  if (type === 'egg') return (
    <div title="Contains Egg" className="w-3.5 h-3.5 border border-[#FFC107] rounded-sm flex items-center justify-center shrink-0">
      <div className="w-1.5 h-1.5 bg-[#FFC107] rounded-full"></div>
    </div>
  );
  return null;
};

export default function Menu() {
  const [activeTab, setActiveTab] = useState('All');
  
  // Calculate available categories based ONLY on the current Diet filter
  const availableItemsByDiet = activeTab === 'All' 
    ? menuData 
    : menuData.filter(item => {
        if (activeTab === 'Veg') return item.diet === 'veg';
        if (activeTab === 'Non-Veg') return item.diet === 'non-veg';
        if (activeTab === 'Egg') return item.diet === 'egg';
        return true;
      });

  const dynamicCategories = Array.from(new Set(availableItemsByDiet.map(item => item.category))).filter(Boolean);
  
  // Set active Category. Default to first available.
  const [activeCategory, setActiveCategory] = useState(dynamicCategories[0] || '');

  // Update activeCategory if changing diets makes current one unavailable
  useEffect(() => {
    if (dynamicCategories.length > 0 && !dynamicCategories.includes(activeCategory)) {
      setActiveCategory(dynamicCategories[0]);
    }
  }, [activeTab, dynamicCategories, activeCategory]);

  const categories = ['All', 'Veg', 'Non-Veg', 'Egg'];

  const filteredMenu = availableItemsByDiet.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-[#1c2070]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header and Diet Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-small font-bold text-[#b8a35e] uppercase tracking-[0.2em] mb-2">Our Menu</h2>
            <h3 className="text-3xl font-bold text-white uppercase tracking-tighter">Signature Selection</h3>
          </div>

          <div className="flex gap-4 md:gap-6 text-[10px] uppercase tracking-widest text-white/40">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`transition-colors cursor-pointer ${
                  activeTab === category 
                    ? 'text-white border-b border-[#b8a35e] pb-1' 
                    : 'hover:text-white pb-1 border-b border-transparent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area: Sidebar + Item List */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start relative">
          
          {/* Sub Categories Sidebar */}
          <div className="w-full md:w-64 shrink-0 flex flex-row overflow-x-auto md:flex-col md:sticky md:top-24 no-scrollbar pb-4 md:pb-0 z-10 bg-[#1c2070] md:bg-transparent">
            {dynamicCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-3 md:border-l-2 md:border-t-0 border-t-0 border-b-2 md:border-b-0 text-left text-sm font-medium transition-all whitespace-nowrap min-w-fit ${
                  activeCategory === cat 
                    ? 'border-[#b8a35e] text-[#b8a35e] bg-white/5' 
                    : 'border-transparent text-white/60 hover:text-white hover:bg-white/[0.02]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Items List */}
          <div className="flex-1 flex flex-col w-full">
             <div className="mb-6 pb-2 border-b border-white/10 flex justify-between items-end">
               <h4 className="text-xl font-bold text-white tracking-widest uppercase">{activeCategory}</h4>
               <span className="text-xs text-white/40 uppercase tracking-widest">{filteredMenu.length} Items</span>
             </div>
             
             <motion.div layout className="flex flex-col">
              <AnimatePresence mode="popLayout">
                {filteredMenu.map((item) => (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="py-5 border-b border-white/5 flex justify-between items-start gap-4 hover:bg-white/[0.02] transition-colors -mx-4 px-4 rounded-md"
                  >
                    <div className="flex-1">
                      <div className="flex items-start gap-2">
                        {item.diet && <div className="mt-[3px]"><DietIcon type={item.diet} /></div>}
                        <h4 className="font-bold text-base md:text-lg text-white">{item.name}</h4>
                      </div>
                      <p className="text-xs md:text-sm text-white/50 mt-1.5">
                        {item.description}
                      </p>
                    </div>
                    <div className="text-[#b8a35e] text-base md:text-lg font-bold shrink-0 pt-0.5">
                      {item.price}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
