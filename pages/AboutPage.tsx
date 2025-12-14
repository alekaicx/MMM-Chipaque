import React from 'react';
import { GROUPS, SOCIAL_LINKS } from '../constants';
import { Clock, MapPin, Youtube, Facebook, Instagram, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pb-20 animate-grow space-y-12">
      
      {/* Hero Section */}
      <section className="text-center px-6 py-10 bg-white rounded-b-3xl shadow-sm border-b border-stone-100">
        <h1 className="text-2xl font-bold text-stone-900 mb-2 font-serif">IGLESIA CRISTIANA CHIPAQUÉ</h1>
        <p className="text-gold-600 font-medium tracking-wider text-sm uppercase mb-6">Tierra de Canaán</p>
        <p className="text-stone-500 text-sm italic max-w-md mx-auto">
          "Pentecostés – En busca de un avivamiento."
        </p>
      </section>

      {/* Quiénes Somos */}
      <section className="px-6">
        <div className="relative pl-6 border-l-2 border-gold-200">
            <h2 className="text-xl font-bold text-stone-800 mb-4">Nuestra Historia</h2>
            <div className="prose prose-stone text-sm text-stone-600 space-y-4">
                <p>
                Somos una iglesia pentecostal ubicada en el municipio de Chipaqué, con una visión clara: provocar un avivamiento en generaciones enteras.
                </p>
                <p>
                Nuestro pastor, <span className="font-bold text-stone-800">Manuel Ruiz</span>, llegó a este pueblo sin templos ni estructuras, comenzando con una carpa de plástico y un corazón lleno de fe y obediencia a Dios.
                </p>
                <p>
                Lo que inició como una pequeña reunión hoy es una obra viva del Espíritu Santo, donde creemos en milagros, transformación de vidas y restauración total.
                </p>
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                <h3 className="font-bold text-orange-800 text-sm mb-1">Misión</h3>
                <p className="text-xs text-orange-700">Levantar una generación encendida por Dios.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                <h3 className="font-bold text-blue-800 text-sm mb-1">Visión</h3>
                <p className="text-xs text-blue-700">Conquistar territorio espiritual.</p>
            </div>
        </div>
      </section>

      {/* Horarios */}
      <section className="px-6 bg-stone-900 py-10 text-white">
          <div className="flex items-center gap-3 mb-6 justify-center">
              <Clock className="text-gold-500" />
              <h2 className="text-xl font-bold">Horarios de Servicio</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                  { day: 'DOMINGO', time: '10:00 a.m.', type: 'Servicio Dominical' },
                  { day: 'MARTES', time: '6:30 p.m.', type: 'Culto de Oración' },
                  { day: 'SÁBADO', time: '6:30 p.m.', type: 'Culto de Jóvenes' }
              ].map((service, idx) => (
                  <div key={idx} className="bg-stone-800 p-4 rounded-xl text-center border border-stone-700">
                      <p className="text-gold-500 font-bold text-lg">{service.day}</p>
                      <p className="text-2xl font-light my-2">{service.time}</p>
                      <p className="text-stone-400 text-xs">{service.type}</p>
                  </div>
              ))}
          </div>
      </section>

      {/* Grupos */}
      <section className="px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
            <Users className="text-stone-400" size={20} />
            <h2 className="text-xl font-bold text-stone-800">Grupos de la Iglesia</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GROUPS.map((group) => (
                <div key={group.id} className="bg-white rounded-xl shadow-sm border border-stone-100 overflow-hidden group hover:shadow-lg transition-all">
                    <div className={`h-2 ${group.color}`}></div>
                    <div className="p-5">
                        <h3 className="font-bold text-lg text-stone-900 mb-1">{group.name}</h3>
                        <p className="text-stone-500 text-sm leading-relaxed">{group.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Social Media Footer */}
      <section className="px-6 py-10 text-center">
          <h2 className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-6">Síguenos en Redes</h2>
          <div className="flex justify-center gap-6">
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="p-4 bg-red-600 text-white rounded-full shadow-lg hover:scale-110 transition-transform">
                  <Youtube size={24} />
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="p-4 bg-blue-600 text-white rounded-full shadow-lg hover:scale-110 transition-transform">
                  <Facebook size={24} />
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="p-4 bg-pink-600 text-white rounded-full shadow-lg hover:scale-110 transition-transform">
                  <Instagram size={24} />
              </a>
          </div>
          <p className="mt-10 text-xs text-stone-300">
              © {new Date().getFullYear()} Iglesia Cristiana Chipaqué. <br/>
              Dios no habita edificios, habita en corazones encendidos.
          </p>
      </section>

    </div>
  );
};

export default AboutPage;