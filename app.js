
const quizData = [
  {
      question: "Limbajul Java este:",
      a: "compilat",
      b: "interpretat",
      c: "compilat si interpretat",
      correct: "c",
  },
  {
      question: " Cum este afirmatia “Java permite mostenirea multipla”:",
      a: "adevarata",
      b: "falsa ",
      c: "",
      correct: "b",
  },
  {
      question: "Cum se realizeaza dezalocarea memoriei nefolosite in Java:9",
      a: "cu ajutorul metodei dispose() pe care toate clasele o mostenesc din clasa Object",
      b: "cu ajutorul metodei destroy() pe care toate clasele o mostenesc din clasa Object",
      c: "cu ajutorul componentei Garbage collector",
      correct: "c",
  },
  {
      question: "Care din urmatoarele variante se poate utiliza pentru declararea unei constante in Java:",
      a: "const int a=3",
      b: "const b=3",
      c: "public static final c=5",
 
      correct: "c",
  },
  {
    question: "Incercuiti clasele infasuratoare:",
    a: "object, string",
    b: "Connection, statement",
    c: "integer, double, character",

    correct: "c",
},
{
    question: "Precizati care din urmatoarele declaratii este corecta:",
    a: "int []v=new int[5]",
    b: "int *s",
    c: "int v[]=new int(5)",

    correct: "a",
},
{
    question: "Mentionati ce va afisa urmatoarea secventa de cod int []v=new int[5] v[0]=1 v[1]=4 v[2]=8 System.out.printn(v.length)"
    ,
    a: "3",
    b: "5",
    c: "2",

    correct: "b",
},
{
    question: "Unde poate fi scris codul unui servlet:",
    a: "in una din metodele doGet() sau doPost() (in functie de tipul cererii HTTP) pentru a raspunde cererii clientului(sau in metodele apelate din aceasta)",
    b: "in main",
    c: "in main si in metode apelate din main",

    correct: "a",
},
{
    question: "Cum pot fi preluati parametrii completati intr-un form ai unui servlet?",
    a: "cu ajutorul unui obiect de tip HtmlForm si a metodei getformParameter()",
    b: "cu ajutorul unui vector de obiecte de tip FormParameter()",
    c: "cu ajutorul unui obiect de tip HttpServletRequest si a metodei getParameter",

    correct: "c",
},
{
    question: "Cum poate raspunde un servlet la cererea unui client?",
    a: "cu ajutorul unui obiect de tip HttpServletResponse si a unui obiect de tip PrintWriter",
    b: "cu ajutorul unui vector de obiecte de tip FormResponse()",
    c: "cu ajutorul unui obiect de tip HtmlForm si a metodei sendFormParameter()",

    correct: "a",
},
{
    question: "Daca metoda service() nu este suprascrisa, atunci implementarea implicita a acesteia este sa:",
    a: "apeleze anumite servicii din Windows",
    b: "apeleze metodele doGet() sau doPost() corespunzatoare",
    c: "apeleze obiecte din datele introduse in form",

    correct: "b",
},
{
    question: " Datele preluate cu tehnologia JDBC dintr-o baza de date se vor regasi intr-un obiect de tip:",
    a: "ResultSet ",
    b: "RecordSet ",
    c: "DataSet ",

    correct: "a",
},
{
    question: "O comanda SQL care sterge un rand dintr-o baza de date se poate executa cu ajutorul metodei: ",
    a: "executeQuery() ",
    b: "executeUpdate() ",
    c: "executeDelete() ",

    correct: "b",
},
{
    question: " Pentru stabilirea unei conexiuni din Jaba catre baza de date se utilizeaza:",
    a: "un obiect de tip DatabaseConnection ",
    b: "un obiect de tip DataSet ",
    c: "metoda statica getConnection() din clasa Drivermanager, careia i se transmi URL-ul catre baza de date, utilizatorul si parola ",

    correct: "c",
},
{
    question: "Tehnologia JDBC utilizeaza un obiect de tip Statement: ",
    a: "pentru transmiterea comenzilor SQL cu parametrii de intrare in interogari ",
    b: "pentru executarea procedurilor stocate pe baza de date ",
    c: " pentru transmiterea comenzilor SQL simple fara parametrii",

    correct: "c",
},
{
    question: " In JDBC obtinerea valorilor campurilor dintr-o baza de date se realizeaza cu ajutorul unor metode precum:",
    a: "getParameter() ",
    b: "getInt(), getString() ",
    c: " getFieldValue()",

    correct: "b",
},
{
    question: "Actualizarile programatice sunt: ",
    a: "actualizari aplicate direct REsultSet-ului care sunt automat efectuate si asupra bazei de date ",
    b: "actualizari ale metodelor vechi din Java la cele noi ",
    c: "actualizari ale pachetelor vechi din Java la cele noi ",

    correct: "a",
},
{
    question: "Care este tipul de date Java care corespunde tipului de date varchar din MySql: ",
    a: " string",
    b: " char",
    c: " int",

    correct: "a",
},
{
    question: "Colectiile de obiecte: ",
    a: " reduc efortul de programare si cresc gradul de reutilizare al codului",
    b: " complica procesul de programare dar cresc gradul de reutilizare al codului",
    c: "complifica procesul de programare dar scad gradul de reutilizare al codului ",

    correct: "a",
},
{
    question: "Un ArrayList este: ",
    a: "o interfata care este implementata prin clasa List ",
    b: "o clasa care implementeaza interfata List printr-un vector care isi ajusteaza dimensiunea ",
    c: "un vector de lungime fixa ",

    correct: "b",
},
{
    question: " . the Collections Framewors contine",
    a: "interfete de colectii, implementari ale acestor interfete si algoritmi pentru a le manipula ",
    b: "doar interfete de colectii ",
    c: "doar implementari ale obiectelor ",

    correct: "a",
},
{
    question: " Un LinkedList este o",
    a: "implementare a interfetei List cu lisa dublu inlantuita ",
    b: "implementare a interfetei List cu ajutorul unui tabel de dispersie ",
    c: "implementarea interfetei list printr-un arbore rosu-negru ",

    correct: "a",
},
{
    question: "Interfata Set care extinde interfata Collection ",
    a: "nu permite elemente duplicat si este ordonata ",
    b: "nu permite elemente duplicat si poate sa fie sau nu ordonata ",
    c: "permite lemente duplicat si nu e ordonata ",

    correct: "b",
},
{
    question: "Intr-un TreeSet: ",
    a: "elementele sunt ordonate pe baza valorii lor ",
    b: " elementele nu sunt ordonate",
    c: " doar o pare din elemente sunt ordonate",

    correct: "a",
},
{
    question: " Ce este XML?",
    a: "un set de reguli pentru structurarea datelor in fisiere binare ",
    b: "un set de reguli pentru structurarea datelor in baze de date ",
    c: "un set  de reguli, specificatii si conventii pentru structurarea datelor in fisiere text ",

    correct: "c",
},
{
    question: " XML este abrevierea de la:",
    a: "extensuble markup language ",
    b: "xanax markup language ",
    c: " xerox markup language",

    correct: "a",
},
{
    question: " Incercuiti afirmatia corecta cu privire la JSP:",
    a: " fisierele cu extensia.jsp nu pot contine decat cod …",
    b: "jsp-urile nu separa continutul static de cel dinamin ",
    c: "extinde limbajul HTML, oferind posibilitatea integrarii de secvente de cod Java prin intermediul unor tag-uri speciale ",

    correct: "c",
},
{
    question: "JSP-urile(Java Server Progress) ",
    a: " arata ca niste fisiere HTML si pot sa genereze doar continut dinamic",
    b: "arata ca niste fisiere HTML si pot sa genereze doar continut static ",
    c: "nu seamana deloc cu fisierele HTML ci mai degraba cu o aplicatie Java obisnuita ",

    correct: "a",
},
{
    question: " XML utlizeaza:",
    a: "taguri, atribute si text ",
    b: " variabile de atribute si text",
    c: "variabile, atribute si text ",

    correct: "a",
},
{
    question: "SAX permite procesarea documentelor XML: ",
    a: "prin intermediul unor evenimente ",
    b: " ",
    c: " ",

    correct: "a",
},
{
    question: " interfata Map:",
    a: "pune in corespondenta cheile catre anumite valori",
    b: "creeaza o harta grafica ",
    c: "creeaza o harta rutiera ",

    correct: "a",
},
{
    question: " Se considera un obiect de tip Vector in care au fost adaugate 4 elemente. Cat este capacitatea vectorului",
    a: "4 ",
    b: "10 ",
    c: " 1",

    correct: "b",
},
{
    question: "Ce este un servlet? ",
    a: "o aplicatie desktop ",
    b: " o aplicatie cu baze de date",
    c: "o componenta software pe parte de server, scrisa in Java si care extinde functionalitatea unui server (de obicei HTTP) ",

    correct: "c",
},
{
    question: " Cand un browser trimite o cerere catre server...",
    a: ". serverul o trimite mai departe unui servlet. Servlet-ul proceseaza cererea si construieste un raspuns (in HTML) care este returnat clientului ",
    b: " servletul o trimite mai departe unui administrator",
    c: " serverul o pune intr-o lista de asteptare pe care administratorul o va solutiona",

    correct: "a",
},
{
    question: "Cum se poate defini un servlet? ",
    a: "prin implementarea interfetei ApacheServlet ",
    b: "se creeaza o metoda de tip Servlet ",
    c: " prin extinderea clasei httpServlet",

    correct: "c",
},
{
    question: "Servleturile utilizeaza metoda service() care: ",
    a: "este apelata automat ca raspuns la cererea fiecarui client ",
    b: "se apeleaza doar cand porneste servletul ",
    c: "se apeleaza doar dupa ce servletul este incarcat ",

    correct: "a",
},
{
    question: "Ce se intelege prin supraincarcare? ",
    a: "mai multe metode pot avea acelasi nume dar o signatura diferita ",
    b: "mai multe metode pot avea acelasi nume si aceeasi signatura ",
    c: " o metoda careia i se transmit la apel mai multi parametrii decat aceasta are",

    correct: "a",
},
{
    question: "Ce face comanda super()? ",
    a: "creeaza un obiect al superclasei ",
    b: " apeleaza  metoda oarecare numita super()",
    c: "apeleaza constructorul fara parametrii a clasei de baza ",

    correct: "c",
},
{
    question: "Cum este afirmatia “La apelul unei functii anumiti parametrii pot fi omisi”: ",
    a: "adevarat ",
    b: "fals ",
    c: " ",

    correct: "b",
},
{
    question: "Se considera o clasa care contine o variabila membru statica. Pentru variabila membru statica: ",
    a: " se aloca memorie o singura data indiferent de numarul de obiecte de acel tip",
    b: "se aloca memorie direct proportional de numarul de obiecte de acel tip ",
    c: "se aloca o zona de memorie de 30 de octeti pentru fiecare variabila statica",

    correct: "a",
},
{
    question: "Cum poate fi convertit un String intr-un intreg:",
    a: " int x= Integer.parseInt(“123”); Integer x2 = Integer.valueOf(“123”);",
    b: " ",
    c: " ",

    correct: "a",
},
{
    question: "Potrivit principiului incapsularii: ",
    a: "accesul la variabilele membre ale unui obiect se poate realiza doar cu ajutorul metodelor obiectului ",
    b: "accesul la metodele obiectului se poate realiza doar cu ajutorul variabileleor membre ",
    c: "accesul la variabilele membre se poate realiza doar din constructor ",

    correct: "a",
},
{
    question: "Care este clasa aflata la radacina ierarhiei de clasa in Java: ",
    a: "Root ",
    b: "Object ",
    c: "Root...",

    correct: "b",
},
{
    question: "Precizati care va fi caracterul afisat ….: String s=”abcd”; system.out.println(s[1]);",
    a: " va afisa litera b",
    b: " va afisa litera a",
    c: "va genera eroare ",

    correct: "c",
},
{
    question: "Ce va afisa urmatoarea secventa:String nr1=”3”; String nr2=”3”;system.out.println(nr1+nr2);",
    a: "7 ",
    b: "34 ",
    c: " expreseia este",

    correct: "b",
},
{
    question: " ce va afisa secventa... int[]{3,2,1}; for(int i:v){ system.out.println(“”+i}",
    a: "0 1 2 ",
    b: "1 2 3 ",
    c: "3 2 1 ",

    correct: "c",
},
{
    question: "In situatia in care dorim sa scriem un program care sa determine cand cursorul mouseului ajunge deasupra unui JPanel, cand paraseste suprafata JPanel-ului si cand se face click pe JPanel trebuie sa: ",
    a: " implementam interfata MouseListener",
    b: " implementam intefetele mouse over, mouseout si mouseclick",
    c: "implementam interfata mousestaff ",

    correct: "a",
},
{
    question: " pentru a crea un eveniment pentru o componenta",
    a: "se selecteaza in Eclipse componenta si se alege din interfata evenimentul dorit pe care il vom edita ",
    b: "se face dublu click in eclipse pe componenta si se deschide rutina de tratare a evenimentului pe care o vom edita ",
    c: "trebuie creata o clasa care implementeaza interfata ce contine metodele de interes si o instanta a clasei respective se transmite ca parametru metodei addXXxListener a componentei ",

    correct: "c",
},
{
    question: "imaginea de mai jos contien o componenta de tip: ",
    a: "JMenu ",
    b: "JTabbedPane ",
    c: " JForm",

    correct: "b",
},
{
    question: "Liniile de cod pentru crearea unui control JList care contine lunile anului: ",
    a: "String[] items = {“jan”,”feb”,”mar….}JList lst = new Jlist(items); getContentPane().add(lst);",
    b: " ",
    c: " ",

    correct: "a",
},
{
    question: "JDBC este o tehnologie care: ",
    a: "permite realizarea de aplicatii Java cu interfata... ",
    b: " Permite conectarea la baza de date si ofera metode pentru interogarea si actualizarea acestora",
    c: " ",

    correct: "b",
},
{
    question: " Care este rolul cuvantului cheie synchronized?",
    a: "cu ajutorul lui se pot declara secvente de cod care se executa in regim de exclucere mutuala ",
    b: " cu ajutorul lui se pot declara fire de executie",
    c: "cu ajutorul lui s epot realiza schimburi de informatii in retea ",

    correct: "a",
},
{
    question: "ce prioritate are un fir de executie? ",
    a: " egala cu cea a firului de executie care l-a creat",
    b: "mai mica decat cea a firului de executie care l-a creat ",
    c: " mai mare decat cea a firului de executie care l-a creat",

    correct: "a",
},
{
    question: " Biblioteca Swing ofera clase pentru:",
    a: " crearea aplicatiilor cu interfata grafica",
    b: "tratarea exceptiilot ",
    c: " . lucru cu baze de date",

    correct: "a",
},
{
    question: " cum se poate crea o fereastra in java?",
    a: "cu ajutorul clasei Form ",
    b: " cu ajutorul clasei JavaWindow",
    c: " cu ajutorul unei clase care extinde JFrame",

    correct: "c",
},
{
    question: "metoda setBounds() permite: ",
    a: "stabilirea stilului, grosimii si formei pentru marginile unei componente ",
    b: "stabilirea doar a dimensiunii unei componentas ",
    c: "amplasarea componentei asupra careia se aplica intr-o anumita pozitie si stabilirea dimensiunii acelei componente ",

    correct: "c",
},
{
    question: "metoda setToolTipText() permite: ",
    a: "setarea continutului unei casete de text ",
    b: "setarea textului unui control JLabel ",
    c: "specificarea unui text care se va ivi atunci cand cursorul mouseului sta deasupra unei componente ",

    correct: "c",
},
{
    question: " afisarea unui mesaj in java se poate face:",
    a: "MessageBox.Show(“Mesaj”) ",
    b: "(“Mesaj”) ",
    c: " JOptionPane.showMessageDialog(null, “Mesaj”)",

    correct: "c",
},
{
    question: "unde trebuie scris codul care vrem sa se execute atunci cand se face click pe un JButton ",
    a: "in evenimentul JButton_CLick ",
    b: "in metoda ActionPerformed a unei clase ce implementeaza interfata ActionListener ",
    c: " in metoda...",

    correct: "b",
},
{
    question: "O clasa care implementeaza o interfata: ",
    a: "trebuie sa specifice codul corespunzator metodelor din interfata dar poate sa declare variabile si metode care nu apar in interfata ",
    b: "trebuie sa specifice codul corespunzator metodelor din interfata dar nu poate sa declare variabile si metode care nu apar in interfata ",
    c: "nu trebuie sa specifice codul corespunzator metodelor din interfata ",

    correct: "a",
},
{
    question: "o clasa poate implementa un numar de interfete egal cu: ",
    a: "1 ",
    b: ">=1 ",
    c: " 0",

    correct: "b",
},
{
    question: "implementarea unei interfete poate fi: ",
    a: " d0ar o clasa",
    b: " o clasa sau o clasa abstracta",
    c: " o alta interfata",

    correct: "b",
},
{
    question: "ce este o exceptie? ",
    a: "o exceptie este un eveniment care nu permiote continuarea normala a executiei propgramului ",
    b: "o variabila care are o valoare exceptional de mare ",
    c: "o functie care returneaza o valoare neobisnuita ",

    correct: "a",
},
{
    question: "care sunt constructiile de baza pentru lucrul cu exceptii? ",
    a: "try, catch, finally, throw, throws ",
    b: "super exception, fatal error ",
    c: " fatal warning, application exit, exceptional value",

    correct: "a",
},
{
    question: "instructiunea throw poate fi plasata: ",
    a: "in interiorul oricarei metode ",
    b: "ion exteriorul oricarei metode ",
    c: "in metode a caror definitie este insotita de o clauza throws in care apare tipul de exceptie respectiv ",

    correct: "c",
},
{
    question: "blocurile try-catch: ",
    a: " Indica seria de instructiuni in care pot sa apara exceptiile, tipul exceptiilor si modul in care se solutioneaza acestea",
    b: "indica bucati de cod care pot contine erori de sintaca ",
    c: " ",

    correct: "a",
},
{
    question: "secventa finally: ",
    a: "reprezinta o zona de cod care se executa inainte de a iesi din program ",
    b: " reprezinta o zona de cod care se executa inainte de a iesi dintr-o metoda",
    c: "reprezinta un mecanism prin care se forteaza executia unei portiuni de cod indiferent daca o exceptie a aparut sau nu ",

    correct: "c",
},
{
    question: "ce se intelege prin fire de executie? ",
    a: ". un fir de executie reprezinta actiunile pe care un utilizator le face asupra programului de la pornirea acestuia pana la inchiderea lui ",
    b: " . un fir de executie reprezinta o inlantuire de instructiuni care se executa una dupa alta",
    c: "firele de executie reprezinta portiuni de cod ale aceluiasi program care se pot executa in paralel una fata de alta ",

    correct: "c",
},
{
    question: "cum se poate crea un fir de executie? ",
    a: " fie se creaza o clasa derivata din clasa Thread si in acea clasa se redefineste metoda run() fie se implementeaza interfata Runnable",
    b: "se creeaza o metoda de tip runnable ",
    c: " se creaza cate o metoda de tip Thread pentru fiecare fir de executie",

    correct: "a",
},
{
    question: " apelul metodei start() aferente unui fir de executie determina:",
    a: "inceperea rularii firului de executie ",
    b: "trecerea firului in starea gata de rulare ",
    c: "trecerea firului de executie in starea creat ",

    correct: "a",
},
{
    question: "ce diferenta este intre blocarea unui fir de executie cu ajutorul metodei sleep(durata) respectiv cu ajutorul metodei wait(durata) ",
    a: "Sleep Pune Threadul curent sa “doarma” pentru o anumita perioada de timp. WaitPune Threadul curent sa astepte pana cand alt thread invoca metoda “ notify() “ sau “notifyAll()” sau trece durata",
    b: " ",
    c: " ",

    correct: "a",
},
{
    question: "Care este rolul unui Layout Manager? ",
    a: "decide modul in care sunt implementate componentele in cadrul unui container ",
    b: "cu ajutorul lui se pot specifica culorile si fontul containerelor? ",
    c: "cu ajutorul lui se pot gestiona servleturile ",

    correct: "a",
},
{
    question: "care este layoutmanagerul implicit al unui container ",
    a: "flowlayout ",
    b: "gridlayout ",
    c: "borderlayout",

    correct: "c",
},
{
    question: "GridLayout ",
    a: "Permite construirea unui tabel cu componente ",
    b: " ",
    c: " ",

    correct: "a",
},
{
    question: "borderlayout: ",
    a: "imparte container-ul in 5 regiuni (sus, jos, stanga, dreapta si centru) ",
    b: "amplaseaza controalele unul langa altul ",
    c: "amplaseaza controalele unul sub altul ",

    correct: "a",
},
{
    question: "Flowlayout ",
    a: "amplaseaza controalele la coordonate specificate de utluzator(x,y) ",
    b: "amplaseaza controalele unul langa altul iar daca nu mai au loc pe orizontala sunt trecute pe urmatorul rand ",
    c: "amplaseaza controalele in celulele unui tabel ",

    correct: "b",
},
{
    question: "myframe este un obiect de tip JFrame. Linia de cod: myframe.getcontentpane().setlayout(null): ",
    a: " dezactiveaza layoutul pentru a putea adauga componente in myframe",
    b: "dezactiveaza orice layoutmanager cu scopul de a putea amplasa controalele din contalinerul lui in pozitii absolute ",
    c: " ",

    correct: "b",
},
{
    question: "incercuiti afirmatia corecta: ",
    a: "metodele statice sunt similare functiilor obisnuite in C ",
    b: " metodele statice nu pot fi apelate decat din lte metode ale clasei care le contine",
    c: "metodele statice nu pot contine declaratii de variabile ",

    correct: "a",
},
{
    question: "incercuiti afirmatia corecta: ",
    a: "o clasa abstracta contine doar signaturi de metode ",
    b: "o clasa abstracta contine campuri si metode normale(pentru care se specifica o implementare dar si modele de metode care urmeaza sa fie implementate in mod obligatoriu de clasele care extind clasa abstracta) ",
    c: "o clasa abstracta nu contine metode ",

    correct: "a",
},
{
    question: "incercuiti afirmatia corecta: ",
    a: "o interfata este formata din constante si signaturi de metode ",
    b: "termenul interface se utilizeaza doar cu privire la aspectul aplicatiei ",
    c: "o interfata contine atat metode neimplementate cat si metode implementate ",

    correct: "a",
},
{
    question: "o clasa abstracta poate fi: ",
    a: "extinsa doar de o alta clasa abstracta ",
    b: "extinsa doar de o interfata ",
    c: "extinsa de o alta clasa abstracta sau de o clasa normala ",

    correct: "c",
},
{
    question: "o metoda abstracta poate fi plasata: ",
    a: "doar intr-o clasa abstracta ",
    b: "in interfete si in orice clasa ",
    c: "in orice ",

    correct: "a",
},
{
    question: "ce cuvinte cheie/modificatori de acces au in mod implicit variabilele membre din interfete: ",
    a: " public",
    b: "private",
    c: "protected ",

    correct: "a",
},
{
    question: "class NumeClasa { public static nr; } class main { public static void main({nume.clasa.nr=5;}",
    a: "Corecta. Variabilele membru statice, apartin clasei nu obiectelor si este recomandata accesarea lor utilizand numele clasei care le contine",
    b: " ",
    c: " ",

    correct: "a",
},
{
    question: ": Se considera ca pers este o colectie de elemente de tip List. Cum poate fi ordonata automat aceasta colectie?  ",
    a: ") Collections.sort(pers, new Compara_nume()); unde Compara_Nume este o clasa ce implementeaza interfata Comparator ",
    b: " ",
    c: " ",

    correct: "a",
},
{
    question: "Metoda doPost() este apelata de fiecare data cand ",
    a: "Apare o cerere HTTP de tip POST primita de servlet ",
    b: " ",
    c: " ",

    correct: "a",
},
{
    question: "Care este rolul unui DTD ( Document Type Definition)?  ",
    a: "De a asigura ca fisierul XML respecta o anumita structura ",
    b: " ",
    c: " ",

    correct: "a",
},
{
    question: " Ce se intelege prin DOM ( Document Object Model) ? ",
    a: "Este un standard stabilit de consortiul WEB si contine interfete pentru manipularea arborelui de obiecte asociat unui document XML ",
    b: " ",
    c: " ",

    correct: "a",
},


];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

var answers=new Array;
var currentQuiz=loadQuiz();
let score = 0;
let contor = 0;
let nrIntrebari=30;

function loadQuiz() {
  deselectAnswers();
  let currentQuiz =generateNumber();
//   console.log("Nr generat: "+currentQuiz);

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
//   d_text.innerText = currentQuizData.d;
  
    return currentQuiz;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
          answer = answerEl.id;
      }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
      answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

//   console.log("Din submit: "+currentQuiz);

  if (answer) {
    //   console.log("Answer: "+answer);
    //   console.log("Answer quizData: "+quizData[currentQuiz].correct);
      if (answer === quizData[currentQuiz].correct) {
          score++;
          show("corect");
          setTimeout(function(){
            hide("corect");
          },1000)
        //   console.log("Scorul: "+score);
      }
      else{
          gresit.innerHTML=`Raspuns corect ${quizData[currentQuiz].correct}`;
          show("gresit");
          setTimeout(function(){
              hide("gresit");
          },2000)
      }
    //   console.log(quizData[currentQuiz].correct);
      contor++;
      if (contor < nrIntrebari){
        //   quizData.length
         
        currentQuiz=loadQuiz();
      } else {
          if(score>0 && score<=10)
          {
          quiz.innerHTML = `
              <h2>Pune-te pe invatat, ai raspuns corect abia la  ${score}/${nrIntrebari} intrebari.</h2>
              
              <button onclick="location.reload()">Incearca din nou</button>
          `;
          }
          if(score>10 && score<=20)
          {
          quiz.innerHTML = `
              <h2>Slabut, ai raspuns corect la  ${score}/${nrIntrebari} intrebari.</h2>  
              <button onclick="location.reload()">Incearca din nou</button>
          `;
          }
          if(score>20 && score<=25)
          {
          quiz.innerHTML = `
              <h2>Bunicel, ai raspuns corect la  ${score}/${nrIntrebari} intrebari.</h2>  
              <button onclick="location.reload()">Incearca din nou</button>
          `;
          }
          if(score>25 && score<=30)
          {
          quiz.innerHTML = `
              <h2>Bravo nu ar mai trebui sa inveti, ai raspuns corect la  ${score}/${nrIntrebari} intrebari.</h2>  
              <button onclick="location.reload()">Incearca din nou</button>
          `;
          }
          
      }
  }
});


function generateNumber(){
do{

    var nr=Math.round((quizData.length-1)*Math.random());
    if(answers.indexOf(nr)==-1){
    answers.push(nr);
    console.log(answers);
    return nr;
    }

}while(answers.indexOf(nr)!=-1)

}

function hide(id){

    document.getElementById(id).style.display="none";
}
function show(id){
    document.getElementById(id).style.display="block";
}




/* 

Generez numar 
Apoi afisez intrebarea de la nr generat
Am nevoie de un contor ca sa tin evidenta si sa nu depasesc nr de intrebari 
Trebuie sa fac un array in care sa bag numerele generate ca sa nu le afisez de doua ori 



*/