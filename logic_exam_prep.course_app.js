(() => {
  const data = window.examStudio;
  const legacy = window.logicPrepData || {};
  if (!data) return;

  const root = document.getElementById("app-root");
  const nav = document.getElementById("topic-nav");
  const stats = document.getElementById("hero-stats");
  const route = document.getElementById("study-route");

  const hashTopicId = window.location.hash.replace("#", "");
  let activeTopicId = data.topics.some((topic) => topic.id === hashTopicId)
    ? hashTopicId
    : data.topics.some((topic) => topic.id === "math-fundamentals")
      ? "math-fundamentals"
      : data.topics[0]?.id;
  const quizState = new Map();
  const visitedTopics = new Set();
  const lawTrainerState = {
    category: "exam-core",
    index: 0,
    revealed: false,
    known: 0,
    learning: 0
  };
  const hintState = new Map(); // qIndex -> shown
  const labState = new Map();
  const adaptiveStoreKey = "exam-studio-adaptive-v1";
  const adaptiveState = loadAdaptiveState();
  const examCoach = {
    "logic-proofs": {
      cues: ["Truth table", "tautology / contradiction", "proof sequence", "negate implication", "contradiction proof"],
      attack: ["Find the main connective before calculating.", "For a truth table, build inner columns first.", "For a proof sequence, split premises and write one legal rule per line.", "For negation, hit the outermost connective first.", "End with the exact requested conclusion, not a similar sentence."],
      mistakes: ["Treating implication like ordinary if/then instead of the T -> F rule.", "Skipping rule names in proof sequences.", "Negating an implication as another implication.", "Calling a formula a tautology after checking only one row."],
      firstMove: "Circle the main connective and decide: truth table, equivalence rewrite, or proof-rule chain.",
      scoreTip: "Even if the final proof is hard, earn points by writing the premises, the target, and valid first rules such as De Morgan, MP, MT, or contrapositive."
    },
    "predicate-quantifiers": {
      cues: ["all", "some", "no", "only", "not every", "negate the predicate formula"],
      attack: ["Define predicates first.", "Choose the quantifier skeleton before writing connectives.", "Use implication for universal restrictions.", "Use AND for existential witnesses.", "For negation, flip quantifiers one at a time and push NOT inward."],
      mistakes: ["Using AND for 'all A are B'.", "Using implication for 'some A are B'.", "Reversing 'only'.", "Changing variable order in nested quantifiers without noticing."],
      firstMove: "Underline the English keyword: all/some/no/only. That decides most of the formula.",
      scoreTip: "Always write predicate definitions. They are easy points and make the translation much safer."
    },
    "sets-functions": {
      cues: ["power set", "Cartesian product", "set operations", "injective", "surjective", "binary operation", "onto"],
      attack: ["Write the domain and codomain explicitly.", "For sets, compute inside operations and complements step by step.", "For power sets, count elements first.", "For injective, look for collisions.", "For surjective, check every codomain target is hit."],
      mistakes: ["Confusing codomain with range.", "Thinking a function must be one-to-one.", "Forgetting that power set size is 2 to the set size.", "Ignoring undefined outputs in binary-operation questions."],
      firstMove: "Write 'domain -> codomain' and list what each side contains.",
      scoreTip: "For function questions, one good counterexample can earn most of the points."
    },
    "relations-graphs": {
      cues: ["equivalence relation", "degree sum", "complete graph", "adjacency matrix", "connected", "Euler circuit", "graph complement"],
      attack: ["For relations, test reflexive, symmetric, transitive separately.", "For equivalence classes, identify exactly what feature is shared.", "For graphs, list vertices, edges, and degrees.", "Use handshaking for degree sums.", "For Euler circuits, check connectedness and even degrees."],
      mistakes: ["Mixing symmetric with antisymmetric.", "Forgetting loops in reflexive relations.", "Counting each undirected edge twice.", "Drawing graph complements with old edges still included."],
      firstMove: "Make a small table: vertices/elements, edges/pairs, degrees/properties.",
      scoreTip: "When proving an equivalence relation, label the three mini-proofs. The grader can award partial points cleanly."
    },
    "number-theory": {
      cues: ["divides", "gcd", "Euclidean algorithm", "Bezout", "mod", "coprime", "prime/composite", "parity"],
      attack: ["Translate divides into an equation.", "For gcd, run Euclid line by line.", "For Bezout, back-substitute the Euclidean algorithm.", "For parity, split into even/odd or factor.", "For modular powers, look for cycles."],
      mistakes: ["Dividing in modular arithmetic without an inverse.", "Stopping at remainder 0 instead of the last nonzero remainder.", "Forgetting that prime/composite only applies to integers greater than 1.", "Not stating why a multiplier is an integer in divisibility proofs."],
      firstMove: "Rewrite the statement using definitions: a divides b means b = ak.",
      scoreTip: "Show every Euclidean division line. Arithmetic work is the solution in gcd questions."
    },
    "combinatorics": {
      cues: ["how many", "order matters", "repetition allowed", "at least one", "forbidden substring", "pigeonhole", "cards"],
      attack: ["Ask whether order matters.", "Ask whether repetition is allowed.", "Separate restrictions from the unrestricted total.", "Use complement for 'at least one' or forbidden cases.", "For pigeonhole, name objects and boxes."],
      mistakes: ["Using n! automatically.", "Counting ordered arrangements when the question asks for sets/hands.", "Forgetting to subtract forbidden cases.", "Choosing the wrong pigeonholes."],
      firstMove: "Write four words: order? repetition? restriction? complement?",
      scoreTip: "A clear counting expression often earns points even if the final arithmetic is unfinished."
    },
    "induction-recurrence": {
      cues: ["prove for all n", "base step", "inductive hypothesis", "recurrence", "initial conditions", "bit strings"],
      attack: ["Write the base case.", "Write the inductive hypothesis exactly.", "Write the k+1 target before simplifying.", "For sums, split the new sum into old sum plus new term.", "For recurrences, compute initial values before guessing a formula."],
      mistakes: ["Assuming the k+1 statement.", "Forgetting the starting value of n.", "Not using the inductive hypothesis.", "Solving a recurrence without initial conditions."],
      firstMove: "Write three lines: Base, Assume P(k), Need P(k+1).",
      scoreTip: "The target line is worth time. If the algebra gets messy, the grader still sees the correct proof structure."
    },
    "binomial-polynomials": {
      cues: ["expand", "Pascal triangle", "coefficient", "root", "factor", "remainder", "polynomial"],
      attack: ["For expansions, write the coefficient row first.", "Track signs separately from powers.", "For one coefficient, write the general term and match exponents.", "For factor/root questions, substitute the candidate value.", "Use remainder theorem instead of long division when possible."],
      mistakes: ["Losing minus signs in odd powers.", "Expanding the whole expression when only one coefficient is needed.", "Plugging +a for x+a instead of -a.", "Forgetting Pascal coefficients."],
      firstMove: "Write the binomial row or plug the proposed root before doing anything else.",
      scoreTip: "For signed cubics, make a four-term template first, then fill signs and coefficients."
    },
    "algorithms-growth": {
      cues: ["trace code", "for_all", "exists", "Big-O", "nested loop", "linear search", "one-to-one code", "onto code"],
      attack: ["For code tracing, make a variable table.", "For quantifier functions, stop at the first witness or counterexample.", "For Big-O, expand only enough to find the dominant term.", "For loops, ask whether they are sequential, nested, or halving.", "For mapping code, compute values, set(values), and codomain comparison."],
      mistakes: ["Guessing code output without a table.", "Treating sequential loops like nested loops.", "Keeping constants in Big-O.", "Forgetting that exists over an empty list is false."],
      firstMove: "Make a trace table or identify the dominant term. Do not do both at once.",
      scoreTip: "Write the intermediate values the code asks for; exams often award points before the final True/False."
    }
  };

  const learningLabs = {
    "predicate-quantifiers": {
      badge: "Quantifier lab",
      title: "Translate before you solve",
      intro: "Pick the logical skeleton first. The feedback explains the tempting wrong move.",
      type: "choice",
      items: [
        {
          concept: "universal-implication",
          prompt: "All students who pass practiced old exams.",
          ask: "Let $S(x)$ mean student, $P(x)$ mean passed, and $O(x)$ mean practiced old exams. Which formula has the right skeleton?",
          options: [
            "$\\forall x((S(x) \\land P(x)) \\to O(x))$",
            "$\\forall x(S(x) \\land P(x) \\land O(x))$",
            "$\\exists x((S(x) \\land P(x)) \\to O(x))$"
          ],
          answer: 0,
          why: "A universal restriction uses implication: if x is a passing student, then x practiced old exams.",
          trap: "The AND version says every object is a student, passed, and practiced. That is much stronger than the English sentence."
        },
        {
          concept: "existential-and",
          prompt: "Some lawyer admires only judges.",
          ask: "Which first move is safest?",
          options: [
            "Use $\\exists x$ for the lawyer, then a universal implication for everything they admire.",
            "Use $\\forall x$ because the word only always means every person.",
            "Use $Judge(y) \\to Admires(x,y)$ because only judges are admired."
          ],
          answer: 0,
          why: "Some means choose one witness. Only judges means anything admired by that witness must be a judge.",
          trap: "$Judge(y) \\to Admires(x,y)$ says the lawyer admires all judges. Only judges does not say that."
        },
        {
          concept: "quantifier-negation",
          prompt: "$\\neg\\forall x\\exists y\\, R(x,y)$",
          ask: "Push the negation inward.",
          options: [
            "$\\exists x\\forall y\\, \\neg R(x,y)$",
            "$\\forall x\\exists y\\, \\neg R(x,y)$",
            "$\\exists x\\exists y\\, \\neg R(x,y)$"
          ],
          answer: 0,
          why: "Each time NOT crosses a quantifier, it flips it: not-for-all becomes exists, not-exists becomes for-all.",
          trap: "Changing only the predicate is not enough. The quantifiers must flip one layer at a time."
        }
      ]
    },
    "combinatorics": {
      badge: "Combinatorics classifier",
      title: "Choose the counting method first",
      intro: "Classify the task before calculating. This prevents most exam mistakes in counting questions.",
      type: "choice",
      items: [
        {
          concept: "combination",
          prompt: "A hockey team chooses 5 players from 27 for a line.",
          ask: "What is the method?",
          options: ["Combination: $\\binom{27}{5}$", "Permutation: $P(27,5)$", "Repetition: $27^5$"],
          answer: 0,
          why: "A selected line is a group. The order of the names does not create a new line.",
          trap: "Using a permutation counts the same five players many times in different orders."
        },
        {
          concept: "multiplication-rule",
          prompt: "Three dice are rolled and the last roll must be even.",
          ask: "What should you count?",
          options: ["Ordered outcomes: $6\\cdot6\\cdot3$", "Unordered sets: $\\binom63$", "Only even triples: $3^3$"],
          answer: 0,
          why: "Roll order matters, and only the final position is restricted to 2, 4, or 6.",
          trap: "$3^3$ incorrectly makes every roll even."
        },
        {
          concept: "complement",
          prompt: "How many bit strings of length 8 contain at least one 1?",
          ask: "What is the cleanest method?",
          options: ["Complement: all strings minus the all-zero string", "Permutation: $8!$", "Pigeonhole principle"],
          answer: 0,
          why: "At least one is often easiest by subtracting the one forbidden case from all $2^8$ strings.",
          trap: "Permutation is about arranging distinct objects. Bit strings allow repeated 0s and 1s."
        }
      ]
    },
    "induction-recurrence": {
      badge: "Induction builder",
      title: "Build the proof skeleton",
      intro: "Choose the line that belongs in each proof slot. The goal is structure before algebra.",
      type: "builder",
      concept: "induction-template",
      statement: "Prove $1+2+\\cdots+n=\\frac{n(n+1)}2$ for all $n\\ge1$.",
      slots: [
        {
          key: "base",
          label: "Base case",
          answer: 0,
          options: [
            "For $n=1$: $1=\\frac{1(1+1)}2=1$.",
            "Assume the formula is true for $n=k$.",
            "Therefore it is true for every integer."
          ]
        },
        {
          key: "hypothesis",
          label: "Inductive hypothesis",
          answer: 1,
          options: [
            "Prove $1+2+\\cdots+(k+1)=\\frac{(k+1)(k+2)}2$.",
            "Assume $1+2+\\cdots+k=\\frac{k(k+1)}2$ for some $k\\ge1$.",
            "Check $n=2$ only."
          ]
        },
        {
          key: "target",
          label: "Target",
          answer: 0,
          options: [
            "Need $1+2+\\cdots+k+(k+1)=\\frac{(k+1)(k+2)}2$.",
            "Need $1+2+\\cdots+k=\\frac{k(k+1)}2$.",
            "Need $k=1$."
          ]
        },
        {
          key: "use-ih",
          label: "Use the hypothesis",
          answer: 2,
          options: [
            "$\\frac{(k+1)(k+2)}2 + (k+1)$",
            "$1+2+\\cdots+k+(k+1)=k+(k+1)$",
            "$1+2+\\cdots+k+(k+1)=\\frac{k(k+1)}2+(k+1)$"
          ]
        },
        {
          key: "final",
          label: "Final form",
          answer: 1,
          options: [
            "$\\frac{k(k+1)}2+(k+1)=\\frac{k(k+1)}2$",
            "$\\frac{k(k+1)}2+(k+1)=\\frac{(k+1)(k+2)}2$",
            "$\\frac{k(k+1)}2+(k+1)=\\frac{k(k+2)}2$"
          ]
        }
      ]
    }
  };

  function loadAdaptiveState() {
    try {
      const parsed = JSON.parse(localStorage.getItem(adaptiveStoreKey) || "{}");
      return {
        wrongByConcept: parsed.wrongByConcept || {},
        completedTopics: parsed.completedTopics || {},
        quizScores: parsed.quizScores || {},
        confidence: parsed.confidence || {},
        memoryCards: parsed.memoryCards || {}
      };
    } catch (error) {
      return { wrongByConcept: {}, completedTopics: {}, quizScores: {}, confidence: {}, memoryCards: {} };
    }
  }

  function saveAdaptiveState() {
    localStorage.setItem(adaptiveStoreKey, JSON.stringify(adaptiveState));
  }

  function conceptKey(topicId, concept) {
    return `${topicId}:${concept || "general"}`;
  }

  function recordConceptResult(topicId, concept, correct) {
    const key = conceptKey(topicId, concept);
    if (correct) {
      adaptiveState.completedTopics[topicId] = true;
    } else {
      adaptiveState.wrongByConcept[key] = (adaptiveState.wrongByConcept[key] || 0) + 1;
    }
    saveAdaptiveState();
  }

  function adaptiveMessage(topicId, concept, fallbackReview) {
    const wrong = adaptiveState.wrongByConcept[conceptKey(topicId, concept)] || 0;
    if (wrong >= 3) {
      return `<div class="adaptive-callout strong"><strong>Review now:</strong> You have missed this concept ${wrong} times. Go back to ${fallbackReview || "the Exam method and worked examples"} before doing more exam questions.</div>`;
    }
    if (wrong >= 2) {
      return `<div class="adaptive-callout"><strong>Pattern detected:</strong> This concept has caused two misses. Read the worked example, then retry a similar question before moving on.</div>`;
    }
    return "";
  }

  function topicById(id) {
    return data.topics.find((topic) => topic.id === id) || data.topics[0];
  }

  function orderedTopics() {
    const priority = ["math-fundamentals", "very-soft-start"];
    const byId = new Map(data.topics.map((topic) => [topic.id, topic]));
    return [
      ...priority.map((id) => byId.get(id)).filter(Boolean),
      ...data.topics.filter((topic) => !priority.includes(topic.id))
    ];
  }

  function lawCards() {
    return (legacy.lawGroups || []).flatMap((group) =>
      group.rows.map((row, index) => ({
        id: `${group.title}-${index}`,
        family: group.family,
        title: group.title,
        source: group.source,
        name: row[0],
        prompt: row[1],
        answer: row[2],
        cue: row[3]
      }))
    );
  }

  function legacyPracticeForTopic(topic) {
    const categoryMap = {
      "logic-proofs": new Set(["truth", "laws", "proof"]),
      "predicate-quantifiers": new Set(["translation", "quantifier"])
    };
    const allowed = categoryMap[topic.id];
    if (!allowed) return [];

    return (legacy.drillBank || [])
      .filter((item) => allowed.has(item.category))
      .map((item) => ({
        q: item.question,
        options: item.options,
        answer: item.answer,
        why: item.explanation,
        legacy: true
      }));
  }

  function practiceItemsForTopic(topic) {
    return [...topic.practiceQuiz, ...legacyPracticeForTopic(topic)];
  }

  function lawCategoryCards(category) {
    const cards = lawCards();
    const examCoreNames = [
      "Conditional law",
      "Negated conditional",
      "Contrapositive",
      "Biconditional law",
      "De Morgan",
      "Modus Ponens (MP)",
      "Modus Tollens (MT)",
      "Simplification (Simp)",
      "Conjunction (Conj)",
      "Direct negation",
      "Nested De Morgan",
      "Tautology",
      "Contradiction",
      "Valid argument"
    ];

    if (category === "exam-core") {
      return cards.filter((card) => examCoreNames.some((name) => card.name.includes(name))).slice(0, 24);
    }

    return cards.filter((card) => card.family === category);
  }

  function lawCategories() {
    return [
      ["exam-core", "Exam Core"],
      ["symbols", "Symbols"],
      ["propositional", "Rewrites"],
      ["inference", "Proof Rules"],
      ["quantifier", "Quantifiers"],
      ["validity", "Validity"]
    ];
  }

  function renderHero() {
    stats.innerHTML = data.stats.map(([label, detail]) => `
      <div class="stat-chip">
        <strong>${label}</strong>
        <span>${detail}</span>
      </div>
    `).join("");

    route.innerHTML = data.route.map((item) => `<li>${item}</li>`).join("");
  }

  function renderNav() {
    nav.innerHTML = orderedTopics().map((topic) => {
      const isActive = topic.id === activeTopicId;
      const isVisited = visitedTopics.has(topic.id);
      return `
        <button class="nav-btn ${isActive ? "is-active" : ""} ${isVisited && !isActive ? "visited" : ""}" data-topic="${topic.id}">
          ${topic.short}${isVisited && !isActive ? '<span class="nav-check">✓</span>' : ""}
        </button>
      `;
    }).join("");

    nav.querySelectorAll("[data-topic]").forEach((button) => {
      button.addEventListener("click", () => {
        activeTopicId = button.dataset.topic;
        history.replaceState(null, "", `#${activeTopicId}`);
        render();
      });
    });
  }

  function renderVisual(visual) {
    const body = {
      "truth-grid": `
        <div class="truth-mini">
          <div>p</div><div>q</div><div>p -> q</div>
          <div>F</div><div>F</div><div class="truth-true">T</div>
          <div>F</div><div>T</div><div class="truth-true">T</div>
          <div>T</div><div>F</div><div class="truth-false">F</div>
          <div>T</div><div>T</div><div class="truth-true">T</div>
        </div>
      `,
      "quantifier-flow": `
        <div class="quantifier-visual">
          <div class="q-column"><strong>$\\forall x\\,\\exists y$</strong><span>$x_1\\to y_1$</span><span>$x_2\\to y_2$</span><span>$x_3\\to y_3$</span></div>
          <div class="q-column fixed"><strong>$\\exists y\\,\\forall x$</strong><span>$x_1\\to y^*$</span><span>$x_2\\to y^*$</span><span>$x_3\\to y^*$</span></div>
        </div>
      `,
      "mapping": `
        <div class="mapping-visual">
          <div><span>a</span><span>b</span><span>c</span></div>
          <div class="arrows"><span>-></span><span>-></span><span>-></span></div>
          <div><span>1</span><span>2</span><span>1</span></div>
        </div>
      `,
      "graph": `
        <div class="graph-visual" aria-label="Triangle graph visual">
          <span class="node n1">A</span><span class="node n2">B</span><span class="node n3">C</span>
          <span class="edge e1"></span><span class="edge e2"></span><span class="edge e3"></span>
        </div>
      `,
      "euclid": `
        <div class="ladder-visual">
          <div>102 = 2·38 + 26</div>
          <div>38 = 1·26 + 12</div>
          <div>26 = 2·12 + 2</div>
          <div>12 = 6·2 + 0</div>
        </div>
      `,
      "counting-tree": `
        <div class="decision-visual">
          <div>Does order matter?</div>
          <div>Is repetition allowed?</div>
          <div>Is there a restriction?</div>
          <strong>Choose formula or cases</strong>
        </div>
      `,
      "domino": `
        <div class="domino-visual">
          <span>P(1)</span><span>P(k)</span><span>P(k+1)</span><span>All n</span>
        </div>
      `,
      "pascal": `
        <div class="pascal-visual">
          <div>1</div><div>1 1</div><div>1 2 1</div><div>1 3 3 1</div><div>1 4 6 4 1</div>
        </div>
      `,
      "code-trace": `
        <div class="code-trace-visual">
          <div><strong>for_all</strong><span>stop at first false</span></div>
          <div><strong>exists</strong><span>stop at first true</span></div>
          <div><strong>empty</strong><span>∀ true, ∃ false</span></div>
        </div>
      `,
      "fundamentals-map": `
        <div class="fundamentals-visual">
          <div><strong>Symbols</strong><span>$\\in,\\cup,\\cap,\\forall,\\exists,\\sum$</span></div>
          <div><strong>Sets</strong><span>collections, products, power sets</span></div>
          <div><strong>Rules</strong><span>commutative, associative, distributive</span></div>
          <div><strong>Structures</strong><span>functions, relations, graphs</span></div>
          <div><strong>Numerical</strong><span>$\\lfloor x\\rfloor,\\lceil x\\rceil,n!,\\log_2,\\bmod$</span></div>
          <div><strong>Logic/Proof</strong><span>$p\\to q$, counterexamples, direct proof</span></div>
        </div>
      `,
      "soft-start-road": `
        <div class="soft-road-visual">
          <div><strong>1</strong><span>Read symbols as words</span></div>
          <div><strong>2</strong><span>Name the object: set, number, function, graph</span></div>
          <div><strong>3</strong><span>Choose the task: compute, decide, translate, prove, draw</span></div>
          <div><strong>4</strong><span>Copy the method from a worked example</span></div>
        </div>
      `,
      "exam-timeline": `
        <div class="timeline-visual">
          <span>2023</span><span>2024</span><span>2025</span><span>2026</span>
        </div>
      `
    }[visual.type] || "";

    return `
      <section class="panel visual-panel">
        <div>
          <div class="badge accent-navy">Illustration</div>
          <h2>${visual.title}</h2>
          <p class="lead">${visual.caption}</p>
        </div>
        ${body}
      </section>
    `;
  }

  function renderVerySoftStartPath(topic) {
    if (topic.id !== "very-soft-start" || !data.verySoftStartPath?.length) return "";
    const phases = [...new Set(data.verySoftStartPath.map((item) => item.phase))];

    return `
      <section class="panel soft-deep-dive">
        <div class="soft-deep-header">
          <div>
            <div class="badge accent-forest">Complete soft-start path</div>
            <h2>Guided problem path</h2>
            <p class="lead">
              This section condenses the whole soft-start collection into ordered study cards.
              Work one phase at a time: understand the problem type, copy the method, then try a similar question.
            </p>
          </div>
          <div class="module-count-card">
            <strong>${data.verySoftStartPath.length}</strong>
            <span>guided problem cards</span>
          </div>
        </div>

        <div class="soft-phase-stack">
          ${phases.map((phase) => `
            <article class="soft-phase">
              <h3>${phase}</h3>
              <div class="soft-problem-grid">
                ${data.verySoftStartPath
                  .filter((item) => item.phase === phase)
                  .map((item) => `
                    <details class="soft-problem-card" open>
                      <summary>
                        <span class="problem-number">${item.number}</span>
                        <span>${item.title}</span>
                      </summary>
                      <div class="soft-problem-body">
                        ${renderSoftProblemVisual(item.visual)}
                        <p class="soft-problem-text"><strong>Problem:</strong> <span class="formula">${item.problem}</span></p>
                        ${item.explanation ? `<div class="soft-explanation">${item.explanation}</div>` : ""}
                        <p class="soft-method-text"><strong>Method:</strong> ${item.method}</p>
                        <div class="exam-answer"><strong>Remember:</strong> ${item.key}</div>
                      </div>
                    </details>
                  `).join("")}
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderSoftProblemVisual(type) {
    const visual = {
      area: "<span>$(a+b)^2$</span><span>$a^2$</span><span>$2ab$</span><span>$b^2$</span>",
      factor: "<span>$a^2-b^2$</span><span>$=$</span><span>$(a-b)(a+b)$</span>",
      pascal: "<span>1</span><span>1 1</span><span>1 2 1</span><span>1 3 3 1</span>",
      telescope: "<span>$a^n-b^n$</span><span>middle terms cancel</span><span>$(a-b)(\\cdots)$</span>",
      string: "<span>$a\\cdots a$</span><span>$k$ factors + $n$ factors</span><span>$a^{k+n}$</span>",
      sigma: "<span>$\\prod$ = multiply</span><span>$\\sum$ = add</span><span>expand first</span>",
      pairing: "<span>$1+n$</span><span>$2+(n-1)$</span><span>pairs $=n+1$</span>",
      domino: "<span>base</span><span>$n \\to n+1$</span><span>all $n$</span>",
      inequality: "<span>$(a-b)^2\\ge0$</span><span>$a^2+b^2\\ge2ab$</span>",
      arrow: "<span>$x>2$</span><span>$y>3$</span><span>$2x+5y>19$</span>",
      contradiction: "<span>assume not</span><span>derive impossible</span>",
      mod: "<span>$3k$</span><span>$3k+1$</span><span>$3k+2$</span>",
      "mod-grid": "<span>$\\bmod\\ 3$</span><span>$\\bmod\\ 4$</span><span>$\\bmod\\ 12$</span>",
      "mod-cases": "<span>$\\bmod\\ 2$</span><span>$\\bmod\\ 3$</span><span>$\\bmod\\ 6$</span>",
      consecutive: "<span>$n-1$</span><span>$n$</span><span>$n+1$</span>",
      "factor-tree": "<span>$30$</span><span>$2\\cdot3\\cdot5$</span>",
      cycle: "<span>$2\\equiv-1$</span><span>powers alternate</span>",
      "last-digit": "<span>$11^{10}-1$</span><span>$10\\cdot(\\cdots)$</span><span>$100\\mid N$</span>",
      "truth-chart": "<span>ranges</span><span>true count</span><span>exactly one</span>",
      "decision-tree": "<span>left heavy</span><span>balance</span><span>right heavy</span>",
      ternary: "<span>3 groups</span><span>3 outcomes</span><span>3 weighings</span>",
      board: "<span>local zero rectangles</span><span>cancel board</span>",
      triangle: "<span>4 small triangles</span><span>5 points</span>",
      "pigeon-mod": "<span>3 numbers</span><span>2 square remainders</span>",
      "power-boxes": "<span>objects</span><span>power remainders</span><span>boxes</span>",
      range: "<span>14 sums</span><span>13 values</span><span>repeat</span>",
      hexagon: "<span>6 vertices</span><span>2 colors</span><span>one triangle</span>",
      paths: "<span>R R ...</span><span>U U ...</span><span>arrange moves</span>",
      derangement: "<span>wrong labels</span><span>no fixed points</span>"
    }[type] || "<span>model</span><span>reason</span><span>conclude</span>";

    return `<div class="soft-problem-visual" aria-hidden="true">${visual}</div>`;
  }

  function levelBadgeClass(level) {
    const l = (level || "").toLowerCase();
    if (l === "easy") return "badge-easy";
    if (l === "exam") return "badge-exam";
    return "badge-medium";
  }

  function renderExamples(examples) {
    if (!examples.length) return "";
    return `
      <section class="panel">
        <h2>Worked examples</h2>
        <p class="lead">Study these in order. They move from basic recognition to exam-level method. Each example shows the exact thinking process you need in the exam.</p>
        <div class="example-stack">
          ${examples.map((example) => `
            <article class="example-card">
              <div class="badge ${levelBadgeClass(example.level)}">${example.level}</div>
              <h3>${example.title}</h3>
              <p><strong>Question:</strong> <span class="formula">${example.question}</span></p>
              <ol class="solution-list">
                ${example.solution.map((step) => `<li>${step}</li>`).join("")}
              </ol>
              <div class="exam-answer"><strong>Key takeaway:</strong> ${example.takeaway}</div>
            </article>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderBeginnerGuide(topic) {
    if (!topic.beginnerGuide?.length) return "";

    return `
      <section class="panel beginner-guide-panel">
        <div class="module-path-header">
          <div>
            <div class="badge accent-forest">Beginner guide</div>
            <h2>Understand the topic before solving</h2>
            <p class="lead">
              These cards explain the exam moves slowly: what the symbols mean, what to do first,
              and which mistake to avoid.
            </p>
          </div>
          <div class="module-count-card">
            <strong>${topic.beginnerGuide.length}</strong>
            <span>guided concept cards</span>
          </div>
        </div>
        <div class="beginner-guide-grid">
          ${topic.beginnerGuide.map((card, index) => `
            <article class="beginner-guide-card">
              <div class="soft-module-top">
                <span class="problem-number">${index + 1}</span>
                <div>
                  <h3>${card.title}</h3>
                  <p>${card.problem}</p>
                </div>
              </div>
              <div class="module-learn">
                <strong>What it means</strong>
                <p>${card.meaning}</p>
              </div>
              <div class="module-example">
                <strong>How to start</strong>
                <p>${card.method}</p>
              </div>
              <ol class="solution-list compact-steps">
                ${card.steps.map((step) => `<li>${step}</li>`).join("")}
              </ol>
              <div class="exam-answer"><strong>Remember:</strong> ${card.tip}</div>
            </article>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderFormulaBank(topic) {
    if (!topic.formulaBank?.length) return "";

    return `
      <section class="panel">
        <div class="module-path-header">
          <div>
            <div class="badge accent-navy">Rules and formulas</div>
            <h2>What you must know for this topic</h2>
            <p class="lead">These are the laws, definitions, and formulas that old-exam solutions reuse.</p>
          </div>
          <div class="module-count-card">
            <strong>${topic.formulaBank.length}</strong>
            <span>core rules</span>
          </div>
        </div>
        <div class="law-group-grid">
          ${topic.formulaBank.map((item) => `
            <article class="study-card">
              <div class="badge ${item.accent || "accent-copper"}">${item.tag || "Rule"}</div>
              <h3>${item.name}</h3>
              <p class="formula">${item.formula}</p>
              <p>${item.why}</p>
            </article>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderProblemSolving(topic) {
    if (!topic.problemSolving?.length) return "";

    return `
      <section class="panel">
        <div class="module-path-header">
          <div>
            <div class="badge accent-forest">Problem solving</div>
            <h2>How exam questions are solved</h2>
            <p class="lead">Use these as templates. Read the question, choose the method, then follow the steps.</p>
          </div>
          <div class="module-count-card">
            <strong>${topic.problemSolving.length}</strong>
            <span>solution templates</span>
          </div>
        </div>
        <div class="example-stack">
          ${topic.problemSolving.map((problem) => `
            <article class="example-card">
              <div class="badge ${problem.accent || "accent-copper"}">${problem.type || "Template"}</div>
              <h3>${problem.title}</h3>
              <p><strong>Question:</strong> <span class="formula">${problem.question}</span></p>
              <p><strong>Method:</strong> ${problem.method}</p>
              <ol class="solution-list">
                ${problem.steps.map((step) => `<li>${step}</li>`).join("")}
              </ol>
              <div class="exam-answer"><strong>Remember:</strong> ${problem.remember}</div>
            </article>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderExamCoach(topic) {
    const coach = examCoach[topic.id];
    if (!coach) return "";

    return `
      <section class="panel pass-panel">
        <div class="module-path-header">
          <div>
            <div class="badge accent-danger">Pass the exam</div>
            <h2>What to do when this topic appears</h2>
            <p class="lead">This is the shortest route from seeing the question to writing a point-scoring answer.</p>
          </div>
        </div>
        <div class="pass-grid">
          <article class="pass-card">
            <h3>Exam cues</h3>
            <div class="concept-row">
              ${coach.cues.map((cue) => `<span>${cue}</span>`).join("")}
            </div>
          </article>
          <article class="pass-card">
            <h3>Attack order</h3>
            <ol class="compact-steps">
              ${coach.attack.map((step) => `<li>${step}</li>`).join("")}
            </ol>
          </article>
          <article class="pass-card">
            <h3>Common mistakes</h3>
            <ul class="mistake-list">
              ${coach.mistakes.map((mistake) => `<li>${mistake}</li>`).join("")}
            </ul>
          </article>
        </div>
      </section>
    `;
  }

  function renderLearningLab(topic) {
    const lab = learningLabs[topic.id];
    if (!lab) return "";
    const state = labState.get(topic.id) || {};

    if (lab.type === "builder") {
      const answeredSlots = lab.slots.filter((slot) => state[slot.key] !== undefined);
      const correctSlots = answeredSlots.filter((slot) => state[slot.key] === slot.answer).length;
      return `
        <section class="panel learning-lab">
          <div class="module-path-header">
            <div>
              <div class="badge accent-forest">${lab.badge}</div>
              <h2>${lab.title}</h2>
              <p class="lead">${lab.intro}</p>
            </div>
            <span class="quiz-chip">Built <strong>${correctSlots} / ${lab.slots.length}</strong></span>
          </div>
          <div class="lab-prompt">${lab.statement}</div>
          <div class="lab-builder-grid">
            ${lab.slots.map((slot) => {
              const selected = state[slot.key];
              const answered = selected !== undefined;
              const correct = selected === slot.answer;
              return `
                <article class="lab-card">
                  <h3>${slot.label}</h3>
                  <div class="options">
                    ${slot.options.map((option, optionIndex) => {
                      const className = answered
                        ? optionIndex === slot.answer
                          ? "option show-correct"
                          : optionIndex === selected
                            ? "option wrong"
                            : "option"
                        : "option";
                      return `<button class="${className}" data-lab-builder="${slot.key}" data-lab-choice="${optionIndex}" ${answered ? "disabled" : ""}><span class="lab-option-text">${option}</span></button>`;
                    }).join("")}
                  </div>
                  ${answered ? `
                    <div class="feedback ${correct ? "correct" : "wrong"}">
                      ${correct ? "<strong>Correct.</strong>" : "<strong>Not quite.</strong>"} ${correct ? "This line belongs in that slot." : "That line changes the proof role. Match the wording to the slot name."}
                    </div>
                  ` : ""}
                </article>
              `;
            }).join("")}
          </div>
          ${adaptiveMessage(topic.id, lab.concept, "the induction template and exact old exam solutions")}
        </section>
      `;
    }

    return `
      <section class="panel learning-lab">
        <div class="module-path-header">
          <div>
            <div class="badge accent-forest">${lab.badge}</div>
            <h2>${lab.title}</h2>
            <p class="lead">${lab.intro}</p>
          </div>
        </div>
        <div class="lab-grid">
          ${lab.items.map((item, itemIndex) => {
            const answered = state[itemIndex];
            const correct = answered === item.answer;
            return `
              <article class="lab-card">
                <div class="badge accent-navy">${item.concept.replaceAll("-", " ")}</div>
                <h3>${item.prompt}</h3>
                <p class="quiz-hint">${item.ask}</p>
                <div class="options">
                  ${item.options.map((option, optionIndex) => {
                    const className = answered !== undefined
                      ? optionIndex === item.answer
                        ? "option show-correct"
                        : optionIndex === answered
                          ? "option wrong"
                          : "option"
                      : "option";
                    return `<button class="${className}" data-lab-item="${itemIndex}" data-lab-choice="${optionIndex}" ${answered !== undefined ? "disabled" : ""}><span class="lab-option-text">${option}</span></button>`;
                  }).join("")}
                </div>
                ${answered !== undefined ? `
                  <div class="feedback ${correct ? "correct" : "wrong"}">
                    ${correct ? "<strong>Correct.</strong>" : "<strong>Not quite.</strong>"} ${item.why}
                    <div class="lab-trap"><strong>Trap:</strong> ${item.trap}</div>
                  </div>
                  ${adaptiveMessage(topic.id, item.concept, "this lab and the exact exam trainer")}
                ` : ""}
              </article>
            `;
          }).join("")}
        </div>
      </section>
    `;
  }

  function renderExactQuestionTrainer(topic) {
    const coach = examCoach[topic.id];
    const questions = (data.examQuestions || []).filter((item) => item.topicId === topic.id);
    if (!coach || !questions.length) return "";
    const solutionMap = new Map((data.examSolutions || []).map((solution) => [`${solution.date}-${solution.part}`, solution]));

    return `
      <section class="panel">
        <div class="module-path-header">
          <div>
            <div class="badge accent-navy">Exact exam trainer</div>
            <h2>Old questions for this topic</h2>
            <p class="lead">Use these as your exam checklist. Try each one first, then compare your first move with the guide.</p>
          </div>
          <div class="module-count-card">
            <strong>${questions.length}</strong>
            <span>old questions</span>
          </div>
        </div>
        <div class="exam-trainer-list">
          ${questions.map((item) => `
            ${(() => {
              const solution = solutionMap.get(`${item.date}-${item.part}`);
              const subquestions = examSubquestions(item.question);
              return `
            <details class="exam-trainer-card">
              <summary>
                <span>${item.date} — ${item.part}</span>
                <strong>${item.summary}</strong>
              </summary>
              <div class="exam-trainer-body">
                <div class="question-breakdown">
                  <h4>Question breakdown</h4>
                  ${subquestions.map((subquestion, index) => `
                    <div class="subquestion-card">
                      <span class="badge accent-navy">${subquestions.length > 1 ? `Part ${index + 1}` : "Question"}</span>
                      <p>${subquestion}</p>
                    </div>
                  `).join("")}
                </div>
                <div class="exam-trainer-guide">
                  <div>
                    <span class="badge accent-forest">First move</span>
                    <p>${coach.firstMove}</p>
                  </div>
                  <div>
                    <span class="badge accent-copper">How to score</span>
                    <p>${coach.scoreTip}</p>
                  </div>
                </div>
                ${solution ? `
                  <div class="guided-solution">
                    <h4>Step-by-step solution</h4>
                    ${solution.parts.map((rawPart, partIndex) => {
                      const part = normalizeSolutionPart(rawPart, topic, item, subquestions[partIndex]);
                      return `
                      <details class="solution-part" open>
                        <summary>${part.label}</summary>
                        <div class="try-first">
                          <strong>Try first:</strong> ${part.tryFirst}
                        </div>
                        <p><strong>Question:</strong> ${part.question}</p>
                        <p><strong>Method:</strong> ${part.method}</p>
                        <ol class="solution-list">
                          ${part.steps.map((step) => `<li>${step}</li>`).join("")}
                        </ol>
                        <div class="exam-answer"><strong>Answer:</strong> ${part.answer}</div>
                        ${part.warning ? `<p class="solution-warning"><strong>Common mistake:</strong> ${part.warning}</p>` : ""}
                        <div class="exam-answer"><strong>Exam answer format:</strong> ${part.examFormat}</div>
                        <div class="similar-retry"><strong>Similar retry:</strong> ${part.retry}</div>
                      </details>
                    `; }).join("")}
                  </div>
                ` : `
                  <div class="exam-answer"><strong>Solution status:</strong> This question is included and mapped. A full worked solution has not been written yet.</div>
                `}
              </div>
            </details>
              `;
            })()}
          `).join("")}
        </div>
      </section>
    `;
  }

  function normalizeSolutionPart(part, topic, examItem, fallbackQuestion) {
    return {
      label: part.label || "Part",
      question: part.question || fallbackQuestion || examItem.question || examItem.summary,
      method: part.method || inferMethod(part, topic),
      steps: part.steps?.length ? part.steps : ["Identify the requested object.", "Apply the topic method.", "Write the final answer in exam notation."],
      answer: part.answer || "See the final line of the worked solution.",
      warning: part.warning || "Do not skip the reason for the method you chose.",
      tryFirst: part.tryFirst || inferTryFirst(part, topic),
      retry: part.retry || inferRetry(part, topic),
      examFormat: part.examFormat || inferExamFormat(topic)
    };
  }

  function inferMethod(part, topic) {
    const text = `${part.label || ""} ${(part.steps || []).join(" ")}`.toLowerCase();
    if (topic.id === "predicate-quantifiers" || text.includes("quantifier")) return "Define predicates, choose the quantifier skeleton, then choose implication or AND.";
    if (topic.id === "combinatorics" || text.includes("choose") || text.includes("outcomes")) return "Classify order, repetition, and restrictions before writing the counting expression.";
    if (topic.id === "induction-recurrence" || text.includes("induct")) return "Write Base, Hypothesis, Target, Use IH, then simplify to the target.";
    if (topic.id === "relations-graphs" || text.includes("graph")) return "List the objects first, then test the requested property directly from the definition.";
    if (topic.id === "logic-proofs" || text.includes("truth")) return "Work from the main connective inward, or build one legal proof-rule step at a time.";
    return "Name the relevant definition or formula first, then apply it step by step.";
  }

  function inferTryFirst(part, topic) {
    if (topic.id === "predicate-quantifiers") return "Which keyword decides the skeleton: all, some, no, only, or not all?";
    if (topic.id === "combinatorics") return "Ask: does order matter, is repetition allowed, and is a complement easier?";
    if (topic.id === "induction-recurrence") return "Write the exact $P(k+1)$ target before doing algebra.";
    if (topic.id === "relations-graphs") return "Which definition is being tested: reflexive, symmetric, transitive, connected, degree, or complete?";
    if (topic.id === "logic-proofs") return "What is the first legal rule: De Morgan, implication rewrite, MP, MT, or truth table column?";
    return "What is the first definition, formula, or rule that applies?";
  }

  function inferRetry(part, topic) {
    if (topic.id === "predicate-quantifiers") return "Change 'all' to 'some' or add a negation, then write the new skeleton before checking.";
    if (topic.id === "combinatorics") return "Change one restriction, such as 'last is even' to 'first is even', and recount.";
    if (topic.id === "induction-recurrence") return "Use the same five slots on $1+3+5+\\cdots+(2n-1)=n^2$.";
    if (topic.id === "relations-graphs") return "Add or remove one pair/edge and retest the same property.";
    return "Change one number or symbol in the question and repeat the same method.";
  }

  function inferExamFormat(topic) {
    if (topic.id === "predicate-quantifiers") return "Predicate definitions first, then one clean formula.";
    if (topic.id === "combinatorics") return "One classification sentence, one counting expression, then the simplified number.";
    if (topic.id === "induction-recurrence") return "Label Base, IH, Target, Use IH, Conclusion.";
    if (topic.id === "relations-graphs") return "State the property result and justify it with the exact pair, edge, path, or counterexample.";
    return "Show the rule used on each line and box the final result.";
  }

  function examSubquestions(question) {
    const cleaned = question.replace(/\s+/g, " ").trim();
    const matches = [...cleaned.matchAll(/(?:^|\s)([abcdi]+)\)\s/g)];
    if (matches.length < 2) return [cleaned];

    return matches.map((match, index) => {
      const start = match.index + (match[0].startsWith(" ") ? 1 : 0);
      const end = index + 1 < matches.length
        ? matches[index + 1].index + (matches[index + 1][0].startsWith(" ") ? 1 : 0)
        : cleaned.length;
      return cleaned.slice(start, end).trim();
    });
  }

  function renderMemoryQuiz(topic) {
    if (!topic.memoryQuiz.length) return "";
    return `
      <section class="panel">
        <h2>Memory quiz</h2>
        <p class="lead">Click any card to flip it and reveal the answer. These facts should become automatic before exam practice.</p>
        <div class="memory-grid">
          ${topic.memoryQuiz.map(([q, a], index) => `
            <div class="flip-card" data-flip-card="${topic.id}-${index}" role="button" tabindex="0" aria-label="Memory card: ${q}">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <span class="flip-q">${index + 1}. ${q}</span>
                  <span class="flip-hint">Click to reveal answer</span>
                </div>
                <div class="flip-card-back">
                  <span class="flip-a">${a}</span>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderLawMemoryAndLibrary(topic) {
    if (topic.id !== "logic-proofs" || !legacy.lawGroups?.length) return "";
    const activeDeck = lawCategoryCards(lawTrainerState.category);
    const activeCard = activeDeck[lawTrainerState.index] || activeDeck[0];
    const progress = activeDeck.length ? Math.round(((lawTrainerState.index + 1) / activeDeck.length) * 100) : 0;

    return `
      <section class="panel law-studio">
        <div class="law-studio-header">
          <div>
            <div class="badge accent-forest">Law trainer</div>
            <h2>Study one law at a time</h2>
            <p class="lead">
              The old version showed too much at once. This mode works like a teacher at the board:
              choose a category, recognize the shape, predict the rewrite or rule, then reveal why it matters.
            </p>
          </div>
          <div class="law-method-card">
            <strong>Method</strong>
            <span>1. Identify the main connective or rule shape.</span>
            <span>2. Say the rewrite/inference before revealing.</span>
            <span>3. Explain when the exam would use it.</span>
          </div>
        </div>

        <div class="law-category-tabs" role="tablist" aria-label="Law categories">
          ${lawCategories().map(([id, label]) => `
            <button class="filter-btn ${lawTrainerState.category === id ? "is-active" : ""}" data-law-category="${id}">${label}</button>
          `).join("")}
        </div>

        <div class="law-trainer-layout">
          ${renderTruthReferenceCompact()}
          ${activeCard ? renderFocusedLawCard(activeCard, activeDeck.length, progress) : "<div class='empty-state'>No laws found for this category.</div>"}
        </div>
      </section>

      <section class="panel">
        <h2>Full law reference library</h2>
        <p class="lead">Collapsed by default so it stays useful without overwhelming the study flow.</p>
        <div class="law-group-grid">
          ${legacy.lawGroups.map((group) => `
            <details class="deck">
              <summary>
                <div class="summary-left">
                  <span class="summary-title">${group.title}</span>
                  <span class="pill">${group.source}</span>
                </div>
                <span class="pill">${group.rows.length} lines</span>
              </summary>
              <p class="summary-copy">${group.blurb}</p>
              <div class="table-wrap">
                <table class="study-table">
                  <thead><tr>${group.columns.map((column) => `<th>${column}</th>`).join("")}</tr></thead>
                  <tbody>
                    ${group.rows.map((row) => `
                      <tr>
                        <td>${row[0]}</td>
                        <td class="formula">${row[1]}</td>
                        <td class="formula">${row[2]}</td>
                        <td>${row[3]}</td>
                      </tr>
                    `).join("")}
                  </tbody>
                </table>
              </div>
            </details>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderTruthReferenceCompact() {
    return `
      <aside class="truth-reference-card">
        <h3>Truth table anchor</h3>
        <p>The law deck is easier if these columns are automatic.</p>
        <div class="table-wrap">
          <table class="truth-table compact-truth-table">
            <tr><th>$p$</th><th>$q$</th><th>$p\\to q$</th><th>$p\\leftrightarrow q$</th></tr>
            <tr><td>F</td><td>F</td><td class="truth-true">T</td><td class="truth-true">T</td></tr>
            <tr><td>F</td><td>T</td><td class="truth-true">T</td><td class="truth-false">F</td></tr>
            <tr><td>T</td><td>F</td><td class="truth-false danger-cell">F</td><td class="truth-false">F</td></tr>
            <tr><td>T</td><td>T</td><td class="truth-true">T</td><td class="truth-true">T</td></tr>
          </table>
        </div>
        <div class="truth-callout">Only $T \\to F$ makes implication false.</div>
      </aside>
    `;
  }

  function truthClass(value) {
    return value === "T" ? "truth-true" : "truth-false";
  }

  function renderLogicTruthTables(topic) {
    if (topic.id !== "logic-proofs") return "";

    const rows = [
      { p: "F", q: "F" },
      { p: "F", q: "T" },
      { p: "T", q: "F" },
      { p: "T", q: "T" }
    ].map(({ p, q }) => {
      const P = p === "T";
      const Q = q === "T";
      const tf = (value) => (value ? "T" : "F");
      return {
        p,
        q,
        notP: tf(!P),
        notQ: tf(!Q),
        and: tf(P && Q),
        or: tf(P || Q),
        xor: tf(P !== Q),
        implies: tf(!P || Q),
        reverseImplies: tf(!Q || P),
        biconditional: tf(P === Q),
        nand: tf(!(P && Q)),
        nor: tf(!(P || Q)),
        negAnd: tf(!(P && Q)),
        deMorganAnd: tf(!P || !Q),
        negOr: tf(!(P || Q)),
        deMorganOr: tf(!P && !Q),
        negImplies: tf(P && !Q),
        conditionalRewrite: tf(!P || Q),
        contrapositive: tf(!Q || !P)
      };
    });

    const coreHeaders = [
      ["p", "$p$"],
      ["q", "$q$"],
      ["notP", "$\\neg p$"],
      ["notQ", "$\\neg q$"],
      ["and", "$p\\land q$"],
      ["or", "$p\\lor q$"],
      ["xor", "$p\\oplus q$"],
      ["implies", "$p\\to q$"],
      ["reverseImplies", "$q\\to p$"],
      ["biconditional", "$p\\leftrightarrow q$"],
      ["nand", "$\\neg(p\\land q)$"],
      ["nor", "$\\neg(p\\lor q)$"]
    ];

    const lawHeaders = [
      ["p", "$p$"],
      ["q", "$q$"],
      ["negAnd", "$\\neg(p\\land q)$"],
      ["deMorganAnd", "$\\neg p\\lor\\neg q$"],
      ["negOr", "$\\neg(p\\lor q)$"],
      ["deMorganOr", "$\\neg p\\land\\neg q$"],
      ["negImplies", "$\\neg(p\\to q)$"],
      ["conditionalRewrite", "$\\neg p\\lor q$"],
      ["contrapositive", "$\\neg q\\to\\neg p$"]
    ];

    const renderTable = (headers, dangerKey) => `
      <div class="table-wrap full-truth-wrap">
        <table class="truth-table full-truth-table">
          <thead>
            <tr>${headers.map(([, label]) => `<th>${label}</th>`).join("")}</tr>
          </thead>
          <tbody>
            ${rows.map((row) => `
              <tr>
                ${headers.map(([key]) => `
                  <td class="${truthClass(row[key])} ${key === dangerKey && row[key] === "F" ? "danger-cell" : ""}">${row[key]}</td>
                `).join("")}
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;

    return `
      <section class="panel truth-master-panel">
        <div class="truth-master-header">
          <div>
            <div class="badge accent-navy">Truth tables</div>
            <h2>Complete truth-table reference</h2>
            <p class="lead">
              Use this as the anchor for tautology, contradiction, equivalence, implication,
              biconditional, De Morgan, negated conditional, and proof-law questions.
            </p>
          </div>
          <div class="truth-method-card">
            <strong>Exam method</strong>
            <span>1. Make columns for subformulas first.</span>
            <span>2. Evaluate the main connective last.</span>
            <span>3. Classify by the final column.</span>
          </div>
        </div>

        <div class="truth-reference-grid">
          <article class="truth-reference-block">
            <h3>Core connectives</h3>
            <p>These columns cover the basic operators that appear in almost every logic question.</p>
            ${renderTable(coreHeaders, "implies")}
          </article>

          <article class="truth-reference-block">
            <h3>Exam rewrites and negations</h3>
            <p>Use these to check laws, simplify formulas, and build proof sequences.</p>
            ${renderTable(lawHeaders, "negImplies")}
          </article>
        </div>

        <div class="truth-rule-grid">
          <div><strong>Tautology</strong><span>Final column is all T.</span></div>
          <div><strong>Contradiction</strong><span>Final column is all F.</span></div>
          <div><strong>Contingency</strong><span>Final column has both T and F.</span></div>
          <div><strong>Implication danger row</strong><span>$p\\to q$ is false only when $p=T$ and $q=F$.</span></div>
        </div>
      </section>
    `;
  }

  function renderFocusedLawCard(card, deckLength, progress) {
    const total = lawTrainerState.known + lawTrainerState.learning;
    return `
      <article class="focused-law-card">
        <div class="focused-law-top">
          <div>
            <div class="badge accent-copper">${card.family}</div>
            <h3>${card.name}</h3>
            <p>${card.title}</p>
          </div>
          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:0.3rem;">
            <span class="quiz-chip"><strong>${lawTrainerState.index + 1}</strong> / ${deckLength}</span>
            ${total > 0 ? `<span class="quiz-chip" style="font-size:0.78rem;">Know <strong>${lawTrainerState.known}</strong> · Still learning <strong>${lawTrainerState.learning}</strong></span>` : ""}
          </div>
        </div>

        <div class="progress">
          <div class="progress-fill" style="width: ${progress}%;"></div>
        </div>

        <div class="law-board">
          <span>Recognize this shape</span>
          <strong class="formula">${card.prompt}</strong>
        </div>

        ${lawTrainerState.revealed ? `
          <div class="law-board answer-board">
            <span>Correct move</span>
            <strong class="formula">${card.answer}</strong>
          </div>
          <div class="law-explainer">
            <strong>Why this matters</strong>
            <p>${card.cue}</p>
            <p>${lawUseNote(card)}</p>
          </div>
          <div class="law-grade-row">
            <button class="law-grade-btn know" data-law-grade="know">I know this ✓</button>
            <button class="law-grade-btn learning" data-law-grade="learning">Still learning…</button>
          </div>
        ` : `
          <div class="law-hidden-answer">
            Predict the rewrite or inference rule before revealing the answer.
            <br><small style="color:var(--muted);font-size:0.8rem;margin-top:0.4rem;display:block;">Tip: press Space or Enter to reveal · Arrow keys to navigate</small>
          </div>
        `}

        <div class="quiz-actions law-actions">
          <button class="btn" data-law-prev>← Previous</button>
          <button class="btn primary" data-law-reveal>${lawTrainerState.revealed ? "Hide answer" : "Reveal answer"}</button>
          <button class="btn secondary" data-law-next>Next →</button>
        </div>
      </article>
    `;
  }

  function lawUseNote(card) {
    const name = card.name.toLowerCase();
    if (name.includes("conditional")) return "Use this when the exam asks for a truth table, tautology check, or negation involving an arrow.";
    if (name.includes("de morgan")) return "Use this when a negation sits outside AND/OR brackets.";
    if (name.includes("modus")) return "Use this in proof sequences when a conditional and one matching line are available.";
    if (name.includes("biconditional")) return "Use this when the exam asks what iff means or asks you to build a biconditional truth table.";
    if (name.includes("quantifier") || name.includes("nested")) return "Use this in predicate translation and negation questions.";
    if (name.includes("tautology") || name.includes("contradiction")) return "Use this when classifying a formula from the final truth-table column.";
    return "Use this as a rewrite or proof move when the formula has the same shape as the prompt.";
  }

  function renderTranslationLibrary(topic) {
    if (topic.id !== "predicate-quantifiers" || !legacy.translationGroups?.length) return "";

    return `
      <section class="panel">
        <h2>Full translation library</h2>
        <p class="lead">
          The detailed translation guide is restored here: quantifier choice, nested quantifiers,
          only/no/exactly-one patterns, old-exam translations, and negation recipes.
        </p>
        <div id="translation-library-restored">
          ${legacy.translationGroups.map((group) => `
            <div class="panel nested-panel">
              <h3>${group.title}</h3>
              <p class="lead">${group.blurb}</p>
              <div class="pill-row">
                <span class="pill">${group.source}</span>
                <span class="pill">${group.cards.length} cards</span>
              </div>
              <div class="card-grid">
                ${group.cards.map((card) => `
                  <article class="study-card">
                    <div class="badge ${card.accent}">${card.tag}</div>
                    <h3>${card.title}</h3>
                    <span class="formula">${card.formula}</span>
                    <p>${card.note}</p>
                  </article>
                `).join("")}
              </div>
            </div>
          `).join("")}
        </div>
      </section>
    `;
  }

  function getPracticeState(topic) {
    if (!quizState.has(topic.id)) {
      quizState.set(topic.id, { answered: new Map(), confidence: new Map(), score: 0 });
    }
    return quizState.get(topic.id);
  }

  function renderPracticeQuiz(topic) {
    const practiceItems = practiceItemsForTopic(topic);
    if (!practiceItems.length) return "";
    const state = getPracticeState(topic);
    const answeredCount = state.answered.size;
    const topicHints = hintState.get(topic.id) || new Map();

    return `
      <section class="panel">
        <div class="quiz-toolbar">
          <div>
            <h2>Practice quiz</h2>
            <p class="lead">Covers the main question types for this topic. Use the hint button if you are stuck.</p>
          </div>
          <span class="quiz-chip">Score <strong>${state.score} / ${answeredCount || 0}</strong></span>
        </div>
        <div class="quiz-list">
          ${practiceItems.map((item, qIndex) => {
            const answered = state.answered.get(qIndex);
            const confidence = state.confidence.get(qIndex) || "medium";
            const hintShown = topicHints.get(qIndex);
            const diffClass = item.difficulty === "easy" ? "badge-easy" : item.difficulty === "exam" ? "badge-exam" : "badge-medium";
            return `
              <article class="quiz-card compact-quiz">
                <div style="display:flex;flex-wrap:wrap;gap:0.4rem;margin-bottom:0.5rem;">
                  ${item.legacy ? `<div class="badge accent-navy">Drill bank</div>` : ""}
                  ${item.difficulty ? `<div class="badge ${diffClass}">${item.difficulty}</div>` : ""}
                </div>
                <h3>${qIndex + 1}. ${item.q}</h3>
                ${!answered ? `
                  <div class="confidence-row" aria-label="Confidence before answering">
                    ${["low", "medium", "high"].map((level) => `
                      <button class="confidence-btn ${confidence === level ? "is-active" : ""}" data-confidence="${qIndex}" data-confidence-level="${level}">${level}</button>
                    `).join("")}
                  </div>
                ` : ""}
                ${!answered && item.hint ? `
                  ${hintShown
                    ? `<div class="hint-box">Hint: ${item.hint}</div>`
                    : `<button class="hint-btn" data-hint="${qIndex}" data-topic-hint="${topic.id}">Show hint</button>`
                  }
                ` : ""}
                <div class="options">
                  ${item.options.map((option, optionIndex) => {
                    const className = answered
                      ? optionIndex === item.answer
                        ? "option show-correct"
                        : optionIndex === answered.choice
                          ? "option wrong"
                          : "option"
                      : "option";
                    return `<button class="${className}" data-practice="${qIndex}" data-choice="${optionIndex}" ${answered ? "disabled" : ""}>${option}</button>`;
                  }).join("")}
                </div>
                ${answered ? `
                  <div class="feedback ${answered.correct ? "correct" : "wrong"}">
                    ${answered.correct ? "<strong>Correct.</strong>" : "<strong>Not quite.</strong>"} ${item.why}
                    ${answered.confidence === "high" && !answered.correct ? `<div class="dangerous-mistake"><strong>Dangerous mistake:</strong> you felt confident but chose the wrong method. Slow down and name the rule before calculating.</div>` : ""}
                  </div>
                  ${adaptiveMessage(topic.id, item.concept || item.difficulty || "practice", "the exact exam trainer for this topic")}
                ` : ""}
              </article>
            `;
          }).join("")}
        </div>
      </section>
    `;
  }

  function renderReadiness(topic) {
    return `
      <section class="panel">
        <h2>Exam readiness checklist</h2>
        <ul class="checklist">
          ${topic.readiness.map((item) => `<li><span class="checklist-text">${item}</span></li>`).join("")}
        </ul>
      </section>
    `;
  }

  function renderSoftStartModules(topic) {
    if (topic.id !== "math-fundamentals" || !data.softStartModules?.length) {
      return "";
    }

    return `
      <section class="panel">
        <div class="module-path-header">
          <div>
            <div class="badge accent-navy">Foundation path</div>
            <h2>Build the foundations step by step</h2>
            <p class="lead">
              Study these cards in order if you want the softest possible start before old-exam
              practice. Each card introduces one idea, one example, and one quick check.
            </p>
          </div>
          <div class="module-count-card">
            <strong>${data.softStartModules.length}</strong>
            <span>foundation cards</span>
          </div>
        </div>
        <div class="soft-module-grid">
          ${data.softStartModules.map((module) => `
            <article class="soft-module-card">
              <div class="soft-module-top">
                <div>
                  <h3>${module.title}</h3>
                </div>
              </div>
              <div class="concept-row">
                ${module.concepts.map((concept) => `<span>${concept}</span>`).join("")}
              </div>
              ${renderSoftModuleVisual(module)}
              <div class="module-learn">
                <strong>Learn</strong>
                <p>${module.learn}</p>
              </div>
              <div class="module-example">
                <strong>Example</strong>
                <p>${module.example}</p>
              </div>
              <div class="module-quiz">
                <strong>Quick check</strong>
                <p>${module.quiz}</p>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderSoftModuleVisual(module) {
    const key = module.module.replace(" duplicate", "").replace(" slides", "").replace(" notes", "");
    const visuals = {
      "004": `
        <div class="module-visual symbol-visual">
          <span>∈</span><span>∀</span><span>∑</span><span>→</span>
          <small>symbols become sentences</small>
        </div>
      `,
      "005": `
        <div class="module-visual venn-visual">
          <span class="venn a">$A$</span><span class="venn b">$B$</span><strong>$A\\cap B$</strong>
        </div>
      `,
      "006": `
        <div class="module-visual abstraction-visual">
          <span>concrete</span><i></i><span>abstract rule</span><i></i><span>new examples</span>
        </div>
      `,
      "007": `
        <div class="module-visual grid-visual">
          <span></span><span></span><span></span><span></span>
          <b>$(1,x)$</b><b>$(1,y)$</b><b>$(2,x)$</b><b>$(2,y)$</b>
        </div>
      `,
      "008": `
        <div class="module-visual numberline-visual">
          <span>-2</span><span>-1</span><span>0</span><span>1</span><span>2</span>
        </div>
      `,
      "009": `
        <div class="module-visual metric-visual">
          <span>$x$</span><strong>$d=0$</strong><span>$x$</span>
          <span>$x$</span><strong>$d=1$</strong><span>$y$</span>
        </div>
      `,
      "010": `
        <div class="module-visual closure-visual">
          <span>$\\mathbb N$</span><strong>$+$</strong><span>$\\mathbb N$</span><strong>$=$</strong><span>$\\mathbb N$</span>
        </div>
      `,
      "011": `
        <div class="module-visual rules-visual">
          <span>$a+b=b+a$</span><span>$a(b+c)=ab+ac$</span><span>$ab=0\\Rightarrow a=0\\lor b=0$</span>
        </div>
      `,
      "012": `
        <div class="module-visual commute-visual">
          <span>$4\\times6$</span><strong>$=$</strong><span>$6\\times4$</span>
        </div>
      `,
      "013": `
        <div class="module-visual associate-visual">
          <span>$(a+b)+c$</span><strong>$=$</strong><span>$a+(b+c)$</span>
        </div>
      `,
      "014": `
        <div class="module-visual distribute-visual">
          <span class="wide">b+c</span><strong>a</strong><em>ab</em><em>ac</em>
        </div>
      `,
      "015": `
        <div class="module-visual theory-visual">
          <span>axioms</span><span>definitions</span><span>theorems</span><span>proofs</span>
        </div>
      `,
      "016": `
        <div class="module-visual integer-visual">
          <span>+ debt</span><strong>$-(-60)=+60$</strong><span>temperature</span>
        </div>
      `,
      "017": `
        <div class="module-visual factor-visual">
          <span>$120$</span><i></i><span>$2^3\\cdot3\\cdot5$</span>
        </div>
      `,
      "018": `
        <div class="module-visual fraction-visual">
          <span>$p$</span><hr><span>$q\\ne0$</span>
        </div>
      `,
      "019": `
        <div class="module-visual expression-visual">
          <span class="coef">$5$</span><span class="var">$x$</span><sup>$2$</sup><strong>$+6$</strong>
        </div>
      `,
      "020": `
        <div class="module-visual precedence-visual">
          <span>()</span><span>powers</span><span>× ÷</span><span>+ -</span>
        </div>
      `,
      "021": `
        <div class="module-visual substitute-visual">
          <span>$E(x,y)$</span><i></i><span>$E(-1,2)$</span><i></i><strong>value</strong>
        </div>
      `,
      "022": `
        <div class="module-visual simplify-visual">
          <span>expand</span><i></i><span>combine</span><i></i><span>cancel</span>
        </div>
      `,
      "023": `
        <div class="module-visual sigma-visual">
          <strong>∑</strong><span>add</span><strong>∏</strong><span>multiply</span>
        </div>
      `,
      "024": `
        <div class="module-visual function-visual">
          <span>$x$</span><i>$f$</i><span>$f(x)$</span>
          <span>input</span><i></i><span>output</span>
        </div>
      `,
      "025": `
        <div class="module-visual sequence-visual">
          <span>$a_1$</span><span>$a_2$</span><span>$a_3$</span><span>$a_4$</span><span>$\\cdots$</span>
        </div>
      `,
      "026": `
        <div class="module-visual relation-visual">
          <span>A</span><strong>R</strong><span>B</span>
          <small>objects connected by a relation</small>
        </div>
      `,
      "027": `
        <div class="module-visual mini-graph-visual">
          <b>A</b><b>B</b><b>C</b><i class="ab"></i><i class="bc"></i>
        </div>
      `,
      "028": `
        <div class="module-visual structure-visual">
          <span>set</span><strong>+</strong><span>operation</span><strong>+</strong><span>laws</span>
        </div>
      `,
      "029": `
        <div class="module-visual floor-visual">
          <span>$3.7$</span><i></i><b>$\\lfloor3.7\\rfloor=3$</b>
          <span>$3.7$</span><i></i><b>$\\lceil3.7\\rceil=4$</b>
        </div>
      `,
      "030": `
        <div class="module-visual factorial-visual">
          <span>$4!$</span><strong>$=$</strong><span>$4\\cdot3\\cdot2\\cdot1$</span><strong>$=$</strong><span>$24$</span>
        </div>
      `,
      "031": `
        <div class="module-visual log-visual">
          <span>$2^?=8$</span><i></i><b>$\\log_2(8)=3$</b>
        </div>
      `,
      "032": `
        <div class="module-visual counter-visual">
          <span>Rule: $\\forall x\\,P(x)$</span>
          <span class="fail">Found $a=2$ where $\\neg P(a)$</span>
          <strong>Claim Dead</strong>
        </div>
      `,
      "033": `
        <div class="module-visual ifthen-visual">
          <span>$p\\to q$</span>
          <small>Only false if $T\\to F$</small>
        </div>
      `,
      "034": `
        <div class="module-visual systems-visual">
          <span>$\\mathbb N\\subset\\mathbb Z\\subset\\mathbb Q\\subset\\mathbb R$</span>
        </div>
      `,
      "035": `
        <div class="module-visual modulo-visual">
          <div class="clock">$13\\bmod5=3$</div>
        </div>
      `
    };

    return visuals[key] || `<div class="module-visual symbol-visual"><span>∈</span><span>∑</span><span>f</span><span>R</span></div>`;
  }

  function renderExamRefs(topic) {
    const refs = data.examMap.filter((entry) => entry[3] === topic.id);
    if (!refs.length || topic.id === "exam-map") return "";
    return `
      <section class="panel">
        <h2>Old exam parts covered here</h2>
        <p class="lead">These are the exact exam questions that this topic prepares you for.</p>
        <div class="exam-ref-grid">
          ${refs.map(([date, part, task]) => `
            <article class="exam-ref">
              <strong>${date} — ${part}</strong>
              <span>${task}</span>
            </article>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderExamMap() {
    const topics = new Map(data.topics.map((topic) => [topic.id, topic.short]));
    const exactQuestions = data.examQuestions || [];
    return `
      <section class="panel">
        <h2>Every old exam part mapped</h2>
        <p class="lead">Use this as a coverage checklist. Each row points to the topic that teaches the method.</p>
        <div class="table-wrap">
          <table class="study-table">
            <thead><tr><th>Exam</th><th>Part</th><th>What it tests</th><th>Study page</th></tr></thead>
            <tbody>
              ${data.examMap.map(([date, part, task, topicId]) => `
                <tr>
                  <td>${date}</td>
                  <td>${part}</td>
                  <td>${task}</td>
                  <td><button class="link-btn" data-topic-link="${topicId}">${topics.get(topicId) || topicId}</button></td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </section>
      ${exactQuestions.length ? `
        <section class="panel">
          <div class="module-path-header">
            <div>
              <div class="badge accent-copper">Exact old exam questions</div>
              <h2>All PDF questions included</h2>
              <p class="lead">These are the extracted main questions from the 10 old exam PDFs. Use them to check that no exam part is missing.</p>
            </div>
            <div class="module-count-card">
              <strong>${exactQuestions.length}</strong>
              <span>exam questions</span>
            </div>
          </div>
          <div class="example-stack">
            ${exactQuestions.map((item) => `
              <article class="example-card">
                <div class="badge accent-navy">${item.date} — ${item.part}</div>
                <h3>${topics.get(item.topicId) || item.topicId}</h3>
                <p><strong>Mapped topic:</strong> ${item.summary}</p>
                <p>${item.question}</p>
                <button class="link-btn" data-topic-link="${item.topicId}">Study this topic</button>
              </article>
            `).join("")}
          </div>
        </section>
      ` : ""}
    `;
  }

  function renderTopic(topic) {
    const lessons = topic.lesson.map((paragraph) => `<p>${paragraph}</p>`).join("");
    const methods = topic.methods.map((method) => `<li><span class="checklist-text">${method}</span></li>`).join("");

    root.innerHTML = `
      <section class="topic-hero panel">
        <div>
          <div class="badge accent-forest">${topic.examWeight}</div>
          <h2>${topic.title}</h2>
          <p class="lead">${topic.goal}</p>
        </div>
      </section>

      <section class="lesson-grid">
        <article class="panel">
          <h2>Learn</h2>
          <div class="lesson-copy">${lessons}</div>
        </article>
        <article class="panel">
          <h2>Exam method</h2>
          <ul class="checklist">${methods}</ul>
        </article>
      </section>

      ${renderVisual(topic.visual)}
      ${renderLearningLab(topic)}
      ${renderVerySoftStartPath(topic)}
      ${topic.id === "exam-map" ? renderExamMap() : ""}
      ${renderExamCoach(topic)}
      ${renderExactQuestionTrainer(topic)}
      ${renderBeginnerGuide(topic)}
      ${renderFormulaBank(topic)}
      ${renderProblemSolving(topic)}
      ${renderExamples(topic.examples)}
      ${renderMemoryQuiz(topic)}
      ${renderLogicTruthTables(topic)}
      ${renderLawMemoryAndLibrary(topic)}
      ${renderTranslationLibrary(topic)}
      ${renderPracticeQuiz(topic)}
      ${renderSoftStartModules(topic)}
      ${renderReadiness(topic)}
      ${renderExamRefs(topic)}
    `;

    /* ── Flip memory cards ──────────────────────────────── */
    root.querySelectorAll("[data-flip-card]").forEach((card) => {
      const activate = () => {
        card.classList.toggle("flipped");
        if (window.refreshMath) window.refreshMath();
      };
      card.addEventListener("click", activate);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); activate(); }
      });
    });

    /* ── Hint buttons ───────────────────────────────────── */
    root.querySelectorAll("[data-hint]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const qIndex = Number(btn.dataset.hint);
        const topicId = btn.dataset.topicHint;
        if (!hintState.has(topicId)) hintState.set(topicId, new Map());
        hintState.get(topicId).set(qIndex, true);
        renderTopic(topic);
        if (window.refreshMath) window.refreshMath();
      });
    });

    /* ── Practice quiz answers ──────────────────────────── */
    root.querySelectorAll("[data-confidence]").forEach((button) => {
      button.addEventListener("click", () => {
        const qIndex = Number(button.dataset.confidence);
        const state = getPracticeState(topic);
        state.confidence.set(qIndex, button.dataset.confidenceLevel);
        adaptiveState.confidence[`${topic.id}:${qIndex}`] = button.dataset.confidenceLevel;
        saveAdaptiveState();
        renderTopic(topic);
      });
    });

    root.querySelectorAll("[data-practice]").forEach((button) => {
      button.addEventListener("click", () => {
        const qIndex = Number(button.dataset.practice);
        const choice = Number(button.dataset.choice);
        const current = practiceItemsForTopic(topic)[qIndex];
        const state = getPracticeState(topic);
        const correct = choice === current.answer;
        if (!state.answered.has(qIndex)) {
          const confidence = state.confidence.get(qIndex) || "medium";
          state.answered.set(qIndex, { choice, correct, confidence });
          if (correct) state.score += 1;
          adaptiveState.quizScores[topic.id] = { score: state.score, answered: state.answered.size };
          recordConceptResult(topic.id, current.concept || current.difficulty || "practice", correct);
        }
        renderTopic(topic);
        if (window.refreshMath) window.refreshMath();
      });
    });

    /* ── Interactive learning labs ──────────────────────── */
    root.querySelectorAll("[data-lab-item]").forEach((button) => {
      button.addEventListener("click", () => {
        const lab = learningLabs[topic.id];
        const itemIndex = Number(button.dataset.labItem);
        const choice = Number(button.dataset.labChoice);
        const item = lab.items[itemIndex];
        const state = labState.get(topic.id) || {};
        state[itemIndex] = choice;
        labState.set(topic.id, state);
        recordConceptResult(topic.id, item.concept, choice === item.answer);
        renderTopic(topic);
        if (window.refreshMath) window.refreshMath();
      });
    });

    root.querySelectorAll("[data-lab-builder]").forEach((button) => {
      button.addEventListener("click", () => {
        const lab = learningLabs[topic.id];
        const slotKey = button.dataset.labBuilder;
        const choice = Number(button.dataset.labChoice);
        const slot = lab.slots.find((candidate) => candidate.key === slotKey);
        const state = labState.get(topic.id) || {};
        state[slotKey] = choice;
        labState.set(topic.id, state);
        recordConceptResult(topic.id, lab.concept, choice === slot.answer);
        renderTopic(topic);
        if (window.refreshMath) window.refreshMath();
      });
    });

    root.querySelectorAll("[data-topic-link]").forEach((button) => {
      button.addEventListener("click", () => {
        activeTopicId = button.dataset.topicLink;
        history.replaceState(null, "", `#${activeTopicId}`);
        render();
      });
    });

    root.querySelectorAll("[data-law-category]").forEach((button) => {
      button.addEventListener("click", () => {
        lawTrainerState.category = button.dataset.lawCategory;
        lawTrainerState.index = 0;
        lawTrainerState.revealed = false;
        lawTrainerState.known = 0;
        lawTrainerState.learning = 0;
        renderTopic(topic);
      });
    });

    root.querySelector("[data-law-prev]")?.addEventListener("click", () => {
      const deck = lawCategoryCards(lawTrainerState.category);
      lawTrainerState.index = deck.length
        ? (lawTrainerState.index - 1 + deck.length) % deck.length
        : 0;
      lawTrainerState.revealed = false;
      renderTopic(topic);
    });

    root.querySelector("[data-law-next]")?.addEventListener("click", () => {
      const deck = lawCategoryCards(lawTrainerState.category);
      lawTrainerState.index = deck.length
        ? (lawTrainerState.index + 1) % deck.length
        : 0;
      lawTrainerState.revealed = false;
      renderTopic(topic);
    });

    root.querySelector("[data-law-reveal]")?.addEventListener("click", () => {
      lawTrainerState.revealed = !lawTrainerState.revealed;
      renderTopic(topic);
    });

    /* ── Law self-grade buttons ─────────────────────────── */
    root.querySelectorAll("[data-law-grade]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.dataset.lawGrade === "know") {
          lawTrainerState.known += 1;
        } else {
          lawTrainerState.learning += 1;
        }
        const deck = lawCategoryCards(lawTrainerState.category);
        lawTrainerState.index = deck.length
          ? (lawTrainerState.index + 1) % deck.length
          : 0;
        lawTrainerState.revealed = false;
        renderTopic(topic);
      });
    });

    if (window.refreshMath) window.refreshMath();
  }

  function render() {
    visitedTopics.add(activeTopicId);
    renderNav();
    renderTopic(topicById(activeTopicId));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  renderHero();
  render();

  // Re-run MathJax whenever a soft-start details card is opened
  document.addEventListener("toggle", (e) => {
    if (e.target.classList.contains("soft-problem-card") && e.target.open) {
      if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise([e.target]).catch(() => {});
      }
    }
  }, true);
})();
