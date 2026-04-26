window.examStudio = {
  stats: [
    ["10 exams mapped", "2023-03-24 through 2026-03-26"],
    ["12 study modules", "soft start, fundamentals, 9 exam-core topics, and exam map"],
    ["Exam-style practice", "worked examples, memory cards, multiple-choice checks"],
    ["Beginner-first", "plain English, visuals, and step-by-step solutions"]
  ],
  route: [
    "Start with Math Fundamentals if symbols or set notation feel unfamiliar.",
    "Use the Logic page early: truth tables, laws, and proof rules appear across many exams.",
    "Study one topic page at a time, then immediately answer its Memory Quiz.",
    "Use the Old Exam Map to choose past-paper problems that match your weak topics."
  ],
  verySoftStartPath: [
    {
      phase: "Algebraic Formula Proofs",
      number: "1",
      title: "Square of a sum and difference",
      visual: "area",
      problem: "Show why $(a+b)^2=a^2+2ab+b^2$ and $(a-b)^2=a^2-2ab+b^2$.",
      explanation: `
        <div class="expl-section">
          <h4>What does "prove a formula" even mean?</h4>
          <p>A formula like $(a+b)^2=a^2+2ab+b^2$ is a claim that two expressions are always equal, no matter what numbers you put in for $a$ and $b$.</p>
          <p>Proving it means showing why they must be equal using only basic rules: how multiplication distributes over addition and how like terms combine.</p>

          <h4>The idea: a square means "multiplied by itself"</h4>
          <p>$(a+b)^2$ just means $(a+b)(a+b)$.</p>
          <p>If you think of a rectangle with side length $(a+b)$ on both sides, its area can be cut into four smaller pieces: $a\\cdot a$, two $a\\cdot b$ pieces, and $b\\cdot b$.</p>
          <p>That gives $a^2+ab+ab+b^2=a^2+2ab+b^2$.</p>

          <h4>Step-by-step proof</h4>
          <ol>
            <li>Start: $(a+b)^2=(a+b)(a+b)$.</li>
            <li>Distribute the first bracket: $=a(a+b)+b(a+b)$.</li>
            <li>Distribute again: $=a^2+ab+ab+b^2$.</li>
            <li>Collect like terms: $=a^2+2ab+b^2$.</li>
          </ol>

          <p>For $(a-b)^2$, replace $b$ with $-b$ everywhere. Then the middle terms become negative:</p>
          <p>$(a-b)^2=a^2-2ab+b^2$.</p>

          <div class="expl-tip">The pattern: the middle term is always twice the product of the two pieces. It is positive for $(a+b)^2$ and negative for $(a-b)^2$.</div>
        </div>
      `,
      method: "Start from the left side, rewrite the square as multiplication, expand with distributivity, then collect like terms.",
      key: "Formula proofs are often just legal rewriting: LHS -> RHS, one rule at a time."
    },
    {
      phase: "Algebraic Formula Proofs",
      number: "2",
      title: "Difference of two squares",
      visual: "factor",
      problem: "Prove $a^2-b^2=(a-b)(a+b)$.",
      explanation: `
        <div class="expl-section">
          <h4>What is a "difference of squares"?</h4>
          <p>$a^2-b^2$ means: take the square of $a$, then subtract the square of $b$.</p>
          <p>The formula says this always equals $(a-b)(a+b)$. This is one of the most useful factoring patterns in algebra.</p>

          <h4>Why does it work? Start from the right side.</h4>
          <p>When we already have a factored form, the easiest proof is to expand it and watch what cancels.</p>
          <ol>
            <li>Start from the right: $(a-b)(a+b)$.</li>
            <li>Distribute: $=a(a+b)-b(a+b)$.</li>
            <li>Expand: $=a^2+ab-ab-b^2$.</li>
            <li>The $ab$ terms cancel: $=a^2-b^2$.</li>
          </ol>

          <div class="expl-tip">Notice that $+ab$ and $-ab$ perfectly cancel. This cancellation is not a coincidence; it is the whole reason the formula works.</div>

          <h4>Real example</h4>
          <p>Want to calculate $99\\cdot101$ quickly? Write it as $(100-1)(100+1)=100^2-1^2=9999$.</p>
          <p>No long multiplication needed.</p>
        </div>
      `,
      method: "Expand the right side: $(a-b)(a+b)=a^2+ab-ab-b^2$. The middle terms cancel.",
      key: "When a formula has a factored side, expanding the factored side is usually the fastest proof."
    },
    {
      phase: "Algebraic Formula Proofs",
      number: "3",
      title: "Cubes and binomial patterns",
      visual: "pascal",
      problem: "Show the expansion of $(a+b)^3$ and recognize the same pattern behind $(a+b)^4$.",
      explanation: `
        <div class="expl-section">
          <h4>Building up: from squares to cubes</h4>
          <p>We already know $(a+b)^2=a^2+2ab+b^2$.</p>
          <p>Now go one step higher: $(a+b)^3=(a+b)(a+b)^2$.</p>
          <ol>
            <li>$(a+b)^3=(a+b)(a^2+2ab+b^2)$.</li>
            <li>Distribute $a$: $a^3+2a^2b+ab^2$.</li>
            <li>Distribute $b$: $a^2b+2ab^2+b^3$.</li>
            <li>Collect like terms: $a^3+3a^2b+3ab^2+b^3$.</li>
          </ol>

          <h4>Pascal's Triangle: the pattern behind the coefficients</h4>
          <p>Look at the numbers $1,3,3,1$ in the result. Now look at Pascal's Triangle:</p>
          <div class="pascal-visual">
            <div>1</div>
            <div>1&nbsp;&nbsp;1</div>
            <div>1&nbsp;&nbsp;2&nbsp;&nbsp;1</div>
            <div>1&nbsp;&nbsp;3&nbsp;&nbsp;3&nbsp;&nbsp;1</div>
            <div>1&nbsp;&nbsp;4&nbsp;&nbsp;6&nbsp;&nbsp;4&nbsp;&nbsp;1</div>
          </div>
          <p>Each row gives the coefficients for the next power of $(a+b)$.</p>
          <p>Row 4 tells you: $(a+b)^4=a^4+4a^3b+6a^2b^2+4ab^3+b^4$.</p>

          <div class="expl-tip">You build each number in Pascal's Triangle by adding the two numbers directly above it.</div>
        </div>
      `,
      method: "Write $(a+b)(a+b)(a+b)$, expand in stages, and collect matching terms.",
      key: "Pascal-style coefficients appear because the same term can be formed in several ways."
    },
    {
      phase: "Algebraic Formula Proofs",
      number: "4",
      title: "Fourth power from the same pattern",
      visual: "pascal",
      problem: "Use the same idea to expand $(a+b)^4$.",
      explanation: `
        <div class="expl-section">
          <h4>Why this is not a new formula</h4>
          <p>After squares and cubes, the fourth power follows the same pattern. You do not need a completely new idea.</p>
          <p>The expression $(a+b)^4$ means four copies: $(a+b)(a+b)(a+b)(a+b)$.</p>

          <h4>The fast way: use Pascal's Triangle</h4>
          <p>The fourth row is $1,4,6,4,1$.</p>
          <p>The powers of $a$ go down: $a^4,a^3,a^2,a,1$.</p>
          <p>The powers of $b$ go up: $1,b,b^2,b^3,b^4$.</p>
          <ol>
            <li>Start with the coefficients: $1,4,6,4,1$.</li>
            <li>Attach descending powers of $a$.</li>
            <li>Attach ascending powers of $b$.</li>
            <li>Result: $a^4+4a^3b+6a^2b^2+4ab^3+b^4$.</li>
          </ol>

          <div class="expl-tip">Pascal coefficients count how many ways the same type of term appears when all brackets are expanded.</div>
        </div>
      `,
      method: "Use the Pascal row 1, 4, 6, 4, 1 and write $a^4+4a^3b+6a^2b^2+4ab^3+b^4$.",
      key: "Pascal rows are a counting shortcut for repeated expansion."
    },
    {
      phase: "Algebraic Formula Proofs",
      number: "5",
      title: "Powers multiply by adding exponents",
      visual: "string",
      problem: "Explain why $a^k a^n=a^{k+n}$ for natural numbers $k,n$.",
      explanation: `
        <div class="expl-section">
          <h4>What does an exponent mean?</h4>
          <p>$a^k$ means $a$ multiplied by itself $k$ times. It is a compact way to write a long product.</p>
          <p>So $a^k a^n$ means: first write $k$ copies of $a$, then immediately write $n$ more copies of $a$.</p>

          <h4>Why the exponents add</h4>
          <ol>
            <li>$a^k=\\underbrace{a\\cdot a\\cdots a}_{k\\text{ copies}}$.</li>
            <li>$a^n=\\underbrace{a\\cdot a\\cdots a}_{n\\text{ copies}}$.</li>
            <li>Multiplying them puts the two strings together.</li>
            <li>The total number of $a$ factors is $k+n$.</li>
            <li>Therefore $a^k a^n=a^{k+n}$.</li>
          </ol>

          <div class="expl-tip">You add exponents only when the base is the same and you are multiplying.</div>
        </div>
      `,
      method: "Write $a^k$ as $k$ repeated factors and $a^n$ as $n$ repeated factors. Count the total factors.",
      key: "Exponents count repeated factors."
    },
    {
      phase: "Algebraic Formula Proofs",
      number: "6",
      title: "Generalize a formula",
      visual: "sigma",
      problem: "Move from a few terms to a formula with many terms.",
      explanation: `
        <div class="expl-section">
          <h4>What does generalizing mean?</h4>
          <p>Generalizing means you stop solving only one example and describe the pattern for every allowed size.</p>
          <p>Instead of writing a long list forever, you introduce an index like $i$, $k$, or $n$.</p>

          <h4>How to find the pattern safely</h4>
          <ol>
            <li>Write the first few cases.</li>
            <li>Circle what stays the same.</li>
            <li>Underline what changes.</li>
            <li>Name the changing part with an index.</li>
            <li>Check your formula on the first small cases.</li>
          </ol>

          <p>For example, $a+a^2+a^3+\\cdots+a^n$ can be written as $\\sum_{i=1}^{n}a^i$.</p>
          <div class="expl-tip">A formula is not a decoration. It is a compressed version of a repeated instruction.</div>
        </div>
      `,
      method: "Write the first few cases, identify what changes, then name the changing index with $i$ or $k$.",
      key: "A general formula is a compact description of a repeated pattern."
    },
    {
      phase: "Algebraic Formula Proofs",
      number: "7",
      title: "Derive instead of memorize",
      visual: "pairing",
      problem: "Derive $1+2+\\cdots+n=\\frac{n(n+1)}2$.",
      explanation: `
        <div class="expl-section">
          <h4>Why this formula should make sense</h4>
          <p>The sum $1+2+\\cdots+n$ is a staircase of numbers. The trick is to pair small numbers with large numbers.</p>

          <h4>The pairing idea</h4>
          <p>Write the sum forward and backward:</p>
          <pre class="expl-code">S = 1 + 2 + 3 + ... + n
S = n + (n-1) + (n-2) + ... + 1</pre>
          <p>Now add the two rows column by column. Each column gives $n+1$.</p>
          <ol>
            <li>There are $n$ columns.</li>
            <li>Each column sums to $n+1$.</li>
            <li>So $2S=n(n+1)$.</li>
            <li>Divide by 2: $S=\\frac{n(n+1)}2$.</li>
          </ol>

          <div class="expl-tip">Pairing is a way to make an uneven-looking sum into repeated equal pieces.</div>
        </div>
      `,
      method: "Pair first and last terms: $1+n$, $2+(n-1)$, and so on. Each pair sums to $n+1$.",
      key: "Pairing turns a long sum into repeated equal pieces."
    },
    {
      phase: "Induction and Proof Strategy",
      number: "8",
      title: "Informal induction idea",
      visual: "domino",
      problem: "Understand why a base case plus a next-step rule proves all cases.",
      explanation: `
        <div class="expl-section">
          <h4>Why induction works</h4>
          <p>Induction proves infinitely many statements without checking them one by one.</p>
          <p>It works like dominoes: if the first domino falls, and every domino knocks over the next one, then all dominoes fall.</p>

          <h4>The two required parts</h4>
          <ol>
            <li><strong>Base case:</strong> prove the first allowed case directly.</li>
            <li><strong>Inductive step:</strong> assume the statement works for $n=k$, then prove it works for $n=k+1$.</li>
          </ol>

          <h4>What students often miss</h4>
          <p>The inductive hypothesis is not the final answer. It is a temporary tool you are allowed to use inside the step from $k$ to $k+1$.</p>

          <div class="expl-tip">Base case starts the chain. Inductive step proves the chain cannot stop.</div>
        </div>
      `,
      method: "Check the first case. Then show that if the statement works at $n$, it must also work at $n+1$.",
      key: "Base case starts the chain; inductive step keeps it going."
    },
    {
      phase: "Inequalities and Proof Style",
      number: "9",
      title: "Direct inequality from a square",
      visual: "inequality",
      problem: "Prove $a^2+b^2\\ge 2ab$ for real numbers $a,b$.",
      explanation: `
        <div class="expl-section">
          <h4>Where does the inequality come from?</h4>
          <p>The expression $(a-b)^2$ is a square. Every real square is nonnegative, so $(a-b)^2\\ge0$.</p>
          <p>This gives us a true statement we can safely transform.</p>

          <h4>Step-by-step proof</h4>
          <ol>
            <li>Start with $(a-b)^2\\ge0$.</li>
            <li>Expand: $a^2-2ab+b^2\\ge0$.</li>
            <li>Add $2ab$ to both sides.</li>
            <li>Get $a^2+b^2\\ge2ab$.</li>
          </ol>

          <div class="expl-tip">When proving an inequality, look for something that is always nonnegative, especially a square.</div>
        </div>
      `,
      method: "Start with $(a-b)^2\\ge0$. Expand to $a^2-2ab+b^2\\ge0$, then add $2ab$ to both sides.",
      key: "Nonnegative squares are a standard inequality tool."
    },
    {
      phase: "Inequalities and Proof Style",
      number: "10",
      title: "Direct proof from assumptions",
      visual: "arrow",
      problem: "If $x>2$ and $y>3$, prove $2x+5y>19$.",
      explanation: `
        <div class="expl-section">
          <h4>What direct proof means</h4>
          <p>A direct proof starts with exactly what the problem gives you and moves forward until the conclusion appears.</p>
          <p>Here the conclusion contains $2x+5y$, so we should turn the assumptions into facts about $2x$ and $5y$.</p>

          <h4>Step-by-step</h4>
          <ol>
            <li>From $x>2$, multiply by 2: $2x>4$.</li>
            <li>From $y>3$, multiply by 5: $5y>15$.</li>
            <li>Add the inequalities: $2x+5y>4+15$.</li>
            <li>So $2x+5y>19$.</li>
          </ol>

          <div class="expl-tip">Look at the shape of the goal. It tells you how to transform the assumptions.</div>
        </div>
      `,
      method: "Multiply $x>2$ by 2 to get $2x>4$. Multiply $y>3$ by 5 to get $5y>15$. Add them.",
      key: "Direct proof means move forward from what you are given."
    },
    {
      phase: "Inequalities and Proof Style",
      number: "11",
      title: "Indirect proof",
      visual: "contradiction",
      problem: "Prove the same inequality by assuming the conclusion fails.",
      explanation: `
        <div class="expl-section">
          <h4>What indirect proof means</h4>
          <p>Instead of proving the conclusion directly, assume the conclusion is false and show that this creates an impossibility.</p>
          <p>Here the conclusion is $2x+5y>19$, so the opposite is $2x+5y\\le19$.</p>

          <h4>Where the contradiction appears</h4>
          <ol>
            <li>Assume $x>2$ and $y>3$.</li>
            <li>Then $2x>4$ and $5y>15$.</li>
            <li>So $2x+5y>19$.</li>
            <li>But the opposite assumption said $2x+5y\\le19$.</li>
            <li>Both cannot be true, so the opposite assumption is impossible.</li>
          </ol>

          <div class="expl-tip">Contradiction proof is not guessing. You deliberately assume the opposite and force it to break.</div>
        </div>
      `,
      method: "Assume $x>2$, $y>3$, but $2x+5y\\le19$. The assumptions force $2x+5y>4+15=19$, contradiction.",
      key: "Contradiction means the opposite assumption cannot survive."
    },
    {
      phase: "Divisibility and Remainders",
      number: "12",
      title: "Remainder cases modulo 3",
      visual: "mod",
      problem: "If $n$ is not divisible by 3, show that $n^2-1$ is divisible by 3.",
      explanation: `
        <div class="expl-section">
          <h4>What the condition means</h4>
          <p>If $n$ is not divisible by 3, then it does not have remainder 0 when divided by 3.</p>
          <p>So there are only two possible forms: $n=3k+1$ or $n=3k+2$.</p>

          <h4>Case 1: $n=3k+1$</h4>
          <p>$n^2-1=(3k+1)^2-1=9k^2+6k+1-1=9k^2+6k=3(3k^2+2k)$.</p>

          <h4>Case 2: $n=3k+2$</h4>
          <p>$n^2-1=(3k+2)^2-1=9k^2+12k+4-1=9k^2+12k+3=3(3k^2+4k+1)$.</p>

          <p>In both cases, $n^2-1$ is 3 times an integer, so it is divisible by 3.</p>
          <div class="expl-tip">Remainder proofs are calm if you list all possible remainders first.</div>
        </div>
      `,
      method: "Write $n=3k+1$ or $n=3k+2$, square each form, subtract 1, and factor out 3.",
      key: "Modulo casework is just a controlled list of possible remainders."
    },
    {
      phase: "Divisibility and Remainders",
      number: "13",
      title: "Combine modulo information",
      visual: "mod-grid",
      problem: "Work with conditions modulo 3 and modulo 4 by checking remainders modulo 12.",
      explanation: `
        <div class="expl-section">
          <h4>Why modulo 12?</h4>
          <p>When a problem gives information modulo 3 and modulo 4, a full cycle repeats every $3\\cdot4=12$ numbers.</p>
          <p>So instead of guessing, check the possible remainders $0,1,2,\\ldots,11$.</p>

          <h4>The table idea</h4>
          <p>For each remainder modulo 12, compute what it gives modulo 3 and modulo 4.</p>
          <pre class="expl-code">r mod 12: 0  1  2  3  4  5  6  7  8  9  10 11
r mod 3:  0  1  2  0  1  2  0  1  2  0   1  2
r mod 4:  0  1  2  3  0  1  2  3  0  1   2  3</pre>
          <p>Then keep only the row or rows matching the conditions in the problem.</p>

          <div class="expl-tip">A combined remainder table is often faster and safer than trying random numbers.</div>
        </div>
      `,
      method: "List the twelve possible remainders 0 through 11, then keep only the ones matching both smaller conditions.",
      key: "A combined remainder table prevents guessing."
    },
    {
      phase: "Divisibility and Remainders",
      number: "14",
      title: "Prove divisibility by 6 with cases",
      visual: "mod-cases",
      problem: "Show a number expression is divisible by 6 by proving divisibility by 2 and by 3.",
      explanation: `
        <div class="expl-section">
          <h4>Why split 6 into 2 and 3?</h4>
          <p>To prove something is divisible by 6, it is enough to prove it is divisible by 2 and divisible by 3.</p>
          <p>This works because 2 and 3 share no common factor except 1.</p>

          <h4>How the proof is organized</h4>
          <ol>
            <li>First prove the expression is even. Use the two parity cases: $n=2m$ and $n=2m+1$.</li>
            <li>Then prove it is divisible by 3. Use $n=3k$, $n=3k+1$, and $n=3k+2$.</li>
            <li>After both parts are done, conclude divisibility by 6.</li>
          </ol>

          <div class="expl-tip">For composite divisors, split the target into smaller coprime divisibility checks.</div>
        </div>
      `,
      method: "Use parity cases for divisibility by 2 and three remainder cases for divisibility by 3.",
      key: "For 6, prove both evenness and divisibility by 3."
    },
    {
      phase: "Divisibility and Remainders",
      number: "15",
      title: "Three consecutive integers",
      visual: "consecutive",
      problem: "Prove $6\\mid n^3-n$.",
      explanation: `
        <div class="expl-section">
          <h4>Why factoring is the best move</h4>
          <p>The expression $n^3-n$ has a common factor $n$.</p>
          <p>After factoring, the hidden structure becomes visible.</p>

          <h4>Step-by-step</h4>
          <ol>
            <li>$n^3-n=n(n^2-1)$.</li>
            <li>Use difference of squares: $n^2-1=(n-1)(n+1)$.</li>
            <li>So $n^3-n=(n-1)n(n+1)$.</li>
            <li>These are three consecutive integers.</li>
            <li>Among three consecutive integers, one is divisible by 3.</li>
            <li>Among three consecutive integers, at least one is even.</li>
          </ol>
          <p>Therefore the product is divisible by $2\\cdot3=6$.</p>

          <div class="expl-tip">Three consecutive integers automatically contain a multiple of 2 and a multiple of 3.</div>
        </div>
      `,
      method: "Factor $n^3-n=n(n-1)(n+1)$. Among three consecutive integers, one is even and one is divisible by 3.",
      key: "Consecutive-factor products are divisibility machines."
    },
    {
      phase: "Divisibility and Remainders",
      number: "16",
      title: "Factor to expose 30",
      visual: "factor-tree",
      problem: "Use factoring to prove divisibility by $30=2\\cdot3\\cdot5$.",
      explanation: `
        <div class="expl-section">
          <h4>What makes 30 special?</h4>
          <p>$30=2\\cdot3\\cdot5$. So proving divisibility by 30 means finding one factor 2, one factor 3, and one factor 5.</p>

          <h4>The method</h4>
          <ol>
            <li>Factor the expression as much as possible.</li>
            <li>Look for consecutive integers, because they often supply factors 2 and 3.</li>
            <li>Use a modulo 5 case if the factor 5 is not visible immediately.</li>
            <li>Once the product has factors 2, 3, and 5, conclude it is divisible by 30.</li>
          </ol>

          <p>This is the same thinking as the $6\\mid n^3-n$ problem, but with one more prime factor to account for.</p>
          <div class="expl-tip">Big divisibility goals become manageable when you split them into prime factors.</div>
        </div>
      `,
      method: "Factor the expression, then show the product contains a factor 2, a factor 3, and a factor 5.",
      key: "To prove divisibility by 30, look for 2, 3, and 5."
    },
    {
      phase: "Divisibility and Remainders",
      number: "17",
      title: "Power cycles",
      visual: "cycle",
      problem: "Simplify a large power expression using a small congruence cycle.",
      explanation: `
        <div class="expl-section">
          <h4>Why large powers are not actually large</h4>
          <p>Modulo arithmetic repeats. Once you know the cycle, a huge exponent can collapse to a tiny calculation.</p>

          <h4>Example idea</h4>
          <p>If $2\\equiv-1\\pmod3$, then powers of 2 alternate:</p>
          <pre class="expl-code">2^1 ≡ -1 mod 3
2^2 ≡  1 mod 3
2^3 ≡ -1 mod 3
2^4 ≡  1 mod 3</pre>
          <p>So the only thing that matters is whether the exponent is odd or even.</p>

          <h4>General method</h4>
          <ol>
            <li>Reduce the base modulo the divisor.</li>
            <li>Compute a few powers.</li>
            <li>Find the repeating cycle.</li>
            <li>Use the exponent's remainder within that cycle.</li>
          </ol>

          <div class="expl-tip">Do not expand huge powers. Find the cycle.</div>
        </div>
      `,
      method: "Find a small equivalent remainder such as $2\\equiv-1\\pmod3$, then use the repeating power pattern.",
      key: "Reduce first, then use the cycle."
    },
    {
      phase: "Divisibility and Remainders",
      number: "18",
      title: "Last digits by factoring",
      visual: "last-digit",
      problem: "Prove a large expression is divisible by 100.",
      explanation: `
        <div class="expl-section">
          <h4>What does divisible by 100 mean?</h4>
          <p>A number is divisible by 100 if it contains the factor $100=4\\cdot25$.</p>
          <p>Equivalently, in decimal notation, it ends with two zeros.</p>

          <h4>Factoring strategy</h4>
          <ol>
            <li>Look for a difference of powers or difference of squares.</li>
            <li>Factor until smaller pieces appear.</li>
            <li>Search the factors for 4 and 25, or for two factors of 10.</li>
            <li>Once 100 is visible, the divisibility proof is done.</li>
          </ol>

          <p>For example, expressions like $11^{10}-1$ can often be attacked as $a^n-b^n$, which always has a factor $a-b$.</p>
          <div class="expl-tip">For divisibility by 100, your eyes should look for $4\\cdot25$ or $10\\cdot10$.</div>
        </div>
      `,
      method: "Factor the expression until a factor 100, or separate factors 4 and 25, becomes visible.",
      key: "For 100, hunt for $4\\cdot25$ or two factors of 10."
    },
    {
      phase: "Logical Thinking",
      number: "19",
      title: "Use a chart",
      visual: "truth-chart",
      problem: "Solve a logic puzzle by organizing possibilities in a chart.",
      explanation: `
        <div class="expl-section">
          <h4>Why a chart helps</h4>
          <p>Logic puzzles become hard when you try to remember every clue in your head.</p>
          <p>A chart turns memory work into visible elimination.</p>

          <h4>How to build the chart</h4>
          <ol>
            <li>Put one group of possibilities in rows.</li>
            <li>Put the other group of possibilities in columns.</li>
            <li>Mark impossible combinations with an X.</li>
            <li>Mark forced combinations with a check.</li>
            <li>Repeat until only one consistent arrangement remains.</li>
          </ol>

          <div class="expl-tip">Do not solve the whole puzzle at once. Let each clue remove or force one small part of the chart.</div>
        </div>
      `,
      method: "List the possible cases as rows, mark which conditions each case satisfies, then keep only the rows that fit all clues.",
      key: "Logic puzzles become easier when possibilities are visible."
    },
    {
      phase: "Logical Thinking",
      number: "20",
      title: "Decision tree strategy",
      visual: "decision-tree",
      problem: "Choose the next step by splitting into meaningful cases.",
      explanation: `
        <div class="expl-section">
          <h4>What a decision tree is</h4>
          <p>A decision tree is a structured way to say: if this happens, go left; if that happens, go right.</p>
          <p>It is useful when a problem has several possible outcomes and each outcome changes the next move.</p>

          <h4>How to make a useful tree</h4>
          <ol>
            <li>Start with the first question or observation.</li>
            <li>Draw one branch for each possible answer.</li>
            <li>Under each branch, write what you now know.</li>
            <li>Continue only until every branch has a conclusion.</li>
          </ol>

          <p>The goal is not to draw a pretty tree. The goal is to make sure every possible case is covered exactly once.</p>
          <div class="expl-tip">A good split is one where the answer changes what you do next.</div>
        </div>
      `,
      method: "Draw branches for the possible outcomes, then write the action or conclusion at each branch.",
      key: "Branch only on distinctions that change the conclusion."
    },
    {
      phase: "Logical Thinking",
      number: "21",
      title: "Ternary splitting",
      visual: "ternary",
      problem: "Use three-outcome information to narrow many possibilities quickly.",
      explanation: `
        <div class="expl-section">
          <h4>Why three outcomes matter</h4>
          <p>Some observations naturally have three results: left side wins, right side wins, or tie.</p>
          <p>Each observation can therefore split possibilities into three groups.</p>

          <h4>The strategy</h4>
          <ol>
            <li>List all possible hidden cases.</li>
            <li>Design a test whose three outcomes split those cases as evenly as possible.</li>
            <li>After the outcome is known, discard the impossible branches.</li>
            <li>Repeat on the remaining branch.</li>
          </ol>

          <p>This is why balance-scale problems are usually solved by dividing possibilities into three groups, not two.</p>
          <div class="expl-tip">One three-outcome test can distinguish up to three groups of possibilities.</div>
        </div>
      `,
      method: "Split possibilities into three nearly equal groups, observe the outcome, then continue only inside the matching group.",
      key: "Good case splits reduce the search space."
    },
    {
      phase: "Logical Thinking",
      number: "22",
      title: "Local reasoning on a board",
      visual: "board",
      problem: "Use local constraints to force a global conclusion.",
      explanation: `
        <div class="expl-section">
          <h4>What local reasoning means</h4>
          <p>Some problems are too large to solve all at once. Instead, look for a small region where the rules force a move.</p>
          <p>After one local move is forced, it may force another nearby move, and the information spreads.</p>

          <h4>How to use it</h4>
          <ol>
            <li>Find a corner, edge, smallest case, or most restricted part.</li>
            <li>Write what must be true there.</li>
            <li>Use that new fact to update neighboring parts.</li>
            <li>Continue until the global conclusion is unavoidable.</li>
          </ol>

          <div class="expl-tip">When the whole board is confusing, start where the fewest choices are possible.</div>
        </div>
      `,
      method: "Mark what must be true in one small region, then propagate that information to neighboring regions.",
      key: "Local forced moves can solve global problems."
    },
    {
      phase: "Pigeonhole and Graph Models",
      number: "23",
      title: "Basic pigeonhole principle",
      visual: "pigeon-mod",
      problem: "Show that placing more objects than boxes forces a shared box.",
      explanation: `
        <div class="expl-section">
          <h4>The whole idea</h4>
          <p>If you have more objects than boxes, at least one box must contain two or more objects.</p>
          <p>It sounds obvious, but it proves many exam problems very quickly.</p>

          <h4>How to write the proof</h4>
          <ol>
            <li>Name the objects being placed.</li>
            <li>Name the boxes or categories.</li>
            <li>Explain that avoiding a repeat allows at most one object per box.</li>
            <li>If there are more objects than boxes, a repeat is forced.</li>
          </ol>

          <p>Example: 13 people and 12 birth months force two people to share a birth month.</p>
          <div class="expl-tip">The hardest part is usually choosing the boxes correctly.</div>
        </div>
      `,
      method: "Name the objects, name the boxes, compute how many objects fit without collision, then add one.",
      key: "More objects than boxes means at least one collision."
    },
    {
      phase: "Pigeonhole and Graph Models",
      number: "24",
      title: "Pigeonhole with modulo",
      visual: "power-boxes",
      problem: "Use remainders as boxes.",
      explanation: `
        <div class="expl-section">
          <h4>Why remainders are boxes</h4>
          <p>Modulo arithmetic has only a fixed number of possible remainders.</p>
          <p>Modulo 3 has boxes 0, 1, 2. Modulo 5 has boxes 0, 1, 2, 3, 4.</p>

          <h4>The method</h4>
          <ol>
            <li>Choose the modulus from the problem.</li>
            <li>List the possible remainder boxes.</li>
            <li>Place each number or expression into one box.</li>
            <li>If there are too many objects, two must share a remainder.</li>
          </ol>

          <div class="expl-tip">Whenever a problem asks about same remainder, difference divisible by n, or congruence, think pigeonhole boxes.</div>
        </div>
      `,
      method: "Decide the modulus, list the possible remainders, then place each expression into its remainder box.",
      key: "Remainder classes are natural pigeonholes."
    },
    {
      phase: "Pigeonhole and Graph Models",
      number: "25",
      title: "Repeated sums",
      visual: "range",
      problem: "Force two quantities to be equal by comparing counts of possible values.",
      explanation: `
        <div class="expl-section">
          <h4>What kind of problem is this?</h4>
          <p>Sometimes the objects are not given directly. You create them: sums, differences, products, or partial totals.</p>
          <p>Then you show there are more created objects than possible values.</p>

          <h4>Step-by-step structure</h4>
          <ol>
            <li>Define the quantities you are comparing.</li>
            <li>Count how many quantities you created.</li>
            <li>Find the range of possible values.</li>
            <li>If the range is smaller than the count, two quantities must be equal.</li>
          </ol>

          <div class="expl-tip">Pigeonhole can apply to values you construct, not only physical objects.</div>
        </div>
      `,
      method: "Count how many objects you create, count how many different values they can have, then apply pigeonhole.",
      key: "A narrow value range creates collisions."
    },
    {
      phase: "Pigeonhole and Graph Models",
      number: "26",
      title: "Another pigeonhole setup",
      visual: "pigeon-mod",
      problem: "Identify the boxes before trying to calculate.",
      explanation: `
        <div class="expl-section">
          <h4>Why setup matters more than calculation</h4>
          <p>Pigeonhole problems are usually short after the boxes are chosen correctly.</p>
          <p>If the boxes are wrong, the proof will not show the required conclusion.</p>

          <h4>How to choose boxes</h4>
          <ol>
            <li>Read what the problem wants two objects to share.</li>
            <li>Make that shared property the box label.</li>
            <li>Count how many box labels are possible.</li>
            <li>Compare with the number of objects.</li>
          </ol>

          <p>For example, if the goal is same remainder modulo 7, the boxes are the seven remainders.</p>
          <div class="expl-tip">The box is not always a place. It can be a remainder, color, degree, interval, or category.</div>
        </div>
      `,
      method: "Ask: what does it mean for two objects to be the same in the way the problem wants? That sameness defines the boxes.",
      key: "The box is the property you want two objects to share."
    },
    {
      phase: "Pigeonhole and Graph Models",
      number: "27",
      title: "Graph pigeonhole",
      visual: "hexagon",
      problem: "Use a graph model to prove a forced pattern.",
      explanation: `
        <div class="expl-section">
          <h4>Why use a graph?</h4>
          <p>A graph is a model for pairwise relationships. The vertices are objects, and the edges record relationships between pairs.</p>
          <p>Once the relationship is drawn, counting and pigeonhole arguments become visible.</p>

          <h4>Common graph-model move</h4>
          <ol>
            <li>Make each object a vertex.</li>
            <li>Draw or color an edge depending on the relationship.</li>
            <li>Look at one vertex and count how many edges leave it.</li>
            <li>Use pigeonhole to force several edges of the same kind.</li>
            <li>Translate the forced graph pattern back into the original problem.</li>
          </ol>

          <div class="expl-tip">Graph modelling is translation: objects become dots, relationships become lines.</div>
        </div>
      `,
      method: "Represent objects as vertices and relationships as colored or uncolored edges, then apply counting or pigeonhole to the edges.",
      key: "A graph is a model for pairwise relationships."
    },
    {
      phase: "Paths and Permutations",
      number: "28",
      title: "Shortest paths",
      visual: "paths",
      problem: "Count shortest grid paths by arranging moves.",
      explanation: `
        <div class="expl-section">
          <h4>What makes a path shortest?</h4>
          <p>On a grid, a shortest path never wastes a move by going backward.</p>
          <p>So if the destination is 3 steps right and 2 steps up, every shortest path has exactly 3 R moves and 2 U moves.</p>

          <h4>Counting the paths</h4>
          <ol>
            <li>Write the required moves: R, R, R, U, U.</li>
            <li>There are 5 total move positions.</li>
            <li>Choose which 2 positions are U moves.</li>
            <li>The remaining positions are automatically R moves.</li>
            <li>So the count is $\\binom52=10$.</li>
          </ol>

          <div class="expl-tip">Shortest grid paths are not about drawing every route. They are about arranging required moves.</div>
        </div>
      `,
      method: "Count the total moves, choose the positions of one move type, and use a binomial coefficient.",
      key: "Grid paths are combinations of move positions."
    },
    {
      phase: "Paths and Permutations",
      number: "29",
      title: "Permutations with no fixed points",
      visual: "derangement",
      problem: "Model wrong labels as a permutation with no fixed points.",
      explanation: `
        <div class="expl-section">
          <h4>What is a fixed point?</h4>
          <p>In a permutation, a fixed point is an object that stays in its original position.</p>
          <p>If box 1 still has label 1, then 1 is fixed. If every label is wrong, there are no fixed points.</p>

          <h4>How to model the problem</h4>
          <ol>
            <li>List the objects or labels.</li>
            <li>A permutation tells where each label goes.</li>
            <li>Forbid every assignment where an object keeps its own label.</li>
            <li>Count or list only arrangements with no fixed points.</li>
          </ol>

          <h4>Small example</h4>
          <p>For three labels, the arrangements with no fixed points are $(1\\to2,2\\to3,3\\to1)$ and $(1\\to3,2\\to1,3\\to2)$.</p>
          <div class="expl-tip">Wrong label means exactly this: no item is allowed to map to itself.</div>
        </div>
      `,
      method: "Write the permutation model, forbid fixed points, then count or list only arrangements where every item moves.",
      key: "Wrong label means no fixed point."
    }
  ],
  softStartModules: [
    {
      module: "004",
      title: "Read symbols as words",
      concepts: ["symbols", "translation", "confidence"],
      learn: "A symbol is just a short word. Read $x\\in A$ as 'x is in A', $\\forall x$ as 'for every x', and $p\\to q$ as 'if p, then q'.",
      example: "$3\\in\\{1,2,3\\}$ means 3 is one of the listed elements, so the statement is true.",
      quiz: "What does $x\\notin A$ say in plain English?"
    },
    {
      module: "005",
      title: "Sets and set operations",
      concepts: ["sets", "union", "intersection"],
      learn: "A set is a container with no repeated elements. Union means 'in either set', intersection means 'in both', and difference means 'in the first but not the second'.",
      example: "If $A=\\{1,2,3\\}$ and $B=\\{3,4\\}$, then $A\\cap B=\\{3\\}$.",
      quiz: "For the same A and B, what is $A\\cup B$?"
    },
    {
      module: "007",
      title: "Ordered pairs and Cartesian product",
      concepts: ["pairs", "product", "order"],
      learn: "An ordered pair remembers order: $(1,2)$ is not the same as $(2,1)$. A Cartesian product lists all possible ordered pairs from two sets.",
      example: "If $X=\\{1,2\\}$ and $Y=\\{a,b\\}$, then $X\\times Y=\\{(1,a),(1,b),(2,a),(2,b)\\}$.",
      quiz: "How many elements are in $A\\times B$ if $|A|=3$ and $|B|=4$?"
    },
    {
      module: "008",
      title: "Number systems",
      concepts: ["integers", "rationals", "domain"],
      learn: "Always check the number system. Integers allow negatives and zero, rationals allow fractions, and natural numbers depend on the course convention.",
      example: "$-2$ is an integer but not a natural number in many courses. $1/2$ is rational but not an integer.",
      quiz: "Is $7/3$ an integer or a rational number?"
    },
    {
      module: "019",
      title: "Expressions have parts",
      concepts: ["variables", "coefficients", "terms"],
      learn: "An expression is built from terms. In $5x^2-3x+7$, the variable is x, 5 and -3 are coefficients, and 7 is a constant.",
      example: "In $4ab^2$, the coefficient is 4 and the variables are a and b.",
      quiz: "What is the coefficient of $-6x^3$?"
    },
    {
      module: "020",
      title: "Order of operations",
      concepts: ["precedence", "brackets", "evaluation"],
      learn: "Calculate in the legal order: brackets first, then powers, then multiplication/division, then addition/subtraction.",
      example: "$2+3^2\\cdot4=2+9\\cdot4=38$, not $20$.",
      quiz: "Which is done first in $5+2(3^2)$?"
    },
    {
      module: "021",
      title: "Substitution",
      concepts: ["evaluate", "parentheses", "negative values"],
      learn: "Substitution means replacing a variable with a value. Put negative values in parentheses so powers and signs stay clear.",
      example: "If $f(x)=x^2-1$, then $f(-3)=(-3)^2-1=8$.",
      quiz: "If $g(x)=2x+5$, what is $g(-2)$?"
    },
    {
      module: "022",
      title: "Simplifying safely",
      concepts: ["expand", "combine", "cancel"],
      learn: "Simplifying means rewriting without changing value. You may expand brackets, combine like terms, and cancel common factors when the rules allow it.",
      example: "$3(x+2)-x=3x+6-x=2x+6$.",
      quiz: "Simplify $2(a+3)+a$."
    },
    {
      module: "023",
      title: "Sigma and product notation",
      concepts: ["sum", "product", "index"],
      learn: "Sigma means add the listed terms. Product notation means multiply the listed terms. The index tells you which values to plug in.",
      example: "$\\sum_{i=1}^{3} i^2=1^2+2^2+3^2=14$.",
      quiz: "Expand $\\sum_{k=1}^{4} k$."
    },
    {
      module: "024",
      title: "Functions as input-output rules",
      concepts: ["input", "output", "rule"],
      learn: "A function assigns each input exactly one output. It is okay for two inputs to share an output; it is not okay for one input to have two outputs.",
      example: "$f(x)=x^2$ is a function because every x has one square.",
      quiz: "Can a function send both 2 and -2 to 4?"
    },
    {
      module: "025",
      title: "Sequences",
      concepts: ["term", "index", "pattern"],
      learn: "A sequence is an ordered list. The index tells the position, and the formula or recurrence tells how terms are made.",
      example: "If $a_n=2n+1$, then $a_1=3$, $a_2=5$, and $a_3=7$.",
      quiz: "What is $a_4$ for $a_n=2n+1$?"
    },
    {
      module: "026",
      title: "Relations",
      concepts: ["pairs", "properties", "arrows"],
      learn: "A relation tells which objects are connected. It can be listed as ordered pairs or drawn as arrows.",
      example: "The pair $(1,3)$ in R means 1 is related to 3.",
      quiz: "If a relation is symmetric and has $(1,3)$, what other pair must it have?"
    },
    {
      module: "027",
      title: "Graphs",
      concepts: ["vertices", "edges", "degree"],
      learn: "A graph is made of vertices and edges. The degree of a vertex is the number of edges touching it.",
      example: "In a triangle, each vertex has degree 2.",
      quiz: "What is the sum of degrees in a graph with 5 edges?"
    },
    {
      module: "029",
      title: "Floor and ceiling",
      concepts: ["round down", "round up", "bounds"],
      learn: "Floor rounds down to the greatest integer not above the number. Ceiling rounds up to the least integer not below the number.",
      example: "$\\lfloor3.7\\rfloor=3$ and $\\lceil3.7\\rceil=4$.",
      quiz: "What are $\\lfloor-2.3\\rfloor$ and $\\lceil-2.3\\rceil$?"
    },
    {
      module: "030",
      title: "Factorials",
      concepts: ["arrangements", "orders", "counting"],
      learn: "$n!$ means multiply $n(n-1)(n-2)\\cdots1$. It counts how many ways to arrange n distinct objects.",
      example: "$4!=4\\cdot3\\cdot2\\cdot1=24$.",
      quiz: "How many ways can 5 different books be arranged in a row?"
    },
    {
      module: "032",
      title: "Counterexamples",
      concepts: ["for all", "disprove", "one case"],
      learn: "To disprove a universal statement, one valid counterexample is enough.",
      example: "The claim 'all integers are positive' is false because 0 is an integer and is not positive.",
      quiz: "What kind of example disproves 'all squares are bigger than the original number'?"
    },
    {
      module: "033",
      title: "If-then statements",
      concepts: ["condition", "result", "promise"],
      learn: "An implication $p\\to q$ means whenever p is true, q must be true. It fails only when p is true and q is false.",
      example: "'If it rains, the ground is wet' is broken only if it rains and the ground is not wet.",
      quiz: "When is $p\\to q$ false?"
    },
    {
      module: "035",
      title: "Modulo as a cycle",
      concepts: ["remainders", "clock math", "cycles"],
      learn: "Modulo keeps only the remainder after division. It behaves like a clock that wraps around.",
      example: "$13\\bmod5=3$ because $13=2\\cdot5+3$.",
      quiz: "What is $22\\bmod6$?"
    }
  ],
  topics: [
    {
      id: "very-soft-start",
      title: "A Very Soft Start",
      short: "Soft Start",
      examWeight: "Confidence builder before the exam-core topics",
      goal: "Learn how to approach discrete-math questions without panic: translate, model, compute, and explain one small step at a time.",
      lesson: [
        "**Start by naming the object:** Ask whether the problem is about a number, set, function, relation, graph, formula, path, or arrangement. The object tells you which tools are legal.",
        "**Translate symbols into ordinary words:** Read $a\\mid b$ as 'a divides b', $x\\in A$ as 'x is in A', and $\\forall x$ as 'for every x'. Do this before calculating.",
        "**Most proofs begin with a definition:** Even means $n=2k$, divides means $b=ak$, subset means 'take any $x\\in A$ and prove $x\\in B$'. Definitions turn vague words into algebra.",
        "**Draw when the structure is hidden:** Use boxes for pigeonhole, dots and lines for graphs, grids for paths, and tables for logic or code tracing.",
        "**Copy the worked-example shape first:** Exams often reuse patterns with new numbers. Identify the pattern, then replace the old values carefully.",
        "**A counterexample is enough to break 'for all':** If a statement says every object has a property, one valid object without the property disproves it.",
        "**Keep the final sentence human-readable:** After the calculation, say what it means: 'therefore it is not injective', 'therefore two people share a month', or 'therefore the formula is a tautology'."
      ],
      visual: {
        type: "soft-start-road",
        title: "The first four moves",
        caption: "Read the symbols, name the object, choose the method, then copy the closest worked-example shape."
      },
      methods: [
        "**Formula problems:** Expand or factor first; do not invent a proof before simplifying the expression.",
        "**Divisibility problems:** Rewrite $a\\mid b$ as $b=ak$ or factor the expression until a visible multiple appears.",
        "**Counting problems:** Decide whether order matters, whether repetition is allowed, and whether a restriction is easier by complement.",
        "**Logic problems:** Locate the main connective, then use truth tables or rewrites such as $p\\to q\\equiv\\neg p\\lor q$.",
        "**Graph problems:** List vertices, list edges, then check degrees, paths, cycles, or relation properties from definitions."
      ],
      examples: [
        {
          level: "Easy",
          title: "Prove a familiar formula",
          question: "Why is $(a+b)^2=a^2+2ab+b^2$?",
          solution: ["Rewrite the square as multiplication: $(a+b)^2=(a+b)(a+b)$.", "Distribute the first bracket: $a(a+b)+b(a+b)$.", "Distribute again: $a^2+ab+ba+b^2$.", "Since $ab=ba$, combine the middle terms to get $a^2+2ab+b^2$."],
          takeaway: "When a formula looks mysterious, expand the notation into smaller legal steps."
        },
        {
          level: "Easy",
          title: "Disprove with one counterexample",
          question: "Is $n^2>n$ true for every integer n?",
          solution: ["A universal statement says every allowed input works.", "Try a small allowed integer: $n=1$.", "Then $n^2=1$ and the claim becomes $1>1$.", "That is false, so the original statement is false."],
          takeaway: "One valid counterexample breaks a 'for all' claim."
        },
        {
          level: "Medium",
          title: "Divisibility by factoring",
          question: "Show that $6\\mid n^3-n$ for every integer n.",
          solution: ["Factor the expression: $n^3-n=n(n^2-1)$.", "Use difference of squares: $n(n-1)(n+1)$.", "These are three consecutive integers.", "Among three consecutive integers, one is divisible by 3 and at least one is divisible by 2.", "So the product is divisible by $2\\cdot3=6$."],
          takeaway: "Factoring can reveal hidden consecutive numbers."
        },
        {
          level: "Medium",
          title: "Pigeonhole in plain language",
          question: "Why do 13 people guarantee that two were born in the same month?",
          solution: ["The objects are people.", "The boxes are the 12 months.", "If every month had at most one person, there could be at most 12 people.", "With 13 people, one month must contain at least two people."],
          takeaway: "Pigeonhole means more objects than boxes forces a repeat."
        },
        {
          level: "Exam",
          title: "Grid paths as arrangements",
          question: "How many shortest paths go from the lower-left to the upper-right of a $3\\times2$ grid?",
          solution: ["A shortest path must move 3 times right and 2 times up.", "That is 5 moves total.", "Choose which 2 of the 5 move positions are up moves.", "The count is $\\binom52=10$."],
          takeaway: "Shortest grid paths are arrangements of required moves."
        }
      ],
      memoryQuiz: [
        ["What is the first move on a confusing problem?", "Name the object: number, set, function, relation, graph, formula, path, or arrangement."],
        ["How do you prove a divisibility statement $a\\mid b$?", "Show $b=ak$ for some integer k, or factor b until a multiple of a is visible."],
        ["How do you disprove 'for all'?", "Give one allowed counterexample."],
        ["What are pigeonholes?", "The boxes or categories objects are placed into."],
        ["What should you do before using a formula?", "Translate the notation and identify what the formula is counting or proving."],
        ["Why draw a model?", "A drawing makes hidden structure visible: boxes, vertices, paths, cases, or loop states."]
      ],
      practiceQuiz: [
        {
          q: "Which method best proves $(a+b)^2=a^2+2ab+b^2$?",
          hint: "Think about what the square notation means.",
          difficulty: "easy",
          options: ["Make a truth table", "Expand $(a+b)(a+b)$ and collect terms", "Use pigeonhole", "Draw a graph"],
          answer: 1,
          why: "This is an algebraic identity, so expansion and simplification are the natural method."
        },
        {
          q: "To prove $6\\mid n^3-n$ by factoring, what is the key factorization?",
          hint: "Factor out n first, then use difference of squares.",
          difficulty: "medium",
          options: ["$n^3-n=n(n-1)(n+1)$", "$n^3-n=(n+1)^3$", "$n^3-n=3n$", "$n^3-n=n^2(n-1)$"],
          answer: 0,
          why: "Three consecutive integers reveal divisibility by 2 and by 3."
        },
        {
          q: "In pigeonhole language, what are the boxes in the 13 people / birth month example?",
          hint: "Objects go into boxes. People are the objects.",
          difficulty: "easy",
          options: ["The people", "The months", "The years", "The birthdays themselves"],
          answer: 1,
          why: "People are placed into month categories."
        },
        {
          q: "A shortest path on a $3\\times2$ grid needs which moves?",
          hint: "Count how many columns and how many rows you must cross.",
          difficulty: "medium",
          options: ["3 right and 2 up", "2 right and 3 down", "5 right", "6 diagonal"],
          answer: 0,
          why: "The path must move across 3 columns and up 2 rows."
        }
      ],
      readiness: [
        "You can translate symbols into words before calculating.",
        "You can choose a basic model: algebra, boxes, graph, grid, table, or cases.",
        "You can explain a worked example in your own words.",
        "You can use one counterexample to disprove a universal statement."
      ]
    },
    {
      id: "logic-proofs",
      title: "Logic & Proofs",
      short: "Logic",
      examWeight: "Appears in 2023-05, 2023-08, 2024-03, 2024-05, 2025-03, 2025-05, 2025-08, 2026-03",
      goal: "Read, rewrite, prove, and classify propositional formulas without guessing.",
      lesson: [
        "**What is Propositional Logic?** It is the mathematics of True and False. A proposition is just a declarative sentence that is definitively True (T) or False (F). \"It is raining\" is a proposition. \"Go away!\" is not.",
        "**The Building Blocks (Connectives):** We combine simple propositions into complex ones using operators: AND (\\(\\land\\)), OR (\\(\\lor\\)), NOT (\\(\\neg\\)), IMPLIES (\\(\\to\\)), and IFF (\\(\\leftrightarrow\\)).",
        "**The OR is inclusive:** In everyday English, \"Soup or Salad\" usually means one or the other, not both. In logic, \\(P \\lor Q\\) means P is true, Q is true, or BOTH are true.",
        "**The tricky IMPLICATION (\\(\\to\\)):** \\(P \\to Q\\) (\"If P then Q\") is only false in one exact scenario: when P is True but Q is False. Think of a promise: \"If you get an A, I will buy you a car.\" The only way I break my promise is if you DO get an A (P=T), but I DON'T buy the car (Q=F). If you don't get an A (P=F), my promise isn't broken no matter what I do, so the statement is technically True.",
        "**Tautology vs Contradiction:** A tautology is a statement that is ALWAYS true no matter what (e.g., \\(P \\lor \\neg P\\)). A contradiction is ALWAYS false (e.g., \\(P \\land \\neg P\\)). A contingency is sometimes true, sometimes false.",
        "**Proof Sequences (Natural Deduction):** You don't always need a massive truth table. A proof sequence uses known logical rules (like Modus Ponens: from \\(P \\to Q\\) and P, conclude Q) to step-by-step derive a conclusion from premises."
      ],
      visual: {
        type: "truth-grid",
        title: "The one dangerous implication row",
        caption: "For $p \\to q$, the only failure is T -> F. Every other row is true."
      },
      methods: [
        "**Truth Tables:** List all possible T/F combinations for your variables (\\(2^n\\) rows for n variables). Create columns for inner brackets first, then build up to the final expression.",
        "**Quick Tautology Check:** To prove something is a tautology, you can try to prove it ISN'T. Assume the final connective outputs False, and work backward. If you hit a contradiction (like needing P to be both T and F), then it must be a tautology.",
        "**Equivalence Rewriting:** Often, converting implications into ORs makes things easier. Memorize: \\(P \\to Q \\equiv \\neg P \\lor Q\\).",
        "**De Morgan's Laws:** Distributing a NOT flips the connective. \\(\\neg(P \\land Q) \\equiv \\neg P \\lor \\neg Q\\), and \\(\\neg(P \\lor Q) \\equiv \\neg P \\land \\neg Q\\).",
        "**Proof Strategy - Working Backwards:** Look at what you need to prove. If you need \\(\\neg A\\), look at your premises to find rules (like Modus Tollens) that output a negation."
      ],
      beginnerGuide: [
        {
          title: "Read a formula like a sentence",
          problem: "Before using a truth table, understand what the main connective is saying.",
          meaning: "A logic formula is built from smaller true/false sentences. The main connective is the last operation you evaluate, just like the outermost operation in algebra.",
          method: "Circle the largest bracket or the main arrow/AND/OR. Then evaluate inside pieces first.",
          steps: ["Name each simple statement.", "Evaluate negations first.", "Evaluate bracketed AND/OR pieces.", "Evaluate implication or biconditional last."],
          tip: "Most mistakes come from evaluating the arrow before the inside of the formula is known."
        },
        {
          title: "Implication is a promise",
          problem: "Understand why \\(p \\to q\\) is false only when p is true and q is false.",
          meaning: "An implication says: if the condition happens, the result must happen. If the condition never happens, the promise has not been broken.",
          method: "Ask: did p happen? If yes, q must happen. If p did not happen, the implication is true in formal logic.",
          steps: ["If p=T and q=T, the promise is kept.", "If p=T and q=F, the promise is broken.", "If p=F, the promise is not tested.", "So only T -> F is false."],
          tip: "Memorize the danger row: true antecedent, false consequent."
        },
        {
          title: "Proof rules are small legal moves",
          problem: "Natural deduction feels hard until each rule is treated as one allowed move.",
          meaning: "A proof sequence is not a paragraph. It is a chain where every line must come from earlier lines by a named rule.",
          method: "Work backward from the desired conclusion and ask which rule could produce it.",
          steps: ["Goal \\(Q\\)? Look for \\(P \\to Q\\) and P.", "Goal \\(\\neg P\\)? Look for Modus Tollens.", "Goal an AND statement? Prove both parts.", "Goal from an OR statement? Try eliminating the impossible option."],
          tip: "Never jump. One line, one rule, one reason."
        }
      ],
      formulaBank: [
        { tag: "Truth table", accent: "accent-navy", name: "Number of rows", formula: "$2^n$ rows for n different propositions", why: "Each proposition has two choices: true or false." },
        { tag: "Implication", accent: "accent-copper", name: "Implication rewrite", formula: "$p\\to q\\equiv \\neg p\\lor q$", why: "This removes arrows and makes equivalence simplification easier." },
        { tag: "Implication", accent: "accent-copper", name: "Contrapositive", formula: "$p\\to q\\equiv \\neg q\\to \\neg p$", why: "Proving the contrapositive is often easier than proving the original statement directly." },
        { tag: "Negation", accent: "accent-forest", name: "De Morgan laws", formula: "$\\neg(p\\land q)\\equiv\\neg p\\lor\\neg q$ and $\\neg(p\\lor q)\\equiv\\neg p\\land\\neg q$", why: "A NOT sign flips AND/OR when it moves inside." },
        { tag: "Proof rule", accent: "accent-navy", name: "Modus ponens", formula: "$p\\to q,\\ p\\ \\therefore q$", why: "If the rule is true and the condition happens, the result follows." },
        { tag: "Proof rule", accent: "accent-forest", name: "Modus tollens", formula: "$p\\to q,\\ \\neg q\\ \\therefore \\neg p$", why: "If the result did not happen, the condition could not have happened." }
      ],
      problemSolving: [
        {
          type: "Truth table",
          accent: "accent-navy",
          title: "Check whether a formula is a tautology",
          question: "Is $(p\\land(p\\to q))\\to q$ always true?",
          method: "Either build a truth table or recognize the proof rule inside.",
          steps: ["The inside says p is true and p implies q.", "By modus ponens, q must be true.", "So whenever the left side is true, the right side is true.", "If the left side is false, the implication is automatically true.", "Therefore the whole formula is a tautology."],
          remember: "A tautology has no false row."
        },
        {
          type: "Proof method",
          accent: "accent-forest",
          title: "Choose contrapositive",
          question: "Prove: if $n^2$ is even, then n is even.",
          method: "The direct proof is awkward, so prove the contrapositive.",
          steps: ["Contrapositive: if n is odd, then $n^2$ is odd.", "Let $n=2k+1$.", "Then $n^2=(2k+1)^2=4k^2+4k+1$.", "Rewrite as $2(2k^2+2k)+1$.", "That is odd, so the contrapositive is true, and the original statement is true."],
          remember: "For 'if square has property, then number has property', contrapositive is often clean."
        }
      ],
      examples: [
        {
          level: "Easy",
          title: "Truth value of a promise",
          question: "Evaluate the truth value of \\(P \\to (Q \\lor R)\\) when P=T, Q=F, and R=F.",
          solution: [
            "First evaluate the inner bracket: \\(Q \\lor R\\) is F OR F, which is F.",
            "Now substitute back into the main expression: \\(P \\to F\\).",
            "Since P=T, the expression becomes T -> F.",
            "A True antecedent leading to a False consequent is the ONLY time implication is False. Final answer: False."
          ],
          takeaway: "Always evaluate from the innermost brackets outward, exactly like PEMDAS in regular math."
        },
        {
          level: "Medium",
          title: "Simplifying with Equivalence Laws",
          question: "Use logical equivalences to simplify \\(\\neg(P \\to \\neg Q)\\).",
          solution: [
            "We want to get rid of the implication to make negation easier.",
            "Use the rule \\(A \\to B \\equiv \\neg A \\lor B\\). Here, A is P and B is \\(\\neg Q\\).",
            "So, \\(P \\to \\neg Q \\equiv \\neg P \\lor \\neg Q\\).",
            "Now apply the outer negation: \\(\\neg(\\neg P \\lor \\neg Q)\\).",
            "Use De Morgan's Law (distribute NOT and flip OR to AND): \\(\\neg\neg P \\land \\neg\neg Q\\).",
            "Double negations cancel out: \\(P \\land Q\\)."
          ],
          takeaway: "Implications are hard to negate directly. Always convert to OR/AND first."
        },
        {
          level: "Exam",
          title: "Tautology from May 2023",
          question: "Decide whether \\(P \\lor (P \\to Q)\\) is a tautology without using a full truth table.",
          solution: [
            "Let's try to rewrite the expression.",
            "Convert the implication: \\(P \\to Q \\equiv \\neg P \\lor Q\\).",
            "Substitute it back: \\(P \\lor (\\neg P \\lor Q)\\).",
            "Since everything is joined by OR, we can drop the brackets: \\(P \\lor \\neg P \\lor Q\\).",
            "Notice \\(P \\lor \\neg P\\). This is the Law of Excluded Middle — it is ALWAYS True.",
            "So the expression is True OR Q.",
            "True OR anything is always True. Therefore, it is a tautology."
          ],
          takeaway: "Algebraic rewriting is often much faster than drawing a 4-row truth table."
        },
        {
          level: "Exam",
          title: "Proof sequence from March 2024",
          question: "From premises 1. \\(A \\to (B \\lor C)\\), 2. \\(\\neg B\\), and 3. \\(\\neg C\\), formally prove \\(\\neg A\\).",
          solution: [
            "Look at the goal: \\(\\neg A\\). Where does A appear? Only in Premise 1 as an antecedent.",
            "To get \\(\\neg A\\) from \\(A \\to X\\), we need to use Modus Tollens, which requires \\(\\neg X\\). So our intermediate goal is \\(\\neg(B \\lor C)\\).",
            "Look at Premises 2 and 3: we have \\(\\neg B\\) and \\(\\neg C\\).",
            "Step 4: Combine them using Conjunction rule: \\(\\neg B \\land \\neg C\\) (from 2, 3).",
            "Step 5: Apply De Morgan's backward to Step 4: \\(\\neg(B \\lor C)\\). We got our intermediate goal!",
            "Step 6: Use Modus Tollens on Premise 1 and Step 5: Since \\(A \\to (B \\lor C)\\) and \\(\\neg(B \\lor C)\\), therefore \\(\\neg A\\)."
          ],
          takeaway: "In natural deduction, work backwards. Identify what rule produces your final goal, then look for the pieces needed to trigger that rule."
        },
        {
          level: "Medium",
          title: "Modus Tollens vs Denying the Antecedent",
          question: "If I have \\(P \\to Q\\) and \\(\\neg P\\), can I conclude \\(\\neg Q\\)?",
          solution: [
            "Let's test it with English: 'If it is raining (P), then the grass is wet (Q).'",
            "We are given \\(\\neg P\\): 'It is not raining.'",
            "Does this mean the grass is definitely NOT wet?",
            "No! The sprinklers could be on. The grass can be wet even if it's not raining.",
            "This is a famous logical fallacy called 'Denying the Antecedent'. You cannot conclude \\(\\neg Q\\)."
          ],
          takeaway: "Modus Tollens only works backwards from the consequent. You cannot go forwards with negations."
        }
      ],
      memoryQuiz: [
        ["When is \\(P \\to Q\\) false?", "Only in one exact case: when P is True and Q is False (T -> F)."],
        ["What is a tautology?", "A formula whose final truth-table column is always True."],
        ["What is a contradiction?", "A formula whose final truth-table column is always False."],
        ["What is a contingency?", "A formula that is True on at least one row and False on at least one row."],
        ["What is \\(P \\to Q\\) equivalent to?", "\\(\\neg P \\lor Q\\). This rewrite is the fastest way to simplify many conditionals."],
        ["What is \\(\\neg(P \\to Q)\\) equivalent to?", "\\(P \\land \\neg Q\\). It means the promise was triggered but the promised result failed."],
        ["What does Modus Ponens say?", "From \\(P \\to Q\\) and \\(P\\), conclude \\(Q\\)."],
        ["What does Modus Tollens say?", "From \\(P \\to Q\\) and \\(\\neg Q\\), conclude \\(\\neg P\\)."]
      ],
      practiceQuiz: [
        {
          q: "Which of the following is logically equivalent to \\(\\neg(P \\to Q)\\)?",
          options: ["\\(\\neg P \\lor Q\\)", "\\(P \\land \\neg Q\\)", "\\(\\neg P \\land Q\\)", "\\(Q \\to P\\)"],
          answer: 1,
          why: "First convert implication to OR: \\(\\neg(\\neg P \\lor Q)\\). Then apply De Morgan's: \\(\\neg\neg P \\land \\neg Q\\), which simplifies to \\(P \\land \\neg Q\\). This makes sense: the only way to falsify a promise is to do P but NOT Q."
        },
        {
          q: "In a truth table for an expression with 4 distinct propositional variables (P, Q, R, S), how many rows will there be?",
          hint: "Each variable doubles the number of rows.",
          difficulty: "easy",
          options: ["4", "8", "16", "32"],
          answer: 2,
          why: "Each variable has 2 possible states (True or False). For n variables, the number of combinations is 2^n. Here, 2^4 = 16."
        },
        {
          q: "What proves that a formula is a contingency (neither a tautology nor a contradiction)?",
          hint: "A tautology is all T. A contradiction is all F. What is everything else?",
          difficulty: "easy",
          options: ["It has at least one True row", "It has at least one False row", "It has at least one True row AND at least one False row", "It only uses AND and OR"],
          answer: 2,
          why: "A tautology is all True. A contradiction is all False. A contingency depends on the inputs, meaning its truth table output column contains a mix of True and False."
        },
        {
          q: "From the premises \\(A \\lor B\\) and \\(\\neg A\\), which inference rule allows you to conclude B?",
          options: ["Modus Ponens", "Modus Tollens", "Disjunctive Syllogism", "Hypothetical Syllogism"],
          answer: 2,
          why: "Disjunctive Syllogism states that if you have an OR statement, and one of the options is false, the other option MUST be true."
        },
        {
          q: "Is \\((P \\land Q) \\to P\\) a tautology?",
          options: ["Yes, always", "No, it's a contradiction", "Depends on P", "Depends on Q"],
          answer: 0,
          why: "Rewrite it: \\(\\neg(P \\land Q) \\lor P \\equiv \\neg P \\lor \\neg Q \\lor P\\). Reorder to get \\((P \\lor \\neg P) \\lor \\neg Q\\). Since \\(P \\lor \\neg P\\) is always True, the whole thing is True. It is a tautology."
        }
      ],
      readiness: [
        "You can write the truth table for $\\to$ and $\\leftrightarrow$ from memory.",
        "You can classify tautology, contradiction, and contingency.",
        "You can justify each line in a proof sequence."
      ]
    },
    {
      id: "predicate-quantifiers",
      title: "Predicate Logic & Quantifiers",
      short: "Quantifiers",
      examWeight: "Appears in 2023-03, 2024-09, 2025-05, 2026-03",
      goal: "Translate English into predicate logic and negate quantified statements correctly.",
      lesson: [
        "**What are Predicates?** A predicate is like a function that returns True or False. \\(Student(x)\\) is not a proposition until you plug in a value for \\(x\\). \\(Student(John)\\) is a proposition. \\(Student(x)\\) is just an open formula.",
        "**The Universal Quantifier (\\(\\forall\\)):** Means 'For ALL' or 'Every'. Example: \\(\\forall x, Student(x)\\) means 'Every single thing in the universe is a student'. If even one thing is not a student, it's False.",
        "**The Existential Quantifier (\\(\\exists\\)):** Means 'There EXISTS at least one' or 'Some'. Example: \\(\\exists x, Student(x)\\) means 'At least one thing in the universe is a student'. It's True as long as you can find just one.",
        "**The Golden Rules of Translation:** Universal (\\(\\forall\\)) almost always pairs with Implication (\\(\\to\\)). \"All cats are mammals\" is \\(\\forall x (Cat(x) \\to Mammal(x))\\). Existential (\\(\\exists\\)) almost always pairs with AND (\\(\\land\\)). \"Some cats are black\" is \\(\\exists x (Cat(x) \\land Black(x))\\).",
        "**Why \\(\\forall x (Cat(x) \\land Mammal(x))\\) is wrong:** This would mean 'Everything in the universe is a cat AND a mammal.' That's absurd.",
        "**Why \\(\\exists x (Cat(x) \\to Black(x))\\) is wrong:** Implication is True if the antecedent is False. So if you pick a dog for \\(x\\), \\(Cat(dog) \\to Black(dog)\\) is \\(F \\to ...\\) which is True! So the statement is trivially true as long as there is at least one non-cat in the universe.",
        "**Multiple Quantifiers:** Order matters! \\(\\forall x \\exists y, Loves(x, y)\\) means 'Everybody loves SOMEBODY' (maybe different people). But \\(\\exists y \\forall x, Loves(x, y)\\) means 'There is ONE specific person that EVERYBODY loves' (like a celebrity)."
      ],
      visual: {
        type: "quantifier-flow",
        title: "Dependent witness vs fixed witness",
        caption: "$\\forall x\\exists y$ chooses a y for each x. $\\exists y\\forall x$ chooses one y for everyone."
      },
      methods: [
        "**Translation - Step 1:** Identify your domain (e.g., all people, all numbers).",
        "**Translation - Step 2:** Define your predicates clearly (e.g., \\(C(x)\\) for 'x is a cat').",
        "**Translation - Step 3:** Match keywords. 'All/Every/Any' -> \\(\\forall\\) with \\(\\to\\). 'Some/There is/At least one' -> \\(\\exists\\) with \\(\\land\\). 'None/No' -> \\(\\forall x (A(x) \\to \\neg B(x))\\).",
        "**Negating Quantifiers (De Morgan for Quantifiers):** To negate a statement, push the NOT inside. When passing through a quantifier, flip it! \\(\\neg \\forall x P(x) \\equiv \\exists x \\neg P(x)\\). And \\(\\neg \\exists x P(x) \\equiv \\forall x \\neg P(x)\\).",
        "**Nested Negation:** \\(\\neg \\forall x \\exists y P(x,y)\\) becomes \\(\\exists x \\forall y \\neg P(x,y)\\)."
      ],
      beginnerGuide: [
        {
          title: "Choose the quantifier before the formula",
          problem: "English words like all, some, no, and only decide the skeleton.",
          meaning: "A quantified statement says how many objects must satisfy a condition: every object, at least one object, or no object.",
          method: "Underline the keyword first. Then choose \\(\\forall\\) or \\(\\exists\\) before writing predicates.",
          steps: ["All/every/each usually starts with \\(\\forall\\).", "Some/there exists starts with \\(\\exists\\).", "No can be written as 'all A are not B'.", "Only reverses the direction of the restriction."],
          tip: "Do not start by writing predicates randomly. First decide how many witnesses are needed."
        },
        {
          title: "Universal uses implication",
          problem: "Translate 'All cats are mammals' without saying everything is a cat.",
          meaning: "A universal sentence usually restricts attention to one kind of object. Implication does that restriction.",
          method: "Use \\(\\forall x(A(x) \\to B(x))\\), not \\(\\forall x(A(x) \\land B(x))\\).",
          steps: ["Pick any x.", "If x is an A, it must be B.", "If x is not A, the statement does not care.", "That is exactly what implication expresses."],
          tip: "Universal plus AND often means everything in the universe has both properties, which is usually wrong."
        },
        {
          title: "Existential uses AND",
          problem: "Translate 'Some cats are black' without making it accidentally true for a dog.",
          meaning: "An existential sentence gives a witness. That one witness must satisfy all required properties at once.",
          method: "Use \\(\\exists x(A(x) \\land B(x))\\), not \\(\\exists x(A(x) \\to B(x))\\).",
          steps: ["Find one object x.", "Show x is an A.", "Show x is also B.", "Join those facts with AND."],
          tip: "Existential plus implication is usually too weak because a non-A object makes the implication true."
        }
      ],
      formulaBank: [
        { tag: "Translation", accent: "accent-navy", name: "All A are B", formula: "$\\forall x(A(x)\\to B(x))$", why: "The implication restricts attention to objects that are A." },
        { tag: "Translation", accent: "accent-forest", name: "Some A are B", formula: "$\\exists x(A(x)\\land B(x))$", why: "The witness must satisfy both properties at the same time." },
        { tag: "Translation", accent: "accent-copper", name: "No A are B", formula: "$\\forall x(A(x)\\to \\neg B(x))$", why: "Every A must fail to be B." },
        { tag: "Negation", accent: "accent-forest", name: "Negate universal", formula: "$\\neg\\forall x P(x)\\equiv\\exists x\\neg P(x)$", why: "To disprove 'all', one counterexample is enough." },
        { tag: "Negation", accent: "accent-forest", name: "Negate existential", formula: "$\\neg\\exists x P(x)\\equiv\\forall x\\neg P(x)$", why: "To say no witness exists, every object must fail." },
        { tag: "Order", accent: "accent-danger", name: "Quantifier order matters", formula: "$\\forall x\\exists y P(x,y)$ is not the same as $\\exists y\\forall x P(x,y)$", why: "The first allows y to depend on x; the second demands one fixed y for all x." }
      ],
      problemSolving: [
        {
          type: "Translation",
          accent: "accent-navy",
          title: "Translate an 'only if' sentence",
          question: "Translate: 'A number is even only if its square is even.'",
          method: "For 'P only if Q', write $P\\to Q$.",
          steps: ["Let $Even(x)$ mean x is even.", "Let $SquareEven(x)$ mean $x^2$ is even.", "'P only if Q' means P can happen only when Q happens.", "So the translation is $\\forall x(Even(x)\\to SquareEven(x))$."],
          remember: "'P only if Q' points from P to Q."
        },
        {
          type: "Negation",
          accent: "accent-forest",
          title: "Negate nested quantifiers",
          question: "Negate $\\forall x\\exists y\\ (x<y)$.",
          method: "Move the NOT inward one quantifier at a time.",
          steps: ["Start: $\\neg\\forall x\\exists y(x<y)$.", "Flip $\\forall$ to $\\exists$: $\\exists x\\neg\\exists y(x<y)$.", "Flip $\\exists$ to $\\forall$: $\\exists x\\forall y\\neg(x<y)$.", "Rewrite the inside: $\\exists x\\forall y(x\\ge y)$."],
          remember: "Negating quantifiers flips them and keeps moving the NOT inward."
        }
      ],
      examples: [
        {
          level: "Easy",
          title: "Translating 'All A are B'",
          question: "Translate: 'All computer science students are smart.'",
          solution: [
            "Domain: All people.",
            "Predicates: \\(CS(x)\\) = 'x is a CS student', \\(Smart(x)\\) = 'x is smart'.",
            "Keyword 'All' means Universal quantifier \\(\\forall\\).",
            "Universal pairs with implication.",
            "Result: \\(\\forall x (CS(x) \\to Smart(x))\\)."
          ],
          takeaway: "'All A are B' always follows the template \\(\\forall x (A(x) \\to B(x))\\)."
        },
        {
          level: "Easy",
          title: "Translating 'Some A are B'",
          question: "Translate: 'Some exams are easy.'",
          solution: [
            "Domain: All things.",
            "Predicates: \\(Exam(x)\\) = 'x is an exam', \\(Easy(x)\\) = 'x is easy'.",
            "Keyword 'Some' means Existential quantifier \\(\\exists\\).",
            "Existential pairs with AND.",
            "Result: \\(\\exists x (Exam(x) \\land Easy(x))\\)."
          ],
          takeaway: "'Some A are B' always follows the template \\(\\exists x (A(x) \\land B(x))\\)."
        },
        {
          level: "Medium",
          title: "Translating 'Only'",
          question: "Translate: 'People eat only food.'",
          solution: [
            "Domain: All things.",
            "Predicates: \\(Person(x)\\), \\(Food(y)\\), \\(Eats(x,y)\\).",
            "Rephrase 'Only' into an 'If-Then' statement: 'If a person eats something, then that something must be food.'",
            "Result: \\(\\forall x \\forall y ((Person(x) \\land Eats(x,y)) \\to Food(y))\\)."
          ],
          takeaway: "'Only' restricts the outcome. 'Only A are B' actually translates to 'All B are A'."
        },
        {
          level: "Medium",
          title: "Translating 'No A are B'",
          question: "Translate: 'No students are lazy.'",
          solution: [
            "Domain: All people.",
            "Predicates: \\(Student(x)\\), \\(Lazy(x)\\).",
            "Rephrase: 'For all people, if they are a student, then they are NOT lazy.'",
            "Result: \\(\\forall x (Student(x) \\to \\neg Lazy(x))\\).",
            "Alternative (also valid): 'There does not exist a person who is both a student and lazy.'",
            "Result: \\(\\neg \\exists x (Student(x) \\land Lazy(x))\\)."
          ],
          takeaway: "'No A are B' can be written as \\(\\forall x (A(x) \\to \\neg B(x))\\) OR \\(\\neg \\exists x (A(x) \\land B(x))\\)."
        },
        {
          level: "Exam",
          title: "Negating Nested Quantifiers",
          question: "Find the logical negation of: \\(\\forall x \\exists y (P(x) \\to Q(x,y))\\). Simplify the result so no negation is outside a bracket.",
          solution: [
            "Start with the full negation: \\(\\neg (\\forall x \\exists y (P(x) \\to Q(x,y)))\\).",
            "Push the NOT past the quantifiers (flip them): \\(\\exists x \\forall y \\neg (P(x) \\to Q(x,y))\\).",
            "Now we must negate the implication. Remember \\(A \\to B \\equiv \\neg A \\lor B\\).",
            "So \\(\\neg (A \\to B) \\equiv \\neg (\\neg A \\lor B) \\equiv A \\land \\neg B\\).",
            "Apply this to the inner part: \\(P(x) \\to Q(x,y)\\) becomes \\(P(x) \\land \\neg Q(x,y)\\).",
            "Final Answer: \\(\\exists x \\forall y (P(x) \\land \\neg Q(x,y))\\)."
          ],
          takeaway: "When negating an implication inside quantifiers, the rule \\(\\neg(A \\to B) \\equiv A \\land \\neg B\\) is essential."
        }
      ],
      memoryQuiz: [
        ["What does \\(\\forall\\) mean?", "'For all', 'Every', or 'Any'. It is the Universal Quantifier."],
        ["What does \\(\\exists\\) mean?", "'There exists', 'at least one', or 'some'. One valid example is enough."],
        ["How do you translate 'All A are B'?", "\\(\\forall x(A(x) \\to B(x))\\). Universal restrictions usually use implication."],
        ["How do you translate 'Some A are B'?", "\\(\\exists x(A(x) \\land B(x))\\). Existential claims usually use AND."],
        ["What is the negation of \\(\\forall x P(x)\\)?", "\\(\\exists x \\neg P(x)\\): at least one counterexample exists."],
        ["What is the negation of \\(\\exists x P(x)\\)?", "\\(\\forall x \\neg P(x)\\): no witness exists."],
        ["Why does quantifier order matter?", "\\(\\forall x\\exists y\\) may choose a different y for each x, but \\(\\exists y\\forall x\\) uses one fixed y for everyone."],
        ["What is an open formula?", "A predicate with a free variable, such as \\(P(x)\\), which is not True or False until x is fixed or quantified."]
      ],
      practiceQuiz: [
        {
          q: "Which of the following translates 'Every student has a laptop'?",
          hint: "'Every' means universal. Universal pairs with implication.",
          difficulty: "easy",
          options: ["\\(\\exists x (Student(x) \\land Laptop(x))\\)", "\\(\\forall x (Student(x) \\land Laptop(x))\\)", "\\(\\forall x (Student(x) \\to Laptop(x))\\)", "\\(\\exists x (Student(x) \\to Laptop(x))\\)"],
          answer: 2,
          why: "'Every' means Universal (\\(\\forall\\)). Universal statements require Implication (\\(\\to\\)) to restrict the statement to only students. Option B would mean 'Everything in the universe is a student AND a laptop'."
        },
        {
          q: "Which of the following translates 'Some birds cannot fly'?",
          hint: "'Some' means existential. Existential pairs with AND.",
          difficulty: "easy",
          options: ["\\(\\exists x (Bird(x) \\land \\neg Fly(x))\\)", "\\(\\forall x (Bird(x) \\to \\neg Fly(x))\\)", "\\(\\exists x (Bird(x) \\to \\neg Fly(x))\\)", "\\(\\neg \\exists x (Bird(x) \\land Fly(x))\\)"],
          answer: 0,
          why: "'Some' means Existential (\\(\\exists\\)). Existential statements require AND (\\(\\land\\)). So we are saying 'There exists an x such that x is a bird AND x cannot fly'."
        },
        {
          q: "What is the correct negation of \\(\\exists x \\forall y P(x,y)\\)?",
          options: ["\\(\\forall x \\exists y P(x,y)\\)", "\\(\\exists x \\forall y \\neg P(x,y)\\)", "\\(\\forall x \\exists y \\neg P(x,y)\\)", "\\(\\neg \\exists x \\neg \\forall y P(x,y)\\)"],
          answer: 2,
          why: "To negate, push the NOT inwards. Flip every quantifier it passes. \\(\\exists\\) becomes \\(\\forall\\), \\(\\forall\\) becomes \\(\\exists\\), and the predicate gets negated."
        },
        {
          q: "If the domain is integers, what does \\(\\forall x \\exists y (x < y)\\) mean?",
          options: ["There is a largest integer", "There is a smallest integer", "For every integer, there is a larger integer", "All integers are less than some specific integer y"],
          answer: 2,
          why: "Read it left to right: 'For all x, there exists a y, such that x is less than y'. This is true for integers (there's always a bigger number)."
        },
        {
          q: "If the domain is integers, what does \\(\\exists y \\forall x (x < y)\\) mean?",
          options: ["There is a largest integer", "There is a smallest integer", "For every integer, there is a larger integer", "All integers are less than some specific integer y"],
          answer: 3,
          why: "Read it left to right: 'There exists a specific y, such that for all x, x is less than y'. This implies there is a maximum integer that bounds all others, which is False for the set of all integers."
        }
      ],
      readiness: [
        "You can explain the difference between $\\forall x\\exists y$ and $\\exists y\\forall x$.",
        "You can translate all/some/no/only/exactly one.",
        "You can negate nested quantifiers without losing scope."
      ]
    },
    {
      id: "sets-functions",
      title: "Sets, Functions & Power Sets",
      short: "Sets",
      examWeight: "Appears in 2023-03, 2023-05, 2023-08, 2024-05, 2025-05, 2025-08, 2026-03",
      goal: "Work with sets, Cartesian products, power sets, functions, injective/surjective/bijective, and onto questions.",
      lesson: [
        "**What is a Set?** A set is just a collection of distinct objects, written in curly braces like \\(\\{1, 2, 3\\}\\). Order doesn't matter (\\(\\{1, 2\\} = \\{2, 1\\}\\)) and duplicates don't count (\\(\\{1, 1, 2\\} = \\{1, 2\\}\\)).",
        "**Set Operations:** Union (\\(\\cup\\)) means 'combine everything'. Intersection (\\(\\cap\\)) means 'only what they share'. Difference (\\(A \\setminus B\\) or \\(A - B\\)) means 'A, but remove anything that is also in B'.",
        "**The Empty Set (\\(\\emptyset\\)):** The set with nothing in it. It is a subset of EVERY set, even itself.",
        "**Subset (\\(\\subseteq\\)) vs Element (\\(\\in\\)):** \\(1 \\in \\{1, 2\\}\\) because 1 is an item inside. \\(\\{1\\} \\subseteq \\{1, 2\\}\\) because the SET containing 1 is a subset. A common trap: \\(\\emptyset \\subseteq A\\) is true, but \\(\\emptyset \\in A\\) is false (unless A is a set of sets that explicitly contains the empty set!).",
        "**Power Set (\\(\mathcal{P}(A)\\)):** The set of ALL subsets of A. If \\(A = \\{1, 2\\}\\), its subsets are \\(\\emptyset\\), \\(\\{1\\}\\), \\(\\{2\\}\\), and \\(\\{1, 2\\}\\). So \\(\mathcal{P}(A) = \\{\\emptyset, \\{1\\}, \\{2\\}, \\{1, 2\\}\\}\\). The size of a power set is always \\(2^n\\), where n is the number of elements in A.",
        "**Functions (Injective, Surjective, Bijective):** A function maps inputs (domain) to outputs (codomain).",
        "**Injective (One-to-One):** No two inputs map to the same output. Every target gets hit at most once. (Horizontal line test passes).",
        "**Surjective (Onto):** Every single output in the codomain gets hit by at least one input. No targets are left empty.",
        "**Bijective:** Both Injective and Surjective. Perfect 1-to-1 matching. These are the only functions that have an inverse (like undoing a knot)."
      ],
      visual: {
        type: "mapping",
        title: "Function mapping test",
        caption: "Injective checks collisions. Surjective checks whether the codomain is fully covered."
      },
      methods: [
        "**Venn Diagrams:** If you are stuck on a set equivalence (like \\(A \\cap (B \\cup C)\\)), draw 3 overlapping circles. Shade them in step-by-step. It is a perfectly valid way to verify if two set expressions are equal.",
        "**Proving Set Equality:** To prove \\(X = Y\\), you must show two things: \\(X \\subseteq Y\\) (take an arbitrary \\(x \\in X\\) and show it must be in Y) AND \\(Y \\subseteq X\\).",
        "**Proving Injectivity:** Start by assuming \\(f(a) = f(b)\\). Do algebra. If you can definitively prove that \\(a = b\\), then the function is injective.",
        "**Proving Surjectivity:** Start with an arbitrary \\(y\\) in the codomain. Set \\(y = f(x)\\). Solve for \\(x\\) in terms of \\(y\\). If you can always find an \\(x\\) that exists in the domain, it is surjective.",
        "**Finding the Inverse:** Set \\(y = f(x)\\). Swap x and y. Solve for the new y. That new y is your \\(f^{-1}(x)\\)."
      ],
      beginnerGuide: [
        {
          title: "Sets are containers",
          problem: "Understand union, intersection, difference, and power set without memorizing symbols blindly.",
          meaning: "A set is a container of distinct objects. Set operations tell you which objects stay in the answer.",
          method: "Translate the symbol into words before calculating.",
          steps: ["\\(A\\cup B\\): in A or B or both.", "\\(A\\cap B\\): in both A and B.", "\\(A\\setminus B\\): in A but not in B.", "\\(P(A)\\): all possible subsets of A."],
          tip: "For set questions, say 'or', 'both', and 'but not' out loud."
        },
        {
          title: "Functions have one output per input",
          problem: "Decide whether a rule or diagram is actually a function.",
          meaning: "A function is allowed to send two inputs to the same output, but one input cannot split into two different outputs.",
          method: "Check each input one at a time. Every input must have exactly one arrow leaving it.",
          steps: ["List the domain values.", "For each input, compute or inspect its output.", "If any input has no output, it is not a function.", "If any input has two outputs, it is not a function."],
          tip: "Function does not mean 'one-to-one'. Function only means one output for each input."
        },
        {
          title: "Injective and surjective ask different questions",
          problem: "Do not mix up one-to-one and onto.",
          meaning: "Injective checks collisions between inputs. Surjective checks whether every target in the codomain gets hit.",
          method: "For injective, compare two inputs. For surjective, start from an arbitrary target.",
          steps: ["Injective: assume \\(f(a)=f(b)\\).", "Try to prove \\(a=b\\).", "Surjective: take any target y.", "Solve \\(y=f(x)\\) for an allowed x."],
          tip: "Injective is about no collisions; surjective is about no empty targets."
        }
      ],
      formulaBank: [
        {
          tag: "Set laws",
          accent: "accent-forest",
          name: "Set De Morgan laws",
          formula: "$(A\\cup B)^c=A^c\\cap B^c$ and $(A\\cap B)^c=A^c\\cup B^c$",
          why: "Negating 'in A or B' means 'not in A and not in B'. Negating 'in both' means 'missing from at least one'."
        },
        {
          tag: "Set laws",
          accent: "accent-forest",
          name: "Distributive laws",
          formula: "$A\\cap(B\\cup C)=(A\\cap B)\\cup(A\\cap C)$ and $A\\cup(B\\cap C)=(A\\cup B)\\cap(A\\cup C)$",
          why: "These work like algebraic distribution, but with union and intersection."
        },
        {
          tag: "Set laws",
          accent: "accent-copper",
          name: "Difference and complement",
          formula: "$A\\setminus B=A\\cap B^c$",
          why: "Being in A but not in B is the same as being in A and in the complement of B."
        },
        {
          tag: "Counting",
          accent: "accent-navy",
          name: "Inclusion-exclusion",
          formula: "$|A\\cup B|=|A|+|B|-|A\\cap B|$",
          why: "Adding $|A|$ and $|B|$ counts the overlap twice, so subtract it once."
        },
        {
          tag: "Power set",
          accent: "accent-copper",
          name: "Power set size",
          formula: "$|P(A)|=2^{|A|}$",
          why: "Each element has two choices: included or not included."
        },
        {
          tag: "Functions",
          accent: "accent-navy",
          name: "Injective / surjective / bijective",
          formula: "Injective: no collisions. Surjective: every codomain target is hit. Bijective: both.",
          why: "Function questions usually ask one of these three checks."
        },
        {
          tag: "Counting sets",
          accent: "accent-copper",
          name: "Cartesian product size",
          formula: "$|A\\times B|=|A||B|$",
          why: "For every first coordinate, you can pair it with every second coordinate."
        },
        {
          tag: "Functions",
          accent: "accent-forest",
          name: "Composition",
          formula: "$(g\\circ f)(x)=g(f(x))$",
          why: "Apply f first, then feed that output into g."
        }
      ],
      problemSolving: [
        {
          type: "Set proof",
          accent: "accent-forest",
          title: "Prove a set De Morgan law",
          question: "Prove $A\\setminus(B\\cup C)=(A\\setminus B)\\cap(A\\setminus C)$.",
          method: "Translate membership into logic, use De Morgan, then translate back.",
          steps: [
            "Take an arbitrary element x.",
            "$x\\in A\\setminus(B\\cup C)$ means $x\\in A$ and $x\\notin B\\cup C$.",
            "$x\\notin B\\cup C$ means $x\\notin B$ and $x\\notin C$.",
            "So x is in A, not in B, and not in C.",
            "That means $x\\in A\\setminus B$ and $x\\in A\\setminus C$.",
            "Therefore $x\\in(A\\setminus B)\\cap(A\\setminus C)$. Reverse the same steps for the other inclusion."
          ],
          remember: "Set proofs are often logic proofs with $\\in$ replacing True/False statements."
        },
        {
          type: "Counting sets",
          accent: "accent-copper",
          title: "Use inclusion-exclusion",
          question: "In a class, 18 students take math, 14 take programming, and 6 take both. How many take at least one?",
          method: "Add both groups, then subtract the overlap once.",
          steps: [
            "At least one means the union.",
            "Use $|M\\cup P|=|M|+|P|-|M\\cap P|$.",
            "Substitute: $18+14-6$.",
            "Compute: $26$.",
            "So 26 students take at least one of the two courses."
          ],
          remember: "The overlap is counted twice unless you subtract it."
        },
        {
          type: "Function proof",
          accent: "accent-navy",
          title: "Decide injective and surjective",
          question: "Let $f:\\mathbb Z\\to\\mathbb Z$ by $f(n)=n+2$. Is it bijective?",
          method: "Check injective first, then surjective.",
          steps: [
            "Injective: assume $f(a)=f(b)$.",
            "Then $a+2=b+2$, so $a=b$. No collisions.",
            "Surjective: take any target $y\\in\\mathbb Z$.",
            "Choose $n=y-2$, which is still an integer.",
            "Then $f(y-2)=y$. Every integer target is hit.",
            "So f is bijective."
          ],
          remember: "Bijective means both tests pass."
        },
        {
          type: "Cartesian product",
          accent: "accent-copper",
          title: "Count ordered pairs",
          question: "If $A=\\{1,2,3\\}$ and $B=\\{a,b\\}$, how many elements are in $A\\times B$?",
          method: "Every element of A can be paired with every element of B.",
          steps: [
            "$|A|=3$ and $|B|=2$.",
            "Use $|A\\times B|=|A||B|$.",
            "So $|A\\times B|=3\\cdot2=6$.",
            "The pairs are $(1,a),(1,b),(2,a),(2,b),(3,a),(3,b)$."
          ],
          remember: "Cartesian product counts ordered pairs, so $(1,a)$ and $(a,1)$ are not interchangeable."
        }
      ],
      examples: [
        {
          level: "Easy",
          title: "Power Set Size",
          question: "Let \\(S = \\{a, b, c\\}\\). How many elements are in \\(\mathcal{P}(S)\\)? List them.",
          solution: [
            "The size of S is \\(n = 3\\).",
            "The number of elements in the power set is \\(2^n = 2^3 = 8\\).",
            "List them: 1 empty set: \\(\\emptyset\\)",
            "3 sets of size 1: \\(\\{a\\}, \\{b\\}, \\{c\\}\\)",
            "3 sets of size 2: \\(\\{a,b\\}, \\{a,c\\}, \\{b,c\\}\\)",
            "1 set of size 3: \\(\\{a,b,c\\}\\)",
            "Total = 8 elements. Correct."
          ],
          takeaway: "The size of a power set is ALWAYS \\(2^n\\). Don't forget the empty set and the full set!"
        },
        {
          level: "Medium",
          title: "Proving Injectivity",
          question: "Prove that \\(f(x) = 3x - 5\\) on the set of real numbers is injective.",
          solution: [
            "To prove injectivity, assume \\(f(a) = f(b)\\).",
            "Substitute the function definition: \\(3a - 5 = 3b - 5\\).",
            "Add 5 to both sides: \\(3a = 3b\\).",
            "Divide by 3: \\(a = b\\).",
            "Since assuming the outputs are equal forces the inputs to be equal, the function is injective."
          ],
          takeaway: "The proof template for injectivity is always the same: assume \\(f(a)=f(b)\\), do algebra, conclude \\(a=b\\)."
        },
        {
          level: "Medium",
          title: "Proving Surjectivity",
          question: "Prove that \\(f(x) = 3x - 5\\) on the set of real numbers (\\(\\mathbb{R} \\to \\mathbb{R}\\)) is surjective.",
          solution: [
            "Start with an arbitrary \\(y \\in \\mathbb{R}\\).",
            "Set \\(y = 3x - 5\\).",
            "Solve for x: \\(y + 5 = 3x\\), so \\(x = \\frac{y + 5}{3}\\).",
            "Since \\(y\\) is a real number, \\(\\frac{y + 5}{3}\\) is also a real number.",
            "Therefore, for ANY \\(y\\), we found an \\(x\\) in the domain that hits it. The function is surjective."
          ],
          takeaway: "The proof template for surjectivity is: set \\(y = f(x)\\), solve for \\(x\\), and verify \\(x\\) is in the domain."
        },
        {
          level: "Exam",
          title: "Injectivity failure on Integers",
          question: "Is \\(f(x) = x^2\\) from \\(\\mathbb{Z} \\to \\mathbb{Z}\\) injective?",
          solution: [
            "Assume \\(f(a) = f(b)\\).",
            "\\(a^2 = b^2\\).",
            "Take the square root of both sides: \\(a = \pm b\\).",
            "Since \\(a\\) can equal \\(-b\\), it doesn't strictly force \\(a = b\\).",
            "Give a counterexample: \\(f(2) = 4\\) and \\(f(-2) = 4\\).",
            "Two different inputs hit the same output. It is NOT injective."
          ],
          takeaway: "To prove a property fails, you only need ONE concrete counterexample."
        },
        {
          level: "Exam",
          title: "Set Equality Proof",
          question: "Prove that \\(A \\setminus (B \\cup C) = (A \\setminus B) \\cap (A \\setminus C)\\).",
          solution: [
            "This is similar to De Morgan's Law for sets.",
            "Part 1: Assume \\(x \\in A \\setminus (B \\cup C)\\).",
            "By definition of difference, \\(x \\in A\\) and \\(x \\notin (B \\cup C)\\).",
            "If \\(x\\) is not in the union of B and C, it means \\(x \\notin B\\) AND \\(x \\notin C\\).",
            "So we have: (\\(x \\in A\\) AND \\(x \\notin B\\)) AND (\\(x \\in A\\) AND \\(x \\notin C\\)).",
            "This means \\(x \\in (A \\setminus B)\\) AND \\(x \\in (A \\setminus C)\\).",
            "Therefore \\(x \\in (A \\setminus B) \\cap (A \\setminus C)\\).",
            "Part 2 is the exact reverse of these steps. Therefore, the sets are equal."
          ],
          takeaway: "Translate set operators into logic: \\(\\cap\\) becomes AND, \\(\\cup\\) becomes OR. Then use logical rules to re-arrange."
        }
      ],
      memoryQuiz: [
        ["What is \\(A \\cap B\\)?", "Intersection. The elements that are in BOTH A and B."],
        ["What is \\(A \\cup B\\)?", "Union. The elements in A, in B, or in both."],
        ["What is \\(A \\setminus B\\)?", "Set difference. The elements that are in A but not in B."],
        ["What is \\(|P(A)|\\) if \\(|A|=n\\)?", "\\(2^n\\), because each element is either included or excluded from a subset."],
        ["What is \\(A\\times B\\)?", "The Cartesian product: all ordered pairs \\((a,b)\\) with \\(a\\in A\\) and \\(b\\in B\\)."],
        ["What does injective mean?", "Different inputs never land on the same output."],
        ["What does surjective mean?", "Every target value in the codomain is hit by at least one input."],
        ["What does bijective mean?", "Both injective and surjective; every target has exactly one input."]
      ],
      practiceQuiz: [
        {
          q: "If \\(A = \\{1, 2, 3\\}\\) and \\(B = \\{3, 4, 5\\}\\), what is \\(A \\setminus B\\)?",
          options: ["\\(\\{1, 2, 4, 5\\}\\)", "\\(\\{1, 2\\}\\)", "\\(\\{3\\}\\)", "\\(\\{4, 5\\}\\)"],
          answer: 1,
          why: "A minus B means 'take everything in A, but throw away anything that also appears in B'. 3 is in B, so we throw it away. We are left with {1, 2}."
        },
        {
          q: "Which of the following is ALWAYS true for any set A?",
          hint: "Think about the difference between subset and element.",
          difficulty: "easy",
          options: ["\\(\\emptyset \\in A\\)", "\\(A \\in A\\)", "\\(\\emptyset \\subseteq A\\)", "\\(A \subset A\\)"],
          answer: 2,
          why: "The empty set is a subset (\\(\\subseteq\\)) of every set. It is not necessarily an element (\\(\\in\\)) of every set."
        },
        {
          q: "Let \\(f: \\mathbb{R} \\to \\mathbb{R}\\) be \\(f(x) = x^2\\). Is this function bijective?",
          options: ["Yes", "No, it is only injective", "No, it is only surjective", "No, it is neither"],
          answer: 3,
          why: "It is not injective because \\(f(2) = 4\\) and \\(f(-2) = 4\\) (two inputs hit the same output). It is not surjective because no real number squared gives a negative number, so negative numbers in the codomain are never hit."
        },
        {
          q: "How many elements does \\(\mathcal{P}(\\emptyset)\\) have?",
          options: ["0", "1", "2", "Undefined"],
          answer: 1,
          why: "The empty set has size n=0. The power set has size \\(2^n = 2^0 = 1\\). The only element inside \\(\mathcal{P}(\\emptyset)\\) is the empty set itself: \\(\\{\\emptyset\\}\\)."
        },
        {
          q: "To prove \\(A \\subseteq B\\), what must you do?",
          options: ["Show that \\(|A| \\leq |B|\\)", "Show that every element in B is also in A", "Take an arbitrary \\(x \\in A\\) and prove \\(x \\in B\\)", "Show \\(A \\cap B = \\emptyset\\)"],
          answer: 2,
          why: "The definition of subset is that every element of the first set must exist in the second set. So you pick an arbitrary \\(x \\in A\\) and mathematically prove it must belong to \\(B\\)."
        }
      ],
      readiness: [
        "You can list a small Cartesian product and its power set.",
        "You can prove or disprove injective/surjective with examples.",
        "You can handle function questions written in code or notation."
      ]
    },
    {
      id: "relations-graphs",
      title: "Relations & Graph Theory",
      short: "Graphs",
      examWeight: "Appears in 2023-03, 2023-08, 2024-03, 2024-05, 2025-05, 2025-08, 2026-03",
      goal: "Understand relations, equivalence classes, graph definitions, degree sums, complements, adjacency matrices, and Euler circuits.",
      lesson: [
        "**What is a Relation?** A relation is just a set of pairs. If \\(R = \\{(1,2), (2,3)\\}\\), it means 1 relates to 2, and 2 relates to 3. Think of it like arrows connecting dots.",
        "**Reflexive:** Every dot has a loop pointing to itself. For all \\(x\\), \\((x,x) \\in R\\). If even ONE dot is missing a loop, it is NOT reflexive.",
        "**Symmetric:** If there is a one-way street, there MUST be a return street. If \\((x,y) \\in R\\), then \\((y,x) \\in R\\).",
        "**Transitive:** The 'friend of a friend' rule. If you can go from A to B, and B to C, there MUST be a direct shortcut from A to C. If \\((x,y) \\in R\\) and \\((y,z) \\in R\\), then \\((x,z) \\in R\\).",
        "**Equivalence Relation:** A relation that is Reflexive AND Symmetric AND Transitive. It behaves like the 'equals' sign. It divides your set into non-overlapping groups called Equivalence Classes.",
        "**Graphs - Vertices and Edges:** A graph \\(G = (V,E)\\) is a set of dots (Vertices) and lines connecting them (Edges).",
        "**Degrees:** The degree of a vertex is how many edges stick out of it.",
        "**Handshake Lemma:** If you add up the degrees of every vertex, the sum is ALWAYS exactly twice the number of edges. (Because every edge connects two vertices, contributing to the degree of both). Therefore, the sum of degrees is always an EVEN number.",
        "**Isomorphism:** Two graphs are 'Isomorphic' if they are secretly the EXACT SAME graph, just drawn differently. They must have the same number of vertices, edges, and degree sequences."
      ],
      visual: {
        type: "graph",
        title: "Every edge contributes two degree-counts",
        caption: "This is the core of the handshaking lemma and the party-handshake question."
      },
      methods: [
        "**Checking Reflexivity:** Draw the relation. Look at every single vertex. Does every single one have a loop? Yes = Reflexive. No = Not Reflexive.",
        "**Checking Symmetry:** Look at every arrow. Does it have an opposite arrow? (Or is it an undirected line?). If yes, it's symmetric.",
        "**Checking Transitivity:** This is the hardest. Look for any path of length 2 (A -> B -> C). Check if the direct shortcut (A -> C) exists. If it is missing even once, it is NOT transitive.",
        "**Proving Isomorphism:** First, check the 'invariants': Do they have the same number of vertices? Same number of edges? Same degrees? If no, they are NOT isomorphic. If yes, try to find a mapping that matches vertices perfectly based on their connections.",
        "**Bipartite Graphs:** A graph is bipartite if you can color its vertices using only TWO colors, such that no two adjacent vertices have the same color. A graph is bipartite IF AND ONLY IF it has no cycles of ODD length."
      ],
      beginnerGuide: [
        {
          title: "Relations are yes/no tables",
          problem: "Understand what a relation means before checking properties.",
          meaning: "A relation on a set tells which ordered pairs are allowed. You can view it as arrows, a list of pairs, or a table of yes/no entries.",
          method: "Convert the relation into the representation that is easiest to inspect.",
          steps: ["Pairs are exact facts like \\((1,2)\\).", "Arrows show direction.", "A table shows every possible pair.", "Loops represent \\((x,x)\\)."],
          tip: "Do not check reflexive/symmetric/transitive from memory; inspect the pairs."
        },
        {
          title: "Equivalence relation means three tests",
          problem: "Show a relation is reflexive, symmetric, and transitive.",
          meaning: "An equivalence relation groups objects into classes, like 'same remainder mod 3'.",
          method: "Prove the three properties separately. Do not combine them into one vague paragraph.",
          steps: ["Reflexive: prove \\(xRx\\).", "Symmetric: from \\(xRy\\), prove \\(yRx\\).", "Transitive: from \\(xRy\\) and \\(yRz\\), prove \\(xRz\\).", "Then state it is an equivalence relation."],
          tip: "If one property fails, it is not an equivalence relation."
        },
        {
          title: "Graphs are dots and lines",
          problem: "Use degree, paths, cycles, and complete graph formulas.",
          meaning: "A graph has vertices and edges. Most exam questions ask how edges connect the vertices.",
          method: "Write down vertices, edges, and degrees before trying a theorem.",
          steps: ["Count vertices.", "Count or list edges.", "Compute degrees.", "Use handshaking: degree sum is \\(2|E|\\)."],
          tip: "Every edge contributes exactly two degree-counts."
        }
      ],
      formulaBank: [
        { tag: "Relation", accent: "accent-forest", name: "Reflexive", formula: "$\\forall x\\in A,\\ (x,x)\\in R$", why: "Every element must relate to itself." },
        { tag: "Relation", accent: "accent-forest", name: "Symmetric", formula: "$(x,y)\\in R\\Rightarrow(y,x)\\in R$", why: "Every arrow must have a return arrow." },
        { tag: "Relation", accent: "accent-forest", name: "Transitive", formula: "$(x,y)\\in R\\land(y,z)\\in R\\Rightarrow(x,z)\\in R$", why: "Every two-step path must have a direct shortcut." },
        { tag: "Graph", accent: "accent-navy", name: "Handshake lemma", formula: "$\\sum_{v\\in V}\\deg(v)=2|E|$", why: "Each edge touches two vertices, so it contributes two degree-counts." },
        { tag: "Graph", accent: "accent-copper", name: "Complete graph edges", formula: "$|E(K_n)|=\\frac{n(n-1)}2$", why: "Every pair of vertices creates exactly one edge." },
        { tag: "Graph", accent: "accent-copper", name: "Euler circuit quick test", formula: "Connected graph + every vertex has even degree", why: "This is the standard test for an Euler circuit in an undirected graph." },
        { tag: "Order", accent: "accent-navy", name: "Partial order", formula: "Reflexive + antisymmetric + transitive", why: "Partial orders model 'comes before' without requiring every pair to be comparable." },
        { tag: "Closure", accent: "accent-forest", name: "Transitive closure", formula: "Add missing shortcuts for every path $a\\to b\\to c$", why: "The closure is the smallest relation that has the required property." },
        { tag: "Tree", accent: "accent-copper", name: "Tree edge count", formula: "Tree with n vertices has $n-1$ edges", why: "A tree is connected with no cycles, so it has exactly enough edges to connect everything." },
        { tag: "Bipartite", accent: "accent-forest", name: "Bipartite test", formula: "Bipartite iff no odd cycle", why: "Two-coloring fails exactly when an odd cycle forces a color conflict." }
      ],
      problemSolving: [
        {
          type: "Relation",
          accent: "accent-forest",
          title: "Check equivalence relation",
          question: "On integers, define $aRb$ iff $a\\equiv b\\pmod3$. Is R an equivalence relation?",
          method: "Prove reflexive, symmetric, and transitive separately using congruence.",
          steps: ["Reflexive: $a-a=0$ is divisible by 3, so $aRa$.", "Symmetric: if $3\\mid(a-b)$, then $3\\mid(b-a)$.", "Transitive: if $3\\mid(a-b)$ and $3\\mid(b-c)$, then $3\\mid(a-c)$.", "All three properties hold, so R is an equivalence relation."],
          remember: "Equivalence relation proofs are three small proofs, not one large guess."
        },
        {
          type: "Graph",
          accent: "accent-navy",
          title: "Use handshaking",
          question: "Can a graph have vertex degrees $1,2,2,4,4$?",
          method: "Add the degrees and check if the sum is even.",
          steps: ["Compute the degree sum: $1+2+2+4+4=13$.", "By the Handshake Lemma, every graph degree sum must equal $2|E|$.", "That must be even.", "13 is odd, so no such graph exists."],
          remember: "Odd degree sum means impossible graph."
        },
        {
          type: "Partial order",
          accent: "accent-copper",
          title: "Check a partial order",
          question: "On positive integers, define $aRb$ iff $a\\mid b$. Is R a partial order?",
          method: "Check reflexive, antisymmetric, and transitive.",
          steps: ["Reflexive: $a\\mid a$ because $a=a\\cdot1$.", "Antisymmetric: if $a\\mid b$ and $b\\mid a$ for positive integers, then $a=b$.", "Transitive: if $a\\mid b$ and $b\\mid c$, then $a\\mid c$.", "All three hold, so divisibility is a partial order."],
          remember: "Partial order uses antisymmetric, not symmetric."
        },
        {
          type: "Tree",
          accent: "accent-forest",
          title: "Use the tree edge formula",
          question: "A connected graph has 9 vertices and 8 edges. If it has no cycle, what is it?",
          method: "Use the tree characterization.",
          steps: ["A tree is connected and acyclic.", "A tree with n vertices has $n-1$ edges.", "Here $n=9$, so $n-1=8$.", "The graph is connected, has 8 edges, and has no cycle.", "Therefore it is a tree."],
          remember: "Connected + no cycles is the clearest tree test."
        }
      ],
      examples: [
        {
          level: "Easy",
          title: "Relation Properties",
          question: "Let \\(A = \\{1, 2, 3\\}\\). \\(R = \\{(1,1), (2,2), (3,3), (1,2), (2,1)\\}\\). Is R an equivalence relation?",
          solution: [
            "1. Reflexive? Are (1,1), (2,2), and (3,3) all in R? Yes.",
            "2. Symmetric? Every pair needs a reverse. (1,2) is there, and its reverse (2,1) is there. Yes.",
            "3. Transitive? Check paths of length 2. We have 1->2 and 2->1. This means we need 1->1. We have it. Are there any other paths? 2->1 and 1->2 requires 2->2. We have it. Yes.",
            "Since it is Reflexive, Symmetric, and Transitive, it IS an equivalence relation."
          ],
          takeaway: "An equivalence relation must pass all three tests: Reflexive, Symmetric, and Transitive."
        },
        {
          level: "Medium",
          title: "Transitivity Trap",
          question: "Let \\(A = \\{1, 2, 3\\}\\). \\(R = \\{(1,2), (2,1)\\}\\). Is R transitive?",
          solution: [
            "We must check the rule: If \\(xRy\\) and \\(yRz\\), then \\(xRz\\).",
            "We have \\(1R2\\) and \\(2R1\\).",
            "So, we MUST have \\(1R1\\) for it to be transitive.",
            "Look at R. Is (1,1) in R? No.",
            "Therefore, R is NOT transitive."
          ],
          takeaway: "Transitivity applies even if x and z are the same element. A->B and B->A requires A->A."
        },
        {
          level: "Medium",
          title: "Handshake Lemma",
          question: "Is it possible to have a graph with 5 vertices, where every vertex has a degree of 3?",
          solution: [
            "Let's use the Handshake Lemma: The sum of all degrees must be even.",
            "If we have 5 vertices, each with degree 3, the sum of degrees is: \\(5 \\times 3 = 15\\).",
            "15 is an ODD number.",
            "Since the sum of degrees MUST be even (it's exactly \\(2 \\times |E|\\)), this graph is IMPOSSIBLE to draw."
          ],
          takeaway: "The Handshake Lemma (sum of degrees is even) is the fastest way to prove a graph cannot exist."
        },
        {
          level: "Exam",
          title: "Equivalence Classes",
          question: "Define \\(R\\) on integers: \\(x R y\\) if \\(x \\equiv y \\pmod 3\\). Find the equivalence classes.",
          solution: [
            "This relation groups numbers that have the same remainder when divided by 3.",
            "What are the possible remainders when dividing by 3? 0, 1, or 2.",
            "Class [0] contains numbers leaving remainder 0: {..., -3, 0, 3, 6, ...}.",
            "Class [1] contains numbers leaving remainder 1: {..., -2, 1, 4, 7, ...}.",
            "Class [2] contains numbers leaving remainder 2: {..., -1, 2, 5, 8, ...}.",
            "These three classes perfectly partition the set of all integers."
          ],
          takeaway: "Equivalence classes divide the entire set into non-overlapping groups."
        },
        {
          level: "Exam",
          title: "Bipartite Check",
          question: "A graph has vertices \\(\\{1,2,3,4,5\\}\\) connected in a single loop (a pentagon). Is it bipartite?",
          solution: [
            "A graph is bipartite if and only if it has NO odd-length cycles.",
            "The graph itself is a cycle of 5 vertices.",
            "Since 5 is an odd number, it contains an odd cycle.",
            "Therefore, it is NOT bipartite.",
            "Try coloring it: Red, Blue, Red, Blue... the 5th vertex connects to a Red and a Blue, so no 3rd color is allowed, but we only have 2 colors! It fails."
          ],
          takeaway: "Odd cycles (triangles, pentagons) completely ruin bipartiteness."
        }
      ],
      memoryQuiz: [
        ["What does Reflexive mean?", "Every element relates to itself. (All diagonal elements / loops exist)."],
        ["What does symmetric mean?", "Whenever \\((a,b)\\in R\\), the reverse pair \\((b,a)\\) is also in R."],
        ["What does transitive mean?", "Whenever \\(aRb\\) and \\(bRc\\), you must also have \\(aRc\\)."],
        ["What is an equivalence relation?", "A relation that is reflexive, symmetric, and transitive."],
        ["What is a graph?", "A set of vertices together with edges connecting some pairs of vertices."],
        ["What does the Handshake Lemma say?", "The sum of all vertex degrees equals \\(2|E|\\), because every edge contributes two degree-counts."],
        ["How many edges does \\(K_n\\) have?", "\\(n(n-1)/2\\). Every pair of distinct vertices is connected once."],
        ["When is a graph bipartite?", "When its vertices can be split into two groups so every edge goes between groups; equivalently, it has no odd cycle."]
      ],
      practiceQuiz: [
        {
          q: "Let \\(R\\) be a relation on \\(\\{1,2,3\\}\\). If \\(R = \\{(1,1), (2,2), (3,3), (1,2)\\}\\), which property does it FAIL?",
          options: ["Reflexive", "Symmetric", "Transitive", "It fails none of them"],
          answer: 1,
          why: "It has (1,2) but it is missing the reverse pair (2,1). Therefore, it is not symmetric."
        },
        {
          q: "If a graph has 4 vertices with degrees 2, 2, 3, and 3, how many edges does it have?",
          options: ["5", "10", "4", "Impossible graph"],
          answer: 0,
          why: "Use the Handshake Lemma: Sum of degrees = 2 + 2 + 3 + 3 = 10. Since Sum = 2 * Edges, we have 10 = 2E. Therefore, E = 5."
        },
        {
          q: "Is an empty relation \\(R = \\emptyset\\) on a non-empty set A reflexive?",
          options: ["Yes", "No", "Depends on A", "It is both reflexive and irreflexive"],
          answer: 1,
          why: "Reflexivity requires that EVERY element in A has a pair (x,x) in R. If R is empty, it has no pairs, so it fails the requirement."
        },
        {
          q: "Two graphs are Isomorphic. Which of the following is NOT necessarily true?",
          options: ["They have the same number of vertices", "They have the same number of edges", "They have the exact same vertex labels", "They have the same degree sequence"],
          answer: 2,
          why: "Isomorphism means the structure is identical, but the labels (names of the vertices) can be completely different."
        },
        {
          q: "Which property is described by: 'For all x, y in A, if xRy and yRx, then x = y'?",
          options: ["Reflexive", "Symmetric", "Transitive", "Anti-symmetric"],
          answer: 3,
          why: "This is the definition of Anti-symmetry. It means that two-way streets are NOT allowed, EXCEPT if it's a loop on a single vertex."
        }
      ],
      readiness: [
        "You can define graph and relation formally.",
        "You can compute degree sums and complete graph edges.",
        "You can prove equivalence relation properties separately."
      ]
    },
    {
      id: "number-theory",
      title: "Number Theory & Modular Arithmetic",
      short: "Numbers",
      examWeight: "Appears in 2023-03, 2023-08, 2024-03, 2024-09, 2025-03, 2025-05, 2026-03",
      goal: "Solve parity, divisibility, gcd, Bezout, congruence, prime/composite, and Euclidean algorithm questions.",
      lesson: [
        "**What is Divisibility?** When we write \\(a \\mid b\\) ('a divides b'), it means b can be cleanly divided by a with no remainder. Mathematically: \\(b = a \\times k\\) for some integer \\(k\\).",
        "**Divisibility TRAP:** \\(3 \\mid 12\\) is a True/False statement. It means '3 divides 12'. It is NOT the fraction \\(3/12\\). Don't calculate it, just answer True or False.",
        "**Modular Arithmetic (Clock Math):** \\(A \\equiv B \\pmod N\\) means A and B have the EXACT SAME remainder when you divide them by N. On a 12-hour clock, 14:00 is the same as 2:00, so \\(14 \\equiv 2 \\pmod{12}\\).",
        "**Another way to think of Modulo:** \\(A \\equiv B \\pmod N\\) also means the difference \\((A - B)\\) is a clean multiple of N. \\(N \\mid (A - B)\\).",
        "**Greatest Common Divisor (GCD):** The biggest integer that perfectly divides two numbers. \\(GCD(12, 18) = 6\\).",
        "**The Euclidean Algorithm:** A fast way to find the GCD without guessing factors. You repeatedly divide the larger number by the smaller, and replace the larger with the remainder, until the remainder is 0.",
        "**Bezout's Identity (Extended Euclidean):** If \\(d = GCD(A, B)\\), you can always find integers \\(x\\) and \\(y\\) such that \\(Ax + By = d\\). This is how we find modular inverses.",
        "**Modular Inverse:** The 'inverse' of A modulo N is a number X such that \\(A \\times X \\equiv 1 \\pmod N\\). It's like finding a fraction \\(1/A\\), but strictly using integers. It only exists if \\(GCD(A, N) = 1\\) (they are coprime)."
      ],
      visual: {
        type: "euclid",
        title: "Euclidean algorithm ladder",
        caption: "Repeated division turns a large gcd into a smaller one until the last nonzero remainder appears."
      },
      methods: [
        "**Proving Divisibility (Direct):** If you need to prove \\(a \\mid c\\) given \\(a \\mid b\\) and \\(b \\mid c\\). Unroll definitions: \\(b = ak\\), \\(c = bj\\). Substitute: \\(c = (ak)j = a(kj)\\). Since \\(kj\\) is an integer, \\(a \\mid c\\).",
        "**Finding remainders of huge powers:** To find \\(7^{100} \\pmod 5\\). Find a small power of 7 that equals 1 or -1 mod 5. \\(7 \\equiv 2 \\pmod 5\\). \\(7^2 = 49 \\equiv 4 \\equiv -1 \\pmod 5\\). So \\(7^{100} = (7^2)^{50} \\equiv (-1)^{50} \\equiv 1 \\pmod 5\\).",
        "**Running the Euclidean Algorithm:** Format: \\(A = B \\times Q + R\\). Next line: Shift B to A, and R to B. Repeat until \\(R = 0\\). The last non-zero R is your GCD.",
        "**Solving Linear Congruences:** To solve \\(3x \\equiv 5 \\pmod 7\\). You need to divide by 3, but you can't use fractions. Find the inverse of 3 mod 7 (a number that multiplies by 3 to give 1 mod 7). \\(3 \\times 5 = 15 \\equiv 1 \\pmod 7\\). The inverse is 5. Multiply both sides by 5: \\(x \\equiv 25 \\equiv 4 \\pmod 7\\)."
      ],
      beginnerGuide: [
        {
          title: "Divides means no remainder",
          problem: "Translate \\(a\\mid b\\) into a usable equation.",
          meaning: "\\(a\\mid b\\) means b is exactly a times some integer. There are no leftovers.",
          method: "Replace \\(a\\mid b\\) by \\(b=ak\\) for some integer k.",
          steps: ["Write the definition.", "Substitute it into the expression.", "Factor out the divisor.", "End with 'therefore divisible'."],
          tip: "Most divisibility proofs become easy after you write the definition."
        },
        {
          title: "Modulo means same remainder",
          problem: "Use congruence notation without fear.",
          meaning: "\\(a\\equiv b\\pmod n\\) means a and b land in the same remainder box after division by n.",
          method: "Reduce big numbers to small remainders before calculating.",
          steps: ["Replace each number by its remainder.", "Add or multiply the remainders.", "Reduce again.", "State the final congruence."],
          tip: "Modulo arithmetic lets you work with small representatives."
        },
        {
          title: "Euclid is repeated division",
          problem: "Find gcd without guessing all factors.",
          meaning: "The Euclidean algorithm keeps replacing a big gcd problem with a smaller one until the remainder is 0.",
          method: "Write each line as \\(A=BQ+R\\), then move B and R to the next line.",
          steps: ["Divide larger by smaller.", "Keep the remainder.", "Repeat with previous divisor and remainder.", "The last nonzero remainder is the gcd."],
          tip: "The answer is not the zero remainder; it is the last nonzero remainder."
        }
      ],
      formulaBank: [
        { tag: "Divisibility", accent: "accent-forest", name: "Definition of divides", formula: "$a\\mid b\\iff b=ak$ for some $k\\in\\mathbb Z$", why: "This turns divisibility into algebra." },
        { tag: "Modulo", accent: "accent-navy", name: "Congruence definition", formula: "$a\\equiv b\\pmod n\\iff n\\mid(a-b)$", why: "Same remainder means the difference is a multiple of n." },
        { tag: "GCD", accent: "accent-copper", name: "Euclidean algorithm", formula: "$a=bq+r$, then $\\gcd(a,b)=\\gcd(b,r)$", why: "Repeated division keeps the gcd unchanged while numbers get smaller." },
        { tag: "Inverse", accent: "accent-navy", name: "Modular inverse exists", formula: "$a^{-1}\\pmod n$ exists iff $\\gcd(a,n)=1$", why: "Only coprime numbers have multiplicative inverses modulo n." },
        { tag: "Primes", accent: "accent-forest", name: "Composite proof", formula: "$m=ab$ with $a>1,b>1$", why: "Factoring into two nontrivial factors proves a number is not prime." },
        { tag: "Bezout", accent: "accent-copper", name: "Bezout identity", formula: "$\\gcd(a,b)=ax+by$ for some integers x,y", why: "Extended Euclid finds these coefficients and unlocks modular inverses." },
        { tag: "Fermat", accent: "accent-navy", name: "Fermat's little theorem", formula: "If p is prime and $p\\nmid a$, then $a^{p-1}\\equiv1\\pmod p$", why: "This reduces huge powers modulo a prime." },
        { tag: "Cryptography", accent: "accent-forest", name: "RSA shape", formula: "Encrypt $c\\equiv m^e\\pmod n$, decrypt $m\\equiv c^d\\pmod n$", why: "RSA is a major application of modular arithmetic and inverses." }
      ],
      problemSolving: [
        {
          type: "Congruence",
          accent: "accent-navy",
          title: "Solve a linear congruence",
          question: "Solve $7x\\equiv5\\pmod{12}$.",
          method: "Find the inverse of 7 modulo 12, then multiply both sides.",
          steps: ["Check inverse: $7\\cdot7=49\\equiv1\\pmod{12}$.", "Multiply both sides by 7.", "$x\\equiv35\\pmod{12}$.", "Reduce: $35\\equiv11\\pmod{12}$."],
          remember: "Never divide in modular arithmetic; multiply by an inverse."
        },
        {
          type: "Divisibility",
          accent: "accent-forest",
          title: "Prove divisibility by factoring",
          question: "Show $n^2-1$ is divisible by 8 when n is odd.",
          method: "Write odd n as $2k+1$, or factor into consecutive even numbers.",
          steps: ["Factor: $n^2-1=(n-1)(n+1)$.", "If n is odd, then $n-1$ and $n+1$ are consecutive even numbers.", "One of two consecutive even numbers is divisible by 4.", "The other is divisible by 2.", "Their product is divisible by $4\\cdot2=8$."],
          remember: "Factoring often reveals even/consecutive structure."
        },
        {
          type: "Extended Euclid",
          accent: "accent-copper",
          title: "Find an inverse using Bezout",
          question: "Find the inverse of 5 modulo 17.",
          method: "Use a small Bezout equation or quick trial.",
          steps: ["We need $5x\\equiv1\\pmod{17}$.", "Try multiples: $5\\cdot7=35$.", "$35\\equiv1\\pmod{17}$ because $35-34=1$.", "So the inverse of 5 modulo 17 is 7."],
          remember: "An inverse is the number that makes the product leave remainder 1."
        },
        {
          type: "Fermat",
          accent: "accent-navy",
          title: "Reduce a huge prime-mod power",
          question: "Find $3^{100}\\pmod7$.",
          method: "Use Fermat's little theorem because 7 is prime and 7 does not divide 3.",
          steps: ["Fermat gives $3^6\\equiv1\\pmod7$.", "Write $100=96+4=6\\cdot16+4$.", "So $3^{100}=(3^6)^{16}3^4\\equiv1^{16}3^4\\pmod7$.", "$3^2=9\\equiv2$, so $3^4\\equiv4$.", "Answer: $4$."],
          remember: "Use the exponent cycle length p-1 when the modulus is prime."
        }
      ],
      examples: [
        {
          level: "Easy",
          title: "Basic Divisibility Definition",
          question: "Prove that if \\(a \\mid b\\) and \\(a \\mid c\\), then \\(a \\mid (b+c)\\).",
          solution: [
            "Translate the given info into equations using the definition of divisibility.",
            "\\(a \\mid b \\implies b = a \\cdot k\\) for some integer k.",
            "\\(a \\mid c \\implies c = a \\cdot j\\) for some integer j.",
            "We want to look at \\(b + c\\). Substitute our equations: \\(b + c = (ak) + (aj)\\).",
            "Factor out the common 'a': \\(b + c = a(k + j)\\).",
            "Since \\(k+j\\) is an integer, this proves \\(a \\mid (b+c)\\)."
          ],
          takeaway: "Always 'unroll' divisibility statements into \\(y = x \\cdot k\\) equations before doing algebra."
        },
        {
          level: "Medium",
          title: "Euclidean Algorithm",
          question: "Find the GCD of 252 and 198 using the Euclidean Algorithm.",
          solution: [
            "Divide the larger by the smaller: 252 = 198 * 1 + 54",
            "Shift 198 and 54 left: 198 = 54 * 3 + 36",
            "Shift 54 and 36 left: 54 = 36 * 1 + 18",
            "Shift 36 and 18 left: 36 = 18 * 2 + 0",
            "The remainder is 0. The last non-zero remainder is 18.",
            "Therefore, GCD(252, 198) = 18."
          ],
          takeaway: "Shift the divisor and the remainder to the left on each new line until you hit 0."
        },
        {
          level: "Medium",
          title: "Huge Powers Modulo",
          question: "What is the remainder when \\(3^{40}\\) is divided by 10? (i.e. \\(3^{40} \\pmod{10}\\))",
          solution: [
            "We want to find a power of 3 that is close to a multiple of 10. Look for a remainder of 1 or -1.",
            "\\(3^1 = 3\\)",
            "\\(3^2 = 9 \\equiv -1 \\pmod{10}\\). This is perfect!",
            "Rewrite our target using this power: \\(3^{40} = (3^2)^{20}\\).",
            "Substitute the modulo value: \\(3^{40} \\equiv (-1)^{20} \\pmod{10}\\).",
            "A negative 1 to an even power is positive 1.",
            "Answer: 1."
          ],
          takeaway: "Hunt for a small power that evaluates to 1 or -1 modulo N. It makes large exponents collapse instantly."
        },
        {
          level: "Exam",
          title: "Finding a Modular Inverse",
          question: "Find the inverse of 7 modulo 26.",
          solution: [
            "We are looking for an integer X such that \\(7X \\equiv 1 \\pmod{26}\\).",
            "We can use the Extended Euclidean Algorithm, or since 26 is small, test multiples of 7.",
            "We want a multiple of 7 that is 1 more than a multiple of 26.",
            "Multiples of 26: 26, 52, 78, 104...",
            "Add 1 to them: 27, 53, 79, 105...",
            "Are any of these divisible by 7?",
            "27/7 (No). 53/7 (No). 79/7 (No). 105 / 7 = 15. YES!",
            "Since \\(7 \\times 15 = 105 = 4 \\times 26 + 1\\), we have \\(7 \\times 15 \\equiv 1 \\pmod{26}\\).",
            "The inverse is 15."
          ],
          takeaway: "To find \\(A^{-1} \\pmod N\\) by guessing, list (Multiples of N) + 1, and see which one is divisible by A."
        },
        {
          level: "Exam",
          title: "Solving a Congruence",
          question: "Solve for x: \\(5x \\equiv 3 \\pmod{11}\\).",
          solution: [
            "We need to isolate x. We cannot 'divide' by 5 in modular arithmetic.",
            "Instead, we must multiply both sides by the modular inverse of 5 mod 11.",
            "What multiplies by 5 to give 1 mod 11? Try multiples of 5: 5, 10, 15, 20, 25, 30, 35...",
            "Look for one that is 1 more than a multiple of 11. Multiples of 11: 11, 22, 33...",
            "Ah! 33 + 1 = 34 (not div by 5). But wait, what about negative inverses? Or just test 1-10.",
            "\\(5 \\times 9 = 45\\). \\(45 \\equiv 1 \\pmod{11}\\) (since 44 is a multiple). The inverse is 9.",
            "Multiply both sides of original equation by 9:",
            "\\(9 \\times 5x \\equiv 9 \\times 3 \\pmod{11}\\)",
            "\\(1x \\equiv 27 \\pmod{11}\\)",
            "Reduce 27 mod 11. 27 - 22 = 5.",
            "Answer: \\(x \\equiv 5 \\pmod{11}\\)."
          ],
          takeaway: "Never divide. Find the inverse, then multiply."
        }
      ],
      memoryQuiz: [
        ["What does \\(a \\mid b\\) mean?", "a divides b perfectly. There exists an integer k such that b = a * k."],
        ["What does \\(a\\equiv b\\pmod n\\) mean?", "a and b leave the same remainder when divided by n, or equivalently \\(n\\mid(a-b)\\)."],
        ["What is a prime number?", "An integer greater than 1 whose only positive divisors are 1 and itself."],
        ["What does gcd mean?", "The greatest common divisor: the largest positive integer dividing both numbers."],
        ["When are two integers coprime?", "When their gcd is 1."],
        ["What does the Euclidean algorithm return?", "The last nonzero remainder, which is the gcd."],
        ["When does a modular inverse of a mod n exist?", "Exactly when \\(gcd(a,n)=1\\)."],
        ["How do you prove a number is composite?", "Factor it into two integers both greater than 1."]
      ],
      practiceQuiz: [
        {
          q: "What is the remainder when -5 is divided by 3 in standard modular arithmetic?",
          options: ["-2", "-5", "1", "2"],
          answer: 2,
          why: "Remainders must be positive. We add multiples of 3 until the number is positive. -5 + 3 = -2. -2 + 3 = 1. The remainder is 1."
        },
        {
          q: "Which of these statements is FALSE?",
          options: ["\\(2 \\mid 8\\)", "\\(8 \\equiv 2 \\pmod 3\\)", "\\(3 \\mid 15\\)", "\\(15 \\mid 3\\)"],
          answer: 3,
          why: "\\(a \\mid b\\) means 'a goes into b'. 15 does not go into 3 to produce an integer. So \\(15 \\mid 3\\) is false."
        },
        {
          q: "Does 4 have a modular inverse modulo 6?",
          options: ["Yes, it is 4", "Yes, it is 2", "No, because it is negative", "No, because GCD(4, 6) is not 1"],
          answer: 3,
          why: "An inverse for A mod N only exists if A and N share no common factors other than 1. Since 4 and 6 share a factor of 2, 4 has no inverse modulo 6."
        },
        {
          q: "Using Fermat's Little Theorem, what is \\(5^6 \\pmod 7\\)?",
          options: ["1", "5", "6", "0"],
          answer: 0,
          why: "Fermat's Little Theorem says \\(a^{p-1} \\equiv 1 \\pmod p\\). Since 7 is prime, \\(5^{7-1} \\equiv 1 \\pmod 7\\)."
        },
        {
          q: "If \\(a \\equiv 2 \\pmod 5\\) and \\(b \\equiv 4 \\pmod 5\\), what is \\(a \\times b \\pmod 5\\)?",
          options: ["8", "3", "2", "6"],
          answer: 1,
          why: "You can just multiply the remainders directly. 2 * 4 = 8. Then reduce 8 modulo 5, which gives a remainder of 3."
        }
      ],
      readiness: [
        "You can run Euclid's algorithm cleanly.",
        "You can use congruence notation correctly.",
        "You can prove divisibility by factoring."
      ]
    },
    {
      id: "combinatorics",
      title: "Combinatorics & Counting",
      short: "Counting",
      examWeight: "Appears in 2023-05, 2023-08, 2024-03, 2024-09, 2025-03, 2025-08",
      goal: "Count lineups, passwords, poker hands, soups, pigeonhole questions, and restricted strings.",
      lesson: [
        "**What is Combinatorics?** It is the mathematics of counting WITHOUT actually counting one by one. It's about finding formulas to determine how many ways something can happen.",
        "**The Rule of Product (Multiplication Principle):** If you have 3 shirts AND 4 pants, you have \\(3 \\times 4 = 12\\) outfits. Use multiplication when tasks happen in SEQUENCE (AND).",
        "**The Rule of Sum (Addition Principle):** If you can travel to a city by 3 different trains OR 2 different buses, you have \\(3 + 2 = 5\\) options. Use addition when tasks are ALTERNATIVES (OR).",
        "**Permutations (Order Matters!):** Think 'Passwords' or 'Podiums'. Arranging 3 people in a 1st/2nd/3rd place race. \\(P(n, k) = \\frac{n!}{(n-k)!}\\).",
        "**Combinations (Order Does NOT Matter):** Think 'Committees' or 'Pizza Toppings'. Choosing 3 people from 10 to be on a team. \\(C(n, k) = \\binom{n}{k} = \\frac{n!}{k!(n-k)!}\\).",
        "**The Pigeonhole Principle:** The most obvious fact in math. If you have 10 pigeons and 9 holes, at least one hole MUST contain 2 or more pigeons. Sounds simple, but very powerful in proofs.",
        "**Stars and Bars (Balls and Urns):** How to distribute identical items into distinct boxes. Example: distributing 10 identical candies to 3 children. Formula: \\(\\binom{n + k - 1}{k - 1}\\)."
      ],
      visual: {
        type: "counting-tree",
        title: "Counting decision tree",
        caption: "Order? Repetition? Restriction? These three questions choose the method."
      },
      methods: [
        "**The First Question:** Always ask yourself: 'Does the order matter?' If yes, use Permutations (or pure multiplication). If no, use Combinations.",
        "**Handling 'At Least One':** Direct counting of 'at least one' is often very hard because there are many cases (exactly 1, exactly 2, etc.). Instead, use the Complement Rule: Total Possible Ways - Ways with EXACTLY ZERO. (\\(Total - None = At Least One\\)).",
        "**Grouping Items:** If a question says 'A and B must sit together', treat A and B as ONE single super-item. Count the arrangements of the items, then multiply by the internal arrangements of the super-item (usually 2!).",
        "**Separating Items:** If a question says 'A and B must NOT sit together', calculate the TOTAL arrangements without restrictions, and subtract the arrangements where they ARE together.",
        "**Applying Pigeonhole:** Identify your 'pigeons' (the objects being distributed) and your 'holes' (the categories they fall into). If pigeons > holes, a collision happens."
      ],
      beginnerGuide: [
        {
          title: "Counting starts with a decision",
          problem: "Choose the right formula instead of guessing.",
          meaning: "Counting questions are about choices. The formula depends on whether order matters and whether items can repeat.",
          method: "Ask the same questions every time: order? repetition? restriction?",
          steps: ["If order matters, think permutation or multiplication.", "If order does not matter, think combination.", "If repetition is allowed, each slot may have the same choices again.", "If there is a restriction, consider cases or complement."],
          tip: "Do not reach for \\(n!\\) automatically. First decide what is being counted."
        },
        {
          title: "Use complement for 'at least one'",
          problem: "Avoid many separate cases.",
          meaning: "'At least one' means one or more. Counting exactly one, exactly two, exactly three can get messy.",
          method: "Count everything, subtract the cases with none.",
          steps: ["Find total unrestricted outcomes.", "Find bad outcomes with zero of the desired thing.", "Subtract bad from total.", "The result has at least one."],
          tip: "At least one = total minus none."
        },
        {
          title: "Pigeonhole is forced repetition",
          problem: "Prove a repeat must happen without finding the repeat.",
          meaning: "If more objects are placed into fewer categories, at least one category gets two objects.",
          method: "Name the objects and name the boxes. Then compare counts.",
          steps: ["Identify pigeons: what is being placed?", "Identify holes: what categories are possible?", "Check if pigeons > holes.", "Conclude at least one collision."],
          tip: "The proof is only as good as your choice of boxes."
        }
      ],
      formulaBank: [
        { tag: "Counting", accent: "accent-forest", name: "Multiplication rule", formula: "$m$ choices then $n$ choices gives $mn$", why: "Use when tasks happen in sequence." },
        { tag: "Counting", accent: "accent-forest", name: "Addition rule", formula: "$m$ choices or $n$ choices gives $m+n$", why: "Use when cases are alternatives and do not overlap." },
        { tag: "Order", accent: "accent-navy", name: "Permutation", formula: "$P(n,r)=\\frac{n!}{(n-r)!}$", why: "Choose and arrange r objects from n." },
        { tag: "No order", accent: "accent-navy", name: "Combination", formula: "$\\binom nr=\\frac{n!}{r!(n-r)!}$", why: "Choose r objects when order does not matter." },
        { tag: "Distribute", accent: "accent-copper", name: "Stars and bars", formula: "$\\binom{n+k-1}{k-1}$", why: "Distribute n identical items into k distinct boxes, allowing zero." },
        { tag: "Repetition", accent: "accent-forest", name: "Permutations with repeated letters", formula: "$\\frac{n!}{n_1!n_2!\\cdots n_k!}$", why: "Divide by the internal rearrangements of identical items." },
        { tag: "Inclusion-exclusion", accent: "accent-copper", name: "Three-set inclusion-exclusion", formula: "$|A\\cup B\\cup C|=|A|+|B|+|C|-|AB|-|AC|-|BC|+|ABC|$", why: "Add singles, subtract pair overlaps, add the triple overlap back." }
      ],
      problemSolving: [
        {
          type: "Restriction",
          accent: "accent-copper",
          title: "Count passwords with a restriction",
          question: "How many 4-digit codes use digits 0-9 and contain at least one 7?",
          method: "Use complement: total minus codes with no 7.",
          steps: ["Total codes: $10^4$.", "Codes with no 7: each position has 9 choices, so $9^4$.", "At least one 7: $10^4-9^4$.", "Compute only if the exam asks for the number."],
          remember: "At least one usually means total minus none."
        },
        {
          type: "Pigeonhole",
          accent: "accent-forest",
          title: "Guarantee a repeated category",
          question: "How many people guarantee two share a birth month?",
          method: "People are objects; months are boxes.",
          steps: ["There are 12 month boxes.", "With 12 people, it is possible each month has one person.", "With 13 people, that is impossible.", "Therefore 13 people guarantee a shared birth month."],
          remember: "Guarantee questions are often pigeonhole questions."
        },
        {
          type: "Repeated items",
          accent: "accent-navy",
          title: "Arrange repeated letters",
          question: "How many distinct arrangements are there of BANANA?",
          method: "Start with all 6 letters, then divide by repeats.",
          steps: ["BANANA has 6 letters.", "A appears 3 times and N appears 2 times.", "Use $\\frac{6!}{3!2!}$.", "Compute $\\frac{720}{6\\cdot2}=60$.", "There are 60 distinct arrangements."],
          remember: "Repeated identical objects make fewer arrangements, so divide."
        }
      ],
      examples: [
        {
          level: "Easy",
          title: "Basic Combination",
          question: "A club has 10 members. How many ways can you choose a committee of 3 people?",
          solution: [
            "Question 1: Does order matter? No. A committee of Alice, Bob, Charlie is the same as Charlie, Alice, Bob.",
            "Therefore, use Combinations: \\(C(10, 3)\\).",
            "Formula: \\(\\frac{10!}{3! \\times (10-3)!} = \\frac{10!}{3! \\times 7!}\\).",
            "Calculate: \\(\\frac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1} = \\frac{720}{6} = 120\\)."
          ],
          takeaway: "Selecting a subset where roles aren't specified is always a Combination."
        },
        {
          level: "Easy",
          title: "Basic Permutation",
          question: "A club has 10 members. How many ways can you elect a President, Vice-President, and Treasurer?",
          solution: [
            "Question 1: Does order matter? Yes. Alice as Pres and Bob as VP is different from Bob as Pres and Alice as VP.",
            "Use Permutations (or just the multiplication rule).",
            "Option 1 (Multiplication): 10 choices for Pres, 9 choices for VP, 8 choices for Treas. \\(10 \\times 9 \\times 8 = 720\\).",
            "Option 2 (Formula): \\(P(10, 3) = \\frac{10!}{(10-3)!} = \\frac{10!}{7!} = 10 \\times 9 \\times 8 = 720\\)."
          ],
          takeaway: "When selecting people for specific distinct roles, order matters."
        },
        {
          level: "Medium",
          title: "The Complement Rule",
          question: "You flip a coin 5 times. How many sequences contain AT LEAST ONE Heads?",
          solution: [
            "Calculating 'exactly 1', 'exactly 2', 'exactly 3', etc. takes too long.",
            "Use the complement rule: (Total Sequences) - (Sequences with NO Heads).",
            "Total sequences for 5 flips: \\(2^5 = 32\\).",
            "Sequences with NO Heads means ALL Tails. There is only exactly 1 way for this to happen (TTTTT).",
            "Result: 32 - 1 = 31."
          ],
          takeaway: "Whenever you see 'at least one', immediately think 'Total minus None'."
        },
        {
          level: "Exam",
          title: "Grouping (Sitting Together)",
          question: "How many ways can 5 people (A,B,C,D,E) sit in a row of 5 chairs if A and B must sit next to each other?",
          solution: [
            "Treat A and B as a single 'Super Person' called (AB).",
            "Now we have 4 entities to arrange: (AB), C, D, E.",
            "The number of ways to arrange 4 entities is \\(4! = 24\\).",
            "However, within the 'Super Person', A and B can swap seats: (AB) or (BA). That's \\(2! = 2\\) internal arrangements.",
            "Multiply them: \\(24 \\times 2 = 48\\) ways."
          ],
          takeaway: "Tie things together into a single block, arrange the blocks, then arrange inside the block."
        },
        {
          level: "Exam",
          title: "Stars and Bars",
          question: "You have 8 identical apples to give to 3 children. How many ways can you distribute them? (It is okay if a child gets zero).",
          solution: [
            "Because the items (apples) are IDENTICAL, this is a Stars and Bars problem.",
            "Number of items \\(n = 8\\). Number of bins \\(k = 3\\).",
            "Formula: \\(\\binom{n + k - 1}{k - 1}\\).",
            "\\(\\binom{8 + 3 - 1}{3 - 1} = \\binom{10}{2}\\).",
            "Calculate: \\(\\frac{10 \\times 9}{2 \\times 1} = 45\\) ways."
          ],
          takeaway: "Distributing identical items requires Stars and Bars. Don't use normal permutations or combinations."
        }
      ],
      memoryQuiz: [
        ["When do you use Permutations vs Combinations?", "Permutations: Order matters (Passwords, Podium finishes). Combinations: Order does NOT matter (Committees, Pizza toppings)."],
        ["What is the multiplication rule?", "If one choice has a options and the next has b options, the combined process has \\(a\\cdot b\\) outcomes."],
        ["What does \\(n!\\) count?", "The number of ways to arrange n distinct objects in a row."],
        ["What does \\(P(n,r)\\) count?", "Ordered selections of r objects from n: \\(n!/(n-r)!\\)."],
        ["What does \\(\\binom nr\\) count?", "Unordered selections of r objects from n: \\(n!/(r!(n-r)!)\\)."],
        ["When should you use the complement rule?", "When counting the bad cases is easier than counting the desired cases directly."],
        ["What is the pigeonhole principle?", "If more objects than boxes are used, at least one box contains at least two objects."],
        ["What is stars and bars for?", "Distributing identical items into distinct boxes, often allowing zero in a box."]
      ],
      practiceQuiz: [
        {
          q: "How many ways can you arrange the letters in the word 'MATH'?",
          options: ["4", "16", "24", "256"],
          answer: 2,
          why: "There are 4 distinct letters. You have 4 choices for the first letter, 3 for the second, 2 for the third, 1 for the last. 4! = 24."
        },
        {
          q: "How many ways can you arrange the letters in 'APPLE'?",
          options: ["120", "60", "24", "12"],
          answer: 1,
          why: "Total letters = 5, so normally 5! = 120. BUT there are 2 identical P's. We must divide out their internal ordering. 120 / 2! = 60."
        },
        {
          q: "You have 5 pairs of socks in a drawer (10 socks total). It is dark. How many socks must you pull out to GUARANTEE you have a matching pair?",
          options: ["2", "5", "6", "10"],
          answer: 2,
          why: "Pigeonhole principle. The 'holes' are the 5 colors. The 'pigeons' are the socks you draw. If you draw 6 socks, you have 6 pigeons and 5 holes, so at least two socks MUST be in the same color hole."
        },
        {
          q: "What does \\(\\binom{n}{0}\\) evaluate to for any positive integer n?",
          options: ["0", "1", "n", "Undefined"],
          answer: 1,
          why: "How many ways can you choose zero items from a set of n? Exactly 1 way (by doing nothing)."
        },
        {
          q: "Which expression represents: 'Choosing a 3-person committee from 10 men and 12 women, such that exactly 1 man is chosen'?",
          options: ["\\(\\binom{10}{1} + \\binom{12}{2}\\)", "\\(\\binom{10}{1} \\times \\binom{12}{2}\\)", "\\(\\binom{22}{3}\\)", "\\(10 \\times 12 \\times 11\\)"],
          answer: 1,
          why: "You must do two tasks: Choose 1 man FROM the 10 men AND choose 2 women FROM the 12 women. 'AND' means multiply. So \\(\\binom{10}{1} \\times \\binom{12}{2}\\)."
        }
      ],
      readiness: [
        "You can decide order vs no order.",
        "You can split restricted counting into cases.",
        "You can identify bins in pigeonhole problems."
      ]
    },
    {
      id: "induction-recurrence",
      title: "Induction & Recurrence Relations",
      short: "Induction",
      examWeight: "Appears in 2023-08, 2024-03, 2024-05, 2024-09, 2025-05, 2025-08, 2026-03",
      goal: "Write complete induction proofs and solve or build recurrence relations.",
      lesson: [
        "**What is Mathematical Induction?** It's like knocking over an infinite line of dominoes. Instead of proving a statement is true for n=1, then n=2, then n=3 forever, you just prove two things: 1) You can knock over the first domino. 2) IF any domino falls, it will ALWAYS knock over the next one.",
        "**Step 1: The Base Case:** Prove the statement works for the very first number (usually n=1 or n=0). This is knocking over the first domino.",
        "**Step 2: The Inductive Hypothesis (IH):** ASSUME the statement is true for some arbitrary number \\(n=k\\). Write this assumption down perfectly. This is the 'If a domino falls...' part.",
        "**Step 3: The Inductive Step:** Using your assumption from Step 2, PROVE that the statement MUST be true for \\(n=k+1\\). This is the '...it will knock over the next one' part.",
        "**Strong Induction:** Sometimes, knowing just the previous domino fell isn't enough. Strong induction assumes ALL previous dominoes fell (n=1, 2, ..., k) to prove k+1.",
        "**What is a Recurrence Relation?** A sequence where the next term depends on the previous terms. Example: Fibonacci sequence. \\(F_n = F_{n-1} + F_{n-2}\\).",
        "**Solving Recurrences (Characteristic Equation):** For a relation like \\(a_n = 5a_{n-1} - 6a_{n-2}\\), guess that \\(a_n = r^n\\). This turns the relation into an algebraic equation: \\(r^2 = 5r - 6\\), so \\(r^2 - 5r + 6 = 0\\). Solve for the roots \\(r_1, r_2\\) to find the closed-form formula."
      ],
      visual: {
        type: "domino",
        title: "Induction as dominoes",
        caption: "Base case knocks the first domino. The inductive step proves every domino knocks the next."
      },
      methods: [
        "**Induction for Sums:** Your goal in Step 3 is to show that \\(\\text{Sum}(k+1) = \\text{Sum}(k) + \\text{next term}\\). Substitute your IH for \\(\\text{Sum}(k)\\), add the new term, and do algebra to reach the target.",
        "**Induction for Divisibility:** To prove \\(3 \\mid (4^n - 1)\\), assume \\(4^k - 1 = 3m\\). In the k+1 step, rewrite \\(4^{k+1} - 1\\) as \\(4 \\cdot 4^k - 1\\). Substitute \\(4^k = 3m + 1\\) and factor out the 3.",
        "**Solving Linear Homogeneous Recurrences:** 1. Write the characteristic equation. 2. Find the roots \\(r_1, r_2\\). 3. General solution: \\(a_n = c_1(r_1)^n + c_2(r_2)^n\\). 4. Use the initial conditions (like \\(a_0 = 0, a_1 = 1\\)) to solve a system of equations for \\(c_1\\) and \\(c_2\\).",
        "**Repeated Roots:** If \\(r_1 = r_2 = r\\), the general solution changes! It becomes \\(a_n = c_1(r)^n + c_2 \\cdot n(r)^n\\). Notice the extra 'n'."
      ],
      beginnerGuide: [
        {
          title: "Induction is a two-part proof",
          problem: "Understand why checking one case is not enough.",
          meaning: "Induction proves a statement for all natural numbers by starting the chain and proving the chain continues.",
          method: "Always write base case, hypothesis, and target before doing algebra.",
          steps: ["Base case: check the first allowed n.", "Hypothesis: assume the statement for n=k.", "Target: write what must be proved for k+1.", "Use the hypothesis to reach the target."],
          tip: "The target is the formula with every n replaced by k+1."
        },
        {
          title: "Summation induction has one extra term",
          problem: "Prove a formula for a sum up to n.",
          meaning: "A sum up to k+1 is the old sum up to k plus the new last term.",
          method: "Split \\(S_{k+1}\\) into \\(S_k\\) plus the next term, then use the hypothesis.",
          steps: ["Write the k+1 sum.", "Separate the part up to k.", "Replace that part with the hypothesis formula.", "Simplify until it matches the target."],
          tip: "Look for the old sum hiding inside the new sum."
        },
        {
          title: "A recurrence is a recipe for the next term",
          problem: "Understand sequences defined by previous values.",
          meaning: "A recurrence does not give a term directly. It tells you how to build the next term from earlier terms.",
          method: "Compute first terms by following the rule, or solve using the characteristic equation if it is linear homogeneous.",
          steps: ["Write the initial values.", "Use the recurrence to compute small terms.", "For closed form, build the characteristic equation.", "Use initial values to solve constants."],
          tip: "Do not solve a recurrence before checking what initial values are given."
        }
      ],
      formulaBank: [
        { tag: "Induction", accent: "accent-forest", name: "Induction structure", formula: "Base case + $(P(k)\\Rightarrow P(k+1))$ proves all cases", why: "This is the domino chain." },
        { tag: "Strong induction", accent: "accent-copper", name: "Strong induction", formula: "$P(1),...,P(k)\\Rightarrow P(k+1)$", why: "Use when the next case may depend on several earlier cases." },
        { tag: "Recurrence", accent: "accent-navy", name: "Characteristic equation", formula: "$a_n=pa_{n-1}+qa_{n-2}\\Rightarrow r^2-pr-q=0$", why: "Turns a recurrence into algebra." },
        { tag: "Recurrence", accent: "accent-navy", name: "Two distinct roots", formula: "$a_n=c_1r_1^n+c_2r_2^n$", why: "This is the closed form for two different characteristic roots." },
        { tag: "Recurrence", accent: "accent-danger", name: "Repeated root", formula: "$a_n=c_1r^n+c_2nr^n$", why: "The extra n is required when both roots are the same." },
        { tag: "Divide conquer", accent: "accent-copper", name: "Merge-sort recurrence", formula: "$T(n)=2T(n/2)+O(n)=O(n\\log n)$", why: "Splitting into two halves and merging linearly is a standard algorithm pattern." },
        { tag: "Strong induction", accent: "accent-forest", name: "Use strong induction when", formula: "The next case depends on earlier cases, not only k", why: "Problems about tiling, postage, divisibility, and recurrences often need several previous facts." }
      ],
      problemSolving: [
        {
          type: "Induction",
          accent: "accent-forest",
          title: "Prove a sum formula",
          question: "Prove $1+2+\\cdots+n=\\frac{n(n+1)}2$.",
          method: "Base case, hypothesis, then add the new term.",
          steps: ["Base n=1: both sides equal 1.", "Assume $1+\\cdots+k=\\frac{k(k+1)}2$.", "For k+1, write $1+\\cdots+k+(k+1)$.", "Replace old sum by the hypothesis.", "Simplify to $\\frac{(k+1)(k+2)}2$."],
          remember: "For sums, the k+1 case is old sum plus one new term."
        },
        {
          type: "Recurrence",
          accent: "accent-navy",
          title: "Solve a second-order recurrence",
          question: "Solve $a_n=5a_{n-1}-6a_{n-2}$.",
          method: "Use the characteristic equation.",
          steps: ["Write $r^2-5r+6=0$.", "Factor: $(r-2)(r-3)=0$.", "Roots are 2 and 3.", "General form: $a_n=c_1 2^n+c_2 3^n$.", "Use initial values if they are given."],
          remember: "No initial values means you stop at the general form."
        },
        {
          type: "Strong induction",
          accent: "accent-forest",
          title: "Recognize when strong induction is needed",
          question: "Why is strong induction natural for proving every amount $n\\ge12$ can be made from 4- and 5-unit stamps?",
          method: "The next amount may come from subtracting 4 or 5, so you need earlier cases.",
          steps: ["Check base cases: 12, 13, 14, 15.", "Assume every amount from 12 through k can be made.", "For $k+1\\ge16$, the amount $k+1-4$ is at least 12.", "By the strong hypothesis, $k+1-4$ can be made.", "Add one 4-unit stamp to make $k+1$."],
          remember: "Strong induction lets you use any earlier proven case, not just the immediately previous one."
        }
      ],
      examples: [
        {
          level: "Easy",
          title: "Base Case Check",
          question: "What is the base case for proving \\(n! > 2^n\\) for all integers \\(n \\ge 4\\)?",
          solution: [
            "The problem specifies that the statement is for all integers \\(n \\ge 4\\).",
            "Therefore, the very first domino is \\(n = 4\\), not 1.",
            "Plug in 4: Left side is \\(4! = 24\\). Right side is \\(2^4 = 16\\).",
            "Since 24 > 16, the base case holds."
          ],
          takeaway: "The base case is not always n=1. Read the bounds in the question."
        },
        {
          level: "Medium",
          title: "Inductive Hypothesis Setup",
          question: "Set up the Inductive Hypothesis (IH) and the Target for proving \\(1 + 2 + ... + n = \\frac{n(n+1)}{2}\\).",
          solution: [
            "Inductive Hypothesis: Assume true for \\(n = k\\).",
            "IH: \\(1 + 2 + ... + k = \\frac{k(k+1)}{2}\\).",
            "Target: We must prove it is true for \\(n = k+1\\). Plug \\((k+1)\\) into the formula everywhere.",
            "Target: \\(1 + 2 + ... + k + (k+1) = \\frac{(k+1)((k+1)+1)}{2} = \\frac{(k+1)(k+2)}{2}\\)."
          ],
          takeaway: "Before doing algebra, strictly write down your IH and what your final Target looks like. It gives you a map."
        },
        {
          level: "Exam",
          title: "Solving a Recurrence Relation",
          question: "Solve \\(a_n = 3a_{n-1} + 4a_{n-2}\\) with \\(a_0 = 2, a_1 = 3\\).",
          solution: [
            "1. Characteristic equation: \\(r^2 - 3r - 4 = 0\\).",
            "2. Factor it: \\((r - 4)(r + 1) = 0\\). Roots are \\(r_1 = 4, r_2 = -1\\).",
            "3. General form: \\(a_n = c_1(4)^n + c_2(-1)^n\\).",
            "4. Use initial conditions:",
            "For n=0: \\(a_0 = c_1(4)^0 + c_2(-1)^0 \\implies c_1 + c_2 = 2\\).",
            "For n=1: \\(a_1 = c_1(4)^1 + c_2(-1)^1 \\implies 4c_1 - c_2 = 3\\).",
            "5. Solve the system: Add the two equations: \\(5c_1 = 5 \\implies c_1 = 1\\).",
            "If \\(c_1 = 1\\), then \\(1 + c_2 = 2 \\implies c_2 = 1\\).",
            "6. Final Answer: \\(a_n = 1(4)^n + 1(-1)^n = 4^n + (-1)^n\\)."
          ],
          takeaway: "Recurrence relations are just 3 steps: Find roots, write general form, solve system of equations."
        },
        {
          level: "Exam",
          title: "Repeated Roots Trap",
          question: "What is the general form for \\(a_n = 6a_{n-1} - 9a_{n-2}\\)?",
          solution: [
            "Characteristic equation: \\(r^2 - 6r + 9 = 0\\).",
            "Factor: \\((r - 3)^2 = 0\\).",
            "The root is 3, but it has multiplicity 2 (repeated root).",
            "The standard form \\(c_1(3)^n + c_2(3)^n\\) collapses into just one term, which is useless.",
            "Instead, we MUST multiply the second term by n.",
            "Answer: \\(a_n = c_1(3)^n + c_2 \\cdot n(3)^n\\)."
          ],
          takeaway: "If the roots are identical, don't forget the extra 'n' on the second term!"
        },
        {
          level: "Exam",
          title: "Geometric sum by induction",
          question: "Prove that \\(1+2+2^2+\\cdots+2^n=2^{n+1}-1\\) for all \\(n\\ge0\\).",
          solution: [
            "Base case n=0: the left side is 1 and the right side is \\(2^{1}-1=1\\).",
            "Inductive hypothesis: assume \\(1+2+\\cdots+2^k=2^{k+1}-1\\).",
            "For k+1, split the new sum into the old sum plus the new term: \\(1+2+\\cdots+2^k+2^{k+1}\\).",
            "Replace the old sum using the hypothesis: \\((2^{k+1}-1)+2^{k+1}\\).",
            "Combine like terms: \\(2\\cdot2^{k+1}-1=2^{k+2}-1\\).",
            "That matches the formula with \\(n=k+1\\), so the induction is complete."
          ],
          takeaway: "For summation induction, isolate the old sum and replace it with the hypothesis."
        },
        {
          level: "Medium",
          title: "Build a recurrence from strings",
          question: "Let \\(a_n\\) be the number of binary strings of length n ending in 0. Find a simple recurrence.",
          solution: [
            "A length n string ending in 0 is made by taking any binary string of length n-1 and adding 0 at the end.",
            "There are \\(2^{n-1}\\) binary strings of length n-1.",
            "So a direct formula is \\(a_n=2^{n-1}\\).",
            "As a recurrence, each time n increases by 1, the count doubles.",
            "Therefore \\(a_n=2a_{n-1}\\) for \\(n\\ge2\\), with \\(a_1=1\\)."
          ],
          takeaway: "A recurrence should explain how the next size is built from the previous size."
        }
      ],
      memoryQuiz: [
        ["What are the two required steps for Mathematical Induction?", "1. The Base Case (n=1). 2. The Inductive Step (Assume true for n=k, prove for n=k+1)."],
        ["What is the base case?", "The first value where the statement is checked directly, often n=0 or n=1."],
        ["What is the inductive hypothesis?", "The assumption that the statement is true for an arbitrary value k."],
        ["What is the inductive step?", "The proof that truth at k forces truth at k+1."],
        ["When is strong induction useful?", "When the next case depends on several earlier cases, not only the immediately previous one."],
        ["What is a recurrence relation?", "A rule that defines a sequence using earlier terms."],
        ["What is the characteristic equation for \\(a_n=pa_{n-1}+qa_{n-2}\\)?", "\\(r^2-pr-q=0\\), then solve for roots r."],
        ["What happens with a repeated recurrence root r?", "Use \\(c_1r^n+c_2nr^n\\), not two identical copies of \\(r^n\\)."]
      ],
      practiceQuiz: [
        {
          q: "In an induction proof that \\(3 \\mid (4^n - 1)\\), what does the Inductive Hypothesis look like?",
          options: ["Assume \\(3 \\mid (4^{k+1} - 1)\\)", "Assume \\(4^k - 1 = 3m\\) for some integer m", "Assume \\(4^n - 1 = 3\\)", "Prove \\(4^1 - 1 = 3\\)"],
          answer: 1,
          why: "The hypothesis is assuming the statement holds for n=k. Stating '3 divides it' mathematically means setting it equal to a multiple of 3 (3m)."
        },
        {
          q: "When doing the inductive step for a summation, what is the standard algebraic move?",
          options: ["Multiply everything by k", "Take the derivative", "Write Sum(k+1) as Sum(k) plus the (k+1)-th term", "Set the sum equal to 0"],
          answer: 2,
          why: "A sum up to k+1 is just the sum up to k, plus one more piece. You replace the 'sum up to k' part with your Inductive Hypothesis formula."
        },
        {
          q: "Find the characteristic equation for \\(a_n = 2a_{n-1} + 3a_{n-2}\\).",
          options: ["\\(r^2 - 2r - 3 = 0\\)", "\\(r^2 + 2r + 3 = 0\\)", "\\(2r^2 - 3r - 1 = 0\\)", "\\(r - 2 = 3\\)"],
          answer: 0,
          why: "Move everything to one side: \\(a_n - 2a_{n-1} - 3a_{n-2} = 0\\). Replace \\(a_n\\) with \\(r^2\\), \\(a_{n-1}\\) with \\(r\\), and \\(a_{n-2}\\) with 1."
        },
        {
          q: "If a recurrence relation has characteristic roots \\(r_1 = 2\\) and \\(r_2 = 2\\), what is the correct form for the general solution?",
          options: ["\\(a_n = c_1(2)^n + c_2(2)^n\\)", "\\(a_n = c_1(2)^n + c_2 n(2)^n\\)", "\\(a_n = c_1(2)^n + c_2(4)^n\\)", "\\(a_n = c_1 n(2)^n + c_2 n^2(2)^n\\)"],
          answer: 1,
          why: "Because it is a repeated root, the second term must be multiplied by n to ensure the solutions are linearly independent."
        },
        {
          q: "In strong induction, what are you allowed to assume when proving the case \\(k+1\\)?",
          options: ["Only the case k", "All earlier cases up to k", "Only the base case", "The conclusion for every future case"],
          answer: 1,
          why: "Strong induction lets you assume all established earlier cases, which is useful when the next object can depend on more than one previous object."
        }
      ],
      readiness: [
        "You can write base case, hypothesis, and inductive step cleanly.",
        "You can use a known formula after identifying parameters.",
        "You can create simple recurrence relations with initial conditions."
      ]
    },
    {
      id: "binomial-polynomials",
      title: "Binomial Theorem & Polynomials",
      short: "Binomial",
      examWeight: "Appears in 2023-03, 2023-05, 2024-05, 2024-09",
      goal: "Expand binomials, use Pascal's triangle, and prove polynomial root statements.",
      lesson: [
        "**What is the Binomial Theorem?** It's a fast way to expand expressions like \\((x + y)^n\\) without multiplying it out by hand.",
        "**Pascal's Triangle:** The coefficients of \\((x + y)^n\\) are exactly the numbers in the n-th row of Pascal's triangle. Row 0 is just 1. Row 1 is 1, 1. Row 2 is 1, 2, 1, etc.",
        "**Combinations as Coefficients:** The number in the n-th row and k-th position of Pascal's triangle is exactly \\(\\binom{n}{k}\\). So, the coefficient of \\(x^{n-k} y^k\\) is \\(\\binom{n}{k}\\).",
        "**The General Term Formula:** Any single term in the expansion of \\((a + b)^n\\) looks like this: \\(\\binom{n}{k} a^{n-k} b^k\\). This is the most important formula to memorize for this topic.",
        "**Polynomial Roots (Factor Theorem):** If \\(P(c) = 0\\), then \\((x - c)\\) is a factor of the polynomial \\(P(x)\\).",
        "**Polynomial Division:** Just like long division with numbers, you can divide polynomials to find quotients and remainders.",
        "**Remainder Theorem:** If you divide a polynomial \\(P(x)\\) by \\((x - c)\\), the remainder is simply the number \\(P(c)\\)."
      ],
      visual: {
        type: "pascal",
        title: "Pascal triangle coefficients",
        caption: "The row 1 3 3 1 controls every cubic binomial expansion."
      },
      methods: [
        "**Finding a Specific Coefficient:** To find the coefficient of \\(x^5 y^2\\) in \\((x + y)^7\\): 1. Use the general term \\(\\binom{7}{k} x^{7-k} y^k\\). 2. We need \\(k=2\\). 3. The coefficient is \\(\\binom{7}{2}\\).",
        "**Handling inner constants:** To find the coefficient of \\(x^3\\) in \\((2x - 3)^5\\). 1. The term is \\(\\binom{5}{k}(2x)^{5-k}(-3)^k\\). 2. We want \\(x^3\\), so \\(5-k = 3 \\implies k=2\\). 3. Plug in k=2: \\(\\binom{5}{2}(2x)^3(-3)^2\\). 4. Separate numbers from variables: \\(10 \\times 8x^3 \\times 9 = 720x^3\\). The coefficient is 720.",
        "**Evaluating Sums:** To find \\(\\sum_{k=0}^n \\binom{n}{k}\\). Recognize this is the binomial theorem for \\((1 + 1)^n\\). So the sum is \\(2^n\\).",
        "**Finding a Remainder quickly:** To find the remainder when \\(x^{100} - 5x + 2\\) is divided by \\(x - 1\\). Don't do long division! Use the Remainder Theorem: plug in \\(x = 1\\). \\(1^{100} - 5(1) + 2 = 1 - 5 + 2 = -2\\)."
      ],
      beginnerGuide: [
        {
          title: "Binomial theorem is organized expansion",
          problem: "Expand powers like \\((a+b)^n\\) without multiplying forever.",
          meaning: "The binomial theorem tells you the coefficients and powers that appear when two terms are raised to a power.",
          method: "Use Pascal's triangle or \\(\\binom nk\\) for coefficients.",
          steps: ["Find the row for n.", "Write powers of the first term going down.", "Write powers of the second term going up.", "Attach the coefficients."],
          tip: "The powers in each term always add up to n."
        },
        {
          title: "Specific coefficient questions use k",
          problem: "Find one term without expanding the whole expression.",
          meaning: "Each binomial term corresponds to one value of k.",
          method: "Write the general term, then solve for k using the requested power.",
          steps: ["Write \\(\\binom nk a^{n-k}b^k\\).", "Substitute the actual a and b.", "Match the requested exponent.", "Simplify only that term."],
          tip: "Do not expand the whole polynomial when the question asks for one coefficient."
        },
        {
          title: "Remainder theorem is substitution",
          problem: "Find the remainder after division by \\(x-c\\).",
          meaning: "When dividing \\(P(x)\\) by \\(x-c\\), the remainder is the single number \\(P(c)\\).",
          method: "Identify c, plug c into the polynomial, and simplify.",
          steps: ["Rewrite the divisor as \\(x-c\\).", "Find c.", "Compute \\(P(c)\\).", "That value is the remainder."],
          tip: "For \\(x+3\\), c is -3."
        }
      ],
      formulaBank: [
        { tag: "Binomial", accent: "accent-forest", name: "Binomial theorem", formula: "$(a+b)^n=\\sum_{k=0}^n\\binom nk a^{n-k}b^k$", why: "This expands any binomial power." },
        { tag: "Coefficients", accent: "accent-navy", name: "Pascal identity", formula: "$\\binom nk=\\binom{n-1}{k-1}+\\binom{n-1}{k}$", why: "Each Pascal entry is the sum of the two above it." },
        { tag: "Sum", accent: "accent-copper", name: "Row sum", formula: "$\\sum_{k=0}^n\\binom nk=2^n$", why: "Set a=1 and b=1 in the binomial theorem." },
        { tag: "Polynomial", accent: "accent-forest", name: "Remainder theorem", formula: "Remainder of $P(x)$ divided by $x-c$ is $P(c)$", why: "Substitution replaces long division when only the remainder is needed." },
        { tag: "Polynomial", accent: "accent-navy", name: "Factor theorem", formula: "$x-c$ is a factor iff $P(c)=0$", why: "Zero remainder means exact divisibility by $x-c$." },
        { tag: "Identity", accent: "accent-copper", name: "Vandermonde identity", formula: "$\\sum_k\\binom rk\\binom{s}{n-k}=\\binom{r+s}{n}$", why: "Choose n objects from two groups by summing over how many came from the first group." },
        { tag: "Generating functions", accent: "accent-forest", name: "Coefficient viewpoint", formula: "Coefficient of $x^k$ counts ways to make total k", why: "Generating functions turn counting choices into polynomial multiplication." }
      ],
      problemSolving: [
        {
          type: "Coefficient",
          accent: "accent-navy",
          title: "Find one binomial coefficient",
          question: "Find the coefficient of $x^3$ in $(2x-1)^5$.",
          method: "Use the general term and match the power of x.",
          steps: ["General term: $\\binom5k(2x)^{5-k}(-1)^k$.", "Need $x^3$, so $5-k=3$ and $k=2$.", "Substitute k=2: $\\binom52(2x)^3(-1)^2$.", "Compute coefficient: $10\\cdot8=80$."],
          remember: "Match the exponent first, then simplify the coefficient."
        },
        {
          type: "Polynomial",
          accent: "accent-forest",
          title: "Use factor theorem",
          question: "Check whether $x+2$ is a factor of $P(x)=x^3+2x^2-1$.",
          method: "For $x+2=x-(-2)$, plug in -2.",
          steps: ["Compute $P(-2)$.", "$(-2)^3+2(-2)^2-1=-8+8-1=-1$.", "The value is not 0.", "Therefore $x+2$ is not a factor."],
          remember: "For $x+a$, plug in $-a$."
        },
        {
          type: "Generating function",
          accent: "accent-copper",
          title: "Read a coefficient as a count",
          question: "What does the coefficient of $x^4$ in $(1+x+x^2)^2$ count?",
          method: "Each factor represents one choice from 0, 1, or 2. The exponent is the total.",
          steps: ["There are two identical factors, so there are two choices.", "Each choice can contribute 0, 1, or 2.", "The coefficient of $x^4$ counts ways for the two contributions to sum to 4.", "Only $2+2=4$ works.", "So the coefficient is 1."],
          remember: "In a generating function, exponents track totals and coefficients track how many ways."
        }
      ],
      examples: [
        {
          level: "Easy",
          title: "Pascal's Triangle Row",
          question: "Expand \\((x + y)^3\\) using the Binomial Theorem.",
          solution: [
            "The power is 3, so we use row 3 of Pascal's triangle: 1, 3, 3, 1.",
            "The powers of x start at 3 and go down: \\(x^3, x^2, x^1, x^0\\).",
            "The powers of y start at 0 and go up: \\(y^0, y^1, y^2, y^3\\).",
            "Combine them: \\(1(x^3)(1) + 3(x^2)(y^1) + 3(x^1)(y^2) + 1(1)(y^3)\\).",
            "Result: \\(x^3 + 3x^2y + 3xy^2 + y^3\\)."
          ],
          takeaway: "Pascal's triangle gives the coefficients. The first term's power goes down, the second term's power goes up."
        },
        {
          level: "Medium",
          title: "Finding a Specific Term",
          question: "Find the coefficient of \\(x^4\\) in the expansion of \\((x - 2)^6\\).",
          solution: [
            "Write the general term formula: \\(\\binom{n}{k} a^{n-k} b^k\\).",
            "Here, \\(n=6\\), \\(a=x\\), and \\(b=-2\\).",
            "General term: \\(\\binom{6}{k} x^{6-k} (-2)^k\\).",
            "We want the \\(x^4\\) term, so we need \\(6-k = 4\\), which means \\(k=2\\).",
            "Plug \\(k=2\\) into the formula: \\(\\binom{6}{2} x^4 (-2)^2\\).",
            "Calculate the pieces: \\(\\binom{6}{2} = 15\\), and \\((-2)^2 = 4\\).",
            "Multiply: \\(15 \\times x^4 \\times 4 = 60x^4\\).",
            "The coefficient is 60."
          ],
          takeaway: "Always write the general term with 'k' first. Then solve for 'k' based on the power of x you need."
        },
        {
          level: "Exam",
          title: "Remainder Theorem",
          question: "Find the remainder when \\(P(x) = x^4 - 3x^3 + 2x - 5\\) is divided by \\(x - 2\\).",
          solution: [
            "By the Remainder Theorem, dividing by \\((x - c)\\) gives a remainder of \\(P(c)\\).",
            "Here, we are dividing by \\(x - 2\\), so \\(c = 2\\).",
            "Calculate \\(P(2)\\).",
            "\\(P(2) = (2)^4 - 3(2)^3 + 2(2) - 5\\)",
            "\\(= 16 - 3(8) + 4 - 5\\)",
            "\\(= 16 - 24 + 4 - 5 = -9\\).",
            "The remainder is -9."
          ],
          takeaway: "The Remainder Theorem is a massive shortcut. Never use long division if you only need the remainder."
        },
        {
          level: "Exam",
          title: "Expand a signed cubic",
          question: "Expand \\((-5x+3y)^3\\).",
          solution: [
            "Use the cubic pattern \\((a+b)^3=a^3+3a^2b+3ab^2+b^3\\).",
            "Let \\(a=-5x\\) and \\(b=3y\\).",
            "\\(a^3=(-5x)^3=-125x^3\\).",
            "\\(3a^2b=3(25x^2)(3y)=225x^2y\\).",
            "\\(3ab^2=3(-5x)(9y^2)=-135xy^2\\).",
            "\\(b^3=(3y)^3=27y^3\\).",
            "So the expansion is \\(-125x^3+225x^2y-135xy^2+27y^3\\)."
          ],
          takeaway: "Put the negative sign inside the powered term; odd powers keep it negative."
        },
        {
          level: "Medium",
          title: "Factor Theorem check",
          question: "Is \\(x-3\\) a factor of \\(P(x)=x^3-4x^2+x+6\\)?",
          solution: [
            "By the Factor Theorem, \\(x-3\\) is a factor exactly when \\(P(3)=0\\).",
            "Compute \\(P(3)=3^3-4\\cdot3^2+3+6\\).",
            "That is \\(27-36+3+6=0\\).",
            "Since the value is 0, the remainder is 0.",
            "Therefore \\(x-3\\) is a factor."
          ],
          takeaway: "A proposed linear factor is tested by substitution, not by expanding long division."
        },
        {
          level: "Exam",
          title: "Binomial row sum",
          question: "Evaluate \\(\\sum_{k=0}^{8}\\binom{8}{k}\\) without listing all terms.",
          solution: [
            "Recognize the binomial theorem: \\((a+b)^n=\\sum_{k=0}^n\\binom nk a^{n-k}b^k\\).",
            "To get just the coefficients, set \\(a=1\\) and \\(b=1\\).",
            "Then \\((1+1)^8=\\sum_{k=0}^{8}\\binom{8}{k}\\).",
            "So the sum is \\(2^8=256\\)."
          ],
          takeaway: "A whole Pascal row sums to \\(2^n\\)."
        }
      ],
      memoryQuiz: [
        ["What is the general term in the expansion of \\((a+b)^n\\)?", "\\(\\binom{n}{k} a^{n-k} b^k\\)."],
        ["What are binomial coefficients?", "The numbers \\(\\binom nk\\), which count how many ways each term appears in an expansion."],
        ["What is Pascal's identity?", "\\(\\binom nk=\\binom{n-1}{k-1}+\\binom{n-1}{k}\\)."],
        ["What is the row for \\((a+b)^3\\)?", "1, 3, 3, 1, so \\(a^3+3a^2b+3ab^2+b^3\\)."],
        ["How do you find a specific coefficient?", "Write the general term, match the requested exponent, solve for k, then simplify."],
        ["What does the Remainder Theorem say?", "The remainder after dividing \\(P(x)\\) by \\(x-c\\) is \\(P(c)\\)."],
        ["What does the Factor Theorem say?", "\\(x-c\\) is a factor of \\(P(x)\\) exactly when \\(P(c)=0\\)."],
        ["What does discriminant zero mean for a quadratic?", "The two roots collapse into one repeated root."]
      ],
      practiceQuiz: [
        {
          q: "What is the coefficient of \\(a^2 b^3\\) in \\((a+b)^5\\)?",
          options: ["5", "10", "15", "20"],
          answer: 1,
          why: "Using the formula, the coefficient is \\(\\binom{5}{3}\\) (or \\(\\binom{5}{2}\\), they are equal). \\(\\binom{5}{3} = \\frac{5!}{3!2!} = 10\\)."
        },
        {
          q: "What is the sum \\(\\binom{6}{0} + \\binom{6}{1} + ... + \\binom{6}{6}\\)?",
          options: ["36", "64", "128", "6"],
          answer: 1,
          why: "The sum of combinations across a row 'n' is always \\(2^n\\). Here n=6, so \\(2^6 = 64\\)."
        },
        {
          q: "If \\(P(x)\\) is divided by \\(x+3\\), what expression gives the remainder?",
          options: ["\\(P(x)\\)", "\\(P(3)\\)", "\\(P(-3)\\)", "\\(-P(3)\\)"],
          answer: 2,
          why: "The Remainder Theorem uses \\((x-c)\\). So \\((x+3)\\) is treated as \\((x - (-3))\\). You must plug in -3."
        },
        {
          q: "Evaluate \\(P(1)\\) if \\(P(x) = (x-1)Q(x) + 7\\).",
          options: ["0", "1", "Q(1)", "7"],
          answer: 3,
          why: "Plug in 1: \\(P(1) = (1-1)Q(1) + 7 = 0 \\times Q(1) + 7 = 7\\). This is why the Remainder Theorem works!"
        },
        {
          q: "What is the coefficient of \\(x^2y^3\\) in \\((2x-y)^5\\)?",
          options: ["-40", "40", "-80", "80"],
          answer: 0,
          why: "Use \\(\\binom 53(2x)^2(-y)^3=10\\cdot4x^2\\cdot(-y^3)=-40x^2y^3\\)."
        },
        {
          q: "If \\(P(4)=0\\), which statement is guaranteed?",
          options: ["\\(x+4\\) is a factor", "\\(x-4\\) is a factor", "The degree is 4", "The polynomial is zero everywhere"],
          answer: 1,
          why: "By the Factor Theorem, \\(P(c)=0\\) means \\(x-c\\) is a factor. Here c=4, so the factor is \\(x-4\\)."
        }
      ],
      readiness: [
        "You can expand any cubic binomial with signs.",
        "You can write Pascal's first five rows.",
        "You can prove a proposed root by substitution."
      ]
    },
    {
      id: "algorithms-growth",
      title: "Algorithms, Code Tracing & Big-O",
      short: "Algorithms",
      examWeight: "Appears in 2026-03",
      goal: "Trace small Python-style logic functions, understand quantifier code, and estimate growth rates.",
      lesson: [
        "**What is an Algorithm?** A step-by-step set of instructions to solve a problem. In discrete math, we usually trace loops or analyze how fast they run.",
        "**Code Tracing:** Manually acting like a computer. Keep a table of variables (x, y, i, j) and update their values exactly as the code executes, step-by-step. Do NOT guess the final answer.",
        "**Big-O Notation (\\(O(N)\\)):** A way to describe the 'worst-case' running time of an algorithm as the input size (N) gets massive. We only care about the dominant term and ignore constants. \\(3N^2 + 5N + 1000\\) is just \\(O(N^2)\\).",
        "**Common Big-O Classes (Fastest to Slowest):** \\(O(1)\\) (Constant), \\(O(\\log N)\\) (Logarithmic), \\(O(N)\\) (Linear), \\(O(N \\log N)\\), \\(O(N^2)\\) (Quadratic), \\(O(2^N)\\) (Exponential).",
        "**Analyzing Loops for Big-O:** A single loop from 1 to N takes \\(O(N)\\) time. Two nested loops from 1 to N take \\(O(N \\times N) = O(N^2)\\) time. If a loop cuts the problem in half every step (like binary search), it takes \\(O(\\log N)\\) time.",
        "**Quantifiers as Code:** A `for_all` function behaves like \\(\\forall\\): it returns false as soon as it finds a counterexample. An `exists` function behaves like \\(\\exists\\): it returns true as soon as it finds a witness.",
        "**Empty Inputs are Exam Traps:** For an empty list, `for_all` returns true because no counterexample was found, while `exists` returns false because no witness was found. This matches vacuous truth in logic."
      ],
      visual: {
        type: "code-trace",
        title: "Quantifiers as loops",
        caption: "Universal search stops at a counterexample. Existential search stops at a witness."
      },
      methods: [
        "**Tracing nested loops:** If the outer loop runs \\(i\\) from 1 to 3, and the inner loop runs \\(j\\) from 1 to \\(i\\). Draw a table. Row 1: i=1, j=1. Row 2: i=2, j=1. Row 3: i=2, j=2. Row 4: i=3, j=1, etc. Update the sum/counter on every single row.",
        "**Simplifying Big-O:** Rule 1: Drop lower order terms. \\(O(N^3 + N)\\) becomes \\(O(N^3)\\). Rule 2: Drop constant multipliers. \\(O(50N^2)\\) becomes \\(O(N^2)\\).",
        "**Identifying Logarithmic Time:** Look for loops where the counter MULTIPLIES or DIVIDES by a constant. `for(i=1; i<N; i=i*2)` takes \\(O(\\log N)\\) steps because it doubles, reaching N very quickly."
      ],
      beginnerGuide: [
        {
          title: "Trace code like a table",
          problem: "Find what a small loop returns without guessing.",
          meaning: "Code tracing means you pretend to be the computer and update variables exactly one line at a time.",
          method: "Make columns for loop variables and changing variables.",
          steps: ["Write the initial values.", "Run the first loop iteration.", "Update every changed variable.", "Continue until the loop stops."],
          tip: "If a variable changes, it deserves a column in your trace table."
        },
        {
          title: "Quantifiers behave like search loops",
          problem: "Connect \\(\\forall\\) and \\(\\exists\\) to code.",
          meaning: "`for_all` searches for a counterexample. `exists` searches for a witness.",
          method: "Stop as soon as the answer is forced.",
          steps: ["For `for_all`, one false item returns False.", "If no false item is found, return True.", "For `exists`, one true item returns True.", "If no true item is found, return False."],
          tip: "Empty list: `for_all` is True, `exists` is False."
        },
        {
          title: "Big-O keeps only growth",
          problem: "Simplify a running-time expression.",
          meaning: "Big-O describes what dominates when n becomes large. Constants and smaller terms stop mattering.",
          method: "Find the fastest-growing term and drop the rest.",
          steps: ["Compare powers of n.", "Remember logs grow slower than powers.", "Drop lower-order terms.", "Drop constant multipliers."],
          tip: "\\(5n^2+100n+7\\) is \\(O(n^2)\\), not \\(O(5n^2)\\)."
        }
      ],
      formulaBank: [
        { tag: "Growth", accent: "accent-forest", name: "Drop constants", formula: "$O(7n^2)=O(n^2)$", why: "Big-O tracks growth shape, not exact multiplier." },
        { tag: "Growth", accent: "accent-forest", name: "Drop lower terms", formula: "$O(n^3+n^2+n)=O(n^3)$", why: "The largest growth term dominates for large n." },
        { tag: "Loops", accent: "accent-navy", name: "Nested loops", formula: "n outer iterations times n inner iterations gives $O(n^2)$", why: "Nested independent loops multiply." },
        { tag: "Loops", accent: "accent-copper", name: "Halving/doubling loop", formula: "$i=i\\cdot2$ or $n=n/2$ gives $O(\\log n)$", why: "The value reaches the limit by repeated multiplication/division." },
        { tag: "Logic code", accent: "accent-navy", name: "Empty quantifiers", formula: "$\\forall$ over empty is true; $\\exists$ over empty is false", why: "No counterexample exists for universal, but no witness exists for existential." },
        { tag: "Invariant", accent: "accent-forest", name: "Loop invariant proof", formula: "True before loop + preserved by each iteration + useful at exit", why: "This is how you prove a loop always computes what it claims." },
        { tag: "Search", accent: "accent-copper", name: "Binary search", formula: "$O(\\log n)$", why: "Each comparison cuts the remaining search space roughly in half." }
      ],
      problemSolving: [
        {
          type: "Trace",
          accent: "accent-copper",
          title: "Trace a nested loop",
          question: "What is S after `for i=1..3`, `for j=1..i`, `S=S+1`?",
          method: "Count the inner-loop runs.",
          steps: ["For i=1, inner loop runs 1 time.", "For i=2, it runs 2 times.", "For i=3, it runs 3 times.", "Total updates: $1+2+3=6$.", "If S starts at 0, final S is 6."],
          remember: "For triangular loops, add the row lengths."
        },
        {
          type: "Big-O",
          accent: "accent-forest",
          title: "Simplify a growth expression",
          question: "Find Big-O of $4n^2\\log n+9n^3+1000$.",
          method: "Compare dominant terms.",
          steps: ["Ignore the constant 1000 for large n.", "Compare $n^2\\log n$ and $n^3$.", "$n^3$ grows faster.", "Drop coefficient 9.", "Answer: $O(n^3)$."],
          remember: "Powers of n beat logarithms attached to smaller powers."
        },
        {
          type: "Invariant",
          accent: "accent-navy",
          title: "Use a loop invariant",
          question: "A loop adds array entries one by one into S. What invariant proves S is correct?",
          method: "Say exactly what S means after each number of iterations.",
          steps: ["After 0 iterations, S is the sum of no entries, so S=0.", "After k iterations, claim S equals the sum of the first k entries.", "The next iteration adds entry k+1, so S becomes the sum of the first k+1 entries.", "When the loop ends after n iterations, S is the sum of all n entries."],
          remember: "A good invariant describes the variable in the middle of the loop, not only at the end."
        }
      ],
      examples: [
        {
          level: "Easy",
          title: "Simplifying Big-O",
          question: "Find the Big-O complexity of an algorithm that takes \\(f(N) = 4N^3 + 10N^2 + 5000\\) steps.",
          solution: [
            "Step 1: Identify the dominant term (the one that grows the fastest as N gets huge). That is \\(4N^3\\).",
            "Step 2: Drop the lower order terms (\\(10N^2\\) and 5000). We are left with \\(O(4N^3)\\).",
            "Step 3: Drop the constant coefficient (4).",
            "Final Answer: \\(O(N^3)\\)."
          ],
          takeaway: "Big-O only cares about the largest exponent. Ignore everything else."
        },
        {
          level: "Medium",
          title: "Loop Analysis",
          question: "What is the Big-O complexity of two nested loops, where the outer loop runs N times, and the inner loop runs N times?",
          solution: [
            "The outer loop runs \\(N\\) times.",
            "For EVERY iteration of the outer loop, the inner loop runs \\(N\\) times.",
            "Total operations = \\(N \\times N = N^2\\).",
            "Final Answer: \\(O(N^2)\\)."
          ],
          takeaway: "Nested loops multiply their complexities."
        },
        {
          level: "Exam",
          title: "Code Tracing",
          question: "Trace this pseudo-code. What is the final value of S?\nS = 0\nfor i = 1 to 3:\n  for j = 1 to i:\n    S = S + j",
          solution: [
            "Create a table.",
            "i=1, j=1: S = 0 + 1 = 1",
            "i=2, j=1: S = 1 + 1 = 2",
            "i=2, j=2: S = 2 + 2 = 4",
            "i=3, j=1: S = 4 + 1 = 5",
            "i=3, j=2: S = 5 + 2 = 7",
            "i=3, j=3: S = 7 + 3 = 10",
            "The loop finishes. The final value of S is 10."
          ],
          takeaway: "Never guess the output of a nested loop. Write down every single iteration step-by-step."
        },
        {
          level: "Exam",
          title: "Universal loop stops early",
          question: "Trace `for_all([4, 7, 8], is_even)`. What value is returned?",
          solution: ["Check 4: `is_even(4)` is true, so the loop continues.", "Check 7: `is_even(7)` is false.", "A universal check needs every item to pass, so one failure is enough.", "The function returns False immediately at 7."],
          takeaway: "Universal checks stop at the first counterexample."
        },
        {
          level: "Exam",
          title: "Empty domain quantifiers",
          question: "What do `for_all([], is_even)` and `exists([], is_even)` return?",
          solution: ["`for_all` finds no counterexample, so it returns True.", "`exists` finds no witness, so it returns False.", "This matches logic: universal over empty set is vacuously true; existential over empty set is false."],
          takeaway: "Empty domains are a common trap."
        },
        {
          level: "Exam",
          title: "Big-O dominant term",
          question: "Find tight Big-O for $(n\\log n+1)^2+(\\log n+1)(n^2+1)$.",
          solution: ["First part has dominant term $n^2(\\log n)^2$.", "Second part has dominant term $n^2\\log n$.", "$n^2(\\log n)^2$ grows faster.", "Tight estimate: $O(n^2(\\log n)^2)$."],
          takeaway: "Compare dominant terms after expansion."
        }
      ],
      memoryQuiz: [
        ["What does Big-O notation describe?", "The upper bound (worst-case scenario) of an algorithm's growth rate as the input size approaches infinity."],
        ["What is \\(O(1)\\)?", "Constant time: the work does not grow with input size."],
        ["What is \\(O(n)\\)?", "Linear time: roughly one pass over n items."],
        ["What is \\(O(n^2)\\)?", "Quadratic time: often two nested loops over n items."],
        ["What should you keep in a Big-O expression?", "Only the dominant growth term; drop constants and lower-order terms."],
        ["What does `for_all` return on an empty list?", "True, because it finds no counterexample."],
        ["What does `exists` return on an empty list?", "False, because it finds no witness."],
        ["How do sequential loops combine?", "They add, and Big-O then drops constants: three N-loops are still \\(O(n)\\)."]
      ],
      practiceQuiz: [
        {
          q: "What is the Big-O time complexity of an algorithm whose step count is \\(T(N) = 100N \\log N + 5N^2\\)?",
          options: ["\\(O(N)\\)", "\\(O(N \\log N)\\)", "\\(O(N^2)\\)", "\\(O(N^3)\\)", "\\(O(1)\\)"],
          answer: 2,
          why: "You must pick the dominant term. \\(N^2\\) grows much faster than \\(N \\log N\\). We drop the \\(N \\log N\\) term and the constant 5, leaving \\(O(N^2)\\)."
        },
        {
          q: "If an algorithm has three sequential (not nested) loops that each run N times, what is the complexity?",
          options: ["\\(O(N)\\)", "\\(O(3N)\\)", "\\(O(N^3)\\)", "\\(O(1)\\)"],
          answer: 0,
          why: "Sequential loops add up: \\(N + N + N = 3N\\). We drop the constant 3, resulting in \\(O(N)\\)."
        },
        {
          q: "What is the Big-O complexity of looking up an item in an array using an index (e.g. `array[5]`)?",
          options: ["\\(O(1)\\)", "\\(O(\\log N)\\)", "\\(O(N)\\)", "\\(O(N^2)\\)"],
          answer: 0,
          why: "Accessing an array by index takes constant time. It does not depend on the size of the array. This is \\(O(1)\\)."
        },
        {
          q: "What does `exists([2, 4, 9], lambda x: x > 8)` return?",
          options: ["True", "False", "9", "Error"],
          answer: 0,
          why: "The value 9 is a witness because it is greater than 8, so an existential check returns True."
        },
        {
          q: "What is the dominant term of \\(n^2\\log n+n^2(\\log n)^2+n\\)?",
          options: ["\\(n\\)", "\\(n^2\\log n\\)", "\\(n^2(\\log n)^2\\)", "\\(\\log n\\)"],
          answer: 2,
          why: "The two squared-n terms dominate n, and \\((\\log n)^2\\) grows faster than \\(\\log n\\)."
        }
      ],
      readiness: [
        "You can trace for_all and exists including empty lists.",
        "You can explain one-to-one code using set length.",
        "You can identify dominant Big-O terms."
      ]
    },
    {
      id: "discrete-probability",
      title: "Discrete Probability",
      short: "Probability",
      examWeight: "Common in broad discrete-math courses",
      goal: "Understand sample spaces, events, conditional probability, independence, random variables, and expected value using small finite examples.",
      lesson: [
        "**Probability starts with the sample space:** The sample space S is the list of all possible outcomes. An event A is a subset of S. If the outcomes are equally likely, probability is favorable outcomes divided by total outcomes.",
        "**Events behave like sets:** \\(A\\cup B\\) means A or B happens. \\(A\\cap B\\) means both happen. \\(A^c\\) means A does not happen. This is why set laws and De Morgan laws reappear in probability.",
        "**Addition rule:** To find \\(P(A\\cup B)\\), add \\(P(A)\\) and \\(P(B)\\), then subtract the overlap \\(P(A\\cap B)\\). Otherwise the overlap is counted twice.",
        "**Conditional probability:** \\(P(A\\mid B)\\) means the probability of A after you already know B happened. The world shrinks to B, then you ask what part of B also has A.",
        "**Independence:** A and B are independent when learning B happened does not change the probability of A. Formally, \\(P(A\\cap B)=P(A)P(B)\\).",
        "**Random variables:** A random variable is a function from outcomes to numbers. It lets you ask about numeric results such as score, cost, number of heads, or waiting time.",
        "**Expected value:** Expected value is the long-run average, not necessarily a value you can actually get. Multiply each possible value by its probability and add."
      ],
      visual: {
        type: "venn",
        title: "Probability is set counting with weights",
        caption: "Union, intersection, complement, and conditional probability all come from event sets."
      },
      methods: [
        "**Finite probability method:** List the sample space, mark the event, count favorable outcomes, divide by total outcomes.",
        "**Conditional probability method:** First restrict to the condition B. Then count or compute how much of B also satisfies A.",
        "**Expected value method:** Make a table with values in one row and probabilities in another row. Multiply across each column and add the products."
      ],
      beginnerGuide: [
        {
          title: "Probability is a fraction of possible worlds",
          problem: "Compute probability without guessing.",
          meaning: "In a finite equally likely setting, probability is how many outcomes work divided by how many outcomes exist.",
          method: "List or count all outcomes first, then count the event.",
          steps: ["Define the sample space.", "Count total outcomes.", "Count favorable outcomes.", "Divide favorable by total."],
          tip: "Do not count the event before you know the sample space."
        },
        {
          title: "Conditional probability shrinks the world",
          problem: "Understand what 'given B' changes.",
          meaning: "Once B is known, outcomes outside B are no longer possible.",
          method: "Use B as the new denominator.",
          steps: ["Keep only outcomes where B happens.", "Inside those, count outcomes where A also happens.", "Divide both by the size or probability of B.", "Write the answer as \\(P(A\\mid B)\\)."],
          tip: "Given B means B is the new universe."
        },
        {
          title: "Expected value is weighted average",
          problem: "Find the average result of a random process.",
          meaning: "More likely values count more in the average.",
          method: "Multiply each value by its probability and add.",
          steps: ["List possible numeric values.", "Write each probability.", "Multiply value times probability.", "Add all products."],
          tip: "Expected value can be a decimal even when every real outcome is an integer."
        }
      ],
      formulaBank: [
        { tag: "Basic", accent: "accent-forest", name: "Equally likely probability", formula: "$P(A)=\\frac{|A|}{|S|}$", why: "Use when every outcome in the sample space has the same chance." },
        { tag: "Complement", accent: "accent-copper", name: "Complement rule", formula: "$P(A^c)=1-P(A)$", why: "Often it is easier to count what does not happen." },
        { tag: "Union", accent: "accent-navy", name: "Addition rule", formula: "$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$", why: "The overlap gets counted twice unless you subtract it." },
        { tag: "Conditional", accent: "accent-forest", name: "Conditional probability", formula: "$P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}$", why: "The denominator becomes the probability of the condition." },
        { tag: "Independence", accent: "accent-navy", name: "Independence test", formula: "$P(A\\cap B)=P(A)P(B)$", why: "Independent events multiply." },
        { tag: "Expected value", accent: "accent-copper", name: "Expectation", formula: "$E[X]=\\sum_x xP(X=x)$", why: "Expected value is a weighted average." }
      ],
      problemSolving: [
        {
          type: "Complement",
          accent: "accent-copper",
          title: "At least one success",
          question: "Flip a fair coin 4 times. What is the probability of at least one head?",
          method: "Use complement: at least one head = not zero heads.",
          steps: ["Total outcomes: $2^4=16$.", "The complement is all tails: TTTT.", "Probability of no heads is $1/16$.", "So probability of at least one head is $1-1/16=15/16$."],
          remember: "At least one often means 1 minus none."
        },
        {
          type: "Conditional",
          accent: "accent-forest",
          title: "Condition on a smaller sample space",
          question: "Roll a fair die. Given the result is even, what is the probability it is greater than 3?",
          method: "Keep only even outcomes first.",
          steps: ["Even outcomes are $\\{2,4,6\\}$.", "Among these, outcomes greater than 3 are $\\{4,6\\}$.", "So the probability is $2/3$.", "The original six outcomes are no longer the denominator after conditioning."],
          remember: "The word 'given' changes the denominator."
        },
        {
          type: "Expectation",
          accent: "accent-navy",
          title: "Compute expected value",
          question: "A game pays 10 dollars with probability 0.2 and 0 dollars otherwise. What is the expected payout?",
          method: "Multiply each payout by its probability.",
          steps: ["Possible payouts: 10 and 0.", "Probabilities: 0.2 and 0.8.", "$E=10(0.2)+0(0.8)$.", "So $E=2$ dollars."],
          remember: "Expected value is long-run average payout, not a guarantee."
        }
      ],
      examples: [
        {
          level: "Easy",
          title: "Card from a small deck",
          question: "A deck has cards numbered 1 through 10. What is the probability of drawing an even number?",
          solution: ["Sample space has 10 cards.", "Even cards are 2, 4, 6, 8, 10.", "There are 5 favorable outcomes.", "Probability is $5/10=1/2$."],
          takeaway: "For equally likely outcomes, count favorable over total."
        },
        {
          level: "Medium",
          title: "Union of events",
          question: "A number from 1 to 20 is chosen. What is the probability it is divisible by 2 or 5?",
          solution: ["Multiples of 2: 10 numbers.", "Multiples of 5: 4 numbers.", "Multiples of both 2 and 5 are multiples of 10: 2 numbers.", "Use inclusion-exclusion: $(10+4-2)/20=12/20=3/5$."],
          takeaway: "Subtract overlap when using OR."
        },
        {
          level: "Exam",
          title: "Independence check",
          question: "Suppose $P(A)=1/2$, $P(B)=1/3$, and $P(A\\cap B)=1/6$. Are A and B independent?",
          solution: ["Compute $P(A)P(B)=(1/2)(1/3)=1/6$.", "This equals $P(A\\cap B)$.", "Therefore A and B are independent."],
          takeaway: "Independence is tested by multiplication, not by whether events look related in words."
        }
      ],
      memoryQuiz: [
        ["What is a sample space?", "The set of all possible outcomes."],
        ["What is an event?", "A subset of the sample space."],
        ["What is the complement rule?", "$P(A^c)=1-P(A)$."],
        ["What does $P(A\\mid B)$ mean?", "The probability of A after B is known to have happened."],
        ["How do you test independence?", "Check whether $P(A\\cap B)=P(A)P(B)$."],
        ["What is expected value?", "A weighted average of possible numeric outcomes."]
      ],
      practiceQuiz: [
        {
          q: "A fair die is rolled. What is $P(\\text{even})$?",
          options: ["$1/6$", "$1/3$", "$1/2$", "$2/3$"],
          answer: 2,
          why: "Even outcomes are 2, 4, 6: three outcomes out of six, so $3/6=1/2$."
        },
        {
          q: "If $P(A)=0.7$, what is $P(A^c)$?",
          options: ["0.3", "0.7", "1.7", "0"],
          answer: 0,
          why: "Use the complement rule: $1-0.7=0.3$."
        },
        {
          q: "If $P(A\\cap B)=0.2$ and $P(B)=0.5$, what is $P(A\\mid B)$?",
          options: ["0.1", "0.2", "0.4", "0.7"],
          answer: 2,
          why: "$P(A\\mid B)=P(A\\cap B)/P(B)=0.2/0.5=0.4$."
        },
        {
          q: "If $P(A)=1/2$, $P(B)=1/2$, and $P(A\\cap B)=1/4$, what can you conclude?",
          options: ["A and B are independent", "A and B are disjoint", "A is impossible", "B is certain"],
          answer: 0,
          why: "$P(A)P(B)=1/4$, which equals $P(A\\cap B)$."
        }
      ],
      readiness: [
        "You can define a sample space before counting.",
        "You can use complement and union rules.",
        "You can compute conditional probability and expected value."
      ]
    },
    {
      id: "state-machines-invariants",
      title: "State Machines & Invariants",
      short: "States",
      examWeight: "Common in computer-science discrete math",
      goal: "Model step-by-step systems with states, transitions, reachability, and invariants.",
      lesson: [
        "**A state machine describes a process:** A state records everything important about the current situation. A transition is one legal move from one state to another.",
        "**Reachability asks what can happen:** A state is reachable if there is some sequence of legal transitions from the start state to it.",
        "**Invariants prove what cannot happen:** An invariant is a property that is true at the start and remains true after every transition. If a target violates the invariant, the target is impossible.",
        "**State diagrams are directed graphs:** Vertices are states and arrows are transitions. This connects state machines to graph reachability.",
        "**Deterministic vs nondeterministic:** In a deterministic machine, the current state and input decide exactly one next state. In a nondeterministic model, several next states may be possible.",
        "**Finite automata recognize patterns:** A finite automaton reads symbols one at a time and changes state. Accepting states mean the input has the desired pattern.",
        "**Algorithm loops also use invariants:** The same invariant idea proves correctness of loops, recursive processes, and state machines."
      ],
      visual: {
        type: "state-machine",
        title: "States and transitions",
        caption: "If every arrow preserves a property, that property is an invariant."
      },
      methods: [
        "**Build a state model:** Decide what information matters, list possible states, choose a start state, and draw legal transitions.",
        "**Prove invariant:** Show it is true at the start, then show every allowed transition preserves it.",
        "**Disprove reachability:** Find an invariant that the start state satisfies but the target state violates."
      ],
      beginnerGuide: [
        {
          title: "A state is a snapshot",
          problem: "Model a process without tracking irrelevant details.",
          meaning: "A state should contain exactly the information needed to know what moves are possible next.",
          method: "Write down what changes and what stays important.",
          steps: ["Name the changing quantities.", "Choose a start state.", "Describe one legal move.", "Repeat to draw transitions."],
          tip: "A state is useful only if it predicts the legal next moves."
        },
        {
          title: "An invariant is a never-breaks rule",
          problem: "Prove a target state cannot be reached.",
          meaning: "If a property starts true and every move keeps it true, then every reachable state has it.",
          method: "Check start, check preservation, compare target.",
          steps: ["Show the start satisfies the property.", "Take one arbitrary legal move.", "Show the property remains true.", "If the target breaks it, the target is unreachable."],
          tip: "Invariants are for impossibility proofs."
        },
        {
          title: "Reachability is path finding",
          problem: "Decide if one state can lead to another.",
          meaning: "A sequence of transitions is a path in the state graph.",
          method: "Search outward from the start state while following only legal arrows.",
          steps: ["Mark the start state.", "Follow every outgoing transition.", "Mark newly reached states.", "Stop when no new states appear or the target is found."],
          tip: "Do not use an arrow backward unless the transition really works backward."
        }
      ],
      formulaBank: [
        { tag: "State machine", accent: "accent-navy", name: "Core pieces", formula: "States + start state + transitions", why: "These three parts define the machine." },
        { tag: "Reachability", accent: "accent-forest", name: "Reachable state", formula: "Reachable iff there is a transition path from start to target", why: "State-machine reachability is graph reachability." },
        { tag: "Invariant", accent: "accent-copper", name: "Invariant proof", formula: "True initially + preserved by every move", why: "Then the property is true for every reachable state." },
        { tag: "Automata", accent: "accent-navy", name: "DFA transition", formula: "$\\delta(q,a)=q'$", why: "From state q reading symbol a, the machine moves to state q'." },
        { tag: "Acceptance", accent: "accent-forest", name: "Accepted string", formula: "After reading input, final state is accepting", why: "The accepting states define the language recognized by the automaton." }
      ],
      problemSolving: [
        {
          type: "Invariant",
          accent: "accent-copper",
          title: "Prove a state is impossible",
          question: "Start with number 0. A move adds 2. Can you ever reach 7?",
          method: "Use parity as an invariant.",
          steps: ["The start value 0 is even.", "Adding 2 to an even number gives another even number.", "So every reachable number is even.", "The target 7 is odd.", "Therefore 7 is unreachable."],
          remember: "Parity is one of the most common invariants."
        },
        {
          type: "Reachability",
          accent: "accent-forest",
          title: "Find reachable states",
          question: "States are A, B, C. Transitions are A->B and B->C. Starting at A, is C reachable?",
          method: "Follow legal arrows forward.",
          steps: ["Start at A.", "A has an arrow to B, so B is reachable.", "B has an arrow to C, so C is reachable.", "Yes, C is reachable from A."],
          remember: "Reachable means there is some path, not necessarily one step."
        },
        {
          type: "Automaton",
          accent: "accent-navy",
          title: "Track accepting state",
          question: "A machine accepts binary strings ending in 1. What state idea is enough?",
          method: "Track the last symbol seen.",
          steps: ["Use one state for 'last symbol was 1'.", "Use another state for 'last symbol was 0 or no symbol yet'.", "Reading 1 moves to the accepting state.", "Reading 0 moves to the non-accepting state.", "After the input ends, accept exactly when the last symbol was 1."],
          remember: "A finite automaton stores only the information needed for the future."
        }
      ],
      examples: [
        {
          level: "Easy",
          title: "Parity machine",
          question: "A machine starts at Even. Reading an odd number switches state; reading an even number stays. After reading 3, 4, 5, where is it?",
          solution: ["Start Even.", "Read 3: switch to Odd.", "Read 4: stay Odd because adding an even number does not change parity.", "Read 5: switch to Even.", "Final state is Even."],
          takeaway: "State machines often track only one useful feature."
        },
        {
          level: "Medium",
          title: "Invariant from total",
          question: "Two piles have total 10 stones. A move shifts one stone from one pile to the other. Can the total become 11?",
          solution: ["The starting total is 10.", "A move removes one stone from one pile and adds one to the other.", "The total stays the same.", "Every reachable state has total 10.", "Total 11 is impossible."],
          takeaway: "Conserved quantities are invariants."
        },
        {
          level: "Exam",
          title: "Reachability by BFS idea",
          question: "From state 0, moves add 3 or add 5. Which values up to 12 are reachable?",
          solution: ["Start with 0.", "From 0 reach 3 and 5.", "From 3 reach 6 and 8.", "From 5 reach 8 and 10.", "Continue: 9, 11, 12 are reachable. Up to 12, reachable values are 0,3,5,6,8,9,10,11,12."],
          takeaway: "Reachability can be found by expanding outward from known states."
        }
      ],
      memoryQuiz: [
        ["What is a state?", "A snapshot containing the information needed to know legal next moves."],
        ["What is a transition?", "One legal move from one state to another."],
        ["What does reachable mean?", "There is a path of transitions from the start state."],
        ["What is an invariant?", "A property true at the start and preserved by every transition."],
        ["How do invariants prove impossibility?", "If the target violates the invariant, it cannot be reachable."],
        ["What does a DFA transition function do?", "It tells the next state from the current state and input symbol."]
      ],
      practiceQuiz: [
        {
          q: "A process starts at 0 and each move adds 4. Which property is invariant?",
          options: ["The number is odd", "The number is divisible by 4", "The number is prime", "The number is negative"],
          answer: 1,
          why: "Starting at 0 and adding 4 always keeps the number divisible by 4."
        },
        {
          q: "If every move preserves evenness and the start state is even, which target is impossible?",
          options: ["2", "8", "10", "13"],
          answer: 3,
          why: "13 is odd, so it violates the invariant."
        },
        {
          q: "In a state diagram, reachability means:",
          options: ["The target has the most arrows", "There is a directed path from start to target", "Every state points to the target", "The graph has no cycles"],
          answer: 1,
          why: "Reachability is exactly the existence of a directed transition path."
        },
        {
          q: "For a DFA, when is a string accepted?",
          options: ["When it has length at least 1", "When every state was visited", "When the final state after reading input is accepting", "When there are no transitions"],
          answer: 2,
          why: "Acceptance depends on the state after the whole input is consumed."
        }
      ],
      readiness: [
        "You can identify states, transitions, and start state.",
        "You can prove a simple invariant.",
        "You can use reachability to decide whether a target can happen."
      ]
    },
    {
      id: "math-fundamentals",
      title: "Math Fundamentals",
      short: "Fundamentals",
      examWeight: "Foundation for every exam topic",
      goal: "Build the discrete-math foundation from zero: read symbols, understand sets and numbers, compute carefully, use key operators, and start proof-style thinking.",
      lesson: [
        "**0. What this page is for**: Discrete mathematics is not one trick. It is a language for exact objects: numbers, sets, functions, relations, graphs, logical statements, and algorithms. If a later topic feels impossible, the problem is often not that topic; it is usually one missing foundation from this page.",
        "**1. Read symbols as sentences first**: Never begin by guessing a formula. Say the symbol in English. $x\\in A$ means 'x is an element of A'. $A\\subseteq B$ means 'every element of A is also in B'. $\\forall n\\in\\mathbb Z$ means 'for every integer n'. Once the sentence is clear, the math becomes much less abstract.",
        "**2. Discrete vs. continuous**: Continuous objects behave like a ramp: every tiny value in between exists. Discrete objects behave like steps: you jump from one allowed value to the next. Integers, strings, vertices, truth values, and finite sets are discrete. Real intervals such as $[0,1]$ are continuous.",
        "**3. Sets are containers with no repeated elements**: A set answers 'what objects are included?' Order does not matter and duplicates do not matter: $\\{1,2,2,3\\}=\\{3,2,1\\}=\\{1,2,3\\}$. Important set operations are union $A\\cup B$ (in A or B), intersection $A\\cap B$ (in both), difference $A\\setminus B$ (in A but not B), and complement (outside A in the universe).",
        "**4. Number systems matter**: $\\mathbb N$ usually means natural numbers, $\\mathbb Z$ integers, $\\mathbb Q$ rational numbers, and $\\mathbb R$ real numbers. Always check which system the question uses. For example, $2-5$ leaves $\\mathbb N$ but stays inside $\\mathbb Z$; $1/2$ is rational but not an integer.",
        "**5. Expressions have parts and legal moves**: In $5x^2-3x+7$, $x$ is a variable, $5$ and $-3$ are coefficients, $7$ is a constant, and $2$ is an exponent. Legal rewrites come from rules: commutative changes order, associative changes grouping, distributive expands or factors. Simplifying means rewriting without changing value.",
        "**6. Floor and ceiling turn real numbers into integers**: $\\lfloor x\\rfloor$ is the greatest integer less than or equal to x. $\\lceil x\\rceil$ is the smallest integer greater than or equal to x. Floor answers 'how many complete groups fit?' Ceiling answers 'how many groups are needed?' Be extra careful with negative numbers: $\\lfloor-1.2\\rfloor=-2$ and $\\lceil-1.2\\rceil=-1$.",
        "**7. Modulo is the remainder after division**: $a\\bmod n$ asks where a lands in a cycle of length n. Write $a=qn+r$ with $0\\le r<n$; then r is the answer. This is why clocks, parity, days of the week, and divisibility problems use modulo thinking.",
        "**8. Factorials, sums, and products are compact notation**: $n!$ means $n(n-1)(n-2)\\cdots1$ and counts arrangements of n distinct objects. $\\sum$ means add indexed terms; $\\prod$ means multiply indexed terms. When stuck, expand the notation into ordinary arithmetic.",
        "**9. Functions, relations, and graphs are structure words**: A function assigns exactly one output to each input. A relation is any rule connecting objects, such as $\\leq$, 'divides', or 'is connected to'. A graph represents objects as vertices and relationships as edges. These are not separate worlds; they are different ways to describe structure.",
        "**10. Proof thinking starts before formal proofs**: A proof is a chain of justified steps. To prove a universal statement, explain why every allowed object works. To disprove one, give one counterexample. If a statement says 'for all', test small edge cases first: $0$, $1$, $-1$, empty set, and equality cases."
      ],
      visual: {
        type: "fundamentals-map",
        title: "The foundation stack",
        caption: "Symbols build sets; sets build functions; logic connects them into proofs."
      },
      methods: [
        "**Step 1: Translate the notation**. Write one English sentence before calculating. Example: $\\forall x\\in A$ becomes 'for every element x in A'.",
        "**Step 2: Name the object type**. Is the question about a number, set, expression, function, relation, graph, or statement? The object type decides the method.",
        "**Step 3: Identify the task verb**. Compute, simplify, decide true/false, translate, prove, disprove, count, or draw. Do not use a proof method on a computation problem, or a calculator method on a proof problem.",
        "**Step 4: Expand definitions**. Even means $2k$, odd means $2k+1$, subset means every element of A is in B, function means one output per input, and divisibility means $a\\mid b$ iff $b=ak$ for some integer k.",
        "**Step 5: Test small cases**. Before a proof or formula, try $0$, $1$, $2$, $-1$, empty sets, and simple two-element sets. This often reveals the correct pattern or a counterexample.",
        "**Step 6: Check the boundary**. Negative floors, zero factorial, empty sums, equality in inequalities, and domain restrictions are common places where wrong answers happen.",
        "**Step 7: Explain one line more than you think**. On exams, the answer alone is often not enough. Add the reason: definition used, arithmetic step, or why a counterexample breaks the statement."
      ],
      examples: [
        {
          level: "Absolute beginner",
          title: "Reading membership",
          question: "Let $A=\\{2,4,6\\}$. Are $4\\in A$ and $5\\in A$ true?",
          solution: ["Read $\\in$ as 'is an element of'.", "The number 4 is listed inside A, so $4\\in A$ is true.", "The number 5 is not listed inside A, so $5\\in A$ is false."],
          takeaway: "First translate the symbol; then check the container."
        },
        {
          level: "Absolute beginner",
          title: "Union, intersection, and difference",
          question: "Let $A=\\{1,2,3\\}$ and $B=\\{3,4\\}$. Find $A\\cup B$, $A\\cap B$, and $A\\setminus B$.",
          solution: ["Union means everything in A or B: $A\\cup B=\\{1,2,3,4\\}$.", "Intersection means only what is in both: $A\\cap B=\\{3\\}$.", "Difference means in A but not in B: $A\\setminus B=\\{1,2\\}$."],
          takeaway: "Most set mistakes disappear if you say 'or', 'both', and 'but not' out loud."
        },
        {
          level: "Beginner",
          title: "Order of operations",
          question: "Evaluate $3+2\\cdot5^2$.",
          solution: ["Exponents first: $5^2=25$.", "Multiplication next: $2\\cdot25=50$.", "Addition last: $3+50=53$."],
          takeaway: "Do not calculate left-to-right blindly; operation priority matters."
        },
        {
          level: "Beginner",
          title: "Evaluating an expression",
          question: "If $E(x,y)=3xy-x^2$ and $x=-1$, $y=2$, find $E(x,y)$.",
          solution: ["Substitute first: $E(-1,2)=3(-1)(2)-(-1)^2$.", "Compute multiplication: $3(-1)(2)=-6$.", "Compute the square: $(-1)^2=1$.", "Final value: $-6-1=-7$."],
          takeaway: "Substitution comes before simplification; keep parentheses around negative values."
        },
        {
          level: "Beginner",
          title: "Floor and ceiling with positive values",
          question: "A group of 14 students needs taxis. Each taxi holds 4 people. How many taxis are needed?",
          solution: ["Calculate $14/4=3.5$.", "A half taxi is impossible, so round up.", "The answer is $\\lceil3.5\\rceil=4$.", "Check: 3 taxis hold only 12 people, so a fourth taxi is needed."],
          takeaway: "Ceiling is used for 'how many containers are needed?'"
        },
        {
          level: "Bridge",
          title: "Floor and ceiling with negative values",
          question: "Find $\\lfloor-2.3\\rfloor$ and $\\lceil-2.3\\rceil$.",
          solution: ["The integers around $-2.3$ are $-3$ and $-2$.", "Floor means greatest integer less than or equal to the number, so $\\lfloor-2.3\\rfloor=-3$.", "Ceiling means smallest integer greater than or equal to the number, so $\\lceil-2.3\\rceil=-2$."],
          takeaway: "For negatives, floor moves left on the number line and ceiling moves right."
        },
        {
          level: "Bridge",
          title: "Modulo as a cycle",
          question: "Today is Monday. What day is it 100 days from now?",
          solution: ["The week repeats every 7 days, so compute $100\\bmod7$.", "Write $100=14\\cdot7+2$.", "The remainder is 2, so move two days after Monday.", "Answer: Wednesday."],
          takeaway: "Modulo answers where you land after moving through a repeating cycle."
        },
        {
          level: "Bridge",
          title: "Factorial lineups",
          question: "How many ways can you arrange the four distinct letters M, A, T, H?",
          solution: ["There are 4 choices for the first position.", "Then 3 choices remain, then 2, then 1.", "Total arrangements: $4\\cdot3\\cdot2\\cdot1=4!=24$."],
          takeaway: "Factorials count orders of distinct objects."
        },
        {
          level: "Bridge",
          title: "Expanding sigma notation",
          question: "Evaluate $\\sum_{k=1}^{4}(2k+1)$.",
          solution: ["Replace k by 1, 2, 3, and 4.", "$\\sum_{k=1}^{4}(2k+1)=(3)+(5)+(7)+(9)$.", "Add the terms: $3+5+7+9=24$."],
          takeaway: "When sigma notation feels confusing, expand it into a normal sum."
        },
        {
          level: "Intermediate",
          title: "Cartesian product",
          question: "If $A=\\{1,2\\}$ and $B=\\{x,y,z\\}$, how many elements are in $A\\times B$?",
          solution: ["$A\\times B$ contains ordered pairs $(a,b)$ with $a\\in A$ and $b\\in B$.", "For each of the 2 choices from A, there are 3 choices from B.", "So $|A\\times B|=2\\cdot3=6$.", "The pairs are $(1,x),(1,y),(1,z),(2,x),(2,y),(2,z)$."],
          takeaway: "Cartesian product is multiplication of choices, and order inside pairs matters."
        },
        {
          level: "Intermediate",
          title: "Checking whether a rule is a function",
          question: "Is $R=\\{(1,a),(1,b),(2,a)\\}$ a function from $\\{1,2\\}$ to $\\{a,b\\}$?",
          solution: ["A function gives each input exactly one output.", "Input 1 appears with output a and output b.", "One input has two outputs, so R is not a function."],
          takeaway: "A repeated input with different outputs breaks the function rule."
        },
        {
          level: "Intermediate",
          title: "Using a definition in a proof",
          question: "Show that the sum of two even integers is even.",
          solution: ["Let the two even integers be $2a$ and $2b$ for integers a and b.", "Their sum is $2a+2b=2(a+b)$.", "Since $a+b$ is an integer, the sum has the form $2k$.", "Therefore the sum is even."],
          takeaway: "Proofs often start by replacing words with definitions."
        },
        {
          level: "Intermediate",
          title: "Breaking a universal statement",
          question: "Is it true that $n^2>n$ for all integers n?",
          solution: ["To disprove 'for all', one counterexample is enough.", "Try $n=1$.", "Then $n^2=1^2=1$.", "The claim $1>1$ is false.", "So $n=1$ is a counterexample."],
          takeaway: "A single failed allowed case disproves a universal statement."
        },
        {
          level: "Advanced",
          title: "Nested Summations",
          question: "Evaluate $\\sum_{i=1}^2 \\sum_{j=1}^3 (i+j)$.",
          solution: ["Outer loop $i$ runs from 1 to 2.", "For $i=1$: $(1+1) + (1+2) + (1+3) = 2+3+4 = 9$.", "For $i=2$: $(2+1) + (2+2) + (2+3) = 3+4+5 = 12$.", "Total sum: $9 + 12 = 21$."],
          takeaway: "Work from the innermost sigma outward."
        }
      ],
      memoryQuiz: [
        ["What does $x\\in A$ mean?", "x is an element of the set A."],
        ["What does $A\\subseteq B$ mean?", "Every element of A is also an element of B."],
        ["What is the difference between $\\in$ and $\\subseteq$?", "$\\in$ compares an object to a set; $\\subseteq$ compares one set to another set."],
        ["What does $\\sum$ mean?", "Add the terms generated by the index values."],
        ["What does $n!$ mean?", "Multiply all positive integers from n down to 1."],
        ["What is $a\\bmod n$?", "The remainder after dividing a by n, usually chosen from 0 to n-1."],
        ["What is a function?", "A rule that gives each input exactly one output."],
        ["How do you disprove a universal statement?", "Give one allowed counterexample where the statement is false."]
      ],
      practiceQuiz: [
        {
          q: "Let $A=\\{1,3,5\\}$ and $B=\\{3,5,7\\}$. What is $A\\cap B$?",
          options: ["$\\{1,7\\}$", "$\\{3,5\\}$", "$\\{1,3,5,7\\}$", "$\\emptyset$"],
          answer: 1,
          why: "Intersection means elements that appear in both sets."
        },
        {
          q: "Which statement correctly describes $A\\subseteq B$?",
          options: ["A and B have no common elements", "Every element of A is in B", "Every element of B is in A", "A has more elements than B"],
          answer: 1,
          why: "Subset means all elements of the first set are contained in the second set."
        },
        {
          q: "Which number belongs to $\\mathbb Z$ but not to $\\mathbb N$ if $\\mathbb N=\\{0,1,2,...\\}$?",
          options: ["$-4$", "$0$", "$3$", "$1/2$"],
          answer: 0,
          why: "$-4$ is an integer but not a natural number under this convention."
        },
        {
          q: "Evaluate $2+3\\cdot4^2$.",
          options: ["50", "80", "98", "400"],
          answer: 0,
          why: "Exponent first: $4^2=16$, then $3\\cdot16=48$, then $2+48=50$."
        },
        {
          q: "If $f(x)=x^2-2x$ and $x=-3$, what is $f(x)$?",
          options: ["3", "9", "15", "-15"],
          answer: 2,
          why: "$f(-3)=(-3)^2-2(-3)=9+6=15$."
        },
        {
          q: "What is $\\lfloor -3.9 \\rfloor + \\lceil 2.1 \\rceil$?",
          options: ["-2", "-1", "0", "1"],
          answer: 1,
          why: "$-4 + 3 = -1$."
        },
        {
          q: "A server stores files in boxes of 8. How many boxes are needed for 41 files?",
          options: ["5", "6", "7", "8"],
          answer: 1,
          why: "$41/8=5.125$, so you need $\\lceil5.125\\rceil=6$ boxes."
        },
        {
          q: "What is $25 \\pmod 7$?",
          options: ["1", "3", "4", "5"],
          answer: 2,
          why: "$25=3\\cdot7+4$. The remainder is 4."
        },
        {
          q: "Evaluate $4!-3!$.",
          options: ["1", "6", "18", "24"],
          answer: 2,
          why: "$24 - 6 = 18$."
        },
        {
          q: "Evaluate $\\sum_{k=1}^{3} k^2$.",
          options: ["6", "9", "14", "36"],
          answer: 2,
          why: "$1^2+2^2+3^2=1+4+9=14$."
        },
        {
          q: "Which relation is not a function from inputs to outputs?",
          options: ["$\\{(1,a),(2,a)\\}$", "$\\{(1,a),(2,b)\\}$", "$\\{(1,a),(1,b)\\}$", "$\\{(1,b)\\}$"],
          answer: 2,
          why: "Input 1 has two different outputs, so it violates the function rule."
        },
        {
          q: "Which set is discrete?",
          options: ["Real numbers $\\mathbb R$", "Integers $\\mathbb Z$", "The interval $(0,1)$", "All points on a line"],
          answer: 1,
          why: "Integers are separated step-by-step; they are not continuous."
        },
        {
          q: "You want to disprove 'Every prime number plus one is even'. Which is a counterexample?",
          options: ["p=2", "p=3", "p=5", "p=7"],
          answer: 0,
          why: "2 is prime, and $2+1=3$ is odd. One counterexample is enough."
        },
        {
          q: "Which definition should you write when a proof says 'let n be odd'?",
          options: ["$n=2k$", "$n=2k+1$", "$n=k^2$", "$n=k/2$"],
          answer: 1,
          why: "Odd integers have the form $2k+1$ for some integer k."
        },
        {
          q: "If a graph has vertices A, B, C and edges AB and BC, what do the edges represent?",
          options: ["The objects", "The connections", "The coordinates", "The truth values"],
          answer: 1,
          why: "In a graph, vertices are objects and edges are connections."
        },
        {
          q: "What is the safest first move when a problem contains unfamiliar notation?",
          options: ["Skip the problem", "Translate each symbol into words", "Guess a formula", "Start with the largest number"],
          answer: 1,
          why: "Understanding the sentence behind the notation prevents most method mistakes."
        },
        {
          q: "Which value is a boundary case that should often be tested in discrete math?",
          options: ["1000 only", "$\\pi$", "0", "A random decimal"],
          answer: 2,
          why: "Zero is a common boundary case for definitions, algorithms, counting, and proofs."
        }
      ],
      readiness: [
        "You can translate common symbols into English before calculating.",
        "You can work with membership, subset, union, intersection, difference, and Cartesian product.",
        "You can identify $\\mathbb N$, $\\mathbb Z$, $\\mathbb Q$, and $\\mathbb R$ and notice domain restrictions.",
        "You can evaluate and simplify expressions using operation order and algebraic laws.",
        "You can compute floor, ceiling, modulo, factorials, sigma sums, and simple products.",
        "You can tell whether a relation is a function.",
        "You can describe a graph as vertices plus edges.",
        "You can start a basic proof by expanding definitions.",
        "You can disprove a universal statement with one valid counterexample."
      ]
    },
    {
      id: "exam-map",
      title: "Old Exam Map",
      short: "Exam Map",
      examWeight: "All exams",
      goal: "See every old exam part, what it tests, and which topic page teaches the method.",
      lesson: [
        "Use this page as a checklist. If an exam part feels unfamiliar, open the linked topic and study its lesson, examples, and quizzes.",
        "The repeated pattern is clear: logic appears often, but the course also repeatedly tests sets/functions, graph theory, induction, number theory, and counting."
      ],
      visual: {
        type: "exam-timeline",
        title: "Exam coverage timeline",
        caption: "Every card below is mapped to a study topic."
      },
      methods: ["Scan by exam date.", "Identify weak topics.", "Return to the matching topic page.", "Redo the quizzes after reading the worked examples."],
      examples: [],
      memoryQuiz: [],
      practiceQuiz: [],
      readiness: ["You can explain which method applies to every old exam part."]
    }
  ],
  examMap: [
    ["2023-03-24", "P1", "Functions on $A\\times B$, min/max, surjective", "sets-functions"],
    ["2023-03-24", "P2", "Predicate translation: only, existential conjunction", "predicate-quantifiers"],
    ["2023-03-24", "P3", "Pascal triangle and cubic binomial expansion", "binomial-polynomials"],
    ["2023-03-24", "P4", "Complete graph $K_6$, connected graph", "relations-graphs"],
    ["2023-03-24", "P5", "Parity with factorials and odd powers", "number-theory"],
    ["2023-05-19", "P1", "Truth table and tautology for $P\\lor(P\\to Q)$", "logic-proofs"],
    ["2023-05-19", "P2", "Prime set and power set cardinality", "sets-functions"],
    ["2023-05-19", "P3", "Binomial expansion", "binomial-polynomials"],
    ["2023-05-19", "P4", "Combinations and ordered dice outcomes", "combinatorics"],
    ["2023-05-19", "P5", "Polynomial root verification", "binomial-polynomials"],
    ["2023-08-15", "P1", "Truth table, biconditional, classification", "logic-proofs"],
    ["2023-08-15", "P2", "Modulo function, injective/surjective/bijective", "sets-functions"],
    ["2023-08-15", "P3", "Equivalence classes modulo 3", "relations-graphs"],
    ["2023-08-15", "P4", "Compute recurrence values", "induction-recurrence"],
    ["2023-08-15", "P5", "Ship allocation counting", "combinatorics"],
    ["2024-03-20", "P1", "Graph drawing, cycles, complete graph formula", "relations-graphs"],
    ["2024-03-20", "P2", "Induction for sum of cubes", "induction-recurrence"],
    ["2024-03-20", "P3", "Congruence, gcd, Bezout coefficients", "number-theory"],
    ["2024-03-20", "P4", "Proof sequence with MT and De Morgan", "logic-proofs"],
    ["2024-03-20", "P5", "Restricted passcodes and jelly bean counting", "combinatorics"],
    ["2024-05-14", "P1", "Set operations and congruence class", "sets-functions"],
    ["2024-05-14", "P2", "Power set proof via binomial theorem; expansion", "binomial-polynomials"],
    ["2024-05-14", "P3", "Proof sequence using contrapositive and MP", "logic-proofs"],
    ["2024-05-14", "P4", "Directed graph and adjacency matrix", "relations-graphs"],
    ["2024-05-14", "P5", "Induction and counterexamples", "induction-recurrence"],
    ["2024-09-13", "P1", "Strong induction for prime factorization", "induction-recurrence"],
    ["2024-09-13", "P2", "Prime/parity and prime count", "number-theory"],
    ["2024-09-13", "P3", "Polynomial roots and parity", "binomial-polynomials"],
    ["2024-09-13", "P4", "Predicate translation and negation", "predicate-quantifiers"],
    ["2024-09-13", "P5", "Password counting with forbidden substring", "combinatorics"],
    ["2025-03-28", "P1", "Binary operation, rational set membership, degree sum", "sets-functions"],
    ["2025-03-28", "P2", "Validity proof and negation of implication", "logic-proofs"],
    ["2025-03-28", "P3", "Poker hands and restricted combinations", "combinatorics"],
    ["2025-03-28", "P4", "Coprime definition and divisibility proof", "number-theory"],
    ["2025-03-28", "P5", "Composite proof, onto function", "number-theory"],
    ["2025-05-19", "P1", "Inclusion-exclusion and power set of Cartesian product", "sets-functions"],
    ["2025-05-19", "P2", "Graph definition, complement, connected proof", "relations-graphs"],
    ["2025-05-19", "P3", "Contradiction, MT, tautology, predicate translation", "logic-proofs"],
    ["2025-05-19", "P4", "Equivalence relation on binary strings", "relations-graphs"],
    ["2025-05-19", "P5", "Fibonacci induction and divisibility implication", "induction-recurrence"],
    ["2025-08-27", "P1", "Proposition, biconditional, truth tables, tautology", "logic-proofs"],
    ["2025-08-27", "P2", "Induction and geometric sum", "induction-recurrence"],
    ["2025-08-27", "P3", "Pigeonhole principle", "combinatorics"],
    ["2025-08-27", "P4", "Function, one-to-one, onto", "sets-functions"],
    ["2025-08-27", "P5", "Graph definition, handshaking lemma, party graph", "relations-graphs"],
    ["2026-03-26", "Q1", "Logic expression, contradiction proof, quantifier code tracing", "logic-proofs"],
    ["2026-03-26", "Q2", "Surjective function, Big-O, injective/onto code tracing", "algorithms-growth"],
    ["2026-03-26", "Q3", "Euclidean algorithm and linear search", "number-theory"],
    ["2026-03-26", "Q4", "Induction and recurrence for bit strings", "induction-recurrence"],
    ["2026-03-26", "Q5", "Equivalence relation and Euler circuit", "relations-graphs"]
  ]
};
