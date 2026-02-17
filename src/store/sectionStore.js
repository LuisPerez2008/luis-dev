import { create } from "zustand";
import { useEffect } from "react";

export const useSectionStore = create((set) => ({
  activeSection: 'header',
  setActiveSection: (section) => set({ activeSection: section }),
}))

export const useSectionObserver = () => {
  const setActiveSection = useSectionStore((state) => state.setActiveSection);

  useEffect(() => {
    const observerOptions = {
       threshold: 0.5,
       rootMargin: '0px 0px -30% 0px' 
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('[id]');
    sections.forEach(section => observer.observe(section));
    return () => {      sections.forEach(section => observer.unobserve(section));
    }
    
  },[setActiveSection]);
};
