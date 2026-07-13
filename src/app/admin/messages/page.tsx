import { Search, Filter, Mail, Star, Trash2, Reply, MoreVertical } from "lucide-react";

export default function MessagesPage() {
  const messages = [
    { id: "MSG-101", sender: "Amina Benali", email: "amina.benali@example.com", subject: "Demande concernant la taille sur mesure de l'Abaya", date: "Aujourd'hui, 10:30", read: false, starred: true },
    { id: "MSG-100", sender: "Younes Karim", email: "y.karim@example.com", subject: "Opportunité de partenariat", date: "Hier, 14:15", read: true, starred: false },
    { id: "MSG-099", sender: "Nour El Houda", email: "nour.h@example.com", subject: "Retard de la commande #LCH-9821", date: "24 Oct 2026", read: true, starred: false },
    { id: "MSG-098", sender: "Boutique Le Rêve", email: "contact@lereve.dz", subject: "Demande de vente en gros pour la collection d'hiver", date: "23 Oct 2026", read: true, starred: true },
    { id: "MSG-097", sender: "Sarah Khaled", email: "sarah.kh@example.com", subject: "Demande de retour", date: "22 Oct 2026", read: true, starred: false },
  ];

  return (
    <div className="pb-10 flex flex-col h-[calc(100vh-80px)]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 shrink-0">
        <div>
          <h1 className="font-headline-md text-headline-md">Messages de contact</h1>
          <p className="text-secondary font-body-sm mt-1">Gérer les demandes des clients et les formulaires de contact</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-1 min-h-0">
        
        {/* Sidebar List */}
        <div className="w-1/3 border-r border-outline-variant flex flex-col min-w-[300px]">
          <div className="p-4 border-b border-outline-variant bg-surface-variant/30 flex justify-between items-center">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" size={16} />
              <input 
                type="text" 
                placeholder="Rechercher des messages..." 
                className="w-full pl-9 pr-4 py-1.5 border border-outline-variant rounded-md font-body-sm focus:outline-none focus:border-primary transition-colors bg-white"
              />
            </div>
            <button className="p-2 ml-2 border border-outline-variant rounded-md text-secondary hover:text-primary hover:bg-surface-variant transition-colors">
              <Filter size={16} />
            </button>
          </div>
          <div className="overflow-y-auto flex-1 custom-scrollbar">
            {messages.map((msg, i) => (
              <div key={i} className={`p-4 border-b border-outline-variant cursor-pointer transition-colors ${!msg.read ? 'bg-surface-variant/50 border-l-4 border-l-primary' : 'hover:bg-surface-variant/30 border-l-4 border-l-transparent'}`}>
                <div className="flex justify-between items-start mb-1">
                  <h3 className={`font-body-md truncate pr-2 ${!msg.read ? 'font-bold text-on-surface' : 'font-medium text-secondary'}`}>
                    {msg.sender}
                  </h3>
                  <span className="text-[10px] text-secondary whitespace-nowrap pt-1">{msg.date}</span>
                </div>
                <p className={`text-xs truncate mb-1 ${!msg.read ? 'font-bold text-on-surface' : 'text-on-surface'}`}>{msg.subject}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-[10px] text-secondary font-mono">{msg.id}</span>
                  <button className={`${msg.starred ? 'text-yellow-400' : 'text-outline-variant hover:text-yellow-400'} transition-colors`}>
                    <Star size={14} className={msg.starred ? "fill-yellow-400" : ""} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Details */}
        <div className="flex-1 flex flex-col bg-surface/50">
          <div className="p-4 border-b border-outline-variant flex justify-between items-center bg-white">
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-3 py-1.5 border border-outline-variant text-secondary hover:text-primary hover:bg-surface-variant rounded-md text-sm transition-colors">
                <Reply size={16} /> Répondre
              </button>
              <button className="p-1.5 border border-outline-variant text-red-600 hover:bg-red-50 rounded-md transition-colors" title="Delete">
                <Trash2 size={16} />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-secondary hover:text-yellow-400 transition-colors p-2">
                <Star size={18} className="fill-yellow-400 text-yellow-400" />
              </button>
              <button className="text-secondary hover:text-primary transition-colors p-2">
                <MoreVertical size={18} />
              </button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-8 bg-white custom-scrollbar">
            <h2 className="text-xl font-bold font-headline-md mb-6">Demande concernant la taille sur mesure de l'Abaya</h2>
            <div className="flex justify-between items-center mb-8 border-b border-outline-variant pb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg uppercase">
                  AB
                </div>
                <div>
                  <p className="font-bold text-on-surface">Amina Benali</p>
                  <p className="text-sm text-secondary flex items-center gap-1 mt-0.5">
                    <Mail size={12} /> amina.benali@example.com
                  </p>
                </div>
              </div>
              <p className="text-sm text-secondary">Aujourd'hui, 10:30</p>
            </div>
            
            <div className="prose prose-sm max-w-none text-on-surface font-body-md leading-relaxed">
              <p>Bonjour l'équipe Maison de Couture,</p>
              <p>J'espère que ce courriel vous trouvera bien.</p>
              <p>Je suis très intéressée par la Midnight Velvet Abaya de votre dernière collection. Cependant, je suis assez grande (1,80m) et je crains que la "Taille Unique" standard ne soit trop courte pour moi.</p>
              <p>Proposez-vous des tailles personnalisées ou des longueurs plus importantes pour vos abayas ? Si oui, quel est le processus et le coût supplémentaire ?</p>
              <p>Je cherche à la porter pour un événement à venir le mois prochain, j'apprécierais donc une réponse rapide.</p>
              <p>Merci pour votre temps et pour la création de si belles pièces.</p>
              <br/>
              <p>Cordialement,</p>
              <p>Amina Benali<br/>0555 12 34 56</p>
            </div>
          </div>

          <div className="p-4 border-t border-outline-variant bg-white">
            <div className="border border-outline-variant rounded-xl overflow-hidden focus-within:border-primary transition-colors">
              <textarea 
                className="w-full p-4 font-body-sm focus:outline-none resize-none" 
                rows={4} 
                placeholder="Tapez votre réponse ici..."
              ></textarea>
              <div className="p-2 bg-surface-variant flex justify-between items-center border-t border-outline-variant">
                <div className="flex gap-2 text-secondary">
                  <button className="p-2 hover:text-primary hover:bg-surface rounded transition-colors"><Mail size={16} /></button>
                </div>
                <button className="flex items-center gap-2 px-4 py-1.5 bg-primary text-on-primary font-body-md rounded-md hover:bg-[#C8A96A] transition-colors">
                  Envoyer la réponse
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
