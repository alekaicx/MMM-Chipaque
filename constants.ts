import { ChurchGroup, Devotional, BibleBookData } from './types';

// --- BIBLE DATA ---
// Mapping for API (using standard English names for API stability, Spanish for display)
export const BIBLE_BOOKS_DATA: BibleBookData[] = [
  // Old Testament
  { name: "Génesis", chapters: 50, apiName: "Genesis" },
  { name: "Éxodo", chapters: 40, apiName: "Exodus" },
  { name: "Levítico", chapters: 27, apiName: "Leviticus" },
  { name: "Números", chapters: 36, apiName: "Numbers" },
  { name: "Deuteronomio", chapters: 34, apiName: "Deuteronomy" },
  { name: "Josué", chapters: 24, apiName: "Joshua" },
  { name: "Jueces", chapters: 21, apiName: "Judges" },
  { name: "Rut", chapters: 4, apiName: "Ruth" },
  { name: "1 Samuel", chapters: 31, apiName: "1Samuel" },
  { name: "2 Samuel", chapters: 24, apiName: "2Samuel" },
  { name: "1 Reyes", chapters: 22, apiName: "1Kings" },
  { name: "2 Reyes", chapters: 25, apiName: "2Kings" },
  { name: "1 Crónicas", chapters: 29, apiName: "1Chronicles" },
  { name: "2 Crónicas", chapters: 36, apiName: "2Chronicles" },
  { name: "Esdras", chapters: 10, apiName: "Ezra" },
  { name: "Nehemías", chapters: 13, apiName: "Nehemiah" },
  { name: "Ester", chapters: 10, apiName: "Esther" },
  { name: "Job", chapters: 42, apiName: "Job" },
  { name: "Salmos", chapters: 150, apiName: "Psalms" },
  { name: "Proverbios", chapters: 31, apiName: "Proverbs" },
  { name: "Eclesiastés", chapters: 12, apiName: "Ecclesiastes" },
  { name: "Cantares", chapters: 8, apiName: "Song of Solomon" },
  { name: "Isaías", chapters: 66, apiName: "Isaiah" },
  { name: "Jeremías", chapters: 52, apiName: "Jeremiah" },
  { name: "Lamentaciones", chapters: 5, apiName: "Lamentations" },
  { name: "Ezequiel", chapters: 48, apiName: "Ezekiel" },
  { name: "Daniel", chapters: 12, apiName: "Daniel" },
  { name: "Oseas", chapters: 14, apiName: "Hosea" },
  { name: "Joel", chapters: 3, apiName: "Joel" },
  { name: "Amós", chapters: 9, apiName: "Amos" },
  { name: "Abdías", chapters: 1, apiName: "Obadiah" },
  { name: "Jonás", chapters: 4, apiName: "Jonah" },
  { name: "Miqueas", chapters: 7, apiName: "Micah" },
  { name: "Nahúm", chapters: 3, apiName: "Nahum" },
  { name: "Habacuc", chapters: 3, apiName: "Habakkuk" },
  { name: "Sofonías", chapters: 3, apiName: "Zephaniah" },
  { name: "Hageo", chapters: 2, apiName: "Haggai" },
  { name: "Zacarías", chapters: 14, apiName: "Zechariah" },
  { name: "Malaquías", chapters: 4, apiName: "Malachi" },
  // New Testament
  { name: "Mateo", chapters: 28, apiName: "Matthew" },
  { name: "Marcos", chapters: 16, apiName: "Mark" },
  { name: "Lucas", chapters: 24, apiName: "Luke" },
  { name: "Juan", chapters: 21, apiName: "John" },
  { name: "Hechos", chapters: 28, apiName: "Acts" },
  { name: "Romanos", chapters: 16, apiName: "Romans" },
  { name: "1 Corintios", chapters: 16, apiName: "1Corinthians" },
  { name: "2 Corintios", chapters: 13, apiName: "2Corinthians" },
  { name: "Gálatas", chapters: 6, apiName: "Galatians" },
  { name: "Efesios", chapters: 6, apiName: "Ephesians" },
  { name: "Filipenses", chapters: 4, apiName: "Philippians" },
  { name: "Colosenses", chapters: 4, apiName: "Colossians" },
  { name: "1 Tesalonicenses", chapters: 5, apiName: "1Thessalonians" },
  { name: "2 Tesalonicenses", chapters: 3, apiName: "2Thessalonians" },
  { name: "1 Timoteo", chapters: 6, apiName: "1Timothy" },
  { name: "2 Timoteo", chapters: 4, apiName: "2Timothy" },
  { name: "Tito", chapters: 3, apiName: "Titus" },
  { name: "Filemón", chapters: 1, apiName: "Philemon" },
  { name: "Hebreos", chapters: 13, apiName: "Hebrews" },
  { name: "Santiago", chapters: 5, apiName: "James" },
  { name: "1 Pedro", chapters: 5, apiName: "1Peter" },
  { name: "2 Pedro", chapters: 3, apiName: "2Peter" },
  { name: "1 Juan", chapters: 5, apiName: "1John" },
  { name: "2 Juan", chapters: 1, apiName: "2John" },
  { name: "3 Juan", chapters: 1, apiName: "3John" },
  { name: "Judas", chapters: 1, apiName: "Jude" },
  { name: "Apocalipsis", chapters: 22, apiName: "Revelation" }
];

// --- DAILY VERSES POOL ---
export const DAILY_VERSES = [
  { text: "Todo lo puedo en Cristo que me fortalece.", ref: "Filipenses 4:13" },
  { text: "Jehová es mi pastor; nada me faltará.", ref: "Salmos 23:1" },
  { text: "En el principio creó Dios los cielos y la tierra.", ref: "Génesis 1:1" },
  { text: "Mas buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas.", ref: "Mateo 6:33" },
  { text: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito...", ref: "Juan 3:16" },
  { text: "Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes...", ref: "Josué 1:9" },
  { text: "Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien...", ref: "Romanos 8:28" },
  { text: "Lámpara es a mis pies tu palabra, y lumbrera a mi camino.", ref: "Salmos 119:105" },
  { text: "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.", ref: "Mateo 11:28" },
  { text: "Porque yo sé los pensamientos que tengo acerca de vosotros...", ref: "Jeremías 29:11" },
  { text: "Echa sobre Jehová tu carga, y él te sustentará...", ref: "Salmos 55:22" },
  { text: "El amor es sufrido, es benigno; el amor no tiene envidia...", ref: "1 Corintios 13:4" },
  { text: "Si Dios es por nosotros, ¿quién contra nosotros?", ref: "Romanos 8:31" },
  { text: "Clama a mí, y yo te responderé, y te enseñaré cosas grandes y ocultas...", ref: "Jeremías 33:3" },
  { text: "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios...", ref: "Isaías 41:10" }
];

// --- 40 DAYS CAMPAIGN DATA ---
// Inspirado en la narrativa relacional de "The Chosen" y el viaje bíblico de Jesús.
const CAMPAIGN_DATA = [
  // SEMANA 1: EL LLAMADO Y LA IDENTIDAD
  { t: "Te He Llamado por Tu Nombre", s: "Isaías 43:1", c: "Al igual que María Magdalena, Jesús te conoce en medio de tu caos. No importa tu pasado, Él pronuncia tu nombre hoy y te dice: 'Eres mío'. El viaje comienza con identidad, no con actividad.", p: "Señor, gracias porque me conoces. Dejo atrás mi pasado y acepto tu llamado hoy.", a: "Mírate al espejo y di en voz alta: 'Soy propiedad de Dios'." },
  { t: "La Boda y el Vino Nuevo", s: "Juan 2:10", c: "En Caná, Jesús transformó lo ordinario en extraordinario. A veces sentimos que nuestra fe se ha agotado, como el vino. Pero Jesús ha guardado lo mejor para el final. Él quiere traer un vino nuevo de gozo a tu vida.", p: "Jesús, convierte las aguas estancadas de mi vida en vino nuevo de tu Espíritu.", a: "Identifica un área 'vacía' en tu vida y entrégasela a Jesús hoy." },
  { t: "Sígueme", s: "Mateo 9:9", c: "Mateo, un recaudador despreciado, fue llamado desde su mesa de impuestos. Jesús no llama a los capacitados, capacita a los llamados. No esperes a ser perfecto para seguirle.", p: "Señor, aquí estoy con mis defectos. Me levanto de mi mesa para seguirte.", a: "Invita a alguien inesperado a la iglesia o a un café." },
  { t: "Pescadores de Hombres", s: "Lucas 5:10", c: "Simón Pedro falló toda la noche pescando. Pero a una palabra de Jesús, las redes se rompieron. Tu esfuerzo humano tiene límites; su palabra trae abundancia sobrenatural.", p: "Maestro, en tu palabra echaré la red. Confío en tu poder, no en mi fuerza.", a: "Comparte un versículo en tus redes sociales hoy." },
  { t: "Viendo lo Invisible", s: "Juan 1:48", c: "Natanael se sorprendió de que Jesús lo viera bajo la higuera. Dios te ve en tus momentos de soledad, cuando oras en secreto. Nunca estás realmente solo.", p: "Dios que me ve, gracias por estar conmigo en lo secreto.", a: "Pasa 10 minutos a solas, sin celular, solo tú y Dios." },
  { t: "El Toque del Leproso", s: "Marcos 1:41", c: "Nadie tocaba a un leproso, pero Jesús sí. Él rompe las barreras religiosas para tocar tu dolor. No hay mancha que Él no pueda limpiar ni herida que no pueda sanar.", p: "Límpiame, Señor. Toca las áreas de mi corazón que me duelen.", a: "Ora por alguien que esté enfermo hoy." },
  { t: "Fe que Rompe Techos", s: "Marcos 2:4", c: "Los amigos del paralítico hicieron lo imposible para llevarlo a Jesús. A veces necesitamos amigos que nos lleven a Dios, y a veces debemos ser esos amigos. La fe desesperada obtiene respuesta.", p: "Señor, dame una fe que no se detenga ante los obstáculos.", a: "Envía un mensaje de ánimo a 3 amigos." },

  // SEMANA 2: EL SERMÓN Y EL CORAZÓN
  { t: "Bienaventurados", s: "Mateo 5:3", c: "El Reino de Dios es al revés: los pobres son ricos, los que lloran serán consolados. Jesús redefine lo que significa tener éxito. Tu quebranto es la plataforma para su gloria.", p: "Enséñame a valorar lo que Tú valoras, Señor.", a: "Lee las Bienaventuranzas completas en Mateo 5." },
  { t: "Sal y Luz", s: "Mateo 5:13", c: "La sal preserva y da sabor. Si pierdes tu esencia, el mundo se vuelve insípido. Fuiste creado para marcar la diferencia en tu entorno, no para aislarte de él.", p: "Que mi vida traiga sabor y esperanza a quienes me rodean.", a: "Haz un acto de bondad anónimo hoy." },
  { t: "Ama a tus Enemigos", s: "Mateo 5:44", c: "Esta es la enseñanza más difícil. Amar a quien nos ofende rompe el ciclo del odio. Jesús no solo lo predicó, lo vivió en la cruz. El perdón es la llave de tu libertad.", p: "Ayúdame a perdonar como Tú perdonas.", a: "Escribe el nombre de alguien difícil de amar y ora por él/ella." },
  { t: "Orar en lo Secreto", s: "Mateo 6:6", c: "La hipocresía busca el aplauso; la intimidad busca al Padre. Cierra la puerta. El verdadero poder espiritual se gesta donde nadie te ve.", p: "Padre, anhelo tu presencia más que el reconocimiento público.", a: "Busca un 'cuarto de guerra' y ora de rodillas." },
  { t: "No os Afanéis", s: "Mateo 6:25", c: "Mira las aves, mira los lirios. Si Dios cuida de la hierba, ¿cuánto más de ti? La preocupación es un insulto al cuidado de Dios. Descansa hoy.", p: "Te entrego mis cargas y mi ansiedad. Confío en tu provisión.", a: "Haz una lista de tus preocupaciones y luego quémala o rómpela." },
  { t: "La Roca y la Arena", s: "Mateo 7:24", c: "Todos enfrentan tormentas. La diferencia no es la tormenta, es el cimiento. Si construyes sobre la obediencia a Su palabra, permanecerás firme cuando sople el viento.", p: "Señor, cimento mi vida en tu verdad inmovible.", a: "Memoriza un versículo bíblico hoy." },
  { t: "Nicodemo en la Noche", s: "Juan 3:3", c: "La religión no salva; es necesario nacer de nuevo. El Espíritu sopla donde quiere. No busques solo entender a Dios con la mente, experiméntalo con el espíritu.", p: "Espíritu Santo, sopla vida nueva en mí hoy.", a: "Pide al Espíritu Santo que te guíe en una decisión." },

  // SEMANA 3: MILAGROS Y SEÑALES
  { t: "La Mujer del Pozo", s: "Juan 4:14", c: "Jesús rompió protocolos culturales para hablar con una mujer samaritana. Él ofrece agua viva que sacia la sed profunda del alma. Deja de buscar en pozos rotos.", p: "Dame de esa agua, para que no tenga más sed.", a: "Identifica qué 'pozo' (vicio, relación) estás usando para llenarte y renuncia a él." },
  { t: "Levántate y Anda", s: "Juan 5:8", c: "En Betesda, muchos esperaban el movimiento del agua. Jesús es mejor que el agua. Él te pregunta: '¿Quieres ser sano?'. A veces nos acostumbramos a nuestra enfermedad.", p: "Señor, quiero ser sano. Me levanto en tu nombre.", a: "Da un paso de fe en algo que has pospuesto." },
  { t: "Calma en la Tormenta", s: "Marcos 4:39", c: "A veces Jesús duerme en la barca mientras tú entras en pánico. No es indiferencia, es paz. Él tiene autoridad sobre tu caos. Solo necesita decir una palabra: 'Calla'.", p: "Habla paz a mi tormenta, Jesús.", a: "Escucha una canción de adoración en medio de tu estrés." },
  { t: "La Hija de Jairo", s: "Marcos 5:36", c: "Mientras Jesús iba a sanar, se detuvo. Jairo recibió la peor noticia: 'Tu hija ha muerto'. Pero Jesús dijo: 'No temas, cree solamente'. Para Él, la muerte es solo un sueño.", p: "Aumenta mi fe cuando las circunstancias gritan muerte.", a: "Declara vida sobre una situación muerta." },
  { t: "El Manto de Jesús", s: "Marcos 5:28", c: "Una mujer impura se abrió paso entre la multitud. Solo un toque con fe bastó. Muchos tocan a Jesús por costumbre, pero la fe arranca poder de Él.", p: "Señor, hoy toco tu manto con fe expectante.", a: "Ora con fe específica por un milagro." },
  { t: "Alimentando a los 5000", s: "Juan 6:9", c: "Un niño ofreció su almuerzo. Parecía ridículo para tanta gente. Pero en manos de Jesús, lo poco es mucho. Entrega tus 'cinco panes', Él hará el resto.", p: "Toma lo poco que tengo y multiplícalo para tu gloria.", a: "Da una ofrenda o ayuda a alguien necesitado hoy." },
  { t: "Caminando sobre el Agua", s: "Mateo 14:29", c: "Para caminar sobre el agua, debes salir de la barca. Pedro se hundió cuando miró las olas, pero Jesús estaba allí para levantarlo. Arriésgate.", p: "Sácame de mi comodidad. Quiero caminar contigo en lo sobrenatural.", a: "Haz algo que te de miedo pero sepas que Dios te pide." },

  // SEMANA 4: EL CAMINO A JERUSALÉN
  { t: "La Confesión de Pedro", s: "Mateo 16:16", c: "¿Quién dices que soy yo? Esa es la pregunta más importante. No quién dice el pastor, sino tú. Sobre la revelación de Cristo se edifica la iglesia invencible.", p: "Tú eres el Cristo, el Hijo del Dios viviente.", a: "Escribe tu propia declaración de quién es Jesús para ti." },
  { t: "La Transfiguración", s: "Mateo 17:2", c: "Jesús mostró su gloria real a sus íntimos. A veces necesitamos subir al monte para verle brillar y recordar que Él es mayor que cualquier problema terrenal.", p: "Muéstrame tu gloria, Señor.", a: "Sube a un lugar alto o tranquilo y adora." },
  { t: "El Joven Rico", s: "Marcos 10:21", c: "Jesús le amó, pero le dijo la verdad. Puedes tener todo y no tener nada si Jesús no es el primero. ¿Qué te impide seguirle totalmente?", p: "Señor, que nada sea más valioso que Tú en mi vida.", a: "Identifica un ídolo en tu corazón y derríbalo." },
  { t: "Lázaro, Ven Fuera", s: "Juan 11:43", c: "Jesús lloró. Él siente tu dolor. Pero no se quedó llorando; actuó. Él es la Resurrección y la Vida. Aún si huele mal, Él puede resucitarlo.", p: "Resucita mis sueños muertos, Señor.", a: "Pide a Dios que reviva una promesa olvidada." },
  { t: "Zaqueo", s: "Lucas 19:5", c: "Zaqueo quería ver a Jesús, pero Jesús quería cenar con Zaqueo. El Señor busca entrar en tu intimidad, en tu casa, no solo ser visto de lejos.", p: "Entra en mi casa y cena conmigo hoy.", a: "Invita a cenar a tu familia y habla de Dios." },
  { t: "María unge a Jesús", s: "Juan 12:3", c: "El perfume era costoso, pero para María, Jesús valía más. La adoración extravagante siempre es criticada por los religiosos, pero es amada por Dios.", p: "Te doy mi mejor adoración, no las sobras.", a: "Dedica un tiempo de adoración profunda hoy." },
  { t: "Entrada Triunfal", s: "Lucas 19:38", c: "Le recibieron como Rey, pero en un asno, no en un caballo de guerra. Su reino es de paz y humildad. ¿Le dejas reinar en tu corazón o solo le visitas?", p: "Hosanna. Reina en mi corazón hoy.", a: "Declara el señorío de Cristo sobre tu hogar." },

  // SEMANA 5: LA PASIÓN
  { t: "Lavando los Pies", s: "Juan 13:14", c: "El Rey del universo tomó una toalla. El liderazgo en el Reino es servicio. Si quieres ser grande, aprende a agacharte y servir a los demás.", p: "Quita mi orgullo, enséñame a servir.", a: "Sirve a alguien en tu casa hoy sin que te lo pidan." },
  { t: "La Última Cena", s: "Lucas 22:19", c: "Haced esto en memoria de mí. El pacto fue sellado. No es un ritual, es un recordatorio de que su cuerpo fue partido para que tú fueras sanado.", p: "Gracias por tu cuerpo y tu sangre derramada.", a: "Toma la Santa Cena o medita en su significado." },
  { t: "La Vid Verdadera", s: "Juan 15:5", c: "Separados de Él, nada podemos hacer. No intentes dar fruto por esfuerzo propio; solo permanece conectado a la Vid y el fruto vendrá naturalmente.", p: "Permanezco en ti, Señor. Fluye a través de mí.", a: "Pasa el día 'conectado' en oración constante." },
  { t: "Getsemaní", s: "Lucas 22:42", c: "No se haga mi voluntad, sino la tuya. La batalla más grande se ganó de rodillas en el huerto. La rendición total es el camino a la victoria.", p: "Rindo mi voluntad a la tuya, Padre.", a: "Ora hasta sentir paz sobre una decisión difícil." },
  { t: "La Traición", s: "Lucas 22:48", c: "Judas lo entregó con un beso. Pedro lo negó. Jesús conoce el dolor de la traición y el rechazo. Él puede sanar tu corazón herido por personas.", p: "Sana mis heridas de traición, Señor.", a: "Perdona a alguien que te haya traicionado." },
  { t: "La Cruz", s: "Juan 19:30", c: "Consumado es. La deuda está pagada. No hay nada más que debas hacer para ganar su amor. La obra está completa. La salvación es un regalo.", p: "Gracias por la cruz. Gracias por tu sacrificio.", a: "Dibuja una cruz y escribe 'GRACIAS' en ella." },
  { t: "El Silencio del Sábado", s: "Lucas 23:56", c: "A veces Dios guarda silencio. Entre la muerte y la resurrección hay un tiempo de espera. Confía, aunque no veas nada, Dios está obrando en la oscuridad.", p: "Confío en ti aunque no te oiga ahora.", a: "Descansa y espera en Dios." },

  // SEMANA 6: RESURRECCIÓN Y ENVÍO
  { t: "La Tumba Vacía", s: "Lucas 24:6", c: "No está aquí, ha resucitado. La muerte no pudo retenerlo. Porque Él vive, tú también vivirás. No busques entre los muertos al que vive.", p: "¡Aleluya! Mi Redentor vive.", a: "Celebra con gozo, pon música alegre." },
  { t: "Camino a Emaús", s: "Lucas 24:32", c: "¿No ardía nuestro corazón? Jesús camina contigo aunque no lo reconozcas. Abre la Biblia y deja que Él encienda tu corazón de nuevo.", p: "Haz arder mi corazón por tu Palabra.", a: "Lee la Biblia hasta sentir que Dios te habla." },
  { t: "Restauración de Pedro", s: "Juan 21:17", c: "¿Me amas? Jesús no le reprochó a Pedro su fracaso, le dio una nueva misión. Tus fracasos no te descalifican, son la preparación para tu ministerio.", p: "Tú sabes que te amo, Señor. Úsame de nuevo.", a: "Renueva tu compromiso de servir a Dios." },
  { t: "La Gran Comisión", s: "Mateo 28:19", c: "Toda potestad me es dada. Id y haced discípulos. No es una sugerencia, es un mandato. Tienes la autoridad y el respaldo del Cielo. Ve.", p: "Heme aquí, envíame a mí.", a: "Habla de Jesús a una persona hoy." },
  { t: "La Promesa del Padre", s: "Hechos 1:8", c: "Recibiréis poder. No vayan sin el Espíritu Santo. El avivamiento de Pentecostés es para hoy. La iglesia nació en fuego y debe vivir en fuego.", p: "Bautízame con tu Espíritu Santo y fuego.", a: "Busca la llenura del Espíritu Santo hoy." },
  { t: "Yo Estoy con Vosotros", s: "Mateo 28:20", c: "Día 40. La Ascensión. Él se fue físicamente, pero está con nosotros todos los días. La misión continúa. Tú eres sus manos y pies ahora.", p: "Gracias por estos 40 días. Camino contigo para siempre.", a: "Comparte tu testimonio de estos 40 días." }
];

export const CAMPAIGN_DEVOTIONALS: Devotional[] = CAMPAIGN_DATA.map((d, i) => ({
  day: i + 1,
  title: `Día ${i + 1}: ${d.t}`,
  scripture: d.s,
  content: d.c,
  prayer: d.p,
  application: d.a
}));

// --- GROUPS ---
export const GROUPS: ChurchGroup[] = [
  {
    id: 'juvic',
    name: 'JUVIC',
    description: 'Grupo de Jóvenes. Una generación apasionada por Jesús.',
    imagePlaceholder: 'https://picsum.photos/400/300?random=1',
    color: 'bg-orange-500'
  },
  {
    id: 'icam',
    name: 'ICAM',
    description: 'Grupo de Adolescentes. Creciendo en sabiduría y estatura.',
    imagePlaceholder: 'https://picsum.photos/400/300?random=2',
    color: 'bg-blue-500'
  },
  {
    id: 'evicol',
    name: 'EVICOL',
    description: 'Grupo de Niños. Instruyendo al niño en su camino.',
    imagePlaceholder: 'https://picsum.photos/400/300?random=3',
    color: 'bg-green-500'
  },
  {
    id: 'general',
    name: 'Grupo General',
    description: 'La familia de la fe unida en adoración.',
    imagePlaceholder: 'https://picsum.photos/400/300?random=4',
    color: 'bg-stone-600'
  }
];

export const SOCIAL_LINKS = {
  youtube: "https://youtube.com/@Chipaquetierradecanaan",
  facebook: "https://www.facebook.com/profile.php?id=100093233144947",
  instagram: "https://www.instagram.com/iglesiammmchipaque"
};
