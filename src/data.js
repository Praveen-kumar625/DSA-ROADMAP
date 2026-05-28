export const roadmapData = {
  phases: [
    {
      id: 1,
      title: "Phase 1: Foundations",
      subtitle: "Java + DSA Basics (Shuruwat Yahan Se)",
      weeks: "1-2",
      quote: "Bina foundation ke building nahi banti, mere dost. Let's build it strong!",
      didYouKnow: "Kya aapko pata hai? Java's String is immutable taaki memory bache (String Pool) aur security bani rahe.",
      difficulty: "Easy",
      color: "green",
      days: [
        { id: "p1d1", days: "1-2", title: "Java Syntax & OOP Recap", goal: "Refresh basic Java concepts", concept: "Classes & Objects (Real-world examples)", task: "Basic Classes likho", revision: "JDK vs JRE vs JVM (Kaam aayega interview mein)", problem: "Java Basics", difficulty: "Easy" },
        { id: "p1d2", days: "3-4", title: "Polymorphism & Interfaces", goal: "OOP Pillars ko master karo", concept: "Abstraction (Chupa hua logic)", task: "Interface implement karo", revision: "Overload vs Override (Favourite interview question)", problem: "OOP Quizzes", difficulty: "Easy" },
        { id: "p1d3", days: "5", title: "Java Collections Framework", goal: "Bane-banaye Data Structures sikho", concept: "List, Set, Map", task: "Maps iterate karna sikho", revision: "ArrayList vs Vector", problem: "Freq Counters", difficulty: "Medium" },
        { id: "p1d4", days: "6-7", title: "Big-O Notation", goal: "Time & Space Complexity samjho", concept: "O(1), O(N), O(N^2)", task: "Loops analyze karo", revision: "Drop the constants! (O(2N) is just O(N))", problem: "Big-O Quiz", difficulty: "Medium" },
        { id: "p1d5", days: "8-10", title: "Arrays (1D & 2D)", goal: "Arrays mein traverse karna sikho", concept: "Contiguous memory", task: "Matrix rotation", revision: "0-based indexing yaad rakhna", problem: "Rotate Array, Spiral Matrix", difficulty: "Medium" },
        { id: "p1d6", days: "11-13", title: "Strings & Bit Manip.", goal: "StringBuilder & XOR Tricks", concept: "Immutability, Bits", task: "Count set bits", revision: "XOR logic: same bits = 0, diff = 1", problem: "Valid Palindrome, Single Num", difficulty: "Medium" },
        { id: "p1d7", days: "14", title: "Phase 1 Revision Sprint", goal: "Jo padha hai usko solidify karo", concept: "Review Flashcards", task: "Re-solve bugs", revision: "Core Java principles", problem: "Weekly Contest", difficulty: "Revision" }
      ],
      quiz: {
        question: "Java mein String immutable kyun hoti hai, bhai?",
        options: [
          "Taaki String Pool caching use ho sake",
          "Security ke liye (taaki parameters change na ho)",
          "Thread safety maintain karne ke liye",
          "Upar diye gaye sabhi reasons (All of the above)"
        ],
        answer: 3
      }
    },
    {
      id: 2,
      title: "Phase 2: Linear Data Structures",
      weeks: "3-5",
      quote: "Pointers se darna nahi hai, ye sirf memory ka address rakhte hain!",
      didYouKnow: "Deque (Double Ended Queue) Stack aur Queue dono ka kaam kar sakta hai, aur ye Java ke legacy Stack class se fast hai!",
      difficulty: "Medium",
      color: "yellow",
      days: [
        { id: "p2d1", days: "15-18", title: "Singly & Doubly Linked L.", goal: "Node manipulation sikho", concept: "Pointers & Refs", task: "Linked List reverse karo", revision: "Hamesha 'next' pointer track karo", problem: "Reverse LL, Middle of LL", difficulty: "Medium" },
        { id: "p2d2", days: "19-21", title: "Fast & Slow Pointers", goal: "Cycle detect karna sikho", concept: "Floyd's Algorithm (Hare & Tortoise)", task: "Find cycle start", revision: "Slow = 1 step, Fast = 2 steps", problem: "Linked List Cycle I & II", difficulty: "Medium" },
        { id: "p2d3", days: "22-25", title: "Stacks (LIFO)", goal: "Last In, First Out logic", concept: "Push, Pop, Peek", task: "Array implementation", revision: "Monotonic Stacks (Kaafi imp pattern)", problem: "Valid Parentheses, Next Greater", difficulty: "Medium" },
        { id: "p2d4", days: "26-29", title: "Queues & Deque (FIFO)", goal: "First In, First Out logic", concept: "Enqueue, Dequeue", task: "Queue via Stack implement karo", revision: "ArrayDeque in Java", problem: "Implement Queue, Sliding Win Max", difficulty: "Medium" },
        { id: "p2d5", days: "30-34", title: "Hash Tables (Maps/Sets)", goal: "O(1) Lookups ka magic", concept: "Hash collisions", task: "Frequency maps banao", revision: "equals() & hashCode() contract", problem: "Two Sum, Group Anagrams", difficulty: "Medium" },
        { id: "p2d6", days: "35", title: "Phase 2 Mock & Revision", goal: "Timed assessment (Test your speed)", concept: "Review patterns", task: "3 Random LC Meds", revision: "Pointer safety check karo", problem: "Virtual Test", difficulty: "Mock" }
      ],
      quiz: {
        question: "HashMap mein kisi element ko search karne ki average time complexity kya hoti hai?",
        options: ["O(N) - Linear Time", "O(log N) - Logarithmic", "O(1) - Constant Time (Magic!)", "O(N log N)"],
        answer: 2
      }
    },
    {
      id: 3,
      title: "Phase 3: Trees & Recursion",
      weeks: "6-9",
      quote: "Recursion ko samajhne ke liye, pehle recursion ko samajhna padega. Haha!",
      didYouKnow: "Har recursive approach ko iterative way mein solve kiya ja sakta hai Stack use karke. Recursion bas system ka call stack use karta hai!",
      difficulty: "Hard",
      color: "red",
      days: [
        { id: "p3d1", days: "36-40", title: "Recursion Basics", goal: "Base conditions samajhna", concept: "Call Stack memory", task: "Factorial, Fibonacci likho", revision: "Hamesha base condition pehle likho!", problem: "Pow(x, n), Fibonacci Number", difficulty: "Medium" },
        { id: "p3d2", days: "41-47", title: "Binary Trees (BT)", goal: "Traversals (BFS/DFS) master karo", concept: "In/Pre/Post order", task: "Height aur Diameter nikalo", revision: "BFS Queue use karta hai", problem: "Max Depth, Level Order, Dia.", difficulty: "Medium" },
        { id: "p3d3", days: "48-52", title: "Binary Search Trees (BST)", goal: "O(log N) operations ka fayda", concept: "Left < Node < Right", task: "Insert/Delete in BST", revision: "BST ka Inorder hamesha sorted hota hai!", problem: "Validate BST, LCA of BST", difficulty: "Hard" },
        { id: "p3d4", days: "53-57", title: "Heaps & PriorityQueue", goal: "Min/Max elements jaldi nikalo", concept: "Complete BT, Heapify", task: "Kth largest element nikalo", revision: "PQ Java mein by default MinHeap hota hai", problem: "Kth Largest, Merge K Sorted L.", difficulty: "Hard" },
        { id: "p3d5", days: "58-63", title: "Trie (Prefix Tree)", goal: "Autocomplete Data Structure", concept: "Array of pointers", task: "Insert/Search implement karo", revision: "26 child nodes (a-z)", problem: "Implement Trie, Word Search II", difficulty: "Hard" }
      ],
      quiz: {
        question: "BST (Binary Search Tree) ka kaunsa traversal elements ko sorted order mein print karta hai?",
        options: ["Pre-order", "In-order (Left, Root, Right)", "Post-order", "Level-order"],
        answer: 1
      }
    },
    {
      id: 4,
      title: "Phase 4: Graphs & Advanced Trees",
      weeks: "10-13",
      quote: "Zindagi ek graph hai doston. Apna shortest path to success dhundho!",
      didYouKnow: "Dijkstra's ek greedy algorithm hai. Bellman-Ford negative weights handle kar sakta hai but wo slow hota hai.",
      difficulty: "Hard",
      color: "red",
      days: [
        { id: "p4d1", days: "64-68", title: "Graph Fundamentals", goal: "Adj Matrix vs List samajhna", concept: "BFS & DFS in Graph", task: "Traversal loops likho", revision: "Hamesha 'visited' nodes track karo (Varna loop mei phas jaoge)", problem: "Number of Islands, Clone Graph", difficulty: "Medium" },
        { id: "p4d2", days: "69-72", title: "Cycle Det. & Topo Sort", goal: "DAG dependencies", concept: "Kahn's Algorithm", task: "Directed graph mein cycle dhundho", revision: "Topo Sort sirf DAGs (Directed Acyclic Graphs) pe lagta hai", problem: "Course Schedule I & II", difficulty: "Hard" },
        { id: "p4d3", days: "73-80", title: "Shortest Path Algos", goal: "Dijkstra & Bellman-Ford", concept: "Relaxation concept", task: "PQ for Dijkstra", revision: "Dijkstra negative weights pe fail ho jata hai", problem: "Network Delay Time, Cheapest F.", difficulty: "Hard" },
        { id: "p4d4", days: "81-85", title: "MST & Disjoint Set", goal: "Kruskal & Prim's", concept: "Union by Rank", task: "Path Compression", revision: "Find() should be O(1)", problem: "Min Cost to Connect Points", difficulty: "Hard" },
        { id: "p4d5", days: "86-91", title: "Phase 4 Graph Sprints", goal: "Graph Hard Problems practice", concept: "Bipartite Graphs", task: "Word Ladder", revision: "Visited states map use karo", problem: "Word Ladder, Is Graph Bipartite", difficulty: "Mock" }
      ],
      quiz: {
        question: "Agar graph mein negative edge weights hain, toh shortest path ke liye kaunsa algorithm best hai?",
        options: ["Dijkstra's Algorithm", "Bellman-Ford Algorithm", "Breadth First Search (BFS)", "Kruskal's Algorithm"],
        answer: 1
      }
    },
    {
      id: 5,
      title: "Phase 5: Algorithms & Techniques",
      weeks: "14-18",
      quote: "Problem ko divide karo, aur interview ko conquer karo!",
      didYouKnow: "Dynamic Programming basically recursion hi hai, bas memoization lagate hain taaki ek hi cheez baar-baar calculate na karni pade!",
      difficulty: "Hard",
      color: "red",
      days: [
        { id: "p5d1", days: "92-102", title: "Sort & Binary Search", goal: "Answer on Search Space", concept: "Mid calculation safe way", task: "Search in Rotated Array", revision: "mid = s + (e-s)/2 (overflow se bachne ke liye)", problem: "Koko Eating Bananas, Min In Rot.", difficulty: "Medium" },
        { id: "p5d2", days: "103-109", title: "Two Pointers & Sliding Win", goal: "O(N^2) loop ko O(N) banao", concept: "Shrink/Expand Window", task: "Max Sum Subarray", revision: "Track window boundaries (left, right)", problem: "Longest Substring Without Repeat", difficulty: "Medium" },
        { id: "p5d3", days: "110-115", title: "Greedy & Backtracking", goal: "Har choice explore karna", concept: "State space tree", task: "N-Queens, Subsets", revision: "Choice lene ke baad undo karna mat bhulna (pop)", problem: "Permutations, Combination Sum", difficulty: "Hard" },
        { id: "p5d4", days: "116-126", title: "Dynamic Programming", goal: "Memoization se Tabulation tak", concept: "Overlapping SubProblems", task: "Knapsack, LCS", revision: "Pehle recursive tree draw karo paper pe!", problem: "Climbing Stairs, Coin Change", difficulty: "Hard" }
      ],
      quiz: {
        question: "Dynamic Programming se solve hone wali problems ki 2 main properties kya hoti hain?",
        options: ["Greedy choice & Optimal substructure", "Overlapping subproblems & Optimal substructure", "Divide and conquer & Memoization", "Backtracking & Pruning"],
        answer: 1
      }
    },
    {
      id: 6,
      title: "Phase 6: Interview Prep & Mock Practice",
      weeks: "19-24",
      quote: "Practice mein jitna pasina bahaoge, interview mein utna kam khoon bahega. You've got this!",
      didYouKnow: "Communication is 50% of the interview. Code likhte time hamesha apna thought process bolte raho (Think out loud)!",
      difficulty: "Expert",
      color: "purple",
      days: [
        { id: "p6d1", days: "127-140", title: "Top 150 Blind/Striver", goal: "Mixed pattern identify karna", concept: "Systemic approach", task: "2-3 Mediums roz", revision: "Bina try kiye solution mat dekhna!", problem: "Blind 75 / Striver SDE Sheet", difficulty: "Mock" },
        { id: "p6d2", days: "141-150", title: "OOP & Core CS Basics", goal: "CS Core subjects revise karo", concept: "OS, DBMS, Networks", task: "SQL Queries practice", revision: "ACID properties, Normalization Forms", problem: "SQL schema practice", difficulty: "Medium" },
        { id: "p6d3", days: "151-168", title: "Mock Interviews (Final)", goal: "Bolte hue code karna sikho (Think out loud)", concept: "Time management", task: "Pramp/Peer mocks do", revision: "Approach pehle communicate karo, phir code likho", problem: "Weekly Contest", difficulty: "Mock" }
      ],
      quiz: {
        question: "DBMS mein ACID properties hoti hain. Isme 'I' ka matlab kya hota hai?",
        options: ["Inconsistency", "Isolation (Ek transaction dusre ko affect na kare)", "Integration", "Indexing"],
        answer: 1
      }
    }
  ],
  weeklyTracker: [
    { week: "W1", topics: "Java Foundations & OOP (Basics)", target: 15 },
    { week: "W2", topics: "Time Complexity, Arrays", target: 20 },
    { week: "W3", topics: "Linked Lists Deep Dive", target: 25 },
    { week: "W4", topics: "Stacks & Queues", target: 20 },
    { week: "W5", topics: "HashMaps & Mixed DS", target: 30 },
    { week: "W6", topics: "Recursion Basics", target: 20 },
    { week: "W7", topics: "Advanced Recursion", target: 20 },
    { week: "W8", topics: "Binary Trees (BFS/DFS)", target: 25 },
    { week: "W9", topics: "BST & Tries", target: 25 },
    { week: "W10", topics: "Graph Fundamentals", target: 15 },
    { week: "W11", topics: "Shortest Path Algos", target: 15 },
    { week: "W12", topics: "MST & Disjoint Sets", target: 20 },
    { week: "W13", topics: "Graph Advanced", target: 20 },
    { week: "W14", topics: "Sorting & Searching", target: 25 },
    { week: "W15", topics: "Two Pointers & Sliding Win", target: 30 },
    { week: "W16", topics: "Greedy Algorithms", target: 20 },
    { week: "W17", topics: "Dynamic Programming (1D)", target: 20 },
    { week: "W18", topics: "DP (2D, Strings, Knapsack)", target: 25 },
    { week: "W19", topics: "Mixed Interview Prep", target: 30 },
    { week: "W20", topics: "Top 150 LeetCode Sprint", target: 35 },
    { week: "W21", topics: "Top 150 LeetCode Sprint", target: 35 },
    { week: "W22", topics: "System Design Basics", target: 10 },
    { week: "W23", topics: "Mock Interviews & Revision", target: 20 },
    { week: "W24", topics: "Final Polish (Interview Ready!)", target: 20 }
  ],
  badges: [
    { id: "b1", icon: "🗡️", name: "Array Assassin", description: "Phase 1 Complete (Basics Cleared)" },
    { id: "b2", icon: "🔗", name: "Link Lord", description: "Phase 2 Complete (Pointers Mastered)" },
    { id: "b3", icon: "🌲", name: "Tree Whisperer", description: "Phase 3 Complete (Recursion Master)" },
    { id: "b4", icon: "🕸️", name: "Graph Guru", description: "Phase 4 Complete (Graph Pro)" },
    { id: "b5", icon: "🐉", name: "DP Dragon", description: "Phase 5 Complete (Algo Boss)" },
    { id: "b6", icon: "💼", name: "Interview Ready", description: "All Phases Complete (Job Ready!)" }
  ],
  cheatsheet: [
    { title: "Array Sorting", code: "Arrays.sort(arr); // Primitives: Dual-Pivot Quicksort O(N log N)\nArrays.sort(arr, Collections.reverseOrder()); // Objects only" },
    { title: "HashMap Freq Count", code: "HashMap<Integer, Integer> map = new HashMap<>();\nmap.put(key, map.getOrDefault(key, 0) + 1);\nfor (Map.Entry<Integer, Integer> entry : map.entrySet()) { ... }" },
    { title: "PriorityQueue", code: "PriorityQueue<Integer> minHeap = new PriorityQueue<>(); // Default\nPriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());" },
    { title: "Strings", code: "char[] chars = str.toCharArray();\nString s = String.valueOf(chars);\nStringBuilder sb = new StringBuilder(); // Loop ke andar String concatenation ke liye hamesha StringBuilder use karo!" }
  ]
};
