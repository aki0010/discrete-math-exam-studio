window.examStudio = window.examStudio || {};
window.examStudio.examSolutions = [
  {
    date: "2023-03-24",
    part: "P1",
    parts: [
      {
        label: "a) Smallest value of $f(a,b)=5a(6-b)^2$",
        steps: [
          "The factor $(6-b)^2$ is a square, so it is never negative.",
          "For $b\\in\\{1,2,3,4,5,6\\}$, the largest square is $(6-1)^2=25$ and the smallest is $(6-6)^2=0$.",
          "To make the whole expression as small as possible, choose the most negative value of a: $a=-2$.",
          "Then $f(-2,1)=5(-2)(25)=-250$."
        ],
        answer: "The smallest possible value is $-250$.",
        warning: "Do not choose $b=6$ for the minimum. That makes the square 0, not the most negative value."
      },
      {
        label: "b) Largest value",
        steps: [
          "Use the same largest square, $(6-b)^2=25$.",
          "To maximize the expression, choose the largest positive a: $a=2$.",
          "Then $f(2,1)=5(2)(25)=250$."
        ],
        answer: "The largest possible value is $250$.",
        warning: "The square controls size, but the sign comes from a."
      },
      {
        label: "c) Surjective?",
        steps: [
          "The function has domain $A\\times B$.",
          "$A$ has 5 elements and $B$ has 6 elements, so the domain has only $5\\cdot6=30$ inputs.",
          "A function with only 30 inputs can produce at most 30 different output values.",
          "The codomain is $\\mathbb R$, which has infinitely many real numbers.",
          "So the function cannot hit every real number."
        ],
        answer: "No, $f$ is not surjective onto $\\mathbb R$.",
        warning: "Surjective depends on the codomain, not only the formula."
      }
    ]
  },
  {
    date: "2023-03-24",
    part: "P2",
    parts: [
      {
        label: "a) People eat only food",
        steps: [
          "Define predicates first: $Person(x)$, $Eats(x,y)$, and $Food(y)$.",
          "The word 'only' means: if a person eats something, then that thing must be food.",
          "Use a universal statement because it must hold for all people and all things.",
          "Write: for every x and y, if x is a person and x eats y, then y is food."
        ],
        answer: "$\\forall x\\forall y((Person(x)\\land Eats(x,y))\\to Food(y))$.",
        warning: "Do not write $Food(y)\\to Eats(x,y)$. 'Only food' does not mean all food is eaten."
      },
      {
        label: "b) Something is cheap but not valuable",
        steps: [
          "Define predicates: $Cheap(x)$ and $Valuable(x)$.",
          "'Something' means there exists at least one object.",
          "'But' works like AND in logic.",
          "The object must be cheap and not valuable."
        ],
        answer: "$\\exists x(Cheap(x)\\land \\neg Valuable(x))$.",
        warning: "Existential statements usually use AND to describe the witness."
      }
    ]
  },
  {
    date: "2023-03-24",
    part: "P3",
    parts: [
      {
        label: "a) First five Pascal rows",
        steps: [
          "Start with row 0: 1.",
          "Each next row begins and ends with 1.",
          "Every inside number is the sum of the two numbers above it."
        ],
        answer: "$1$; $1,1$; $1,2,1$; $1,3,3,1$; $1,4,6,4,1$.",
        warning: "If your course calls the first line row 1, still write the first five displayed lines."
      },
      {
        label: "b) Expand $(-7x-8y)^3$",
        steps: [
          "Use $(a+b)^3=a^3+3a^2b+3ab^2+b^3$.",
          "Let $a=-7x$ and $b=-8y$.",
          "$a^3=(-7x)^3=-343x^3$.",
          "$3a^2b=3(49x^2)(-8y)=-1176x^2y$.",
          "$3ab^2=3(-7x)(64y^2)=-1344xy^2$.",
          "$b^3=(-8y)^3=-512y^3$."
        ],
        answer: "$-343x^3-1176x^2y-1344xy^2-512y^3$.",
        warning: "Both terms are negative, so every term in the cubic expansion is negative."
      }
    ]
  },
  {
    date: "2023-03-24",
    part: "P4",
    parts: [
      {
        label: "a) Draw $K_6$",
        steps: [
          "$K_6$ means the complete graph on 6 vertices.",
          "Draw 6 vertices.",
          "Connect every pair of distinct vertices with exactly one edge."
        ],
        answer: "Any drawing with 6 vertices where every pair is connected is a correct $K_6$.",
        warning: "A complete graph is not just connected; every possible edge is present."
      },
      {
        label: "b) Number of edges in $K_6$",
        steps: [
          "In $K_n$, each edge is a pair of vertices.",
          "The number of pairs from 6 vertices is $\\binom62$.",
          "$\\binom62=\\frac{6\\cdot5}{2}=15$."
        ],
        answer: "$K_6$ has 15 edges.",
        warning: "Do not use $6\\cdot5=30$ as the final answer; that counts each undirected edge twice."
      },
      {
        label: "c) Connected graph with 8 vertices",
        steps: [
          "Connected means every vertex can be reached from every other vertex by a path.",
          "The easiest example is a path graph.",
          "Draw 8 vertices in a row and connect consecutive vertices."
        ],
        answer: "A path on 8 vertices is connected and satisfies the question.",
        warning: "The graph does not need to be complete."
      }
    ]
  },
  {
    date: "2023-03-24",
    part: "P5",
    parts: [
      {
        label: "Decide whether $m$ is even or odd",
        steps: [
          "Since n is odd, every positive power of n is odd.",
          "$(n+100)!$ is even because $n+100\\ge101$, so its factorial contains the factor 2.",
          "$n^{n+100}$ is odd.",
          "$n^{n^2+100!}$ is also odd.",
          "So $m=$ even + odd + odd.",
          "Odd + odd is even, and even + even is even."
        ],
        answer: "$m$ is even.",
        warning: "You do not need to compute the giant powers; only parity matters."
      }
    ]
  },
  {
    date: "2023-05-19",
    part: "P1",
    parts: [
      {
        label: "a) Truth table for $P\\lor(P\\to Q)$",
        steps: [
          "Use the four rows for P and Q: TT, TF, FT, FF.",
          "$P\\to Q$ is false only when P is true and Q is false.",
          "Then OR the result with P.",
          "Rows: TT gives T; TF gives T; FT gives T; FF gives T."
        ],
        answer: "The final column is T, T, T, T.",
        warning: "The implication row for P=F is true, no matter Q."
      },
      {
        label: "b) Tautology?",
        steps: [
          "A tautology is true in every row.",
          "The final column from part a is true in all four rows."
        ],
        answer: "Yes, $P\\lor(P\\to Q)$ is a tautology.",
        warning: "Do not decide from one row; check the whole final column."
      }
    ]
  },
  {
    date: "2023-05-19",
    part: "P2",
    parts: [
      {
        label: "Power set cardinality",
        steps: [
          "List primes from 2 through 19: $2,3,5,7,11,13,17,19$.",
          "So $|S|=8$.",
          "A set with 8 elements has $2^8$ subsets.",
          "$2^8=256$."
        ],
        answer: "$|\\mathcal P(S)|=256$.",
        warning: "The power set contains subsets, not only the original elements."
      }
    ]
  },
  {
    date: "2023-05-19",
    part: "P3",
    parts: [
      {
        label: "Expand $(-5x+3y)^3$",
        steps: [
          "Use $(a+b)^3=a^3+3a^2b+3ab^2+b^3$.",
          "Let $a=-5x$ and $b=3y$.",
          "$a^3=-125x^3$.",
          "$3a^2b=3(25x^2)(3y)=225x^2y$.",
          "$3ab^2=3(-5x)(9y^2)=-135xy^2$.",
          "$b^3=27y^3$."
        ],
        answer: "$-125x^3+225x^2y-135xy^2+27y^3$.",
        warning: "The signs alternate because one term is negative and one is positive."
      }
    ]
  },
  {
    date: "2023-05-19",
    part: "P4",
    parts: [
      {
        label: "a) Hockey line-ups",
        steps: [
          "A line-up is a group of 5 players.",
          "Order does not matter.",
          "Use combinations: $\\binom{27}{5}$.",
          "$\\binom{27}{5}=\\frac{27\\cdot26\\cdot25\\cdot24\\cdot23}{5\\cdot4\\cdot3\\cdot2\\cdot1}=80730$."
        ],
        answer: "There are 80,730 line-ups.",
        warning: "Do not use permutations; the order of players does not matter."
      },
      {
        label: "b) Three dice outcomes ending even",
        steps: [
          "Order matters because 232 and 322 are different.",
          "The first throw has 6 choices.",
          "The second throw has 6 choices.",
          "The last throw must be even: 2, 4, or 6, so 3 choices.",
          "Multiply: $6\\cdot6\\cdot3=108$."
        ],
        answer: "There are 108 outcomes.",
        warning: "Only the last throw is restricted."
      }
    ]
  },
  {
    date: "2023-05-19",
    part: "P5",
    parts: [
      {
        label: "a) Verify the proposed root",
        steps: [
          "To prove a number is a root, plug it into the polynomial and show the result is 0.",
          "For $P(x)=\\frac12x^2+4x+c$, the quadratic formula gives roots $x=-4\\pm\\sqrt{16-2c}$.",
          "The proposed value $-4-\\sqrt{16-2c}$ is exactly one of these roots.",
          "Therefore substituting it into $P(x)$ gives 0."
        ],
        answer: "$x_0=-4-\\sqrt{16-2c}$ is a root.",
        warning: "The exam asks for proof, so state the substitution/quadratic-formula reason, not only the answer."
      },
      {
        label: "b) Other root",
        steps: [
          "The two roots differ only by the sign before the square root.",
          "If one root is $-4-\\sqrt{16-2c}$, the other is $-4+\\sqrt{16-2c}$."
        ],
        answer: "$-4+\\sqrt{16-2c}$.",
        warning: "Do not change the inside of the square root."
      }
    ]
  },
  {
    date: "2023-08-15",
    part: "P1",
    parts: [
      {
        label: "Truth table and classification",
        steps: [
          "Make four rows for P and Q.",
          "$P\\leftrightarrow Q$ is true when P and Q have the same truth value.",
          "Compute $P\\lor(P\\leftrightarrow Q)$.",
          "Rows TT, TF, FT, FF give T, T, F, T."
        ],
        answer: "The expression is neither a tautology nor a contradiction.",
        warning: "One false row means not a tautology; one true row means not a contradiction."
      }
    ]
  },
  {
    date: "2023-08-15",
    part: "P2",
    parts: [
      {
        label: "Injective, surjective, bijective for $f(x)=x^3\\bmod2$",
        steps: [
          "Compute outputs for $A=\\{0,1,2,3,4,5\\}$.",
          "Even inputs give 0 and odd inputs give 1.",
          "So outputs are: 0,1,0,1,0,1.",
          "Not injective because different inputs share outputs, for example $f(0)=f(2)=0$.",
          "Surjective onto $B=\\{0,1\\}$ because both 0 and 1 occur.",
          "Not bijective because bijective means both injective and surjective."
        ],
        answer: "Not injective; surjective; not bijective.",
        warning: "Surjective only asks whether every codomain value appears at least once."
      }
    ]
  },
  {
    date: "2023-08-15",
    part: "P3",
    parts: [
      {
        label: "Set S and equivalence class $[2]$",
        steps: [
          "S contains all even elements of $\\{1,2,\\ldots,20\\}$.",
          "So $S=\\{2,4,6,8,10,12,14,16,18,20\\}$ and $|S|=10$.",
          "$[2]$ contains elements of S congruent to 2 modulo 3.",
          "Check even numbers: $2,8,14,20$ all leave remainder 2 when divided by 3.",
          "So $[2]=\\{2,8,14,20\\}$ and $|[2]|=4$."
        ],
        answer: "$S=\\{2,4,6,8,10,12,14,16,18,20\\}$, $|S|=10$, $[2]=\\{2,8,14,20\\}$, $|[2]|=4$.",
        warning: "The equivalence class is taken inside S, not inside all integers."
      }
    ]
  },
  {
    date: "2023-08-15",
    part: "P4",
    parts: [
      {
        label: "Compute recurrence values",
        steps: [
          "$P(1)=1$.",
          "$P(2)=2\\cdot2\\cdot P(1)-3(1)=4-3=1$.",
          "$P(3)=2\\cdot3\\cdot P(2)-3(2)=6-6=0$.",
          "$P(4)=2\\cdot4\\cdot0-9=-9$.",
          "$P(5)=10(-9)-12=-102$.",
          "$P(6)=12(-102)-15=-1239$.",
          "$P(7)=14(-1239)-18=-17364$."
        ],
        answer: "$P(2)=1$, $P(3)=0$, $P(4)=-9$, $P(5)=-102$, $P(6)=-1239$, $P(7)=-17364$.",
        warning: "Use the previous value each time; do not reuse $P(1)$."
      }
    ]
  },
  {
    date: "2023-08-15",
    part: "P5",
    parts: [
      {
        label: "Allocate 9 billionaires to ships of sizes 2, 3, 4 and order ship days",
        steps: [
          "First choose which 4 people go on the ship of size 4: $\\binom94$.",
          "From the remaining 5, choose which 3 go on the ship of size 3: $\\binom53$.",
          "The remaining 2 go on the ship of size 2.",
          "The three ships can be sent on three days in $3!$ orders.",
          "Multiply: $\\binom94\\binom53\\cdot3!=126\\cdot10\\cdot6=7560$."
        ],
        answer: "There are 7,560 ways.",
        warning: "Order inside a ship does not matter, but the order of ship departures does."
      }
    ]
  },
  {
    date: "2024-03-20",
    part: "P1",
    parts: [
      {
        label: "Graph drawing questions",
        steps: [
          "For 3 vertices each of degree 2, draw a triangle.",
          "For cycles of length 2, 3, and 4 in one 4-node graph, allow parallel edges for the 2-cycle and include a triangle and a 4-cycle.",
          "For $K_n$, every edge is a pair of vertices.",
          "There are $\\binom n2=\\frac{n(n-1)}2$ pairs."
        ],
        answer: "Triangle for part a; suitable multigraph for part b; $|E(K_n)|=\\frac{n(n-1)}2$.",
        warning: "A cycle of length 2 requires parallel edges in an undirected graph."
      }
    ]
  },
  {
    date: "2024-03-20",
    part: "P2",
    parts: [
      {
        label: "Induction for sum of cubes",
        steps: [
          "Base case $n=1$: $4c_1=4$ and $1^2(2)^2=4$.",
          "Assume $4c_k=k^2(k+1)^2$.",
          "For $k+1$, $c_{k+1}=c_k+(k+1)^3$.",
          "Multiply by 4: $4c_{k+1}=4c_k+4(k+1)^3$.",
          "Use the hypothesis: $k^2(k+1)^2+4(k+1)^3$.",
          "Factor $(k+1)^2$: $(k+1)^2(k^2+4k+4)=(k+1)^2(k+2)^2$."
        ],
        answer: "Therefore $4c_n=n^2(n+1)^2$ for all positive integers n.",
        warning: "Write the target for $k+1$ before simplifying: $(k+1)^2(k+2)^2$."
      }
    ]
  },
  {
    date: "2024-03-20",
    part: "P3",
    parts: [
      {
        label: "Congruence, gcd, and Bezout",
        steps: [
          "For $n\\ge952$ and $n\\equiv13\\pmod{182}$, use $n=13+182k$.",
          "Choose k so the result is at least 952. $13+182\\cdot6=1105$, so one answer is 1105.",
          "Euclid: $102=2\\cdot38+26$.",
          "$38=1\\cdot26+12$.",
          "$26=2\\cdot12+2$.",
          "$12=6\\cdot2+0$, so gcd is 2.",
          "Back substitute: $2=26-2\\cdot12=26-2(38-26)=3\\cdot26-2\\cdot38$.",
          "And $26=102-2\\cdot38$, so $2=3\\cdot102-8\\cdot38$."
        ],
        answer: "One n is 1105; $\\gcd(102,38)=2$; Bezout coefficients can be $x=3$, $y=-8$.",
        warning: "The last nonzero remainder is the gcd; the zero remainder is not the answer."
      }
    ]
  },
  {
    date: "2024-03-20",
    part: "P4",
    parts: [
      {
        label: "Proof sequence",
        steps: [
          "Premise gives $A\\to(B\\lor C)$, $\\neg B$, and $\\neg C$.",
          "From $\\neg B$ and $\\neg C$, get $\\neg B\\land\\neg C$ by conjunction.",
          "By De Morgan, $\\neg B\\land\\neg C$ is $\\neg(B\\lor C)$.",
          "Use Modus Tollens with $A\\to(B\\lor C)$ and $\\neg(B\\lor C)$.",
          "Conclude $\\neg A$."
        ],
        answer: "The argument is valid.",
        warning: "Modus Tollens needs the negation of the whole consequent, not just one part."
      }
    ]
  },
  {
    date: "2024-03-20",
    part: "P5",
    parts: [
      {
        label: "Restricted passcodes and jelly beans",
        steps: [
          "For 6-digit codes, unrestricted total is $10^6$.",
          "Forbidden substring 123 can start in positions 1, 2, 3, or 4.",
          "Each start position fixes three digits, leaving three free digits, so each gives $10^3$ forbidden codes.",
          "Most overlaps are impossible because the same position would need two different digits.",
          "The only possible overlap is positions 1 and 4, giving the code 123123.",
          "Forbidden codes: $4\\cdot10^3-1=3999$.",
          "Allowed codes: $10^6-3999=996001$.",
          "For jelly beans, solve $r+g+b=15$ with $r,g,b\\ge4$.",
          "Let $r'=r-4$, $g'=g-4$, $b'=b-4$. Then $r'+g'+b'=3$.",
          "The number of nonnegative solutions is $\\binom{3+3-1}{3-1}=\\binom52=10$."
        ],
        answer: "Allowed passcodes: 996,001. Different jelly bean bags: 10.",
        warning: "Forbidden substring problems are easy to overcount when two forbidden occurrences overlap."
      }
    ]
  },
  {
    date: "2024-05-14",
    part: "P1",
    parts: [
      {
        label: "Set operations and congruence class",
        steps: [
          "$C=\\{x\\in\\mathbb Z\\mid2\\le x<5\\}=\\{2,3,4\\}$.",
          "$A\\cup B=\\{1,2,4,5,6,8,9\\}$.",
          "$A\\cap B=\\{4,5\\}$.",
          "With universe $U=\\{0,1,2,3,4,5,6,7,8,9\\}$, $A'=\\{0,1,3,7,9\\}$.",
          "$C'=U\\setminus C=\\{0,1,5,6,7,8,9\\}$.",
          "$A\\cap C'=\\{5,6,8\\}$.",
          "$[-3]$ modulo 5 is the set of all integers congruent to -3, which is the same as congruent to 2 modulo 5.",
          "Examples greater than 293 include 297 and 302."
        ],
        answer: "$A\\cup B=\\{1,2,4,5,6,8,9\\}$, $A\\cap B=\\{4,5\\}$, $A'=\\{0,1,3,7,9\\}$, $A\\cap C'=\\{5,6,8\\}$, and examples from $[-3]$ are 297 and 302.",
        warning: "Complements depend on the given universe U."
      }
    ]
  },
  {
    date: "2024-05-14",
    part: "P2",
    parts: [
      {
        label: "Power set proof and binomial expansion",
        steps: [
          "A subset of an n-element set can have size 0, 1, 2, ..., n.",
          "There are $\\binom nk$ subsets of size k.",
          "So total subsets are $\\sum_{k=0}^n\\binom nk$.",
          "By the binomial theorem, this equals $(1+1)^n=2^n$.",
          "For $(9y-4x)^3$, use $a=9y$, $b=-4x$.",
          "Expansion: $729y^3-972xy^2+432x^2y-64x^3$."
        ],
        answer: "$|\\mathcal P(S)|=2^{|S|}$ and $(9y-4x)^3=729y^3-972xy^2+432x^2y-64x^3$.",
        warning: "Keep the variable order consistent when expanding mixed x/y terms."
      }
    ]
  },
  {
    date: "2024-05-14",
    part: "P3",
    parts: [
      {
        label: "Proof sequence",
        steps: [
          "Premises: $\\neg A\\to\\neg B$, $B$, and $A\\to C$.",
          "Use contrapositive on $\\neg A\\to\\neg B$ to get $B\\to A$.",
          "Use Modus Ponens with $B$ and $B\\to A$ to get A.",
          "Use Modus Ponens with A and $A\\to C$ to get C."
        ],
        answer: "The argument is valid and the conclusion C follows.",
        warning: "The key move is the contrapositive of the first implication."
      }
    ]
  },
  {
    date: "2024-05-14",
    part: "P4",
    parts: [
      {
        label: "Directed graph, simplicity, adjacency matrix",
        steps: [
          "Draw vertices 1 through 5.",
          "Draw directed edges: $1\\to2$, $1\\to3$, $3\\to4$, $4\\to5$, and $5\\to5$.",
          "The graph is not simple if loops are not allowed, because it has the loop $5\\to5$.",
          "The adjacency matrix has 1 in row i, column j when there is an edge $i\\to j$.",
          "Rows 1 through 5 are: 0 1 1 0 0; 0 0 0 0 0; 0 0 0 1 0; 0 0 0 0 1; 0 0 0 0 1."
        ],
        answer: "Directed graph as listed; not simple because of the loop; adjacency matrix rows are $01100,00000,00010,00001,00001$.",
        warning: "For directed graphs, row is start vertex and column is end vertex."
      }
    ]
  },
  {
    date: "2024-05-14",
    part: "P5",
    parts: [
      {
        label: "Induction and counterexamples",
        steps: [
          "For the sum $2+6+18+...+2\\cdot3^{n-1}=3^n-1$, base $n=1$: left $2$, right $2$.",
          "Assume true for k.",
          "Add the next term $2\\cdot3^k$ to both sides.",
          "$(3^k-1)+2\\cdot3^k=3\\cdot3^k-1=3^{k+1}-1$.",
          "For $n\\mid(n+2)$, choose $n=3$: 3 does not divide 5.",
          "For $n^2+24n+144>n!$, choose a large enough n such as 6? Check: $36+144+144=324>720$ is false, so n=6 is a counterexample."
        ],
        answer: "The induction proof works; counterexamples include $n=3$ for divisibility and $n=6$ for the factorial inequality.",
        warning: "One counterexample is enough to disprove a universal statement."
      }
    ]
  },
  {
    date: "2024-09-13",
    part: "P1",
    parts: [
      {
        label: "Strong induction for prime factorization",
        steps: [
          "Base case: $n=2$ is prime, so the statement holds.",
          "Strong hypothesis: assume every integer from 2 through k is prime or a product of primes.",
          "For $k+1$, either it is prime or composite.",
          "If prime, done.",
          "If composite, write $k+1=ab$ with $1<a<k+1$ and $1<b<k+1$.",
          "By the strong hypothesis, a and b are prime or products of primes.",
          "Therefore their product is a product of primes."
        ],
        answer: "Every integer greater than 1 is prime or a product of primes.",
        warning: "This needs strong induction because both factors may be earlier numbers, not just k."
      }
    ]
  },
  {
    date: "2024-09-13",
    part: "P2",
    parts: [
      {
        label: "Prime/parity and prime count",
        steps: [
          "Prove the contrapositive: if n is even, then $4^n-1$ is not prime.",
          "Let $n=2k$.",
          "Then $4^n-1=4^{2k}-1=(4^k-1)(4^k+1)$ by difference of squares.",
          "Both factors are greater than 1, so $4^n-1$ is composite.",
          "Therefore, if $4^n-1$ is prime, n must be odd.",
          "For $n^2-1$ prime, factor $n^2-1=(n-1)(n+1)$.",
          "If $n>2$, both factors are greater than 1, so composite.",
          "Check small positive n: n=1 gives 0, not prime; n=2 gives 3, prime.",
          "So exactly one positive integer works."
        ],
        answer: "Use parity/factoring. For $n^2-1$ prime, only $n=2$ works.",
        warning: "Always factor $n^2-1$ immediately."
      }
    ]
  },
  {
    date: "2024-09-13",
    part: "P3",
    parts: [
      {
        label: "Polynomial root and parity",
        steps: [
          "Given $b^2=4ac$, the quadratic has discriminant 0.",
          "The root is $x=-\\frac{b}{2a}$.",
          "For the root to be an integer, $2a$ must divide b.",
          "In particular, b must be even.",
          "For an example with negative integer root, choose root -1 and simple coefficients such as $a=1$, $b=2$, $c=1$.",
          "Then $b^2=4=4ac$ and $P(x)=x^2+2x+1$ has root -1."
        ],
        answer: "b must be even; one valid triple is $(1,2,1)$.",
        warning: "Use the repeated-root formula from discriminant 0."
      }
    ]
  },
  {
    date: "2024-09-13",
    part: "P4",
    parts: [
      {
        label: "Translate and negate",
        steps: [
          "Use $P(x)$ for person, $T(y)$ for time, and $F(x,y)$ for x is fooled at time y.",
          "'Some of the people' gives an existential person.",
          "'All of the time' gives a universal time.",
          "Formula: $\\exists x(P(x)\\land\\forall y(T(y)\\to F(x,y)))$.",
          "Negate by flipping $\\exists$ to $\\forall$ and pushing NOT inward.",
          "A clean negation is $\\forall x(P(x)\\to\\exists y(T(y)\\land\\neg F(x,y)))$."
        ],
        answer: "$\\exists x(P(x)\\land\\forall y(T(y)\\to F(x,y)))$; negation $\\forall x(P(x)\\to\\exists y(T(y)\\land\\neg F(x,y)))$.",
        warning: "The same person must be fooled all the time in the original statement."
      }
    ]
  },
  {
    date: "2024-09-13",
    part: "P5",
    parts: [
      {
        label: "Password counting",
        steps: [
          "$S_1\\cup S_2$ has $9+10=19$ letters.",
          "For unrestricted 4-letter passwords with repetition, use $19^4$.",
          "$19^4=130321$.",
          "For passwords without substring aa, use complement or casework by positions.",
          "The forbidden aa can start at positions 1, 2, or 3.",
          "Each forbidden position fixes two letters as a, leaving two free places: $19^2=361$.",
          "Initial forbidden count: $3\\cdot361=1083$.",
          "Overlaps: positions 1 and 2 force aaa plus one free letter, giving 19; positions 2 and 3 also give 19; positions 1 and 3 force aaaa, giving 1.",
          "The triple overlap is aaaa, giving 1.",
          "Forbidden passwords: $1083-19-19-1+1=1045$.",
          "Allowed passwords: $130321-1045=129276$."
        ],
        answer: "Part a: 130,321. Part b: 129,276.",
        warning: "Overlaps matter: aaaa contains aa in several positions."
      }
    ]
  },
  {
    date: "2025-03-28",
    part: "P1",
    parts: [
      {
        label: "Binary operation, rational membership, degree sum",
        steps: [
          "Division is not a binary operation on $\\mathbb Z$ because dividing two integers does not always give an integer, e.g. $1/2\\notin\\mathbb Z$.",
          "$-0.85=-85/100=-17/20$, so it is rational.",
          "$-0.85>-1$, so $-0.85\\in S$ is true.",
          "For any graph, sum the displayed vertex degrees directly or use the handshaking idea."
        ],
        answer: "Division is not a binary operation on $\\mathbb Z$; $-0.85\\in S$ is true; degree sum is found by adding all vertex degrees shown.",
        warning: "A binary operation on a set must always output another element of the same set."
      }
    ]
  },
  {
    date: "2025-03-28",
    part: "P2",
    parts: [
      {
        label: "Validity and negation",
        steps: [
          "From $\\neg(A\\lor\\neg B)$, use De Morgan to get $\\neg A\\land B$.",
          "By simplification, get $\\neg A$ and B.",
          "Use $B\\to C$ and B to get C.",
          "Conjoin $\\neg A$ and C.",
          "For negating $(C\\to D)\\to(\\neg B\\to A)$, use negated implication: antecedent true and consequent false.",
          "So get $(C\\to D)\\land\\neg(\\neg B\\to A)$.",
          "Negate the inner implication: $\\neg B\\land\\neg A$."
        ],
        answer: "Conclusion $\\neg A\\land C$ follows; negation is $(C\\to D)\\land\\neg B\\land\\neg A$.",
        warning: "Negating an implication gives P and not Q."
      }
    ]
  },
  {
    date: "2025-03-28",
    part: "P3",
    parts: [
      {
        label: "Poker and soup counting",
        steps: [
          "For three of a kind: choose the rank for the triple: 13 ways.",
          "Choose 3 suits out of 4 for that rank: $\\binom43$.",
          "Choose 2 other ranks from the remaining 12: $\\binom{12}{2}$.",
          "Choose one suit for each of those two ranks: $4^2$.",
          "Total: $13\\binom43\\binom{12}{2}4^2$.",
          "For soups with 4 ingredients from 9 and order irrelevant, use $\\binom94$."
        ],
        answer: "Three of a kind: $13\\binom43\\binom{12}{2}4^2=54912$. Soups: $\\binom94=126$.",
        warning: "The two side cards must not form a pair, so choose two different ranks."
      }
    ]
  },
  {
    date: "2025-03-28",
    part: "P4",
    parts: [
      {
        label: "Coprime and divisibility",
        steps: [
          "Coprime means $\\gcd(a,b)=1$.",
          "To prove $5\\mid(7^n-2^n)$, reduce modulo 5.",
          "$7\\equiv2\\pmod5$.",
          "So $7^n\\equiv2^n\\pmod5$.",
          "Therefore $7^n-2^n\\equiv0\\pmod5$."
        ],
        answer: "Coprime means gcd 1; $5\\mid(7^n-2^n)$ for all positive n.",
        warning: "The expression is about powers; use congruence before expanding anything."
      }
    ]
  },
  {
    date: "2025-03-28",
    part: "P5",
    parts: [
      {
        label: "Composite proof and onto function",
        steps: [
          "For $n>2$, factor $n^2-1=(n-1)(n+1)$.",
          "Both factors are greater than 1, so $n^2-1$ is composite, not prime.",
          "For $g(n)=f(n)+1$, find one n where the result is composite.",
          "Try $n=6$: $f(6)=2\\cdot3\\cdot5\\cdot7\\cdot11\\cdot13=30030$.",
          "Then $g(6)=30031$.",
          "$30031=59\\cdot509$, so it is composite.",
          "$f:\\mathbb N\\to\\mathbb N$ is not onto because values like 1 are never output."
        ],
        answer: "$n^2-1$ is not prime for $n>2$; $g(6)$ is composite; f is not onto.",
        warning: "For onto, one missing codomain value is enough."
      }
    ]
  },
  {
    date: "2025-05-19",
    part: "P1",
    parts: [
      {
        label: "Inclusion-exclusion and power set of Cartesian product",
        steps: [
          "In $1$ to $95$, multiples of 3: $\\lfloor95/3\\rfloor=31$.",
          "Multiples of 5: 19. Multiples of 7: 13.",
          "Pair overlaps: multiples of 15: 6; 21: 4; 35: 2.",
          "Triple overlap: multiples of 105: 0.",
          "Union size: $31+19+13-6-4-2+0=51$.",
          "$X\\times Y=\\{(1,3),(1,4),(2,3),(2,4)\\}$.",
          "The power set has all 16 subsets of those four ordered pairs."
        ],
        answer: "$|A\\cup B\\cup C|=51$; $\\mathcal P(X\\times Y)$ has 16 subsets.",
        warning: "Do not forget to subtract pairwise overlaps."
      }
    ]
  },
  {
    date: "2025-05-19",
    part: "P2",
    parts: [
      {
        label: "Graph definition, complement, connected proof",
        steps: [
          "An undirected graph is a pair $G=(V,E)$ where V is a set of vertices and E is a set of unordered pairs of vertices.",
          "$K_4'$ has the same 4 vertices but no edges, because $K_4$ already has every possible edge.",
          "If G is not connected, take two vertices u and v.",
          "If u and v are in different components of G, then uv is an edge in $G'$.",
          "If u and v are in the same component, choose w in a different component; then u-w-v is a path in $G'$.",
          "So $G'$ is connected."
        ],
        answer: "Definition as above; $K_4'$ is four isolated vertices; complement of a disconnected simple graph with at least two vertices is connected.",
        warning: "Complement edges are exactly the edges missing from the original simple graph."
      }
    ]
  },
  {
    date: "2025-05-19",
    part: "P3",
    parts: [
      {
        label: "Logic definitions and translation",
        steps: [
          "A contradiction is a formula that is false in every truth assignment.",
          "Modus Tollens: from $p\\to q$ and $\\neg q$, conclude $\\neg p$.",
          "$(A\\lor B)\\to(\\neg A\\land\\neg B)$ is not a tautology; take A true and B false.",
          "For 'Some lawyers admire only judges', define L(x), A(x,y), J(y).",
          "There exists a lawyer x such that every person y admired by x is a judge."
        ],
        answer: "Translation: $\\exists x(L(x)\\land\\forall y(A(x,y)\\to J(y)))$.",
        warning: "'Only judges' means admired things must be judges, not that all judges are admired."
      }
    ]
  },
  {
    date: "2025-05-19",
    part: "P4",
    parts: [
      {
        label: "Equivalence relation on binary strings",
        steps: [
          "The relation says two strings are related when they have the same first bit and same last bit.",
          "Reflexive: every string has the same first and last bit as itself.",
          "Symmetric: if x matches y on first/last bits, then y matches x.",
          "Transitive: if x matches y and y matches z, then x matches z.",
          "There are 4 equivalence classes because first bit has 2 choices and last bit has 2 choices.",
          "For length 8 strings, fixing first and last leaves 6 free bits, so each class has $2^6=64$ strings."
        ],
        answer: "It is an equivalence relation; it has 4 classes; each class has 64 strings.",
        warning: "The middle six bits do not affect the equivalence class."
      }
    ]
  },
  {
    date: "2025-05-19",
    part: "P5",
    parts: [
      {
        label: "Fibonacci induction and divisibility implication",
        steps: [
          "For the Fibonacci sum, prove by induction that $\\sum_{i=0}^nF_i=F_{n+2}-1$.",
          "Base case: $F_0=0$ and $F_2-1=1-1=0$.",
          "Assume true for k.",
          "Add $F_{k+1}$ to both sides: $F_{k+2}-1+F_{k+1}=F_{k+3}-1$.",
          "For divisibility, prove contrapositive: if $ab\\mid c$, then $a\\mid c$.",
          "Since $c=abk=a(bk)$, a divides c.",
          "Therefore if a does not divide c, then ab does not divide c."
        ],
        answer: "Both statements are proved by induction/contrapositive.",
        warning: "The Fibonacci step uses the recurrence $F_{k+3}=F_{k+2}+F_{k+1}$."
      }
    ]
  },
  {
    date: "2025-08-27",
    part: "P1",
    parts: [
      {
        label: "Proposition, biconditional, truth table",
        steps: [
          "A proposition is a declarative statement that is either true or false.",
          "$A\\leftrightarrow B$ means A iff B, equivalent to $(A\\to B)\\land(B\\to A)$.",
          "The biconditional is true when A and B have the same truth value.",
          "$\\neg A\\to B$ rewrites as $A\\lor B$.",
          "So $A\\lor B\\leftrightarrow(\\neg A\\to B)$ becomes $A\\lor B\\leftrightarrow A\\lor B$, which is always true."
        ],
        answer: "The final formula is a tautology.",
        warning: "Use parentheses around the biconditional expression when building the truth table."
      }
    ]
  },
  {
    date: "2025-08-27",
    part: "P2",
    parts: [
      {
        label: "Induction and geometric sum",
        steps: [
          "For $1+2+...+n=\\frac{n(n+1)}2$, base n=1 is true.",
          "Assume true for k, then add k+1 and simplify to $\\frac{(k+1)(k+2)}2$.",
          "For the geometric sum, use induction with old sum plus the new term $ar^{k+1}$.",
          "The formula becomes $a\\frac{r^{n+1}-1}{r-1}$, equivalent to the exam's expression.",
          "For $\\sum_{k=0}^n2^k$, set $a=1$ and $r=2$ to get $2^{n+1}-1$."
        ],
        answer: "Arithmetic sum proved; geometric sum formula proved; $\\sum_{k=0}^n2^k=2^{n+1}-1$.",
        warning: "Be consistent about whether the sum starts at 0 or 1."
      }
    ]
  },
  {
    date: "2025-08-27",
    part: "P3",
    parts: [
      {
        label: "Pigeonhole questions",
        steps: [
          "For birthdays including leap years, there are 366 possible birthdays.",
          "To guarantee two people share one, need 367 people.",
          "For pairs adding to 22 in $\\{2,4,...,20\\}$, boxes are pairs: (2,20), (4,18), (6,16), (8,14), (10,12).",
          "There are 5 boxes, so choosing 6 numbers forces one complete pair.",
          "For n+1 numbers and n remainders, the boxes are remainders 0 through n-1.",
          "By pigeonhole, two numbers share a remainder."
        ],
        answer: "367 people; 6 selected numbers; proof by n remainder boxes.",
        warning: "The hard part is choosing the right boxes."
      }
    ]
  },
  {
    date: "2025-08-27",
    part: "P4",
    parts: [
      {
        label: "Function from people to shoes",
        steps: [
          "Each person is wearing exactly one left shoe, so each input has one output. It is a function.",
          "It is one-to-one if different people have different left shoes. In a normal meeting, one left shoe is worn by one person, so yes.",
          "It is not onto T if T is all shoes in the room, because right shoes are in T but are not outputs of a left-shoe function."
        ],
        answer: "Function: yes. One-to-one: yes under normal shoe ownership/wearing assumption. Onto all shoes: no.",
        warning: "Onto depends on T being all shoes, not only left shoes."
      }
    ]
  },
  {
    date: "2025-08-27",
    part: "P5",
    parts: [
      {
        label: "Graph definition, handshaking, party graph",
        steps: [
          "An undirected graph is $G=(V,E)$ with vertices V and edges E as unordered pairs.",
          "Every edge touches two vertices.",
          "When summing degrees over all vertices, each edge is counted exactly twice.",
          "Therefore $\\sum_{v\\in V}\\deg(v)=2|E|$.",
          "At a party with n people, handshakes form $K_n$.",
          "$\\binom n2=28$, so $n(n-1)/2=28$.",
          "$n(n-1)=56$, and $8\\cdot7=56$, so n=8."
        ],
        answer: "Handshaking lemma proved; there were 8 people.",
        warning: "Each handshake is one edge between two people."
      }
    ]
  },
  {
    date: "2026-03-26",
    part: "Q1",
    parts: [
      {
        label: "Part A) Translate the graduation sentence",
        steps: [
          "First write what each letter means: g = you can graduate, r = requirements completed, m = you owe money, b = overdue library book.",
          "The sentence says: 'You can graduate only if ...'.",
          "In logic, 'P only if Q' means $P\\to Q$.",
          "Here P is g.",
          "The required condition Q has three parts: completed requirements, do not owe money, and no overdue book.",
          "That becomes $r\\land\\neg m\\land\\neg b$.",
          "Put them together: $g\\to(r\\land\\neg m\\land\\neg b)$."
        ],
        answer: "$g\\to(r\\land\\neg m\\land\\neg b)$.",
        warning: "Do not reverse 'only if'. The sentence does not say $r\\land\\neg m\\land\\neg b\\to g$."
      },
      {
        label: "Part B) Prove $\\sqrt2$ is irrational by contradiction",
        steps: [
          "A proof by contradiction starts by assuming the opposite of what we want.",
          "Assume $\\sqrt2$ is rational.",
          "Then $\\sqrt2=\\frac ab$ for integers a and b, with the fraction written in lowest terms.",
          "Square both sides: $2=\\frac{a^2}{b^2}$.",
          "Multiply by $b^2$: $a^2=2b^2$.",
          "This means $a^2$ is even, so a is even.",
          "Write $a=2k$.",
          "Substitute: $(2k)^2=2b^2$, so $4k^2=2b^2$.",
          "Divide by 2: $b^2=2k^2$.",
          "So $b^2$ is even, which means b is even.",
          "Now both a and b are even, so the fraction $\\frac ab$ was not in lowest terms.",
          "That contradicts our assumption. Therefore $\\sqrt2$ is irrational."
        ],
        answer: "$\\sqrt2$ is irrational.",
        warning: "The contradiction is not just 'a and b are even'; it is that a and b are even even though the fraction was chosen in lowest terms."
      },
      {
        label: "Part C-i) Trace `for_all(numbers, is_even)`",
        steps: [
          "The list is `[4, 7, 2, 9, 6]`.",
          "`for_all` checks whether every element passes the predicate.",
          "The predicate is `is_even(x)`, meaning x is even.",
          "First iteration: x = 4. `is_even(4)` is True, so the loop continues.",
          "Second iteration: x = 7. `is_even(7)` is False.",
          "`for_all` returns False immediately when it finds the first counterexample.",
          "The function stops at 7 and does not need to check 2, 9, or 6."
        ],
        answer: "It returns `False` at element `7`.",
        warning: "`for_all` does not count how many values pass. One counterexample is enough."
      },
      {
        label: "Part C-ii) Trace `exists(numbers, lambda x: x > 10)`",
        steps: [
          "`exists` checks whether at least one element passes the predicate.",
          "The predicate is `x > 10`.",
          "Check the list: 4 is not greater than 10.",
          "7 is not greater than 10.",
          "2 is not greater than 10.",
          "9 is not greater than 10.",
          "6 is not greater than 10.",
          "No witness is found."
        ],
        answer: "It returns `False`.",
        warning: "`exists` needs one successful witness. If none is found, it returns False."
      },
      {
        label: "Part C-iii) Empty-list behavior",
        steps: [
          "`for_all([], is_even)` has no elements to check.",
          "It never finds a counterexample.",
          "So `for_all([], is_even)` returns True.",
          "`exists([], is_even)` also has no elements to check.",
          "It never finds a witness.",
          "So `exists([], is_even)` returns False.",
          "This matches logic: a universal statement over an empty set is vacuously true, but an existential statement over an empty set is false."
        ],
        answer: "`for_all([], is_even)` returns `True`; `exists([], is_even)` returns `False`.",
        warning: "Empty lists are exam traps: universal and existential checks behave differently."
      }
    ]
  },
  {
    date: "2026-03-26",
    part: "Q2",
    parts: [
      {
        label: "Surjective function, Big-O, code tracing",
        steps: [
          "$f:\\mathbb Z\\times\\mathbb Z\\to\\mathbb Z$ by $f(m,n)=m+n$ is onto because for any target z, choose $(z,0)$.",
          "For $(n\\log n+1)^2+(\\log n+1)(n^2+1)$, the dominant term is $n^2(\\log n)^2$.",
          "So tight Big-O is $O(n^2(\\log n)^2)$.",
          "For mapping values [1,2,1,3], the set of values is {1,2,3}.",
          "Lengths are 4 and 3, so not one-to-one.",
          "Codomain {1,2,3,4} is not a subset of range {1,2,3}, so not onto."
        ],
        answer: "Onto: yes for $m+n$; Big-O: $O(n^2(\\log n)^2)$; mapping is neither one-to-one nor onto.",
        warning: "For onto code, compare against the codomain, not only the values that appear."
      }
    ]
  },
  {
    date: "2026-03-26",
    part: "Q3",
    parts: [
      {
        label: "Euclidean algorithm and linear search",
        steps: [
          "Use Euclid: $33341=3\\cdot10223+2672$.",
          "$10223=3\\cdot2672+2207$.",
          "$2672=1\\cdot2207+465$.",
          "$2207=4\\cdot465+347$.",
          "$465=1\\cdot347+118$.",
          "$347=2\\cdot118+111$.",
          "$118=1\\cdot111+7$.",
          "$111=15\\cdot7+6$.",
          "$7=1\\cdot6+1$, so gcd is 1.",
          "Linear search checks list elements one by one until x is found or the list ends.",
          "Worst case uses n comparisons."
        ],
        answer: "$\\gcd(10223,33341)=1$; linear search is $O(n)$ and uses n comparisons in the worst case.",
        warning: "Write Euclid in descending pairs; arithmetic slips are easy here."
      }
    ]
  },
  {
    date: "2026-03-26",
    part: "Q4",
    parts: [
      {
        label: "Induction and bit-string recurrence",
        steps: [
          "For $\\sum_{i=1}^n i2^{i-1}=(n-1)2^n+1$, base n=1 gives 1 on both sides.",
          "Assume true for k.",
          "Add $(k+1)2^k$ to both sides.",
          "$(k-1)2^k+1+(k+1)2^k=(2k)2^k+1=k2^{k+1}+1$, which is the target for k+1.",
          "For bit strings without 01, once a 0 appears, no later 1 may appear.",
          "So valid strings are some number of 1s followed by some number of 0s.",
          "There are n+1 such strings of length n, so a recurrence is $a_n=a_{n-1}+1$ with $a_0=1$."
        ],
        answer: "Induction proves the formula; one recurrence is $a_n=a_{n-1}+1$, $a_0=1$.",
        warning: "Do not count all binary strings; the forbidden pattern forces all 1s before all 0s."
      }
    ]
  },
  {
    date: "2026-03-26",
    part: "Q5",
    parts: [
      {
        label: "Equivalence relation and Euler circuit",
        steps: [
          "Relation: $((a,b),(c,d))\\in R$ iff $ad=bc$.",
          "Reflexive: $ab=ba$, so each pair relates to itself.",
          "Symmetric: if $ad=bc$, then $cb=da$ by equality symmetry/commutativity, so the relation reverses.",
          "Transitive: if $ad=bc$ and $cf=de$, combine as fractions idea: $a/b=c/d$ and $c/d=e/f$, so $a/b=e/f$, hence $af=be$.",
          "Therefore R is an equivalence relation.",
          "An Euler circuit requires every vertex to have even degree in a connected graph.",
          "The Konigsberg bridge graph has vertices of odd degree, so it has no Euler circuit."
        ],
        answer: "R is reflexive, symmetric, and transitive; the Konigsberg graph has no Euler circuit because not all degrees are even.",
        warning: "For transitivity, keep variables organized; the relation behaves like equality of fractions."
      }
    ]
  }
];
