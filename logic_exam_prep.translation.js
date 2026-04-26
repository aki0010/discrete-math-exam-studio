window.logicPrepData = window.logicPrepData || {};

window.logicPrepData.translationGroups = [
  {
    title: "Choose the right quantifier first",
    blurb: "Most translation mistakes happen before the formula even starts. First decide whether the English sentence is asking for all objects, at least one object, or an exact count.",
    source: "Exam-oriented guide",
    cards: [
      {
        tag: "Guide",
        accent: "accent-forest",
        title: "All / every / each / whoever",
        formula: "Usually: $\\forall x (A(x) \\to B(x))$",
        note: "Use a universal quantifier and usually a conditional inside. You are saying every A-object must also satisfy B."
      },
      {
        tag: "Guide",
        accent: "accent-copper",
        title: "Some / there exists / at least one",
        formula: "Usually: $\\exists x (A(x) \\land B(x))$",
        note: "Use an existential quantifier and usually a conjunction inside. You are giving one witness that has both properties."
      },
      {
        tag: "Guide",
        accent: "accent-danger",
        title: "No / none / nobody",
        formula: "$\\forall x (A(x) \\to \\neg B(x)) \\equiv \\neg \\exists x (A(x) \\land B(x))$",
        note: "A “no” statement means there is no witness that is both A and B."
      },
      {
        tag: "Guide",
        accent: "accent-navy",
        title: "Not every",
        formula: "$\\neg \\forall x (A(x) \\to B(x)) \\equiv \\exists x (A(x) \\land \\neg B(x))$",
        note: "The exam often hides an existential witness inside the phrase “not every”."
      },
      {
        tag: "Guide",
        accent: "accent-copper",
        title: "At least two",
        formula: "$\\exists x \\exists y (F(x) \\land F(y) \\land x \\neq y)$",
        note: "Two different witnesses must exist."
      },
      {
        tag: "Guide",
        accent: "accent-danger",
        title: "Exactly one",
        formula: "$\\exists x (F(x) \\land \\forall y (F(y) \\to y = x))$",
        note: "Existence plus uniqueness."
      }
    ]
  },
  {
    title: "Nested quantifiers: same words, very different meanings",
    blurb: "This is the section to stare at until the difference between ∀x∃y and ∃y∀x feels obvious. These are not interchangeable.",
    source: "Quantifier meaning guide",
    cards: [
      {
        tag: "Meaning",
        accent: "accent-forest",
        title: "Everyone loves someone",
        formula: "$\\forall x \\exists y Loves(x, y)$",
        note: "For each person x, at least one person y is loved. The loved person may be different for different x."
      },
      {
        tag: "Meaning",
        accent: "accent-danger",
        title: "There is someone everyone loves",
        formula: "$\\exists y \\forall x Loves(x, y)$",
        note: "One fixed y must work for all x. Much stronger than the line above."
      },
      {
        tag: "Meaning",
        accent: "accent-forest",
        title: "Every student solved some problem",
        formula: "$\\forall x (Student(x) \\to \\exists y (Problem(y) \\land Solved(x, y)))$",
        note: "Each student gets at least one witness problem. The problem can vary by student."
      },
      {
        tag: "Meaning",
        accent: "accent-danger",
        title: "Some student solved every problem",
        formula: "$\\exists x (Student(x) \\land \\forall y (Problem(y) \\to Solved(x, y)))$",
        note: "One student must solve the whole set of problems."
      },
      {
        tag: "Meaning",
        accent: "accent-copper",
        title: "Everyone likes someone else",
        formula: "$\\forall x \\exists y (y \\neq x \\land Likes(x, y))$",
        note: "The inequality matters. It forbids choosing the same object."
      },
      {
        tag: "Meaning",
        accent: "accent-navy",
        title: "There is someone who likes everyone else",
        formula: "$\\exists x \\forall y (y \\neq x \\to Likes(x, y))$",
        note: "One person x must handle the whole domain except themself."
      },
      {
        tag: "Meaning",
        accent: "accent-copper",
        title: "Everything is related to itself",
        formula: "$\\forall x R(x, x)$",
        note: "A classic self-reference pattern."
      },
      {
        tag: "Meaning",
        accent: "accent-navy",
        title: "Some pair works",
        formula: "$\\exists x \\exists y P(x, y)$",
        note: "You only need one ordered pair witness."
      }
    ]
  },
  {
    title: "Core sentence patterns",
    blurb: "These are the reusable templates that show up again and again on translations, negations, and quick-definition questions.",
    source: "Harold cheat sheet p.11, corrected where needed",
    cards: [
      {
        tag: "Propositional",
        accent: "accent-copper",
        title: "Only if / sufficient / necessary",
        formula: "$p \\text{ only if } q \\equiv p \\to q$; $q \\text{ is necessary for } p \\equiv p \\to q$; $p \\text{ is sufficient for } q \\equiv p \\to q$",
        note: "The arrow points from the sufficient condition to the necessary condition."
      },
      {
        tag: "Propositional",
        accent: "accent-navy",
        title: "If / iff / unless",
        formula: "$p \\text{ if } q \\equiv q \\to p$; $p \\text{ iff } q \\equiv p \\leftrightarrow q$; $p \\text{ unless } q \\equiv \\neg q \\to p$",
        note: "“If” reverses the surface order; “iff” means two implications."
      },
      {
        tag: "Predicate",
        accent: "accent-forest",
        title: "All A are B",
        formula: "$\\forall x (A(x) \\to B(x))$",
        note: "Universal statements usually take implication inside."
      },
      {
        tag: "Predicate",
        accent: "accent-forest",
        title: "Some A are B",
        formula: "$\\exists x (A(x) \\land B(x))$",
        note: "Existential statements usually take conjunction inside."
      },
      {
        tag: "Predicate",
        accent: "accent-copper",
        title: "Some A are not B",
        formula: "$\\exists x (A(x) \\land \\neg B(x))$",
        note: "This is also the negation of “all A are B”."
      },
      {
        tag: "Predicate",
        accent: "accent-danger",
        title: "No A are B",
        formula: "$\\forall x (A(x) \\to \\neg B(x)) \\equiv \\neg \\exists x (A(x) \\land B(x))$",
        note: "Use this instead of the common wrong translation $\\neg \\forall x (A(x) \\to B(x))$."
      },
      {
        tag: "Predicate",
        accent: "accent-navy",
        title: "Only A are B",
        formula: "$\\forall x (B(x) \\to A(x))$",
        note: "The restriction lands on the B-things. If something is B, then it must be A."
      },
      {
        tag: "Predicate",
        accent: "accent-danger",
        title: "Not every A is B",
        formula: "$\\neg \\forall x (A(x) \\to B(x)) \\equiv \\exists x (A(x) \\land \\neg B(x))$",
        note: "One counterexample witness is enough."
      }
    ]
  },
  {
    title: "Relationship translation templates",
    blurb: "When the sentence has two variables, focus on who depends on whom. That dependence decides quantifier order.",
    source: "Translation guide",
    cards: [
      {
        tag: "Template",
        accent: "accent-forest",
        title: "Every lawyer admires some judge",
        formula: "$\\forall x (Lawyer(x) \\to \\exists y (Judge(y) \\land Admire(x, y)))$",
        note: "Each lawyer gets their own judge witness if needed."
      },
      {
        tag: "Template",
        accent: "accent-danger",
        title: "There is a judge admired by every lawyer",
        formula: "$\\exists y (Judge(y) \\land \\forall x (Lawyer(x) \\to Admire(x, y)))$",
        note: "One fixed judge must work for all lawyers."
      },
      {
        tag: "Template",
        accent: "accent-copper",
        title: "Every course has a student who passed it",
        formula: "$\\forall y (Course(y) \\to \\exists x (Student(x) \\land Passed(x, y)))$",
        note: "Each course gets a student witness."
      },
      {
        tag: "Template",
        accent: "accent-navy",
        title: "Some student passed every course",
        formula: "$\\exists x (Student(x) \\land \\forall y (Course(y) \\to Passed(x, y)))$",
        note: "One student must cover the full set of courses."
      },
      {
        tag: "Template",
        accent: "accent-forest",
        title: "Everyone loves themselves",
        formula: "$\\forall x Loves(x, x)$",
        note: "The same variable fills both slots."
      },
      {
        tag: "Template",
        accent: "accent-copper",
        title: "Everyone owns some animal",
        formula: "$\\forall x (Person(x) \\to \\exists y (Animal(y) \\land Owns(x, y)))$",
        note: "Very standard $\\forall x \\exists y$ pattern."
      },
      {
        tag: "Template",
        accent: "accent-danger",
        title: "Every person who owns a dog loves some animal",
        formula: "$\\forall x ((Person(x) \\land \\exists y (Dog(y) \\land Owns(x, y))) \\to \\exists z (Animal(z) \\land Loves(x, z)))$",
        note: "Do not lose the inner existential when the English has a condition inside the subject."
      },
      {
        tag: "Template",
        accent: "accent-navy",
        title: "There is an animal every child loves",
        formula: "$\\exists y (Animal(y) \\land \\forall x (Child(x) \\to Loves(x, y)))$",
        note: "Again, one fixed y must work for all children."
      }
    ]
  },
  {
    title: "Counting and uniqueness patterns",
    blurb: "These are useful when the English sentence talks about only one, at most one, exactly two, or a named exception.",
    source: "Harold cheat sheet p.8 and p.11",
    cards: [
      {
        tag: "Counting",
        accent: "accent-danger",
        title: "Exactly one F",
        formula: "$\\exists x (F(x) \\land \\forall y (F(y) \\to y = x))$",
        note: "Existence plus uniqueness."
      },
      {
        tag: "Counting",
        accent: "accent-copper",
        title: "At most one F",
        formula: "$\\forall x \\forall y ((F(x) \\land F(y)) \\to x = y)$",
        note: "No two different witnesses can both be F."
      },
      {
        tag: "Counting",
        accent: "accent-forest",
        title: "At least two F’s",
        formula: "$\\exists x \\exists y (F(x) \\land F(y) \\land x \\neq y)$",
        note: "Two different witnesses are enough."
      },
      {
        tag: "Counting",
        accent: "accent-danger",
        title: "Exactly two F’s",
        formula: "$\\exists x \\exists y (F(x) \\land F(y) \\land x \\neq y \\land \\forall z (F(z) \\to (z = x \\lor z = y)))$",
        note: "Two witnesses exist, and no third witness is allowed."
      },
      {
        tag: "Counting",
        accent: "accent-navy",
        title: "Only Sally is running",
        formula: "$Running(Sally) \\land \\forall x (Running(x) \\to x = Sally)$",
        note: "Name the object, then exclude all other running objects."
      },
      {
        tag: "Counting",
        accent: "accent-copper",
        title: "The F is G",
        formula: "$\\exists x (F(x) \\land \\forall y (F(y) \\to y = x) \\land G(x))$",
        note: "Existence, uniqueness, then the extra property G."
      },
      {
        tag: "Counting",
        accent: "accent-forest",
        title: "All students except Billy are on time",
        formula: "$Student(Billy) \\land \\neg OnTime(Billy) \\land \\forall x ((Student(x) \\land x \\neq Billy) \\to OnTime(x))$",
        note: "The exception must be stated separately."
      },
      {
        tag: "Counting",
        accent: "accent-danger",
        title: "No plants except Venus flytraps are carnivorous",
        formula: "$Plant(VenusFlytrap) \\land Carnivorous(VenusFlytrap) \\land \\forall x ((Plant(x) \\land Carnivorous(x)) \\to x = VenusFlytrap)$",
        note: "This is another uniqueness-by-exception pattern."
      }
    ]
  },
  {
    title: "Exam-style predicate translations",
    blurb: "These are taken directly from your old exam prompts and from very close variants of those prompts.",
    source: "Old exams 2023-2025",
    cards: [
      {
        tag: "2023-03-24",
        accent: "accent-navy",
        title: "People eat only food",
        formula: "$\\forall x \\forall y ((Person(x) \\land Eats(x, y)) \\to Food(y))$",
        note: "“Only food” restricts the second variable. If a person eats something, that thing must be food."
      },
      {
        tag: "2023-03-24",
        accent: "accent-copper",
        title: "Something is cheap but not valuable",
        formula: "$\\exists x (Cheap(x) \\land \\neg Valuable(x))$",
        note: "Existence plus conjunction."
      },
      {
        tag: "2024-09-13",
        accent: "accent-forest",
        title: "You can fool some of the people all of the time",
        formula: "$\\exists x (Person(x) \\land \\forall y (Time(y) \\to Fooled(x, y)))$",
        note: "One person works for every time. This is a standard $\\exists x \\forall y$ pattern."
      },
      {
        tag: "2025-05-19",
        accent: "accent-danger",
        title: "Some lawyers admire only judges",
        formula: "$\\exists x (Lawyer(x) \\land \\exists y Admire(x, y) \\land \\forall z (Admire(x, z) \\to Judge(z)))$",
        note: "Exam-safe version: there is a lawyer who admires at least one person, and every person they admire is a judge."
      },
      {
        tag: "Variant",
        accent: "accent-navy",
        title: "Every teacher teaches some student",
        formula: "$\\forall x (Teacher(x) \\to \\exists y (Student(y) \\land Teaches(x, y)))$",
        note: "Good practice for the same exam pattern with two variables."
      },
      {
        tag: "Variant",
        accent: "accent-copper",
        title: "There is a student every teacher likes",
        formula: "$\\exists y (Student(y) \\land \\forall x (Teacher(x) \\to Likes(x, y)))$",
        note: "One student must satisfy all teachers."
      },
      {
        tag: "Variant",
        accent: "accent-forest",
        title: "No student solved every problem",
        formula: "$\\forall x (Student(x) \\to \\exists y (Problem(y) \\land \\neg Solved(x, y)))$",
        note: "For each student, there is at least one missed problem."
      },
      {
        tag: "Variant",
        accent: "accent-danger",
        title: "There is exactly one student who solved the puzzle",
        formula: "$\\exists x (Student(x) \\land Solved(x, Puzzle) \\land \\forall y ((Student(y) \\land Solved(y, Puzzle)) \\to y = x))$",
        note: "This merges uniqueness with a normal predicate condition."
      }
    ]
  },
  {
    title: "Negation recipes",
    blurb: "If the exam says “write the negation”, start with these patterns before you simplify anything else.",
    source: "Old exams + Harold cheat sheet p.12-13",
    cards: [
      {
        tag: "Negation",
        accent: "accent-danger",
        title: "Negate an implication",
        formula: "$\\neg(P \\to Q) \\equiv P \\land \\neg Q$",
        note: "Do not flip the arrow. Break it into the exact counterexample case."
      },
      {
        tag: "Negation",
        accent: "accent-danger",
        title: "Negate a biconditional",
        formula: "$\\neg(P \\leftrightarrow Q) \\equiv (P \\land \\neg Q) \\lor (\\neg P \\land Q)$",
        note: "A biconditional fails exactly when the two sides disagree."
      },
      {
        tag: "Negation",
        accent: "accent-danger",
        title: "Negate “all A are B”",
        formula: "$\\neg \\forall x (A(x) \\to B(x)) \\equiv \\exists x (A(x) \\land \\neg B(x))$",
        note: "Find one A-object that fails B."
      },
      {
        tag: "Negation",
        accent: "accent-danger",
        title: "Negate “some A are B”",
        formula: "$\\neg \\exists x (A(x) \\land B(x)) \\equiv \\forall x (A(x) \\to \\neg B(x))$",
        note: "If there is no witness, then every A-object must fail B."
      },
      {
        tag: "Negation",
        accent: "accent-copper",
        title: "Negate ∀x ∃y P(x, y)",
        formula: "$\\neg \\forall x \\exists y P(x, y) \\equiv \\exists x \\forall y \\neg P(x, y)$",
        note: "There is some x for which no y works."
      },
      {
        tag: "Negation",
        accent: "accent-copper",
        title: "Negate ∃x ∀y P(x, y)",
        formula: "$\\neg \\exists x \\forall y P(x, y) \\equiv \\forall x \\exists y \\neg P(x, y)$",
        note: "Every x has some counterexample y."
      },
      {
        tag: "Negation",
        accent: "accent-navy",
        title: "Negate “everyone loves someone”",
        formula: "$\\neg \\forall x \\exists y Loves(x, y) \\equiv \\exists x \\forall y \\neg Loves(x, y)$",
        note: "There is at least one person who loves no one."
      },
      {
        tag: "Negation",
        accent: "accent-forest",
        title: "Negate “there is a course every student passed”",
        formula: "$\\neg \\exists y (Course(y) \\land \\forall x (Student(x) \\to Passed(x, y)))$",
        note: "Equivalent meaning: for every course, some student failed it or is not in the domain restriction."
      },
      {
        tag: "2025-03-28",
        accent: "accent-navy",
        title: "Negate (C → D) → (¬B → A)",
        formula: "$\\neg[(C \\to D) \\to (\\neg B \\to A)] \\equiv (C \\to D) \\land \\neg(\\neg B \\to A) \\equiv (\\neg C \\lor D) \\land (\\neg B \\land \\neg A)$",
        note: "Outer implication first, inner implication second."
      },
      {
        tag: "2024-09-13",
        accent: "accent-forest",
        title: "Negate “You can fool some of the people all of the time”",
        formula: "$\\forall x (Person(x) \\to \\exists y (Time(y) \\land \\neg Fooled(x, y)))$",
        note: "Every person has at least one time when they are not fooled."
      }
    ]
  },

  {
    title: "Common mistakes and how to avoid them",
    blurb: "These are the errors that appear most often in student work. Read each one carefully before your exam.",
    source: "Exam analysis 2023-2026",
    cards: [
      {
        tag: "Mistake",
        accent: "accent-danger",
        title: "Using AND inside a universal",
        formula: "Wrong: $\\forall x (Cat(x) \\land Mammal(x))$",
        note: "This says 'everything in the universe is both a cat and a mammal'. Use implication instead: $\\forall x (Cat(x) \\to Mammal(x))$."
      },
      {
        tag: "Mistake",
        accent: "accent-danger",
        title: "Using implication inside an existential",
        formula: "Wrong: $\\exists x (Cat(x) \\to Black(x))$",
        note: "This is trivially true if there is any non-cat in the domain, because $F \\to anything$ is true. Use conjunction: $\\exists x (Cat(x) \\land Black(x))$."
      },
      {
        tag: "Mistake",
        accent: "accent-danger",
        title: "Swapping mixed quantifiers",
        formula: "$\\forall x \\exists y P(x,y) \\not\\equiv \\exists y \\forall x P(x,y)$",
        note: "These are NOT equivalent. The first allows a different y for each x. The second requires one fixed y for all x. Never swap mixed quantifiers."
      },
      {
        tag: "Mistake",
        accent: "accent-danger",
        title: "Denying the antecedent",
        formula: "Wrong: from $p \\to q$ and $\\neg p$, conclude $\\neg q$",
        note: "This is a logical fallacy. The grass can be wet even if it is not raining. You can only use Modus Tollens (from $\\neg q$, conclude $\\neg p$)."
      },
      {
        tag: "Mistake",
        accent: "accent-danger",
        title: "Affirming the consequent",
        formula: "Wrong: from $p \\to q$ and $q$, conclude $p$",
        note: "Another fallacy. Just because the grass is wet does not mean it rained. Only Modus Ponens (from $p$, conclude $q$) is valid."
      },
      {
        tag: "Mistake",
        accent: "accent-danger",
        title: "Forgetting the double negation after De Morgan",
        formula: "$\\neg(A \\lor \\neg B) \\to \\neg A \\land \\neg\\neg B = \\neg A \\land B$",
        note: "After applying De Morgan, always cancel double negations immediately. Students often leave $\\neg\\neg B$ and then get confused in the next step."
      },
      {
        tag: "Mistake",
        accent: "accent-danger",
        title: "Merging two existential witnesses",
        formula: "Wrong: $\\exists x P(x) \\land \\exists x Q(x) \\implies \\exists x (P(x) \\land Q(x))$",
        note: "The two witnesses might be different objects. You cannot merge them unless you know they are the same."
      },
      {
        tag: "Mistake",
        accent: "accent-danger",
        title: "Confusing subset and element",
        formula: "$\\emptyset \\subseteq A$ is always true. $\\emptyset \\in A$ is NOT always true.",
        note: "The empty set is a subset of every set. But it is only an element of A if A explicitly contains the empty set as a member."
      }
    ]
  },
];
