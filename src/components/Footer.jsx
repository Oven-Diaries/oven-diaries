export default function Footer() {
  return (
    <footer className="h-20 bg-[#1c2070] border-t border-white/10 px-4 sm:px-10 flex flex-col sm:flex-row items-center justify-between text-[10px] text-white/30 uppercase tracking-[0.2em] shrink-0 py-4 sm:py-0">
      <div className="mb-2 sm:mb-0 text-center sm:text-left">&copy; {new Date().getFullYear()} Oven Diaries</div>
      <div className="flex flex-wrap justify-center gap-6 mb-2 sm:mb-0">
        <a href="https://www.instagram.com/ovendiaries__/" target="_blank" rel="noreferrer" className="hover:text-[#b8a35e] transition-colors">Instagram</a>
        <a href="https://www.facebook.com/profile.php?id=100092112357535&locale=bs_BA#" target="_blank" rel="noreferrer" className="hover:text-[#b8a35e] transition-colors">Facebook</a>
        <a href="https://www.swiggy.com/city/eluru/oven-diaries-shankara-matam-road-powerpet-rest716192?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder" target="_blank" rel="noreferrer" className="hover:text-[#b8a35e] transition-colors">Swiggy</a>
        <a href="https://www.zomato.com/eluru/oven-diaries-eluru-locality/order" target="_blank" rel="noreferrer" className="hover:text-[#b8a35e] transition-colors">Zomato</a>
      </div>
      <div className="text-center sm:text-right hidden md:block">Designed for Connoisseurs</div>
    </footer>
  );
}
