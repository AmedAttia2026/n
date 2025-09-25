const quizData = {
    courseTitle: "SW ENG",
    'tutorial-1': {
        title: "tutorial-1",
        data: [
            { type: 'mcq', q: "The types of software maintenance are:", options: ["a) Corrective, Adaptive, Perfective, and Predictive", "b) Corrective, Adaptive, Perfective, and Preventative", "c) Corrective, Proactive, Reactive, and Adaptive", "d) Corrective, Preventive, Corrective, and Perfective"], correct: 1 },
            { type: 'mcq', q: "The main objective of Adaptive Maintenance is:", options: ["a) Fixing bugs", "b) Meeting new requirements", "c) Altering software to fit changing software.", "d) Reducing further maintenance needs"], correct: 2 },
            { type: 'mcq', q: "The primary goal of perfective maintenance is:", options: ["a) Fixing bugs", "b) Meeting new requirements", "c) Reducing further maintenance", "d) Adapting to changing environments"], correct: 1 },
            { type: 'mcq', q: "Preventative is a type of maintenance that involves:", options: ["a) Fixing bugs", "b) Altering software to fit changing software", "c) Meeting new requirements", "d) Reducing further maintenance needs"], correct: 3 },
            { type: 'mcq', q: "The primary purpose of the Software Development Life Cycle (SDLC) is to:", options: ["a) Design software only", "b) Provide a structured process for developing high-quality software", "c) Focus only on testing", "d) Reduce costs in the development phase"], correct: 1 },
            { type: 'mcq', q: "SDLC specifies the tasks performed at various stages by a:", options: ["a) Project manager", "b) Software engineer or developer", "c) Quality assurance tester", "d) Business analyst"], correct: 1 },
            { type: 'mcq', q: "The SDLC ensures that the product meets:", options: ["a) Developer's preferences", "b) Budget constraints only", "c) Customer expectations", "d) Industry standards only"], correct: 2 },
            { type: 'mcq', q: "Planning and Requirement Analysis stage involves gathering information to:", options: ["a) Design the software architecture", "b) Create the basic plan for the project", "c) Deploy the software", "d) Test the software"], correct: 1 },
            { type: 'mcq', q: "The purpose of the Planning and Requirement Analysis stage is to:", options: ["a) Design the software", "b) Understand what is needed for the project.", "c) Test the software", "d) Deploy the software"], correct: 1 },
            { type: 'mcq', q: "Stage-3: Designing Architecture involves:", options: ["a) Creating test cases", "b) Selecting the best design idea from the DDS", "c) Deploying the product", "d) Gathering initial requirements"], correct: 1 },
            { type: 'mcq', q: "The DDS document is used to:", options: ["a) List down software requirements", "b) Design the software architecture", "c) Test the software", "d) Deploy the software"], correct: 1 },
            { type: 'mcq', q: "DDS (Design Document Specification) document contains:", options: ["a) Final code", "b) User manuals", "c) Different ideas for building the software.", "d) Test results"], correct: 2 },
            { type: 'mcq', q: "Product Testing and Integration stage of SDLC involves:", options: ["a) Gathering client feedback", "b) Creating test cases and executing them.", "c) Defining requirements", "d) Designing architecture"], correct: 1 },
            { type: 'mcq', q: "The purpose of testing in the SDLC is to:", options: ["a) Design the software", "b) Ensure the software works as expected", "c) Gather client requirements", "d) Deploy the software"], correct: 1 },
            { type: 'mcq', q: "The Product Testing and Integration stage is used to:", options: ["a) Deploy the software", "b) Find and fix mistakes in the software", "c) Design the software", "d) Gather client feedback"], correct: 1 },
            { type: 'mcq', q: "Product testing is compared to testing a car before selling it to ensure the software meets:", options: ["a) Performance benchmarks", "b) Market demand", "c) Quality standards", "d) User interface guidelines"], correct: 2 },
            { type: 'mcq', q: "Which of the following is NOT a stage in the SDLC?", options: ["a) Planning and Requirement Analysis", "b) Client Feedback Collection", "c) Designing Architecture", "d) Developing Product"], correct: 1 },
            { type: 'mcq', q: "The relation between testing and maintenance is that Maintenance begins after:", options: ["a) Deployment", "b) Testing identifies issues", "c) Design is complete", "d) Requirements are gathered"], correct: 1 },
            { type: 'mcq', q: "In agile processes, planning is incremental, and it is easier to change the process to reflect:", options: ["a) Fixed deadlines", "b) Stable requirements", "c) Changing customer requirements.", "d) Internal team preferences"], correct: 2 },
            { type: 'mcq', q: "The main goal of software maintenance is to:", options: ["a) Design the software", "b) Ensure the software continues to work well after release", "c) Gather client requirements", "d) Deploy the software"], correct: 1 },
            { type: 'mcq', q: "Waterfall Model does not adapt well to uncertain projects because:", options: ["a) It is too simple", "b) It requires stable requirements.", "c) It focuses on documentation", "d) It emphasizes testing"], correct: 1 },
            { type: 'mcq', q: "Waterfall model is known as a:", options: ["a) Agile life cycle model", "b) Linear-sequential life cycle model", "c) Iterative life cycle model", "d) Spiral life cycle model"], correct: 1 },
            { type: 'mcq', q: "Which of the following is a disadvantage of the Waterfall Model?", options: ["a) Clear Milestones", "b) Flexibility to Changes", "c) Stable Requirements", "d) Inflexibility to Changes"], correct: 3 },
            { type: 'mcq', q: "The system of Incremental development is a series of:", options: ["a) Single, large releases", "b) Versions (increments), with each version adding functionality to the previous version.", "c) Unrelated modules", "d) Prototypes that are discarded"], correct: 1 }
        ]
    },
    'tutorial-2': {
        title: "tutorial-2",
        data: [
            { type: 'mcq', q: "A requirement may range from a high-level abstract statement of a service to a detailed __________ functional specification.", options: ["a) conceptual", "b) mathematical", "c) graphical", "d) textual"], correct: 1 },
            { type: 'mcq', q: "Software engineering is an engineering discipline that is concerned with all aspects of __________.", options: ["a) hardware production", "b) software production", "c) network infrastructure", "d) database management"], correct: 1 },
            { type: 'mcq', q: "Requirements engineering is a subset of systems engineering concerned with defining the system at __________ levels of abstraction.", options: ["a) initial", "b) final", "c) successive", "d) single"], correct: 2 },
            { type: 'mcq', q: "__________ are the essential activities for developing the software.", options: ["a) User Requirements", "b) Business Requirements", "c) Functional Requirements", "d) Non-Functional Requirements"], correct: 1 },
            { type: 'mcq', q: "__________ describes for the customers/users the services the system provides and its operational constraints.", options: ["a) Business Requirements", "b) Functional Requirements", "c) User Requirements", "d) Domain Requirements"], correct: 2 },
            { type: 'mcq', q: "Functional Requirements describes __________ the software should do.", options: ["a) how", "b) why", "c) what", "d) when"], correct: 2 },
            { type: 'mcq', q: "Non-Functional Requirements describes software __________.", options: ["a) functions", "b) features", "c) properties", "d) algorithms"], correct: 2 },
            { type: 'mcq', q: "Domain requirements describes constraints on the system from __________ of operation.", options: ["a) user interface", "b) performance", "c) security", "d) domain"], correct: 3 },
            { type: 'mcq', q: "Stated requirements are provided by a user/customer at the beginning of a __________ development.", options: ["a) hardware", "b) software", "c) network", "d) business process"], correct: 1 }
        ]
    },
    'tutorial-3': {
        title: "tutorial-3",
        data: [
            { type: 'mcq', q: "Validation (Testing) is important for checking that it does __________.", options: ["a) what the developer wants", "b) what the customer wants", "c) what the system can do", "d) what the budget allows"], correct: 1 },
            { type: 'mcq', q: "Maintenance & Evolution is used for __________ the system in response to changing customer needs.", options: ["a) designing", "b) deploying", "c) changing", "d) testing"], correct: 2 },
            { type: 'mcq', q: "Reuse in Software Engineering is used to avoid duplication of effort for problems already have existing solutions, which saves __________.", options: ["a) time only", "b) money only", "c) resources", "d) effort only"], correct: 2 },
            { type: 'mcq', q: "A pattern is the outline of a reusable solution to a __________ problem encountered in a particular context.", options: ["a) unique", "b) recurring", "c) complex", "d) simple"], correct: 1 },
            { type: 'mcq', q: "Patterns provide common language between developers to improve software quality and reduce __________.", options: ["a) testing time", "b) deployment time", "c) development time", "d) maintenance costs"], correct: 2 },
            { type: 'mcq', q: "It is important to ensure that the architecture satisfies the software requirements, both functional (What the software should do) and nonfunctional (__________ ).", options: ["a) When the software should do it", "b) Who uses the software", "c) How the software should perform", "d) The software's brand name"], correct: 2 },
            { type: 'mcq', q: "Architectural patterns are similar to software __________.", options: ["a) algorithms", "b) methods", "c) design patterns", "d) methodologies"], correct: 2 },
            { type: 'mcq', q: "What is an architectural pattern?", options: ["a) A single piece of code", "b) A reusable solution to a recurring problem", "c) A user interface layout", "d) A programming language"], correct: 1 },
            { type: 'mcq', q: "Which of the following is an example of an architectural pattern?", options: ["a) The Singleton pattern", "b) The Adapter pattern", "c) The Model-View-Controller (MVC) pattern", "d) The Observer pattern"], correct: 2 },
            { type: 'mcq', q: "What is the primary role of the Model in the MVC pattern?", options: ["a) To display data to the user", "b) To manage the application's data and business logic", "c) To handle user input", "d) To define the architectural structure"], correct: 1 },
            { type: 'mcq', q: "In the MVC pattern, the Controller acts as the __________ between the Model and the View.", options: ["a) data storage", "b) user interface", "c) intermediary", "d) presentation layer"], correct: 2 },
            { type: 'mcq', q: "The View in the MVC pattern is responsible for __________.", options: ["a) handling user input", "b) managing the application's data", "c) displaying the data from the Model", "d) communicating with the database"], correct: 2 },
            { type: 'mcq', q: "What is a major benefit of using the MVC pattern?", options: ["a) It tightly couples the Model, View, and Controller", "b) It makes the code difficult to maintain", "c) It allows for a clear separation of concerns", "d) It is only suitable for small projects"], correct: 2 }
        ]
    },
    'tutorial-4': {
        title: "tutorial-4",
        data: [
            { type: 'mcq', q: "Activity Diagrams are used in UML to describe a system's __________.", options: ["a) static structure", "b) behavioral aspects", "c) deployment environment", "d) data flow"], correct: 1 },
            { type: 'mcq', q: "The main purpose of an Activity Diagram is to model the __________ of activities.", options: ["a) sequence", "b) data", "c) components", "d) classes"], correct: 1 },
            { type: 'mcq', q: "What shape represents a start point in an Activity Diagram?", options: ["a) A square", "b) A solid circle", "c) A diamond", "d) A cylinder"], correct: 1 },
            { type: 'mcq', q: "What shape represents a final point in an Activity Diagram?", options: ["a) A solid circle inside a hollow circle", "b) A hollow circle", "c) A diamond", "d) An oval"], correct: 0 },
            { type: 'mcq', q: "An Activity is represented by a __________ with rounded corners.", options: ["a) circle", "b) rectangle", "c) square", "d) diamond"], correct: 1 },
            { type: 'mcq', q: "A Swimlane is used to group activities performed by a specific __________.", options: ["a) time", "b) location", "c) actor", "d) process"], correct: 2 },
            { type: 'mcq', q: "A Fork node is used to represent a point where a single flow of control splits into __________ flows.", options: ["a) single", "b) sequential", "c) concurrent", "d) alternating"], correct: 2 },
            { type: 'mcq', q: "A Join node is used to represent a point where __________ flows of control merge.", options: ["a) single", "b) concurrent", "c) alternating", "d) sequential"], correct: 1 },
            { type: 'mcq', q: "A Decision node is represented by a __________.", options: ["a) square", "b) circle", "c) diamond", "d) rectangle"], correct: 2 },
            { type: 'mcq', q: "An arrow from an activity to a Decision node represents a __________.", options: ["a) flow", "b) choice", "c) condition", "d) split"], correct: 0 },
            { type: 'mcq', q: "The two types of arrows in an Activity Diagram are __________ and __________.", options: ["a) solid, dashed", "b) straight, curved", "c) control flow, object flow", "d) start, end"], correct: 2 },
            { type: 'mcq', q: "What is the primary purpose of a Swimlane?", options: ["a) To show the sequence of events", "b) To represent decisions", "c) To partition activities by actor or responsibility", "d) To show concurrent activities"], correct: 2 }
        ]
    },
    'tutorial-6': {
        title: "tutorial-6",
        data: [
            { type: 'mcq', q: "A Use-Case Model describes the functions of a system as perceived by an __________.", options: ["a) developer", "b) actor", "c) administrator", "d) end user"], correct: 1 },
            { type: 'mcq', q: "In a Use-Case Model, an Actor is a role played by a user or an external __________ that interacts with the system.", options: ["a) process", "b) component", "c) system", "d) database"], correct: 2 },
            { type: 'mcq', q: "A Use-Case represents a sequence of actions that a system performs to yield a valuable result to a specific __________.", options: ["a) designer", "b) developer", "c) actor", "d) manager"], correct: 2 },
            { type: 'mcq', q: "A Use-Case Diagram is a graphical representation of the interactions between __________ and __________.", options: ["a) classes, objects", "b) actors, use-cases", "c) components, interfaces", "d) data, processes"], correct: 1 },
            { type: 'mcq', q: "What is the symbol for an Actor in a Use-Case Diagram?", options: ["a) A stick figure", "b) A circle", "c) A rectangle", "d) A diamond"], correct: 0 },
            { type: 'mcq', q: "What is the symbol for a Use-Case in a Use-Case Diagram?", options: ["a) A square", "b) An oval", "c) A stick figure", "d) A line"], correct: 1 },
            { type: 'mcq', q: "An association between an Actor and a Use-Case is represented by a __________ line.", options: ["a) dashed", "b) dotted", "c) solid", "d) zigzag"], correct: 2 },
            { type: 'mcq', q: "The 'include' relationship is used when a use-case includes the functionality of another use-case as a mandatory part of its __________.", options: ["a) pre-condition", "b) post-condition", "c) behavior", "d) extension"], correct: 2 },
            { type: 'mcq', q: "The 'extend' relationship is used when a use-case extends the functionality of another use-case under a specific __________.", options: ["a) condition", "b) scenario", "c) time", "d) requirement"], correct: 0 },
            { type: 'mcq', q: "In a Use-Case Diagram, the system boundary is represented by a __________.", options: ["a) circle", "b) dashed line", "c) rectangle", "d) triangle"], correct: 2 }
        ]
    },
    'tutorial-7': {
        title: "tutorial-7",
        data: [
            { type: 'mcq', q: "Software testing is a process of evaluating a software product to check if it matches the actual __________.", options: ["a) design", "b) code", "c) requirements", "d) performance"], correct: 2 },
            { type: 'mcq', q: "The main goal of testing is to identify __________ in the software.", options: ["a) features", "b) requirements", "c) defects", "d) algorithms"], correct: 2 },
            { type: 'mcq', q: "What is a software defect?", options: ["a) An intentional bug", "b) A flaw or error that causes the software to fail", "c) A feature request", "d) An aesthetic issue"], correct: 1 },
            { type: 'mcq', q: "The two main types of testing are Functional Testing and __________ Testing.", options: ["a) System", "b) Unit", "c) Regression", "d) Non-Functional"], correct: 3 },
            { type: 'mcq', q: "Functional Testing is concerned with the system's __________.", options: ["a) performance", "b) security", "c) features and functions", "d) usability"], correct: 2 },
            { type: 'mcq', q: "Non-Functional Testing is concerned with the system's __________.", options: ["a) what it does", "b) how it performs", "c) what it looks like", "d) its business value"], correct: 1 },
            { type: 'mcq', q: "The two main approaches to testing are Black-Box Testing and __________ Testing.", options: ["a) White-Box", "b) Grey-Box", "c) Green-Box", "d) Red-Box"], correct: 0 },
            { type: 'mcq', q: "Black-Box Testing is also known as __________-based testing.", options: ["a) code", "b) structure", "c) functionality", "d) requirement"], correct: 2 },
            { type: "mcq", "q": "In Black-Box Testing, the tester has no knowledge of the internal __________ or structure of the software.", "options": ["a) code", "b) design", "c) functionality", "d) requirements"], "correct": 0 },
            { "type": "mcq", "q": "White-Box Testing is also known as __________-based testing.", "options": ["a) functionality", "b) external", "c) internal", "d) code"], "correct": 3 },
            { "type": "mcq", "q": "In White-Box Testing, the tester has knowledge of the internal __________ and structure of the software.", "options": ["a) design", "b) user interface", "c) business logic", "d) code"], "correct": 0 },
            { "type": "mcq", "q": "What is Unit Testing?", "options": ["a) Testing the entire system", "b) Testing individual components or units of a software", "c) Testing the integration between components", "d) Testing the user interface"], "correct": 1 },
            { "type": "mcq", "q": "Integration Testing is the process of testing the __________ between different modules or components.", "options": ["a) code", "b) interfaces", "c) design", "d) functionality"], "correct": 1 },
            { "type": "mcq", "q": "System Testing involves testing the entire and fully __________ system.", "options": ["a) designed", "b) integrated", "c) deployed", "d) coded"], "correct": 1 },
            { "type": "mcq", "q": "Acceptance Testing is done to check if the system meets the __________'s requirements.", "options": ["a) developer", "b) manager", "c) client", "d) tester"], "correct": 2 },
            { "type": "mcq", "q": "Regression Testing is done to ensure that new changes or additions to the software have not introduced any new __________.", "options": ["a) features", "b) defects", "c) requirements", "d) bugs"], "correct": 1 },
            { "type": "mcq", "q": "Smoke Testing is a preliminary test to ensure that the most important __________ of the software are working.", "options": ["a) features", "b) bugs", "c) defects", "d) requirements"], "correct": 0 },
            { "type": "mcq", "q": "What is the primary goal of Smoke Testing?", "options": ["a) To find all possible bugs", "b) To ensure the software is stable enough for further testing", "c) To test all features in detail", "d) To test the user interface"], "correct": 1 },
            { "type": "mcq", "q": "Static Testing is a type of testing where the software is not __________.", "options": ["a) deployed", "b) run", "c) designed", "d) coded"], "correct": 1 },
            { "type": "mcq", "q": "What is an example of Static Testing?", "options": ["a) Running the software with test cases", "b) Reviewing the code and documents", "c) Testing the user interface", "d) Deploying the software"], "correct": 1 },
            { "type": "mcq", "q": "What is Dynamic Testing?", "options": ["a) Testing the software's documentation", "b) Testing the software by running it", "c) Testing the software's design", "d) Testing the software's requirements"], "correct": 1 },
            { "type": "mcq", "q": "What is an example of Dynamic Testing?", "options": ["a) Code review", "b) Requirements analysis", "c) Running a test script on the software", "d) Documenting the system architecture"], "correct": 2 }
        ]
    }
};