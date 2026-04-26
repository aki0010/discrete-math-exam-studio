window.logicPrepData = window.logicPrepData || {};

window.logicPrepData.proofWalkthroughs = [
      {
        tag: "March 20 2024",
        title: "From $A \\to (B \\lor C), \\neg B, \\neg C$ conclude $\\neg A$",
        steps: [
          "1. $A \\to (B \\lor C)$        Premise",
          "2. $\\neg B$                 Premise",
          "3. $\\neg C$                 Premise",
          "4. $\\neg B \\land \\neg C$            2,3 Conj",
          "5. $\\neg(B \\lor C)$           4 De Morgan",
          "6. $\\neg A$                 1,5 MT"
        ],
        note: "The key move is to build $\\neg(B \\lor C)$ so that Modus Tollens becomes available."
      },
      {
        tag: "May 14 2024",
        title: "From $\\neg A \\to \\neg B, B, A \\to C$ conclude $C$",
        steps: [
          "1. $\\neg A \\to \\neg B$            Premise",
          "2. $B$                  Premise",
          "3. $A \\to C$              Premise",
          "4. $B \\to A$              1 Contrapositive",
          "5. $A$                  2,4 MP",
          "6. $C$                  3,5 MP"
        ],
        note: "The first premise looks awkward until you take the contrapositive."
      },
      {
        tag: "March 28 2025",
        title: "From $\\neg(A \\lor \\neg B), B \\to C$ conclude $\\neg A \\land C$",
        steps: [
          "1. $\\neg(A \\lor \\neg B)$          Premise",
          "2. $B \\to C$              Premise",
          "3. $\\neg A \\land B$             1 De Morgan",
          "4. $\\neg A$                 3 Simp",
          "5. $B$                  3 Simp",
          "6. $C$                  2,5 MP",
          "7. $\\neg A \\land C$             4,6 Conj"
        ],
        note: "If the goal is a conjunction, prove each half separately and combine them at the end."
      },
      {
        tag: "Pattern extension",
        title: "From $\\neg(A \\lor \\neg B), B \\to C, C \\to D$ conclude $\\neg A \\land D$",
        steps: [
          "1. $\\neg(A \\lor \\neg B)$          Premise",
          "2. $B \\to C$              Premise",
          "3. $C \\to D$              Premise",
          "4. $\\neg A \\land B$             1 De Morgan",
          "5. $\\neg A$                 4 Simp",
          "6. $B$                  4 Simp",
          "7. $C$                  2,6 MP",
          "8. $D$                  3,7 MP",
          "9. $\\neg A \\land D$             5,8 Conj"
        ],
        note: "This is the same ladder as the old exam question, just with one more implication chained on at the end."
      },
      {
        tag: "Pattern extension",
        title: "From $\\neg(P \\lor \\neg Q), Q \\to R, R \\to S$ conclude $\\neg P \\land S$",
        steps: [
          "1. $\\neg(P \\lor \\neg Q)$          Premise",
          "2. $Q \\to R$              Premise",
          "3. $R \\to S$              Premise",
          "4. $\\neg P \\land Q$             1 De Morgan",
          "5. $\\neg P$                 4 Simp",
          "6. $Q$                  4 Simp",
          "7. $R$                  2,6 MP",
          "8. $S$                  3,7 MP",
          "9. $\\neg P \\land S$             5,8 Conj"
        ],
        note: "Use this as a pattern-recognition drill. The letters change, but the proof skeleton does not."
      }
    ];

window.logicPrepData.proofSimplifyGuides = [
      {
        tag: "Core pattern",
        title: "Simplify $\\neg(A \\lor \\neg B)$",
        steps: [
          "Main connective inside the negation: $\\lor$",
          "Apply De Morgan to the outside: $\\neg A \\land \\neg \\neg B$",
          "Cancel the double negation: $\\neg A \\land B$",
          "Now split it with Simplification if a proof needs the parts separately."
        ],
        note: "This is exactly the shape from the March 28 2025 exam."
      },
      {
        tag: "Longer bracket",
        title: "Simplify $\\neg((A \\land B) \\lor \\neg C)$",
        steps: [
          "Main connective inside the outer negation: $\\lor$",
          "Apply De Morgan: $\\neg(A \\land B) \\land \\neg \\neg C$",
          "Cancel the double negation: $\\neg(A \\land B) \\land C$",
          "Apply De Morgan again to $\\neg(A \\land B)$: $(\\neg A \\lor \\neg B) \\land C$"
        ],
        note: "Long questions usually become manageable once you peel the negation layer by layer."
      },
      {
        tag: "Implication inside",
        title: "Simplify $\\neg((A \\to B) \\lor \\neg C)$",
        steps: [
          "Main connective inside the outer negation: $\\lor$",
          "Apply De Morgan: $\\neg(A \\to B) \\land \\neg \\neg C$",
          "Cancel the double negation: $\\neg(A \\to B) \\land C$",
          "Rewrite the negated implication: $(A \\land \\neg B) \\land C$"
        ],
        note: "Remember the mini-law: $\\neg(A \\to B) \\equiv A \\land \\neg B$."
      },
      {
        tag: "Proof recipe",
        title: "How I do these proof questions",
        steps: [
          "1. Find the outermost connective inside the negation.",
          "2. Apply De Morgan before trying any inference rule.",
          "3. Remove double negations immediately.",
          "4. Split conjunctions with Simplification.",
          "5. Only after the formula is in a usable shape, use MP, MT, DS, or Conj."
        ],
        note: "The proof becomes short because the simplification step does most of the work."
      }
    ];

window.logicPrepData.examArchive = [
      {
        date: "March 24 2023",
        tags: ["Predicate translation", "Quantifiers"],
        prompt: "Translate “People eat only food” and “Something is cheap but not valuable” using predicates and quantifiers.",
        takeaway: "Define your predicates first. “Only food” means anything a person eats must be food, so use implication inside a universal statement.",
        answer: "$\\forall x \\forall y ((Person(x) \\land Eats(x, y)) \\to Food(y))$; $\\exists x (Cheap(x) \\land \\neg Valuable(x))$"
      },
      {
        date: "May 19 2023",
        tags: ["Truth table", "Tautology"],
        prompt: "Build the truth table for $P \\lor (P \\to Q)$ and decide if it is a tautology.",
        takeaway: "Rewrite $P \\to Q$ as $\\neg P \\lor Q$. Then $P \\lor (\\neg P \\lor Q)$ collapses to $T \\lor Q$, so it is a tautology.",
        answer: "Yes, it is a tautology."
      },
      {
        date: "August 15 2023",
        tags: ["Truth table", "Biconditional"],
        prompt: "Build the truth table for $P \\lor (P \\leftrightarrow Q)$ and classify it.",
        takeaway: "It is not a tautology. For $P = F$ and $Q = T$, the whole expression is false. One false row is enough.",
        answer: "Neither tautology nor contradiction."
      },
      {
        date: "March 20 2024",
        tags: ["Proof sequence", "Validity"],
        prompt: "Use propositional logic to prove $(A \\to (B \\lor C)) \\land \\neg B \\land \\neg C \\implies \\neg A$.",
        takeaway: "Join $\\neg B$ and $\\neg C$, turn them into $\\neg(B \\lor C)$, then use Modus Tollens.",
        answer: "See the worked proof in Proof & Tables."
      },
      {
        date: "May 14 2024",
        tags: ["Proof sequence", "Validity"],
        prompt: "Use propositional logic to prove $(\\neg A \\to \\neg B) \\land B \\land (A \\to C) \\implies C$.",
        takeaway: "Take the contrapositive of $\\neg A \\to \\neg B$ to get $B \\to A$, then chain with $A \\to C$.",
        answer: "$B$ gives $A$; $A$ gives $C$."
      },
      {
        date: "September 13 2024",
        tags: ["Predicate translation", "Negation"],
        prompt: "Translate “You can fool some of the people all of the time” and then negate it.",
        takeaway: "This is a mixed quantifier pattern: one person works for every time. Negating it flips $\\exists \\forall$ into $\\forall \\exists$.",
        answer: "$\\exists x (Person(x) \\land \\forall y (Time(y) \\to Fooled(x, y)))$; negation: $\\forall x (Person(x) \\to \\exists y (Time(y) \\land \\neg Fooled(x, y)))$."
      },
      {
        date: "March 28 2025",
        tags: ["Proof sequence", "Negation"],
        prompt: "Prove $\\neg(A \\lor \\neg B), B \\to C \\implies \\neg A \\land C$ and negate $(C \\to D) \\to (\\neg B \\to A)$.",
        takeaway: "The proof unlocks instantly after De Morgan. For the negation, hit the outer implication first.",
        answer: "$\\neg(A \\lor \\neg B)$ gives $\\neg A \\land B$; then $B \\to C$ gives $C$; finally Conj."
      },
      {
        date: "May 19 2025",
        tags: ["Definitions", "Tautology", "Predicate translation"],
        prompt: "Define contradiction, state Modus Tollens, test whether $(A \\lor B) \\to (\\neg A \\land \\neg B)$ is a tautology, and translate “Some lawyers admire only judges.”",
        takeaway: "A contradiction is always false. Modus Tollens is $\\neg q, p \\to q \\implies \\neg p$. The tautology question falls to one counterexample.",
        answer: "Not a tautology because $A = T, B = F$ makes the formula false."
      },
      {
        date: "August 27 2025",
        tags: ["Definitions", "Biconditional", "Truth table"],
        prompt: "Define proposition, rewrite $A \\leftrightarrow B$ using $\\to$ and $\\land$, then verify $A \\lor B \\leftrightarrow \\neg A \\to B$ is a tautology.",
        takeaway: "A proposition must be either true or false. Also, $\\neg A \\to B$ rewrites to $A \\lor B$ immediately.",
        answer: "$A \\leftrightarrow B \\equiv (A \\to B) \\land (B \\to A)$, and $A \\lor B \\leftrightarrow (A \\lor B)$ is tautological."
      }
    ];

window.logicPrepData.drillBank = [
      {
        category: "truth",
        question: "What is the truth value of $p \\to q$ when $p$ is true and $q$ is false?",
        hint: "A conditional fails in exactly one row.",
        options: ["True", "False", "It depends on p only", "It depends on q only"],
        answer: 1,
        explanation: "A conditional is false only when the antecedent is true and the consequent is false."
      },
      {
        category: "laws",
        question: "Which statement is logically equivalent to $p \\to q$?",
        hint: "Rewrite the implication without an arrow.",
        options: ["$p \\land \\neg q$", "$\\neg p \\lor q$", "$q \\to p$", "$\\neg q \\lor p$"],
        answer: 1,
        explanation: "The standard rewrite is $p \\to q \\equiv \\neg p \\lor q$."
      },
      {
        category: "laws",
        question: "Which is the contrapositive of $p \\to q$?",
        hint: "Swap and negate both parts.",
        options: ["$q \\to p$", "$\\neg p \\to \\neg q$", "$\\neg q \\to \\neg p$", "$p \\to \\neg q$"],
        answer: 2,
        explanation: "The contrapositive of $p \\to q$ is $\\neg q \\to \\neg p$, and it is equivalent to the original implication."
      },
      {
        category: "laws",
        question: "What does $\\neg(p \\lor q)$ simplify to?",
        hint: "De Morgan flips the connective and negates both parts.",
        options: ["$\\neg p \\lor \\neg q$", "$\\neg p \\land \\neg q$", "$p \\land q$", "$\\neg(\\neg p \\land \\neg q)$"],
        answer: 1,
        explanation: "De Morgan gives $\\neg(p \\lor q) \\equiv \\neg p \\land \\neg q$."
      },
      {
        category: "proof",
        question: "Which inference rule matches $p \\lor q, \\neg p \\implies q$?",
        hint: "You remove one option from an OR.",
        options: ["Modus Ponens", "Simplification", "Disjunctive Syllogism", "Resolution"],
        answer: 2,
        explanation: "Disjunctive Syllogism removes one disjunct and leaves the other."
      },
      {
        category: "translation",
        question: "How do you translate “All cats are mammals”?",
        hint: "Universal statements use implication inside.",
        options: ["$\\forall x (Cat(x) \\land Mammal(x))$", "$\\exists x (Cat(x) \\land Mammal(x))$", "$\\forall x (Cat(x) \\to Mammal(x))$", "$\\exists x (Cat(x) \\to Mammal(x))$"],
        answer: 2,
        explanation: "“All cats are mammals” means every cat implies mammal: $\\forall x (Cat(x) \\to Mammal(x))$."
      },
      {
        category: "translation",
        question: "How do you translate “Some dogs are friendly”?",
        hint: "Existential statements use conjunction inside.",
        options: ["$\\exists x (Dog(x) \\land Friendly(x))$", "$\\forall x (Dog(x) \\to Friendly(x))$", "$\\exists x (Dog(x) \\to Friendly(x))$", "$\\forall x (Dog(x) \\land Friendly(x))$"],
        answer: 0,
        explanation: "You need one witness that is both a dog and friendly."
      },
      {
        category: "translation",
        question: "How do you translate “No A are B”?",
        hint: "Think “there is no witness that is both A and B.”",
        options: ["$\\exists x (A(x) \\land \\neg B(x))$", "$\\forall x (A(x) \\to \\neg B(x))$", "$\\neg \\forall x (A(x) \\to B(x))$", "$\\exists x (A(x) \\to \\neg B(x))$"],
        answer: 1,
        explanation: "A correct translation is $\\forall x (A(x) \\to \\neg B(x))$; equivalently $\\neg \\exists x (A(x) \\land B(x))$."
      },
      {
        category: "translation",
        question: "What is the best exam-safe translation of “Some lawyers admire only judges”?",
        hint: "Use one lawyer witness, at least one admired person, and restrict every admired person to judges.",
        options: [
          "$\\exists x (Lawyer(x) \\land \\forall y (Judge(y) \\to Admire(x, y)))$",
          "$\\exists x (Lawyer(x) \\land \\exists y Admire(x, y) \\land \\forall z (Admire(x, z) \\to Judge(z)))$",
          "$\\forall x (Lawyer(x) \\to \\forall y (Admire(x, y) \\to Judge(y)))$",
          "$\\exists x (Lawyer(x) \\to \\forall y (Admire(x, y) \\to Judge(y)))$"
        ],
        answer: 1,
        explanation: "The second option both gives a lawyer witness and ensures that whoever that lawyer admires is a judge."
      },
      {
        category: "translation",
        question: "What does $\\neg \\forall x P(x)$ simplify to?",
        hint: "Flip the quantifier and negate the predicate.",
        options: ["$\\forall x \\neg P(x)$", "$\\neg \\exists x P(x)$", "$\\exists x \\neg P(x)$", "$\\exists x P(x)$"],
        answer: 2,
        explanation: "Not everyone has property P means someone lacks property P."
      },
      {
        category: "translation",
        question: "What does $\\neg \\exists x P(x)$ simplify to?",
        hint: "Again, flip the quantifier and negate the predicate.",
        options: ["$\\exists x \\neg P(x)$", "$\\forall x \\neg P(x)$", "$\\forall x P(x)$", "$\\neg \\forall x P(x)$"],
        answer: 1,
        explanation: "If no witness exists, everyone fails P."
      },
      {
        category: "proof",
        question: "If you already have $\\neg B$ and $\\neg C$, what should you build before using MT on $A \\to (B \\lor C)$?",
        hint: "You need the negation of the consequent.",
        options: ["$B \\land C$", "$\\neg(B \\lor C)$", "$B \\lor C$", "$\\neg A$"],
        answer: 1,
        explanation: "From $\\neg B$ and $\\neg C$, use Conj then De Morgan to get $\\neg(B \\lor C)$, which unlocks Modus Tollens."
      },
      {
        category: "proof",
        question: "From $\\neg(A \\lor \\neg B)$, which statement follows directly by De Morgan?",
        hint: "Negate each part and flip OR to AND.",
        options: ["$\\neg A \\land B$", "$A \\land \\neg B$", "$\\neg A \\lor B$", "$A \\lor \\neg B$"],
        answer: 0,
        explanation: "Negating $A \\lor \\neg B$ gives $\\neg A \\land \\neg \\neg B$, which simplifies to $\\neg A \\land B$."
      },
      {
        category: "laws",
        question: "Which expression is equivalent to $p \\leftrightarrow q$?",
        hint: "Both directions must hold.",
        options: ["$p \\to q$", "$(p \\to q) \\land (q \\to p)$", "$\\neg p \\lor q$", "$p \\land q$"],
        answer: 1,
        explanation: "A biconditional is two implications, one each way."
      },
      {
        category: "truth",
        question: "Why is $A \\lor B \\leftrightarrow \\neg A \\to B$ a tautology?",
        hint: "Rewrite the implication.",
        options: [
          "Because $\\neg A \\to B$ is always false",
          "Because $\\neg A \\to B$ rewrites to $A \\lor B$",
          "Because $A \\lor B$ rewrites to $A \\land B$",
          "Because every biconditional is a tautology"
        ],
        answer: 1,
        explanation: "Since $\\neg A \\to B \\equiv A \\lor B$, the whole statement becomes $(A \\lor B) \\leftrightarrow (A \\lor B)$, which is always true."
      },
      {
        category: "truth",
        question: "What is enough to prove that a formula is not a tautology?",
        hint: "You do not need every row.",
        options: ["One row where it is false", "One row where it is true", "A proof by contradiction only", "A second truth table"],
        answer: 0,
        explanation: "A tautology must be true on every row, so one false row kills it."
      },
      {
        category: "laws",
        question: "Is $\\forall x \\exists y P(x, y)$ equivalent to $\\exists x \\forall y P(x, y)$?",
        hint: "Mixed quantifiers are dangerous.",
        options: ["Yes, always", "Only on finite domains", "No, not in general", "Yes, if P is symmetric"],
        answer: 2,
        explanation: "Mixed quantifiers do not commute. The witness for y may depend on x."
      },
      {
        category: "quantifier",
        question: "Which formula means “Everyone loves someone”?",
        hint: "The loved person may vary with the person who is doing the loving.",
        options: ["$\\forall x \\exists y Loves(x, y)$", "$\\exists y \\forall x Loves(x, y)$", "$\\exists x \\forall y Loves(x, y)$", "$\\forall x \\forall y Loves(x, y)$"],
        answer: 0,
        explanation: "$\\forall x \\exists y Loves(x, y)$ means each x has at least one y they love, and that y can depend on x."
      },
      {
        category: "quantifier",
        question: "Which formula means “There is someone everyone loves”?",
        hint: "Now one fixed person has to work for all x.",
        options: ["$\\forall x \\exists y Loves(x, y)$", "$\\exists y \\forall x Loves(x, y)$", "$\\exists x \\forall y Loves(x, y)$", "$\\forall y \\exists x Loves(x, y)$"],
        answer: 1,
        explanation: "$\\exists y \\forall x Loves(x, y)$ says there is one y such that every x loves that same y."
      },
      {
        category: "quantifier",
        question: "How do you translate “Every student solved some problem”?",
        hint: "Each student gets a problem witness.",
        options: [
          "$\\forall x (Student(x) \\to \\exists y (Problem(y) \\land Solved(x, y)))$",
          "$\\exists x (Student(x) \\land \\forall y (Problem(y) \\to Solved(x, y)))$",
          "$\\forall y (Problem(y) \\to \\exists x (Student(x) \\land Solved(x, y)))$",
          "$\\exists y (Problem(y) \\land \\forall x (Student(x) \\to Solved(x, y)))$"
        ],
        answer: 0,
        explanation: "The problem witness may change from student to student, so the existential must sit inside the universal."
      },
      {
        category: "quantifier",
        question: "How do you translate “Some student solved every problem”?",
        hint: "One student must cover the whole problem set.",
        options: [
          "$\\forall x (Student(x) \\to \\exists y (Problem(y) \\land Solved(x, y)))$",
          "$\\exists x (Student(x) \\land \\forall y (Problem(y) \\to Solved(x, y)))$",
          "$\\exists y (Problem(y) \\land \\forall x (Student(x) \\to Solved(x, y)))$",
          "$\\forall y (Problem(y) \\to \\exists x (Student(x) \\land Solved(x, y)))$"
        ],
        answer: 1,
        explanation: "Now one fixed student must work for all problems, so the existential comes first."
      },
      {
        category: "quantifier",
        question: "What is the negation of $\\forall x \\exists y P(x, y)$?",
        hint: "Flip each quantifier and negate the predicate.",
        options: ["$\\exists x \\forall y \\neg P(x, y)$", "$\\forall x \\exists y \\neg P(x, y)$", "$\\exists y \\forall x \\neg P(x, y)$", "$\\neg \\forall x \\neg \\exists y P(x, y)$"],
        answer: 0,
        explanation: "Negating $\\forall x \\exists y P(x, y)$ gives $\\exists x \\forall y \\neg P(x, y)$."
      },
      {
        category: "quantifier",
        question: "Which formula says “There is at most one moon” using $Moon(x)$?",
        hint: "No two different objects can both be moons.",
        options: [
          "$\\exists x Moon(x)$",
          "$\\exists x \\exists y (Moon(x) \\land Moon(y) \\land x \\neq y)$",
          "$\\forall x \\forall y ((Moon(x) \\land Moon(y)) \\to x = y)$",
          "$\\exists! x Moon(x)$"
        ],
        answer: 2,
        explanation: "At most one means any two moon-witnesses must actually be the same object."
      },
      {
        category: "quantifier",
        question: "Which formula says “There is exactly one moon” using $Moon(x)$?",
        hint: "You need existence and uniqueness.",
        options: [
          "$\\forall x \\forall y ((Moon(x) \\land Moon(y)) \\to x = y)$",
          "$\\exists x (Moon(x) \\land \\forall y (Moon(y) \\to y = x))$",
          "$\\exists x \\exists y (Moon(x) \\land Moon(y) \\land x \\neq y)$",
          "$\\forall x Moon(x)$"
        ],
        answer: 1,
        explanation: "Exactly one combines one witness with a uniqueness condition."
      },
      {
        category: "quantifier",
        question: "How do you translate “Everyone likes someone else”?",
        hint: "The inequality excludes choosing the same object.",
        options: [
          "$\\forall x \\exists y (y \\neq x \\land Likes(x, y))$",
          "$\\exists x \\forall y (y \\neq x \\to Likes(x, y))$",
          "$\\forall x Likes(x, x)$",
          "$\\exists y \\forall x Likes(x, y)$"
        ],
        answer: 0,
        explanation: "For each x there must be at least one different y that x likes."
      },
      {
        category: "quantifier",
        question: "How do you translate “No student solved every problem”?",
        hint: "For each student there must be at least one problem they did not solve.",
        options: [
          "$\\forall x (Student(x) \\to \\exists y (Problem(y) \\land \\neg Solved(x, y)))$",
          "$\\exists x (Student(x) \\land \\forall y (Problem(y) \\to \\neg Solved(x, y)))$",
          "$\\neg \\exists y (Problem(y) \\land \\forall x (Student(x) \\to Solved(x, y)))$",
          "$\\forall y (Problem(y) \\to \\exists x (Student(x) \\land \\neg Solved(x, y)))$"
        ],
        answer: 0,
        explanation: "That formula says each student misses at least one problem, which matches the English statement."
      },
      {
        category: "laws",
        question: "What is the first simplification of $\\neg(A \\lor \\neg B)$?",
        hint: "Apply De Morgan before doing anything else.",
        options: ["$\\neg A \\lor B$", "$\\neg A \\land \\neg \\neg B$", "$A \\land \\neg B$", "$\\neg(\\neg A \\land B)$"],
        answer: 1,
        explanation: "De Morgan turns the outer OR into AND and negates both parts, giving $\\neg A \\land \\neg \\neg B$."
      },
      {
        category: "proof",
        question: "In a proof starting with $\\neg(A \\lor \\neg B), B \\to C, C \\to D$, which line should appear after Simplification?",
        hint: "You need the positive B to use Modus Ponens.",
        options: ["$\\neg A$ and $B$", "$\\neg A$ and $\\neg B$", "$A$ and $B$", "$\\neg(A \\lor B)$"],
        answer: 0,
        explanation: "After De Morgan and double-negation cleanup, you get $\\neg A \\land B$, which then splits into $\\neg A$ and $B$."
      },
      {
        category: "translation",
        question: "How do you translate “There are at least two moons” using $Moon(x)$?",
        hint: "You need two different witnesses.",
        options: ["$\\exists x Moon(x)$", "$\\exists x \\exists y (Moon(x) \\land Moon(y) \\land x \\neq y)$", "$\\forall x \\forall y (Moon(x) \\land Moon(y) \\to x = y)$", "$\\exists! x Moon(x)$"],
        answer: 1,
        explanation: "At least two means there exist distinct x and y that both satisfy Moon."
      },
      {
        category: "proof",
        question: "Which quantifier rule lets you go from $\\forall x P(x)$ to $P(c)$?",
        hint: "You are moving from all objects to one named object.",
        options: ["EG", "EI", "UI", "UG"],
        answer: 2,
        explanation: "Universal Instantiation applies a universal statement to a specific element."
      },
      {
        category: "truth",
        question: "Is $(A \\lor B) \\to (\\neg A \\land \\neg B)$ a tautology?",
        hint: "Try A = true and B = false.",
        options: ["Yes", "No", "Only when both are false", "Only when both are true"],
        answer: 1,
        explanation: "With A = true and B = false, the antecedent is true but the consequent is false, so the formula is false."
      },
      {
        category: "truth",
        question: "Which row makes $P \\lor (P \\leftrightarrow Q)$ false?",
        hint: "For an OR to be false, both sides must be false.",
        options: ["$P=T, Q=T$", "$P=T, Q=F$", "$P=F, Q=T$", "$P=F, Q=F$"],
        answer: 2,
        explanation: "When $P=F$ and $Q=T$, the left side $P$ is false and $P \\leftrightarrow Q$ is also false."
      },
      {
        category: "truth",
        question: "What classification fits a formula whose final truth-table column contains both T and F?",
        hint: "It is neither always true nor always false.",
        options: ["Tautology", "Contradiction", "Contingency", "Valid argument"],
        answer: 2,
        explanation: "A contingency is true under some valuations and false under others."
      },
      {
        category: "laws",
        question: "Which rewrite is the safest first move for $\\neg[(C \\to D) \\to (\\neg B \\to A)]$?",
        hint: "Negate the outer implication before touching the inside.",
        options: [
          "$(C \\to D) \\land \\neg(\\neg B \\to A)$",
          "$\\neg(C \\to D) \\to (\\neg B \\to A)$",
          "$\\neg(C \\to D) \\land (\\neg B \\to A)$",
          "$(C \\to D) \\lor \\neg(\\neg B \\to A)$"
        ],
        answer: 0,
        explanation: "Use $\\neg(P \\to Q) \\equiv P \\land \\neg Q$ with $P=(C \\to D)$ and $Q=(\\neg B \\to A)$."
      },
      {
        category: "laws",
        question: "What is $p \\text{ unless } q$ usually translated as?",
        hint: "Unless q means if not q, then p.",
        options: ["$q \\to p$", "$p \\to q$", "$\\neg q \\to p$", "$p \\leftrightarrow q$"],
        answer: 2,
        explanation: "A standard exam-safe translation is $\\neg q \\to p$."
      },
      {
        category: "translation",
        question: "How do you translate “Only doctors are qualified”?",
        hint: "Only A are B means if something is B, it must be A.",
        options: [
          "$\\forall x (Doctor(x) \\to Qualified(x))$",
          "$\\forall x (Qualified(x) \\to Doctor(x))$",
          "$\\exists x (Doctor(x) \\land Qualified(x))$",
          "$\\forall x (Doctor(x) \\land Qualified(x))$"
        ],
        answer: 1,
        explanation: "“Only doctors are qualified” restricts the qualified people: $\\forall x(Qualified(x) \\to Doctor(x))$."
      },
      {
        category: "translation",
        question: "How do you translate “All doctors are qualified”?",
        hint: "This is different from “Only doctors are qualified”.",
        options: [
          "$\\forall x (Qualified(x) \\to Doctor(x))$",
          "$\\forall x (Doctor(x) \\to Qualified(x))$",
          "$\\exists x (Doctor(x) \\land Qualified(x))$",
          "$\\neg \\exists x Qualified(x)$"
        ],
        answer: 1,
        explanation: "“All doctors are qualified” starts from doctor and points to qualified."
      },
      {
        category: "quantifier",
        question: "What is the negation of $\\exists x \\forall y P(x,y)$?",
        hint: "Flip both quantifiers and negate the body.",
        options: [
          "$\\forall x \\exists y \\neg P(x,y)$",
          "$\\exists x \\forall y \\neg P(x,y)$",
          "$\\forall y \\exists x \\neg P(x,y)$",
          "$\\neg \\forall x \\exists y P(x,y)$"
        ],
        answer: 0,
        explanation: "$\\neg \\exists x \\forall y P(x,y) \\equiv \\forall x \\exists y \\neg P(x,y)$."
      },
      {
        category: "quantifier",
        question: "Which formula means “Every course has a student who passed it”?",
        hint: "Each course may have a different passing student.",
        options: [
          "$\\forall y (Course(y) \\to \\exists x (Student(x) \\land Passed(x,y)))$",
          "$\\exists x (Student(x) \\land \\forall y (Course(y) \\to Passed(x,y)))$",
          "$\\exists y (Course(y) \\land \\forall x (Student(x) \\to Passed(x,y)))$",
          "$\\forall x (Student(x) \\to \\exists y (Course(y) \\land Passed(x,y)))$"
        ],
        answer: 0,
        explanation: "The existential student belongs inside the universal course statement because the witness can depend on the course."
      },
      {
        category: "proof",
        question: "In a proof, why do you use Conjunction near the end when the goal is $X \\land Y$?",
        hint: "A conjunction goal needs both halves.",
        options: [
          "Because Conjunction removes an implication",
          "Because Conjunction combines separately proven statements",
          "Because Conjunction negates both sides",
          "Because Conjunction proves a tautology"
        ],
        answer: 1,
        explanation: "If you have already proven $X$ and $Y$ on separate lines, Conjunction lets you conclude $X \\land Y$."
      },
      {
        category: "proof",
        question: "Which rule justifies going from $\\neg A \\land B$ to $B$?",
        hint: "You are pulling one part out of an AND.",
        options: ["Modus Ponens", "Simplification", "Addition", "Hypothetical Syllogism"],
        answer: 1,
        explanation: "Simplification lets you infer either conjunct from a conjunction."
      },

      // New drill questions
      {
        category: "truth",
        question: "What is the truth value of $p \\leftrightarrow q$ when $p$ is true and $q$ is false?",
        hint: "A biconditional is true only when both sides match.",
        options: ["True", "False", "Depends on context", "Always true"],
        answer: 1,
        explanation: "A biconditional $p \\leftrightarrow q$ is false whenever $p$ and $q$ have different truth values."
      },
      {
        category: "truth",
        question: "Which formula is a tautology?",
        hint: "A tautology is true on every row of the truth table.",
        options: ["$p \\land \\neg p$", "$p \\lor \\neg p$", "$p \\to \\neg p$", "$p \\land q$"],
        answer: 1,
        explanation: "$p \\lor \\neg p$ is the Law of Excluded Middle. It is always true, making it a tautology."
      },
      {
        category: "truth",
        question: "Which formula is a contradiction?",
        hint: "A contradiction is false on every row.",
        options: ["$p \\lor \\neg p$", "$p \\to q$", "$p \\land \\neg p$", "$\\neg p \\lor q$"],
        answer: 2,
        explanation: "$p \\land \\neg p$ says p is both true and false at the same time, which is impossible. It is always false."
      },
      {
        category: "laws",
        question: "Which is the correct De Morgan rewrite of $\\neg(p \\land q)$?",
        hint: "Flip AND to OR and negate both parts.",
        options: ["$\\neg p \\land \\neg q$", "$\\neg p \\lor \\neg q$", "$p \\lor q$", "$\\neg p \\to q$"],
        answer: 1,
        explanation: "De Morgan: $\\neg(p \\land q) \\equiv \\neg p \\lor \\neg q$. The AND flips to OR."
      },
      {
        category: "laws",
        question: "What is the absorption law for OR?",
        hint: "The bigger expression collapses to the simpler one.",
        options: ["$p \\lor (p \\land q) \\equiv p \\land q$", "$p \\lor (p \\land q) \\equiv p$", "$p \\lor (p \\land q) \\equiv q$", "$p \\lor (p \\land q) \\equiv p \\lor q$"],
        answer: 1,
        explanation: "Absorption: $p \\lor (p \\land q) \\equiv p$. The conjunction is absorbed into the simpler p."
      },
      {
        category: "laws",
        question: "Which rewrite turns $p \\lor q$ into an implication?",
        hint: "Negate the first part and use an arrow.",
        options: ["$p \\to q$", "$\\neg p \\to q$", "$q \\to p$", "$\\neg q \\to p$"],
        answer: 1,
        explanation: "$p \\lor q \\equiv \\neg p \\to q$. This is the reverse conditional rewrite."
      },
      {
        category: "proof",
        question: "Which rule lets you conclude $p$ from $p \\land q$?",
        hint: "You pull one part out of a conjunction.",
        options: ["Modus Ponens", "Simplification", "Addition", "Conjunction"],
        answer: 1,
        explanation: "Simplification (Simp): from $p \\land q$, you may conclude $p$ (or $q$)."
      },
      {
        category: "proof",
        question: "Which rule lets you conclude $p \\land q$ from $p$ and $q$ separately?",
        hint: "You combine two established lines into one.",
        options: ["Simplification", "Disjunctive Syllogism", "Conjunction", "Addition"],
        answer: 2,
        explanation: "Conjunction (Conj): from $p$ and $q$ as separate lines, you may conclude $p \\land q$."
      },
      {
        category: "proof",
        question: "What is the first step when you see $\\neg(A \\lor \\neg B)$ in a proof?",
        hint: "The outer negation sits on an OR bracket.",
        options: ["Apply Modus Ponens", "Apply De Morgan to get $\\neg A \\land B$", "Apply Simplification", "Apply Hypothetical Syllogism"],
        answer: 1,
        explanation: "De Morgan on $\\neg(A \\lor \\neg B)$ gives $\\neg A \\land \\neg\\neg B = \\neg A \\land B$. This is the standard first move."
      },
      {
        category: "translation",
        question: "How do you translate 'No birds are reptiles'?",
        hint: "No A are B means every A fails B.",
        options: [
          "$\\exists x (Bird(x) \\land \\neg Reptile(x))$",
          "$\\forall x (Bird(x) \\to \\neg Reptile(x))$",
          "$\\neg \\forall x (Bird(x) \\to Reptile(x))$",
          "$\\forall x (Bird(x) \\land \\neg Reptile(x))$"
        ],
        answer: 1,
        explanation: "'No A are B' translates to $\\forall x (A(x) \\to \\neg B(x))$. Every bird must fail the reptile test."
      },
      {
        category: "translation",
        question: "How do you translate 'Only students passed the exam'?",
        hint: "'Only A are B' reverses the restriction to 'All B are A'.",
        options: [
          "$\\forall x (Student(x) \\to Passed(x))$",
          "$\\forall x (Passed(x) \\to Student(x))$",
          "$\\exists x (Student(x) \\land Passed(x))$",
          "$\\forall x (Student(x) \\land Passed(x))$"
        ],
        answer: 1,
        explanation: "'Only A are B' means 'All B are A'. So 'Only students passed' means every person who passed must be a student."
      },
      {
        category: "quantifier",
        question: "What does $\\neg \\forall x \\exists y P(x,y)$ simplify to?",
        hint: "Flip each quantifier and negate the predicate.",
        options: [
          "$\\forall x \\forall y \\neg P(x,y)$",
          "$\\exists x \\forall y \\neg P(x,y)$",
          "$\\forall x \\exists y \\neg P(x,y)$",
          "$\\exists x \\exists y \\neg P(x,y)$"
        ],
        answer: 1,
        explanation: "Negate $\\forall x \\exists y P(x,y)$: flip $\\forall$ to $\\exists$, flip $\\exists$ to $\\forall$, negate the predicate. Result: $\\exists x \\forall y \\neg P(x,y)$."
      },
      {
        category: "quantifier",
        question: "Which formula says 'There is exactly one student who passed'?",
        hint: "Existence plus uniqueness: one witness, and no second different witness.",
        options: [
          "$\\exists x (Student(x) \\land Passed(x))$",
          "$\\forall x (Student(x) \\to Passed(x))$",
          "$\\exists x (Student(x) \\land Passed(x) \\land \\forall y ((Student(y) \\land Passed(y)) \\to y = x))$",
          "$\\exists x \\exists y (Student(x) \\land Student(y) \\land Passed(x) \\land Passed(y) \\land x \\neq y)$"
        ],
        answer: 2,
        explanation: "Exactly one requires existence AND uniqueness: one witness exists, and any other witness must be the same object."
      },

      {
        category: "proof",
        question: "From $A \\to B$ and $B \\to C$, what can you conclude directly?",
        hint: "Chain the implications.",
        options: ["$A \\to C$", "$C \\to A$", "$A \\land C$", "$\\neg A \\to \\neg C$"],
        answer: 0,
        explanation: "Hypothetical Syllogism gives $A \\to C$."
      }
    ];
