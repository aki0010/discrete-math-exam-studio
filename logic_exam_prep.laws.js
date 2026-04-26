window.logicPrepData = window.logicPrepData || {};

window.logicPrepData.lawGroups = [
      {
        family: "symbols",
        title: "Core symbols and readings",
        blurb: "These are the symbols that all the old exams expect you to read instantly.",
        source: "Harold cheat sheet p.1-2",
        columns: ["Item", "Form", "Equivalent / reading", "Exam cue"],
        rows: [
          ["Conjunction", "$p \\land q$", "p and q", "True only if both are true."],
          ["Disjunction", "$p \\lor q$", "p or q", "False only if both are false."],
          ["Negation", "$\\neg p$", "not p", "Flip the truth value."],
          ["Conditional", "$p \\to q$", "if p then q / p only if q", "False only when p is true and q is false."],
          ["Biconditional", "$p \\leftrightarrow q$", "p iff q", "True when p and q match."],
          ["Universal quantifier", "$\\forall x P(x)$", "for every x, P(x)", "Think of a big AND over the domain."],
          ["Existential quantifier", "$\\exists x P(x)$", "there exists an x such that P(x)", "Think of a big OR over the domain."],
          ["Uniqueness", "$\\exists! x P(x)$", "there exists exactly one x such that P(x)", "Existence plus uniqueness."]
        ]
      },
      {
        family: "validity",
        title: "Key definitions the exam can ask directly",
        blurb: "Short theory questions have shown up, so keep these definitions clean and exact.",
        source: "Old exams May 19 2025 and August 27 2025",
        columns: ["Term", "Form / test", "Meaning", "Exam cue"],
        rows: [
          ["Proposition / statement", "Has a definite truth value", "A sentence that is either true or false.", "Not a question, command, or open predicate."],
          ["Tautology", "True on every valuation", "A formula that is always true, no matter how the variables are valued.", "A truth table with all T in the final column."],
          ["Contradiction", "False on every valuation", "A formula that is always false.", "A truth table with all F in the final column."],
          ["Contingency", "Sometimes true, sometimes false", "A formula that is neither a tautology nor a contradiction.", "One true row and one false row are enough."],
          ["Valid argument", "Premises true never force a false conclusion", "Whenever all premises are true, the conclusion must also be true.", "This is what proof-sequence questions are verifying."]
        ]
      },
      {
        family: "propositional",
        title: "Conditional and biconditional family",
        blurb: "These are the fastest rewrites for tautology work, negations, and proof sequences.",
        source: "Harold cheat sheet p.3, corrected to standard equivalences",
        columns: ["Law", "Rewrite", "Equivalent form", "Exam cue"],
        rows: [
          ["Conditional law", "$p \\to q$", "$\\neg p \\lor q$", "Replace implication before making a truth table."],
          ["Conditional law", "$p \\to q$", "$\\neg(p \\land \\neg q)$", "Useful when you need a negation outside."],
          ["Negated conditional", "$\\neg(p \\to q)$", "$p \\land \\neg q$", "Common in negation questions."],
          ["Reverse conditional rewrite", "$p \\lor q$", "$\\neg p \\to q$", "Good when an OR wants to become an implication."],
          ["Conjunction as negated implication", "$p \\land q$", "$\\neg(p \\to \\neg q)$", "Occasionally useful in equivalence proofs."],
          ["Same antecedent", "$(p \\to q) \\land (p \\to r)$", "$p \\to (q \\land r)$", "Combine two consequences from the same trigger."],
          ["Same antecedent", "$(p \\to q) \\lor (p \\to r)$", "$p \\to (q \\lor r)$", "One trigger, one disjunctive consequence."],
          ["Same consequent", "$(p \\to r) \\land (q \\to r)$", "$(p \\lor q) \\to r$", "If either premise is enough, the disjunction is enough."],
          ["Same consequent", "$(p \\to r) \\lor (q \\to r)$", "$(p \\land q) \\to r$", "If at least one implication is available, the conjunction implies r."],
          ["Biconditional law", "$p \\leftrightarrow q$", "$(p \\to q) \\land (q \\to p)$", "Two directions must both hold."],
          ["Biconditional law", "$p \\leftrightarrow q$", "$(p \\land q) \\lor (\\neg p \\land \\neg q)$", "Both true or both false."],
          ["Negated biconditional", "$\\neg(p \\leftrightarrow q)$", "$p \\oplus q$", "They differ."],
          ["Contrapositive", "$p \\to q$", "$\\neg q \\to \\neg p$", "Equivalent and always safe."],
          ["Converse", "$p \\to q$", "$q \\to p$", "Not equivalent in general."],
          ["Inverse", "$p \\to q$", "$\\neg p \\to \\neg q$", "Not equivalent in general."]
        ]
      },
      {
        family: "propositional",
        title: "Replacement laws",
        blurb: "These are the classic simplification rules for propositional logic.",
        source: "Harold cheat sheet p.5",
        columns: ["Law", "Expression", "Equivalent form", "Memory cue"],
        rows: [
          ["Identity", "$p \\lor F$", "$p$", "OR with false changes nothing."],
          ["Identity", "$p \\land T$", "$p$", "AND with true changes nothing."],
          ["Domination / null", "$p \\lor T$", "$T$", "OR with true swallows everything."],
          ["Domination / null", "$p \\land F$", "$F$", "AND with false kills everything."],
          ["Idempotent", "$p \\lor p$", "$p$", "Repeating the same statement does nothing."],
          ["Idempotent", "$p \\land p$", "$p$", "Repeating the same statement does nothing."],
          ["Double negation", "$\\neg \\neg p$", "$p$", "Two negations cancel."],
          ["Complement", "$p \\lor \\neg p$", "$T$", "Always true."],
          ["Complement", "$p \\land \\neg p$", "$F$", "Always false."],
          ["Commutative", "$p \\lor q$", "$q \\lor p$", "Swap order freely."],
          ["Commutative", "$p \\land q$", "$q \\land p$", "Swap order freely."],
          ["Associative", "$(p \\lor q) \\lor r$", "$p \\lor (q \\lor r)$", "Re-group OR freely."],
          ["Associative", "$(p \\land q) \\land r$", "$p \\land (q \\land r)$", "Re-group AND freely."],
          ["Distributive", "$p \\land (q \\lor r)$", "$(p \\land q) \\lor (p \\land r)$", "AND distributes over OR."],
          ["Distributive", "$p \\lor (q \\land r)$", "$(p \\lor q) \\land (p \\lor r)$", "OR distributes over AND."],
          ["Uniting", "$(p \\land q) \\lor (p \\land \\neg q)$", "$p$", "Factor p out and use $q \\lor \\neg q$."],
          ["Uniting", "$(p \\lor q) \\land (p \\lor \\neg q)$", "$p$", "Factor p out and use $q \\lor \\neg q$."],
          ["Absorption", "$p \\lor (p \\land q)$", "$p$", "The bigger expression collapses to p."],
          ["Absorption", "$p \\land (p \\lor q)$", "$p$", "The bigger expression collapses to p."],
          ["De Morgan", "$\\neg(p \\lor q)$", "$\\neg p \\land \\neg q$", "Flip OR to AND and negate both parts."],
          ["De Morgan", "$\\neg(p \\land q)$", "$\\neg p \\lor \\neg q$", "Flip AND to OR and negate both parts."],
          ["Exclusive or", "$p \\oplus q$", "$(p \\lor q) \\land \\neg (p \\land q)$", "Exactly one is true."],
          ["Exclusive or", "$p \\oplus q$", "$(\\neg p \\land q) \\lor (p \\land \\neg q)$", "Two mismatch cases."]
        ]
      },
      {
        family: "propositional",
        title: "Advanced equivalence moves",
        blurb: "Less common, but useful when an equivalence proof refuses to simplify.",
        source: "Harold cheat sheet p.5",
        columns: ["Law", "Expression", "Equivalent form", "When to use it"],
        rows: [
          ["Factoring", "$(p \\lor q) \\land (\\neg p \\lor r)$", "$(p \\land r) \\lor (\\neg p \\land q)$", "Mixes one positive and one negative copy of p."],
          ["Factoring", "$(p \\land q) \\lor (\\neg p \\land r)$", "$(p \\lor r) \\land (\\neg p \\lor q)$", "Dual of the line above."],
          ["Consensus", "$(p \\land q) \\lor (q \\land r) \\lor (\\neg p \\land r)$", "$(p \\land q) \\lor (\\neg p \\land r)$", "The middle term becomes redundant."],
          ["Consensus", "$(p \\lor q) \\land (q \\lor r) \\land (\\neg p \\lor r)$", "$(p \\lor q) \\land (\\neg p \\lor r)$", "The middle term becomes redundant."]
        ]
      },
      {
        family: "inference",
        title: "Rules of inference with propositions",
        blurb: "These are the actual proof-sequence moves behind the validity questions.",
        source: "Harold cheat sheet p.4-5, with standard resolution form",
        columns: ["Rule", "Form", "Plain English", "Exam cue"],
        rows: [
          ["Modus Ponens (MP)", "$p, p \\to q \\implies q$", "Affirm the antecedent.", "If the trigger happened, take the consequence."],
          ["Modus Tollens (MT)", "$\\neg q, p \\to q \\implies \\neg p$", "Deny the consequent.", "Very common after a De Morgan step."],
          ["Hypothetical Syllogism (HS)", "$p \\to q, q \\to r \\implies p \\to r$", "Chain two implications.", "Use when conditionals line up head-to-tail."],
          ["Disjunctive Syllogism (DS)", "$p \\lor q, \\neg p \\implies q$", "Kill one option in an OR.", "Perfect after Simplification gives a negation."],
          ["Constructive Dilemma (CD)", "$p \\lor q, (p \\to r) \\land (q \\to s) \\implies r \\lor s$", "Either way, one consequence follows.", "Rare, but exam-safe if you spot the shape."],
          ["Simplification (Simp)", "$p \\land q \\implies p$", "Pull one part out of a conjunction.", "Usually the first move in a proof sequence."],
          ["Conjunction (Conj)", "$p, q \\implies p \\land q$", "Combine two established lines.", "Use when the goal is a conjunction."],
          ["Addition (Add)", "$p \\implies p \\lor q$", "You may add a disjunct.", "Less common, but valid."],
          ["Resolution", "$p \\lor q, \\neg p \\lor r \\implies q \\lor r$", "Resolve away p.", "Standard propositional resolution rule."],
          ["Proof by cases", "$p \\lor q, p \\to r, q \\to r \\implies r$", "Prove each case leads to the same target.", "Strong when the first line is a disjunction."],
          ["Contradiction rule", "$\\neg p \\to F \\implies p$", "If assuming not p forces falsehood, p must be true.", "Meta-proof move rather than a basic line rule."]
        ]
      },
      {
        family: "quantifier",
        title: "Quantifier laws and domain rules",
        blurb: "The translation and negation questions live here.",
        source: "Harold cheat sheet p.8, p.12-13",
        columns: ["Law", "Expression", "Equivalent form", "Exam cue"],
        rows: [
          ["Restricted universal", "$\\forall x \\in A P(x)$", "$\\forall x (x \\in A \\to P(x))$", "Inside a universal, category statements use implication."],
          ["Restricted existential", "$\\exists x \\in A P(x)$", "$\\exists x (x \\in A \\land P(x))$", "Inside an existential, category statements use conjunction."],
          ["Quantifier negation", "$\\forall x P(x)$", "$\\neg \\exists x \\neg P(x)$", "Universal means there is no counterexample."],
          ["Quantifier negation", "$\\exists x P(x)$", "$\\neg \\forall x \\neg P(x)$", "Existence means not everything fails."],
          ["Direct negation", "$\\neg \\forall x P(x)$", "$\\exists x \\neg P(x)$", "Not everyone means someone fails."],
          ["Direct negation", "$\\neg \\exists x P(x)$", "$\\forall x \\neg P(x)$", "Nobody means everyone fails."],
          ["Conditional in domains", "$x \\in A \\to P(x)$", "$x \\notin A \\lor P(x)$", "Just the usual implication law inside set language."],
          ["Subset negation", "$x \\in A$", "$\\neg(x \\notin A)$", "Swap $\\in$ and $\\notin$ when negating."],
          ["Nested De Morgan", "$\\neg \\forall x \\forall y P(x, y)$", "$\\exists x \\exists y \\neg P(x, y)$", "Flip every quantifier and negate the body."],
          ["Nested De Morgan", "$\\neg \\forall x \\exists y P(x, y)$", "$\\exists x \\forall y \\neg P(x, y)$", "Negating $\\forall \\exists$ gives $\\exists \\forall$."],
          ["Nested De Morgan", "$\\neg \\exists x \\forall y P(x, y)$", "$\\forall x \\exists y \\neg P(x, y)$", "Negating $\\exists \\forall$ gives $\\forall \\exists$."],
          ["Nested De Morgan", "$\\neg \\exists x \\exists y P(x, y)$", "$\\forall x \\forall y \\neg P(x, y)$", "Flip every quantifier and negate the body."],
          ["Quantifier order", "$\\forall x \\forall y P(x, y)$", "$\\forall y \\forall x P(x, y)$", "Same quantifiers of the same type can swap."],
          ["Quantifier order", "$\\exists x \\exists y P(x, y)$", "$\\exists y \\exists x P(x, y)$", "Same quantifiers of the same type can swap."],
          ["Quantifier caution", "$\\forall x \\exists y P(x, y)$", "not equivalent to $\\exists x \\forall y P(x, y)$", "Mixed quantifiers do not commute."],
          ["Moving quantifiers", "$\\forall x (P(x) \\to \\exists y Q(x, y))$", "$\\forall x \\exists y (P(x) \\to Q(x, y))$", "Safe only if y does not already occur free in P."]
        ]
      },
      {
        family: "inference",
        title: "Inference rules with quantifiers",
        blurb: "Needed for predicate proofs and for explaining why an argument form is valid.",
        source: "Harold cheat sheet p.10",
        columns: ["Rule", "Form", "Plain English", "Exam cue"],
        rows: [
          ["Universal Instantiation (UI)", "$\\forall x P(x) \\implies P(c)$", "Take a universal statement and apply it to a particular object.", "Pick a specific element from the domain."],
          ["Universal Generalization (UG)", "$P(c) \\implies \\forall x P(x)$", "From an arbitrary element, generalize to all elements.", "The object must be arbitrary, not special."],
          ["Existential Instantiation (EI)", "$\\exists x P(x) \\implies P(c)$", "If something exists, name one witness.", "The witness is particular, not arbitrary."],
          ["Existential Generalization (EG)", "$P(c) \\implies \\exists x P(x)$", "From one example, conclude existence.", "The easiest final step in a predicate proof."]
        ]
      },
      {
        family: "quantifier",
        title: "Quantifier reading and scope shortcuts",
        blurb: "These lines are here to help you read what a formula actually says before you translate or negate it.",
        source: "Exam-oriented summary",
        columns: ["Pattern", "Formula", "Read it as", "Exam cue"],
        rows: [
          ["Universal restriction", "$\\forall x (A(x) \\to B(x))$", "Every A is B.", "Use this for all / every / whoever."],
          ["Existential witness", "$\\exists x (A(x) \\land B(x))$", "Some A is B.", "Use this for some / there exists."],
          ["For every, there exists", "$\\forall x \\exists y P(x, y)$", "For each x, at least one y works.", "The witness for y may depend on x."],
          ["There exists, for every", "$\\exists x \\forall y P(x, y)$", "There is one x that works for all y.", "Now one witness must work globally."],
          ["Self-reference", "$\\forall x P(x, x)$", "Every object is related to itself.", "Useful for reflexive-style statements."],
          ["Everyone else", "$\\forall x \\exists y (x \\neq y \\land P(x, y))$", "Each x is related to some different y.", "The inequality excludes self-reference."],
          ["Exactly one", "$\\exists x (P(x) \\land \\forall y (P(y) \\to y = x))$", "There is one and only one x with P.", "Existence plus uniqueness."]
        ]
      },
      {
        family: "validity",
        title: "Valid quantifier distributions",
        blurb: "These are safe rewrites in first-order logic when the side conditions are met.",
        source: "Harold cheat sheet p.14",
        columns: ["Valid formula", "Equivalent or valid consequence", "Why it is safe", "Note"],
        rows: [
          ["$\\forall x (P(x) \\land Q(x))$", "$\\forall x P(x) \\land \\forall x Q(x)$", "Universal distributes over AND.", "Equivalent."],
          ["$\\exists x (P(x) \\lor Q(x))$", "$\\exists x P(x) \\lor \\exists x Q(x)$", "Existential distributes over OR.", "Equivalent."],
          ["$\\exists x (P(x) \\land Q(x))$", "$\\exists x P(x) \\land \\exists x Q(x)$", "One witness for both gives each existential separately.", "One-way implication only."],
          ["$\\forall x P(x) \\lor \\forall x Q(x)$", "$\\forall x (P(x) \\lor Q(x))$", "If one side holds for every x, the OR holds for every x.", "One-way implication only."],
          ["$\\forall x \\neg P(x)$", "$\\neg \\exists x P(x)$", "Nobody has P exactly when there is no witness.", "Equivalent."],
          ["$\\exists x \\neg P(x)$", "$\\neg \\forall x P(x)$", "A counterexample exists exactly when not everything has P.", "Equivalent."],
          ["$\\forall x (P(x) \\to R)$", "$\\exists x P(x) \\to R$", "If every P-object forces R, then any existence of P also forces R.", "x must not occur free in R."],
          ["$\\forall x (R \\to Q(x))$", "$R \\to \\forall x Q(x)$", "A constant premise can move outside the universal.", "x must not occur free in R."],
          ["$\\forall x \\forall y T(x, y)$", "$\\forall y \\forall x T(x, y)$", "Same-type quantifiers can swap.", "Equivalent."],
          ["$\\exists x \\exists y T(x, y)$", "$\\exists y \\exists x T(x, y)$", "Same-type quantifiers can swap.", "Equivalent."]
        ]
      },
      {
        family: "validity",
        title: "Common invalid quantifier moves",
        blurb: "These are classic traps. Treat them as warnings, not rewrites.",
        source: "Harold cheat sheet p.14",
        columns: ["Invalid formula", "Why it fails", "Typical counterexample idea", "Exam cue"],
        rows: [
          ["$\\exists x P(x) \\land \\exists x Q(x) \\implies \\exists x (P(x) \\land Q(x))$", "The two existential witnesses might be different objects.", "One object has P, another has Q.", "Do not merge witnesses unless you know they are the same."],
          ["$\\forall x (P(x) \\lor Q(x)) \\implies \\forall x P(x) \\lor \\forall x Q(x)$", "Different objects may satisfy different sides.", "One object has P, another has Q.", "Universal does not distribute over OR both ways."],
          ["$\\forall x \\exists y T(x, y) \\implies \\exists y \\forall x T(x, y)$", "The witness for y can depend on x.", "Each x has its own matching y.", "Mixed quantifiers do not commute."],
          ["$\\forall x (P(x) \\to Q(x)) \\implies \\exists x P(x) \\to \\forall x Q(x)$", "The existence of one P does not force every object to satisfy Q.", "One witness with P, another without Q.", "Keep track of scope carefully."]
        ]
      }
    ];
