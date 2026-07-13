// This static configuration serves as a temporary placeholder.
// In the final architecture, these values will be managed from the Admin Dashboard
// and loaded from a database (e.g., Supabase).

export const storeSettings = {
  boutiqueName: "Maison de Couture",
  founderName: "Nibel Rezgui",
  address: "15 Rue Didouche Mourad, Alger Centre, 16000, Algérie",
  phoneNumber: "+213 555 12 34 56",
  whatsappNumber: "+213555123456", // formatted for wa.me links
  whatsappDisplay: "+213 555 12 34 56",
  emailAddress: "contact@luxurycouture.dz",
  websiteUrl: "https://www.luxurycouture.dz",
  instagramUrl: "https://instagram.com/luxurycouturehouse",
  facebookUrl: "https://facebook.com/luxurycouturehouse",
  googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.6455642647035!2d3.0531558!3d36.762828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb258752d591b%3A0xf6d8bb9a37651a!2sDidouche%20Mourad%20St%2C%20Algiers!5e0!3m2!1sen!2sdz!4v1700000000000!5m2!1sen!2sdz",
  businessHours: [
    "Samedi - Jeudi : 10h00 - 19h00",
    "Vendredi : Fermé"
  ]
};

// Future hook pattern to make replacing with DB easier:
export function useStoreSettings() {
  // In the future, this could be:
  // const [settings, setSettings] = useState(null);
  // useEffect(() => { supabase.from('settings').select().then(...) }, []);
  // return settings;
  
  return storeSettings;
}
