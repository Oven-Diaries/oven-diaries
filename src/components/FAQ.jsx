import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "Does Oven Diaries offer customisation of cakes?",
    answer: "Yes, typically all bakeries offer customisation. It is recommended to convey your requirement to Oven Diaries by contacting them."
  },
  {
    question: "How does Oven Diaries store desserts and other savoury products?",
    answer: "Oven Diaries safely stores desserts and other savoury products in temperature-regulated refrigerators."
  },
  {
    question: "Does Oven Diaries offer gluten-free products?",
    answer: "We suggest that you contact Oven Diaries whether they offer gluten-free products. You can also check if they can customise the product based on your requirements."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#1c2070] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[10px] font-bold tracking-widest text-[#b8a35e] uppercase mb-3">Information</h2>
          <h3 className="text-3xl font-bold text-white uppercase tracking-tighter">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-sm overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none hover:bg-white/5 transition-colors cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-bold text-sm text-white uppercase tracking-tight pr-4">{faq.question}</span>
                <span className="text-[#b8a35e] shrink-0 transition-transform duration-300">
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 pt-2 text-white/70 text-xs leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
