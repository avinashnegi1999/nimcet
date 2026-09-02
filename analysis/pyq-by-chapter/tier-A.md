# Tier A — every past question, chapter by chapter

Each question is printed as it appeared in the paper (text as extracted from the PDF; a few fraction-heavy options come out mangled — the paper in `papers/` is the reference). Grouped into the chapters of [`study-plan-by-tier.md`](../study-plan-by-tier.md). No official answer keys exist for most years; the fourteen most-recycled sets are solved in [`recycled-questions-solved.md`](../recycled-questions-solved.md).



---

&nbsp;

# A1 · Computer architecture, OS & memory

*81 questions across 19 papers · CPU, registers and instruction execution: 24 · Memory hierarchy, cache and storage: 42 · I/O, OS and software: 15*



&nbsp;

## A1 — CPU, registers and instruction execution


---

### Question 1 &nbsp;·&nbsp; NIMCET 2026, Q7

*fetch decode execute · difficulty medium*

Which of the following statements about the fetch-decode-execute cycle in a CPU are correct? I. The Program Counter is incremented after each instruction is fetched so the CPU moves to the next instruction. II. The Control Unit is responsible for fetching instructions and placing them in the Instruction Register. III. The ALU is responsible for decoding instructions and determining which operation to perform. IV. Registers are used to permanently store the operating system's files for fast access. Identify the correct option.


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** II and III only

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** I and II only

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** I, II, and III only

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** III and IV only


---

### Question 2 &nbsp;·&nbsp; NIMCET 2026, Q118

*instruction addressable memory · difficulty easy*

A CPU uses a 16-bit instruction format. If 4 bits are used for the opcode and the remaining bits specify a single memory address, what is the maximum addressable memory space for this instruction format?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 4096 locations

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1024 locations

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 65536 locations

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 16 locations


---

### Question 3 &nbsp;·&nbsp; NIMCET 2026, Q120

*opcode · difficulty easy*

In a standard machine language instruction, which component identifies the specific operation to be performed, such as addition or data movement?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Operand

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Opcode

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Register

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** Immediate Address


---

### Question 4 &nbsp;·&nbsp; NIMCET 2025, Q14

*control unit types · difficulty medium*

In the design of a control unit of a processor, two common approaches are used: hardware control and microprogrammed control. Consider the following statements: 1. Hardware control units are generally faster but more difficult to modify than microprogrammed control units. 2. In a horizontal microprogrammed control unit, each control signal has a separate bit in the control word. 3. Vertical microprogramming leads to longer control words but provides greater parallelism. 4. Microprogrammed control units are typically easier to implement and modify than hardware control units.


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 2, 3 and 4 only

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1, 3 and 4 only

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 1, 2, 3 and 4

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 1, 2 and 4 only


---

### Question 5 &nbsp;·&nbsp; NIMCET 2025, Q15

*instruction count encoding · difficulty medium*

Consider a system with a CPU having 6 registers and 32-bit instructions. The maximum possible size of the main memory is 512 KB (1K = 210) Each instruction takes two registers and one memory of the main memory is 512 KB (1K 2 ). Each instruction takes two registers and one memory address as operands. Which one of the following correctly gives the maximum possible distinct instructions that can be there in the instruction set of the CPU?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1024

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 256

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 128

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 64


---

### Question 6 &nbsp;·&nbsp; NIMCET 2025, Q20

*pipeline TLB access · difficulty medium*

In an instruction execution pipeline, the earliest that the instruction TLB and data TLB can be accessed are


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Fetch stage and memory stage respectively

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Memory stage and memory stage respectively

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Memory stage and execute stage respectively

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** Fetch stage and fetch stage respectively


---

### Question 7 &nbsp;·&nbsp; NIMCET 2025, Q23

*CPU cache memory units · difficulty medium*

In computer architecture, which of the following correctly matches the fundamental unit used in the CPU, cache, and main memory respectively?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** CPU → Block, Cache → Page, Memory → Word

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** CPU → Block, Cache → Word, Memory → Page

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** CPU → Page, Cache → Word, Memory → Block

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** CPU → Word, Cache → Block, Memory → Page


---

### Question 8 &nbsp;·&nbsp; NIMCET 2024, Q101

*instruction format · difficulty easy*

Which of the following components is not a part of an instruction formation in CPU processing?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Opcode

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Register file

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Source operand

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** Destination operand


---

### Question 9 &nbsp;·&nbsp; NIMCET 2024, Q105

*memory data register · difficulty easy*

Which of the following components is used to establish a communication link between a CPU and the peripheral devices to transfer data?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** index register

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** memory address register

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** memory data register

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** instruction registers


---

### Question 10 &nbsp;·&nbsp; NIMCET 2024, Q109

*CPU performance factors · difficulty easy*

Which of the following do not affects CPU performance?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** number of cores

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Cache size

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Amount of RAM

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** Clock speed


---

### Question 11 &nbsp;·&nbsp; NIMCET 2023, Q74

*Von Neumann · difficulty easy*

Which of the following is true about Von Neumann architecture?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** It has separate memory for data and instructions

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** It has separate storage for input/output operations

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** It has a separate processing unit for data and instructions

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** It has a single memory unit for both data and instructions


---

### Question 12 &nbsp;·&nbsp; NIMCET 2023, Q83

*clock period · difficulty easy*

If a processor clock is rated as million cycles per second, then its clock perios is:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 2.50 × 10 −10 sec

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 4.00 × 10 −10 sec

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 1.00 × 10 −10 sec

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 5.00 × 10 −10 sec


---

### Question 13 &nbsp;·&nbsp; NIMCET 2023, Q87

*program counter · difficulty easy*

Which of the following registers is used to keep track of address of the memory location where the next instruction is located?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Memory Data Register

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Memory Address Register

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Program Counter

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** Instruction counters G i i (h // i d i /lib / / 60 )


---

### Question 14 &nbsp;·&nbsp; NIMCET 2023, Q88

*CPU cycle · difficulty easy*

The time required for fetching and execution of one machine instruction is:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Seek time

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Real time

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Delay time

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** CPU cycle


---

### Question 15 &nbsp;·&nbsp; NIMCET 2022, Q95

*clock period · difficulty easy*

If a processor clock is rated as 2500 million cycles per second, then its clock period is:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 2 50 × 10 −10 1 2.50 × 10 0 sec

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 4.0 × 10 −10 sec

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 1.00 × 10 −10 sec

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of the above


---

### Question 16 &nbsp;·&nbsp; NIMCET 2021, Q1

*pipelining · difficulty easy*

The Process when processor fetch or decode another instruction during the execution of current instruction is called


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Super computing

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Pipelining

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Cloud Computing

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** Accumulators


---

### Question 17 &nbsp;·&nbsp; NIMCET 2021, Q2

*ALU registers · difficulty easy*

Which of the following is used by ALU to store the intermediate results?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Stack

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Heap

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Registers

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** Accumulators


---

### Question 18 &nbsp;·&nbsp; NIMCET 2021, Q7

*MAR register · difficulty easy*

To fetch data from secondary memory which one of the following register is used


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** MAR

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** PC

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** IR

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** MBR


---

### Question 19 &nbsp;·&nbsp; NIMCET 2021, Q9

*execution time steps · difficulty medium*

Consider a computer system with speed of 106 instructions per second. A program P, having 2n2 steps is run on this system, where n is the input size. If n = 10000, what is the execution time for P?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1.2 seconds

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 20 seconds

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 100 seconds

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 200 seconds


---

### Question 20 &nbsp;·&nbsp; NIMCET 2020, Q55

*CPU cycle · difficulty easy*

The time required for fetching and execution of one simple machine instruction is known as


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Delay time

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** CPU cycle

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Real Time

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** Seek Time


---

### Question 21 &nbsp;·&nbsp; NIMCET 2012, Q114

*control unit · difficulty easy*

Which of the following units is used to supervise each instruction in the CPU?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Control unit

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Accumulator

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** ALU

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** Control Register


---

### Question 22 &nbsp;·&nbsp; NIMCET 2010, Q71

*stored program machine · difficulty easy*

Which is a stored-program machine?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Micro-processor p

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Calculator

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Analog computer

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** Micro-computer


---

### Question 23 &nbsp;·&nbsp; NIMCET 2009, Q104

*index register · difficulty medium*

Index register in a digital computer is used for:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Pointing to the stack address.

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Indirect addressing.

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Keeping track the number of times loop executed.

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** Address modification.


---

### Question 24 &nbsp;·&nbsp; NIMCET 2009, Q105

*microprogrammed control · difficulty medium*

Micro programmed control unit is:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Faster than hard wired unit.

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Slower than hard wired unit.

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** To facilitate easy implementation of new instructions.

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** Both (2) and (3).



&nbsp;

## A1 — Memory hierarchy, cache and storage


---

### Question 25 &nbsp;·&nbsp; NIMCET 2026, Q2

*storage types match · difficulty easy*

Consider the following table. Entry Description I. Solid State A. Volatile main memory that holds Drive data currently in use by the OS and applications II. Cache B. Long-term, non-volatile storage Memory used for the operating system and large files III. Random C. Fastest and smallest storage Access Memory available for processor computations ( RAM) IV. CPU D. High-speed buffer memory Registers between the CPU and RAM that holds frequently accessed data Which of the following options is the correct match between the entries (I-IV) and the descriptions (A-D)?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** I-A, II-C, III-D, IV-B

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** I-A, II-B, III-D, IV-C

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** I-B, II-D, III-A, IV-C

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** I-B, II-C, III-D, IV-A


---

### Question 26 &nbsp;·&nbsp; NIMCET 2026, Q102

*disk sectors cylinder · difficulty medium*

A hard drive system has 2 circular disks with a total of 4 surfaces. The disk has 5000 tracks, each with 2000 sectors. How many sectors can be read without the reading head having to make a mechanical movement?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 10000

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 20000

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 4000

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 8000


---

### Question 27 &nbsp;·&nbsp; NIMCET 2026, Q104

*virtual memory benefit · difficulty medium*

A computer has 16GB of RAM. It typically needs to support 100 processes, each of which require an average of 100M B . Will this computer benefit from a Virtual Memory system? Choose the correct option and reasoning below.


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Yes, since Virtual Memory is faster than RAM

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** No, since total memory requirement is less than total RAM available

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Yes, since Virtual Memory provides protection across different processes

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** No, since Virtual Memory makes the system vulnerable to security attacks


---

### Question 28 &nbsp;·&nbsp; NIMCET 2026, Q110

*memory speed order · difficulty easy*

Which one of the following is correct order of memory types in increasing access speed, from slowest to fastest?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Hard Drive → RAM → Cache → CPU Registers

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** RAM → Hard Drive → Cache → CPU Registers

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Cache → RAM → CPU Registers → Hard Drive

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** Hard Drive → Cache → RAM → CPU Registers


---

### Question 29 &nbsp;·&nbsp; NIMCET 2025, Q12

*DRAM SRAM statements · difficulty medium*

Dynamic RAM (DRAM) stores each bit of data in a separate capacitor. Due to leakage, the stored charge tends to dissipate over time and needs to be refreshed periodically. Consider the following statements: P: DRAM requires refreshing because it uses capacitors to store bits. Q: SRAM does not require refreshing because it uses flip-flops instead of capacitors. R: DRAM is faster than SRAM because it needs less frequent access. S: DRAM is more suitable for main memory than SRAM due to its density.


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** P, Q, and S are true; R is false.

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Only P and Q are true; R is false, and S is irrelevant.

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** All statements P, Q, R, and S are true.

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** P and S are true; Q and R are false.


---

### Question 30 &nbsp;·&nbsp; NIMCET 2025, Q17

*secondary storage speed · difficulty easy*

Which of the following secondary storage devices has the fastest access time: Optical Drive, Magnetic Tape Drive, Hard Disk Drive (HDD), Solid State Drive (SDD)?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Solid State Drive (SDD)

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Optical Drive

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Magnetic Tape Drive

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** Hard Disk Drive (HDD)


---

### Question 31 &nbsp;·&nbsp; NIMCET 2025, Q19

*ASCII Unicode · difficulty easy*

Which of the following statements about ASCII and Unicode is correct? Unicode is backward compatible


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** with ASCII and includes all ASCII characters in its encoding. ASCII uses 16 bits per

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** character, while Unicode uses only 7 bits. Unicode and ASCII are completely different and 3 share no common characters. ASCII can represent more characters than Unicode 4 because it uses fewer bits per character.


---

### Question 32 &nbsp;·&nbsp; NIMCET 2025, Q22

*interrupt vs programmed IO · difficulty medium*

Consider a system running under two types of workloads: (a) CPU-intensive jobs, (b) I/O-intensive jobs. Which of the following statements about the relative performance of Interrupt- driven I/O and Programmed I/O is correct? Programmed I/O performs better for CPU-intensive jobs,


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** while interrupt-driven I/O performs better for I/O- intensive jobs. Programmed I/O performs better in both CPU-intensive

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** and I/O-intensive workloads because it gives the CPU full control. Interrupt-driven I/O performs better in both CPU-intensive

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** and I/O-intensive workloads because it always reduces CPU involvement. Interrupt-driven I/O performs better for CPU-intensive jobs by freeing the CPU, while 4 programmed I/O performs better for I/O-intensive jobs due to tighter control.


---

### Question 33 &nbsp;·&nbsp; NIMCET 2024, Q79

*cache intermediary · difficulty easy*

Cache memory functions as an intermediary between


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** CPU and Hard Disk

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** None of these

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** CPU and RAM

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** RAM and ROM


---

### Question 34 &nbsp;·&nbsp; NIMCET 2024, Q81

*TLB tag size · difficulty hard*

A CPU generates 32 bits virtual addresses. The page size is 4 KB. The processor has a translation look-aside buffer (TLB) which can hold a total of 128-page table entries and is 4- way set associate. The minimum size of the TLB tag is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 11 bits

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 20 bits

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 13 bits

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 15 bits


---

### Question 35 &nbsp;·&nbsp; NIMCET 2024, Q85

*cache purpose · difficulty easy*

The primary purpose of cache memory in a computer system is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** to temporarily store frequently accessed data and instruction for faster access by the CPU.

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** To permanently store data and programs

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** to provide additional storage space when the main memory is full.

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** to manage input and output operations between the CPU and peripherals.


---

### Question 36 &nbsp;·&nbsp; NIMCET 2024, Q89

*bit smallest unit · difficulty easy*

Which of the following is the smallest unit of data in a computer ?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Bit

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Byte

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** KB

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** Nibble


---

### Question 37 &nbsp;·&nbsp; NIMCET 2024, Q93

*RAM chips count · difficulty medium*

A computer system has 16-bit wide address/ data bus that uses RAM chips of 4K × 8-bit capacity. The number of RAM chips are needed to provide a memory capacity of 64 Kbytes memory is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 32

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 16

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 64

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 8


---

### Question 38 &nbsp;·&nbsp; NIMCET 2023, Q78

*FAT32 NTFS · difficulty medium*

A wrong sentence related to FAT 32 and NTFS file systems is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Read and write speeds of NTFS are faster than that of FAT 32

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** FAT 32 has lower disk utilisation compared to NTFS

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** NTFS stands for New Technology File System

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** FAT 32 store individual files of size up to 32 GB


---

### Question 39 &nbsp;·&nbsp; NIMCET 2023, Q82

*buffer · difficulty easy*

What is the name of the storage device that compensates the difference in rates of flow of data from one device to another?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Concentrator

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Buffer

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Cache

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** Cache


---

### Question 40 &nbsp;·&nbsp; NIMCET 2023, Q84

*TLB tag size · difficulty hard*

A CPU generates 32-bit virtual addresses. The page size is 4 KB. The processor has a translation look-aside buffer (TLB) which can hold a total of 128 page table entries and is 4 -way set associative. The minimum size of the TLB tag is:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 20 bits

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 11 bits

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 13 bits

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 15 bits


---

### Question 41 &nbsp;·&nbsp; NIMCET 2023, Q90

*RAM chips count · difficulty medium*

How many 32K × 1 RAM chips are needed to provide a memory capacity of 256K bytes?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 64

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 32

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 8

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 128


---

### Question 42 &nbsp;·&nbsp; NIMCET 2022, Q97

*FFFF memory size · difficulty easy*

FFFF will be the last memory location in a memory of size


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1k

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 64k 6

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 32k

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 16k


---

### Question 43 &nbsp;·&nbsp; NIMCET 2021, Q3

*TB EB in GB · difficulty easy*

One TeraByte(TB)=_________GB and One ExaByte(EB)=_______GB


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 2 10 GB, 2 16 GB

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2 10 GB, 2 20 GB

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 2 10 GB, 2 24 GB

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 2 10 GB, 2 30 GB


---

### Question 44 &nbsp;·&nbsp; NIMCET 2021, Q5

*fastest memory · difficulty easy*

Which of the following is the fastest means of memory access for CPU?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Registers

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Cache

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Main Memory

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** Stack


---

### Question 45 &nbsp;·&nbsp; NIMCET 2021, Q10

*program controlled IO · difficulty medium*

To access the I/O devices the status flags is continuously checked in


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Program controlled I/O

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Memory mapped I/O

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** I/O Mapped

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of the above


---

### Question 46 &nbsp;·&nbsp; NIMCET 2020, Q49

*primary memory · difficulty easy*

The memory unit which directly communicates with the CPU is known as


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Primary Memory

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Secondary Memory

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Shared Memory

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** Auxiliary Memory


---

### Question 47 &nbsp;·&nbsp; NIMCET 2020, Q50

*DRAM vs SRAM · difficulty easy*

Dynamic RAM consumes……. Power and ……than Static RAM


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** More, Faster

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** More, Slower

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Less, Slower

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** Less, Faster


---

### Question 48 &nbsp;·&nbsp; NIMCET 2020, Q53

*exabyte · difficulty easy*

One Exabyte is equal to …


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 108 bytes

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1 Zetta Bytes divided (/) by one thousand

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 1 Peta Bytes multiplied (×) by one thousand

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** All of the above


---

### Question 49 &nbsp;·&nbsp; NIMCET 2016, Q92

*disk addressing · difficulty hard*

Consider a hard disk with 16 recording surfaces (0-15) having 16384 cylinders (0-16383) and each cylinder contains 64 sectors(0-63). Data storage capacity in each sector is 512 bytes. Data are i d li d i d h dd i f i fil f i i d i h di k organized cyclinderwise and the addressing format is . A file of size 42797KB is stored in the disk and the starting disk location of the file is <1200,9,40>. What is cylinder number of the last sector of the file, if it is stored in a contiguous manner?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1284

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1282

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 1286

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 1288


---

### Question 50 &nbsp;·&nbsp; NIMCET 2016, Q100

*disk latency · difficulty medium*

A hard disk has a rotational speed of 6000 rpm. Its average latency time is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 5 × 10–3 sec

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 0.05 sec

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 1 sec

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 0.5 sec


---

### Question 51 &nbsp;·&nbsp; NIMCET 2014, Q39

*nibble · difficulty easy*

How many bytes are there in a nibble?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** one - fourth

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** half

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 2

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 4


---

### Question 52 &nbsp;·&nbsp; NIMCET 2013, Q113

*flip flop memory · difficulty easy*

Which of the following circuit is used as a memory device in computers?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Flip-Flop

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Rectifier

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Comparator

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** All of these


---

### Question 53 &nbsp;·&nbsp; NIMCET 2013, Q116

*EEPROM acronym · difficulty easy*

Acronym of EEPROM is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Extended Erasable Programmable Memory

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Electrically Erasable Read Only Memory

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Electrically Erasable Programmable Read Only Memory

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** Extended Erasable Page-Oriented Memory


---

### Question 54 &nbsp;·&nbsp; NIMCET 2013, Q117

*CD laser · difficulty easy*

For reproducing sound, a CD audio player uses a


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Quartz crystal

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Titanium needle

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Barium ceramic

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** Laser beam


---

### Question 55 &nbsp;·&nbsp; NIMCET 2012, Q108

*backup device speed · difficulty easy*




&nbsp;&nbsp;&nbsp;&nbsp;**(1)** (a)

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** (b)

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** (c)

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** (d)


---

### Question 56 &nbsp;·&nbsp; NIMCET 2012, Q109

*ROM type · difficulty easy*




&nbsp;&nbsp;&nbsp;&nbsp;**(1)** (a)

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** (b)

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** (c)

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** (d)


---

### Question 57 &nbsp;·&nbsp; NIMCET 2012, Q113

*primary vs secondary storage · difficulty easy*

Primary storage is … as compared to secondary memory.


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** slow and expensive

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** fast and inexpensive

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** fast and expensive

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** slow and inexpensive


---

### Question 58 &nbsp;·&nbsp; NIMCET 2011, Q90

*petabyte · difficulty easy*

A petabyte represents approximately


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1000 gigabytes

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1000 kilobytes

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 1000 terabytes

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 1000 yottabytes


---

### Question 59 &nbsp;·&nbsp; NIMCET 2010, Q70

*data hierarchy · difficulty easy*

Place the common data elements from smallest to largest:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Field, Record, Character, Database

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Character, Record Field, Database

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Character, Field, Record, Database

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** Bit, Byte, Character, Record, Field, Database


---

### Question 60 &nbsp;·&nbsp; NIMCET 2010, Q72

*memory bandwidth · difficulty medium*

Access time = 45 ns, gap = 5 ns Bandwidth = ?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 25 MHz

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 20 MHz

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 40 MHz

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 50 MHz


---

### Question 61 &nbsp;·&nbsp; NIMCET 2010, Q73

*address bus word length · difficulty medium*

CPU has 12-bit address bus. Total memory = 16 KB. Word length = ?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 2 bytes

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 4 bytes

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 8 bytes

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 16 bytes


---

### Question 62 &nbsp;·&nbsp; NIMCET 2009, Q96

*virtual memory address · difficulty medium*

In the virtual memory system, the address space specified by address lines of the CPU must be ______ than the physical memory size and ______ than the secondary storage size.


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Smaller, smaller

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Smaller, larger

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Larger, smaller

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** Larger, larger


---

### Question 63 &nbsp;·&nbsp; NIMCET 2008, Q101

*virtual memory · difficulty medium*

Which of the following is (are) true about virtual memory systems that uses pages? I. The virtual address space can be larger than the amount of physical memory. II. Programs must be resident in main memory throughout their execution. III. Pages correspond to semantic characteristics of the program.


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** I only

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** II Only

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** I and II

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** I and III


---

### Question 64 &nbsp;·&nbsp; NIMCET 2008, Q103

*ASCII bits · difficulty easy*

How many bits are required to store an ASCII character?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 7

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 6

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 8

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of these


---

### Question 65 &nbsp;·&nbsp; NIMCET 2008, Q107

*memory address lines · difficulty medium*

The capacity of a memory unit is defined by the number of words multiplied by the number of bits per word. How many separate address and data line are needed for a memory of 4K × 16?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 10 address lines and 16 data lines

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 12 address lines and 10 data lines

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 12 address lines and 16 data lines

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 12 address lines and 8 data lines


---

### Question 66 &nbsp;·&nbsp; NIMCET 2008, Q108

*direct mapped cache · difficulty medium*

The main disadvantage of direct mapping of cache organization is that


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** It doesn’t allow simultaneous access to the intended data and its tag

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** It is more expensive than other type of organization 3 The cache hit ratio is degraded if two or more blocks used alternatively map onto the same block frame in the cache. 4 The number of blocks required for the caches increases linearly with the size of the main memory.



&nbsp;

## A1 — I/O, OS and software


---

### Question 67 &nbsp;·&nbsp; NIMCET 2026, Q9

*system vs application software · difficulty medium*

A system administrator is analysing the software layers of a corporate computer. Which of the following statements correctly distinguish system software from application software? I. Device drivers are classified as application software because end-users install them to run devices. II. Linux, macOS, and Android are operating systems and are classified as system software. III. The OS kernel manages CPU scheduling, memory allocation, and hardware access on behalf of programs. IV. A web browser and a word processor are examples of system software because they help users perform common tasks. Identify the CORRECT option.


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** I and IV only

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** II and III only

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** I, II, and III only

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** II, III, and IV only


---

### Question 68 &nbsp;·&nbsp; NIMCET 2026, Q106

*DLL disadvantage · difficulty medium*

Which one of the following is a disadvantage of using dynamically linked library DLL, compared to using statically linked library?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Executable file size is larger with DLL

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** RAM usage is larger with DLL

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** A program cannot take advantage of bug-fixes in the DLL, long after the program is written

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of the other options


---

### Question 69 &nbsp;·&nbsp; NIMCET 2024, Q77

*DMA · difficulty easy*

Which of the following interfaces perform the transfer of data between the memory and the I/O peripheral without involving the CPU?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** DMA

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Serial Interface

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** branch interface

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** DDA


---

### Question 70 &nbsp;·&nbsp; NIMCET 2021, Q4

*locality of reference · difficulty easy*

The Cache Memory is more effective because of


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Memory localization

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Locality of reference

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Memory Size

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of the mentioned


---

### Question 71 &nbsp;·&nbsp; NIMCET 2018, Q4

*effective access time · difficulty medium*

Let the memory access time is 10 milliseconds and cache access time is 10 microseconds. Assume the cache hit ratio 15%. The effective memory access time is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 2 milliseconds

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1.5 milliseconds

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 1.85 microseconds

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 1.85 milliseconds


---

### Question 72 &nbsp;·&nbsp; NIMCET 2017, Q28

*effective access time · difficulty medium*

Let the memory access time is 10 miliseconds and cache hit ratio 15%. The effective memory access time is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 2 miliseconds

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1.5 miliseconds

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 18.5 microseconds

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 18.5 miliseconds


---

### Question 73 &nbsp;·&nbsp; NIMCET 2017, Q30

*bootstrap loader · difficulty easy*

The first instruction of bootstrap loader program of an operating system is stored in


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** RAM

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Hard Disk

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** BIOS

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of these


---

### Question 74 &nbsp;·&nbsp; NIMCET 2012, Q107

*IO processor · difficulty easy*




&nbsp;&nbsp;&nbsp;&nbsp;**(1)** (a)

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** (b)

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** (c)

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** (d)


---

### Question 75 &nbsp;·&nbsp; NIMCET 2010, Q67

*data processing functions · difficulty easy*

Which of the following is NOT one of the four major data-processing functions of a computer?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Gathering data

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Processing data into information

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Analyzing the data or information

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** Storing the data or information


---

### Question 76 &nbsp;·&nbsp; NIMCET 2010, Q74

*IO mapped IO · difficulty medium*

For I/O mapped I/O:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Memory and I/O addresses are distinct

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Not all data transfer instructions can be used for I/O

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Both (1) and (2)

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of these


---

### Question 77 &nbsp;·&nbsp; NIMCET 2010, Q75

*OS bootstrap · difficulty easy*

Execution of OS begins with:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Window manager

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Scheduler

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Bootstrap

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None


---

### Question 78 &nbsp;·&nbsp; NIMCET 2009, Q100

*data bus width · difficulty easy*

Why is the width of a data bus so important to the processing speed of a computer?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** The narrower it is, the greater the computer’s processing speed.

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** The wider it is, the more data can fit into the main memory.

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** The wider it is, the greater the computer’s processing speed.

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** The wider it is, the slower the computer’s processing speed.


---

### Question 79 &nbsp;·&nbsp; NIMCET 2009, Q102

*interrupt handling · difficulty medium*

On receiving an interrupt from an I/O device, the CPU:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Hand over the control of address and data bus to interrupting device.

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Branch off to interrupt service subroutine immediately.

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Branch off to interrupt service subroutine after completion of current instruction.

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of the above.


---

### Question 80 &nbsp;·&nbsp; NIMCET 2008, Q105

*compiler vs interpreter · difficulty medium*

Which one of the following statements is always true?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** A compiled program used more memory than an interpreted program.

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** A compiler converts a program to a lower level language for execution.

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** A compiler for a high level language takes less memory than it’s interpreter.

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** Complied programs take more time to execute than interpreted programs.


---

### Question 81 &nbsp;·&nbsp; NIMCET 2008, Q110

*bootstrap loader · difficulty easy*

The first instruction of bootstrap loader program of an operating system is stored in


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Ram

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** BIOS

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Hard Disk

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of these



---

&nbsp;

# A2 · Coordinate & conic geometry

*116 questions across 19 papers · Straight lines and pairs of lines: 51 · Circles: 17 · Parabola: 12 · Ellipse: 15 · Hyperbola: 8 · Other loci and areas: 13*



&nbsp;

## A2 — Straight lines and pairs of lines


---

### Question 1 &nbsp;·&nbsp; NIMCET 2026, Q44

*point equidistant axes line · difficulty medium*

2 Let (x0 , y0 ) ∈ Z be a point on the straight line 8x − 3y = 11 which is equidistant from the coordinate axes. Then, the point (x0 , y0 ) will lie only in:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** I quadrant

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** II quadrant

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** III quadrant

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** IV quadrant


---

### Question 2 &nbsp;·&nbsp; NIMCET 2026, Q111

*hyperbola tangent triangle area · difficulty medium*

Find the area of the triangle formed in the right half-plane by the lines x − y = 0 and x + y = 0, and a tangent to the hyperbola x2 − y 2 = a2 , where a is a non-zero number.


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** a 2

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** a 2

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 2a 2

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 4a 2


---

### Question 3 &nbsp;·&nbsp; NIMCET 2026, Q119

*triangle area midpoints · difficulty easy*

A triangle has a vertex at (1, 2) and the mid points of the two sides through it are (-1, 1) and (2, 3). Then the area of this triangle is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 3

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 4


---

### Question 4 &nbsp;·&nbsp; NIMCET 2025, Q57

*equilateral triangle in parabola centroid · difficulty medium*

An equilateral triangle is inscribed in the parabola y 2 = x . One vertex of the triangle is at the vertex of the parabola. The centroid of triangle is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** (1,0) –

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** (√2 , 0) –

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** (√3 , 0)

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** (2, 0)


---

### Question 5 &nbsp;·&nbsp; NIMCET 2025, Q62

*circle touching axes and line · difficulty medium*

A circle with its center in the first quadrant touches both the coordinate axes and the line x-y-2=0. Then the area of the circle is π 1 2


&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 4π

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** π

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 2π


---

### Question 6 &nbsp;·&nbsp; NIMCET 2025, Q67

*circle image across line · difficulty medium*

The circle x2 + y 2 + αx + βy + γ = 0 is the image of the circle x 2 + y 2 − 6x − 10y + 30 = 0 across the line 3x + y = 2. The value of [α + β + γ] is (where [.] represents the floor function.)


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 20

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 22

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 23

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 21


---

### Question 7 &nbsp;·&nbsp; NIMCET 2025, Q82

*obtuse angle between lines · difficulty easy*

The obtuse angle between lines 2y = x + 1 and y = 3x + 2 is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 4π 5 2π 2 3 5π 3 6 4 3π 4


---

### Question 8 &nbsp;·&nbsp; NIMCET 2024, Q22

*perpendicular bisector intercept · difficulty medium*

If the perpendicular bisector of the line segment joining p(1,4) and q(k,3) has yintercept -4, then the possible values of k are


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** -3 and 3

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** -1 and 1

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** -2 and 2

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** -4 and 4


---

### Question 9 &nbsp;·&nbsp; NIMCET 2024, Q52

*pair of lines perpendicular angle · difficulty medium*

For what values of λ does the equation 6x2 − xy + λy 2 = 0 represents two perpendicular lines and two lines inclined at an angle of π/4 .


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** -6 and -2

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 6 and 1

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** -6 and -35

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** -6 and 1


---

### Question 10 &nbsp;·&nbsp; NIMCET 2024, Q86

*points side of line · difficulty easy*

The points (1,1/2) and (3,-1/2) are


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** In between the lines 2x+3y=6 and 2x+3y = -6

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** On the same side of the line 2x+3y = 6

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** On the same side of the line 2x+3y = -6

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** On the opposite side of the line 2x+3y = -6


---

### Question 11 &nbsp;·&nbsp; NIMCET 2023, Q25

*same side of line · difficulty medium*

The range of values of θ in the interval (0, π) such that the points (3,5) and (sinθ, cosθ) lie on the same side of the line x + y − 1 = 0, is 3π


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** (0, ) 4 π

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** (0, ) 2 π

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** (0, ) 3 π

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** (0, ) 4


---

### Question 12 &nbsp;·&nbsp; NIMCET 2022, Q12

*distance parallel lines ratio · difficulty medium*

Let a be the distance between the lines −2x + y = 2 and 2x − y = 2, and b be the distance between the lines 4x − 3y = 5 and 6y − 8x = 1 , then –


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 40b = 11√5 a –

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 40√2 a = 11b –

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 11√2 b = 40a –

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 11√2 a = 40b


---

### Question 13 &nbsp;·&nbsp; NIMCET 2022, Q26

*parallelogram area lines · difficulty medium*

Area of the parallelogram formed by the lines y=4x, y=4x+1, x+y=0 and x+y=1


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1/5

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2/5

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 5

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 10


---

### Question 14 &nbsp;·&nbsp; NIMCET 2022, Q39

*line intercept bisected · difficulty medium*

A straight line through the point (4, 5) is such that its intercept between the axes is bisected at A, then its equation is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 3x + 4y =20

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 3x - 4y + 7 = 0

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 5x - 4y = 40

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 5x + 4y = 40


---

### Question 15 &nbsp;·&nbsp; NIMCET 2021, Q57

*angle pair of lines · difficulty medium*

2 cos θ+3 sin θ If θ is acute angle between the pair of lines x2 − 7xy + 12y 2 = 0 , then = 4 sin θ+5 cos θ 29 1 69


&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 61 39 3 61 69 4 29


---

### Question 16 &nbsp;·&nbsp; NIMCET 2021, Q59

*median equation lines · difficulty hard*

The lines px + qy = 1 and qx + py = 1 are respectively the sides AB, AC of the triangle ABC and the base BC is bisected at (p, q). Equation of the median of the triangle through the vertex A is (2pq − 1) (qx + py − 1) 2 − (p 1 2 + q − 1)(px + qy − 1) = 0 (2pq − 1) (px + qy − 1) 2 + (p 2 + q − 1)(qx + py − 1) = 0 (2pq − 1) (px + qy − 1) 2 − (p 3 2 + q − 1)(qx + py − 1) = 0 (2pq − 1) (qx + py − 1) 2 + (p 4 2 + q − 1)(px + qy − 1) = 0


---

### Question 17 &nbsp;·&nbsp; NIMCET 2021, Q75

*parallelogram fourth vertex · difficulty easy*

If P(1,2), Q(4,6), R(5,7) and S(a,b) are the vertices of a parallelogram PQRS, then


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** a=2, b=3

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** a=3, b=4

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** a=2, b=4

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** a=3, b=5


---

### Question 18 &nbsp;·&nbsp; NIMCET 2019, Q22

*parallelogram ratio · difficulty medium*

In a parallelogram ABCD, P is the midpoint of AD. Also, BP and AC intersect at Q. Then AQ : QC =


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1:3

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 3:1

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 2:1

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 1:2


---

### Question 19 &nbsp;·&nbsp; NIMCET 2019, Q23

*median ratio geometry · difficulty medium*

The median AD of ΔABC is bisected at E and BE is extended to meet the side AC in F. The AF : FC =


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1:3

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2:1

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 1:2

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 3:1


---

### Question 20 &nbsp;·&nbsp; NIMCET 2019, Q115

*acute angle region lines · difficulty medium*

If the points lie in the region corresponding to the acute angle between the lines and then


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** a (2,6)

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** a (4,6)

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** a (2,4)

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** a (2,6)


---

### Question 21 &nbsp;·&nbsp; NIMCET 2018, Q41

*pair of lines slopes differ · difficulty medium*

The slope of two-lines 6x2 − xy − 2y 2 = 0 differ by


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 5/2

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 7/2

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 7/5

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** -1


---

### Question 22 &nbsp;·&nbsp; NIMCET 2018, Q43

*circle line intersection · difficulty medium*

The point of intersection os circle x2 + y 2 + 10x − 12y + 51 = 0 and the line 3y + x = 3 is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** (-6, 3)

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** (3,-6)

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** (6,-3)

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** (-3,6)


---

### Question 23 &nbsp;·&nbsp; NIMCET 2018, Q49

*orthocentre locus · difficulty hard*

The locus of the orthocentre of the triangle formed by the lines (1+p)x-py+p(1+p)=0, (1+p)(x-q)+q(1+ q)=0 and y=0 where p≠q is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** a hyperbola

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** a parabola

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** an ellipse

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** a straight line


---

### Question 24 &nbsp;·&nbsp; NIMCET 2018, Q52

*perpendicular line · difficulty easy*

Equation of the line perpendicular to x-2y=1 and passing through (1,1) is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** x+2y=2

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** x+y=2

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** y=2x+3

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** y=-2x+3


---

### Question 25 &nbsp;·&nbsp; NIMCET 2017, Q55

*line through fixed point AP · difficulty easy*

If non-zero numbers a, b, c are in A.P., then the straight line ax + by + c = 0 always passes through a fixed point, then the point is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** (1,-2)

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** (1, -1/2)

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** (-1,2)

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** (-1,-2)


---

### Question 26 &nbsp;·&nbsp; NIMCET 2017, Q56

*perpendicular lines condition · difficulty easy*

If the lines x + (a – 1)y + 1 = 0 and 2x + a2y – 1 = 0 are perpendicular, then the condition satisfies by a is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** |a| = 2

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 0<a<1

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** -1<a<0

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** a=-1


---

### Question 27 &nbsp;·&nbsp; NIMCET 2017, Q58

*pair of lines intersection · difficulty medium*

If x2 + 3xy + 2y2 – x – 4y – 6 = 0 represents a pair of straight lines, their point of intersection is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** (0,0)

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** (8,5)

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** (8, -5)

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** (-2,5)


---

### Question 28 &nbsp;·&nbsp; NIMCET 2016, Q76

*pair of lines lambda · difficulty medium*

If 2x2 + 7xy + 3y 2 + 8x + 14y + λ = 0 represents a pair of straight lines, the value of λ is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 2

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 4

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 6

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 8


---

### Question 29 &nbsp;·&nbsp; NIMCET 2016, Q106

*pair of lines slopes · difficulty medium*

If the sum of the slopes of the lines given by x2 − 2cxy − 7y 2 = 0 is four times their product, then the value of c is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** -1

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** -2

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 2


---

### Question 30 &nbsp;·&nbsp; NIMCET 2015, Q59

*triangle midpoints line · difficulty medium*

If (2, 1), (–1, –2), (3, 3) are the midpoints of the sides BC, CA, AB of a triangle ABC, then equation of the line BC is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 5x + 4y + 6 = 0

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 5x – 4y – 6 = 0

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 5x + 4y – 6 = 0

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 5x – 4y + 6 = 0


---

### Question 31 &nbsp;·&nbsp; NIMCET 2015, Q68

*square other diagonal · difficulty medium*

If (– 4, 5) is one vertex and 7x– y + 8 = 0 is one diagonal of a square, then the equation of the other diagonal is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** x + 7y = 21

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** x + 7y = 31

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** x + 7y = 28

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** x + 7y = 35


---

### Question 32 &nbsp;·&nbsp; NIMCET 2014, Q64

*equilateral triangle in parabola · difficulty medium*

An equilateral triangle is inscribed in the parabola y 2 = 4ax , such that one of the vertices of the triangle coincides with the vertex of the parabola. The length of the side of the triangle is: –


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** a√3 –

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2a√3 –

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 4a√3 –

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 8a√3


---

### Question 33 &nbsp;·&nbsp; NIMCET 2014, Q107

*median ratio geometry · difficulty medium*

The median AD of ΔABC is bisected at E and BE is produced to meet the side AC at F. Then, AF ∶ FC is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 2:1

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1:2

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 3:1

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 1:3


---

### Question 34 &nbsp;·&nbsp; NIMCET 2013, Q28

*parallel line midpoint · difficulty easy*

The equations of the line parallel to the line 2x– 3y = 7 and passing through the middle point of the line segment joining the points (1, 3) and (1, –7) is. 2x– 3y– 4 1 = 0 2x– 3y 2 + 4 = 0 2x– 3y– 8 3 = 0 2x– 3y 4 + 8 = 0


---

### Question 35 &nbsp;·&nbsp; NIMCET 2013, Q36

*equilateral triangle side · difficulty medium*

The equation of the base of an equilateral triangle is x + y = 2 and the vertex is (2, –1). The length of the side of the triangle is. −


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** √ 3 2 –

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** √2 −

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** √ 2 3 −−

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** √ 20 3


---

### Question 36 &nbsp;·&nbsp; NIMCET 2013, Q44

*circle through points centre on line · difficulty medium*

Find the equation of the circle which passes through (–1, 1) and (2, 1), and having centre on the line x + 2y + 3 = 0 . 2 2x 2 + 2y


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** − 2x + 7y − 13 = 0

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2 x + y − 2x 2 + 7y − 13 = 0 2 2x 2 + 2y

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** + 2x + 7y − 13 = 0 2 2 x + y + 2x 4 + 7y − 13 = 0


---

### Question 37 &nbsp;·&nbsp; NIMCET 2012, Q16

*triangle area centroid · difficulty medium*

If (4, −3) and (−9, 7) are two vertices of a triangle and (1, 4) is its centroid, find the area of the triangle. 138 1 2 319 2 183 3 2 381 4 2


---

### Question 38 &nbsp;·&nbsp; NIMCET 2011, Q30

*concyclic intercepts circle · difficulty medium*

Lines 2x + 3y − 6 = 0 and 9x + 6y − 18 = 0 cut coordinate axes in concyclic points. Center of circle is:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** (1, 2)

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** (2, 3)

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** (5, 5) 5 5

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** ( , ) 2 2


---

### Question 39 &nbsp;·&nbsp; NIMCET 2011, Q31

*circle lines intersections · difficulty medium*

Number of distinct solutions of x2 = y 2 and (x − a)2 + y 2 = 1 where a is any real number: 0, 1, 2, 3, 1 4


&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 0, 1, 3

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 0, 1, 2

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 0, 2, 3, 4


---

### Question 40 &nbsp;·&nbsp; NIMCET 2010, Q43

*transformations of point · difficulty medium*

The point (4, 1) undergoes the following transformations successively: (i) Reflection about the line π y = x (ii) Translation through a distance 2 units along the positive x-axis (iii) Rotation by an angle 4 anticlockwise about the origin The final position of the point is: −1 7


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** ( – , – ) √2 √2 1 7

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** ( – , – ) √2 √2 –

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** (−2, 7√2 ) – –

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** (√2 , 7√2 )


---

### Question 41 &nbsp;·&nbsp; NIMCET 2010, Q44

*pair of lines bisectors · difficulty medium*

If the two pair of lines X 2 − 2mXY − Y 2 = 0 and X 2 − 2nXY − Y 2 = 0 are such that one represents the bisector of the angles between the other, then: mn + 1 1 = 0 mn − 1 2 = 0


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1 + 3 m n = 0 1 1 − 4 m n = 0


---

### Question 42 &nbsp;·&nbsp; NIMCET 2010, Q46

*ellipse tangent equal intercepts · difficulty medium*




&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2 X Y If any tangent to the ellipse 2 + 2 = 1 intercepts equal length l on both axes, then l = a b 1 a 2 + b 2 −−−−−− 2 √a2 + b2

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** (a 2 + b ) 2 2

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of these


---

### Question 43 &nbsp;·&nbsp; NIMCET 2010, Q66

*distance parallel lines · difficulty easy*

Distance between the parallel lines y = 2x + 4 and 6x = 3y + 5 is 17


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** – √3

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1 3

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** – √5 – 17√5 4 15


---

### Question 44 &nbsp;·&nbsp; NIMCET 2009, Q3

*rotated square common area · difficulty hard*

A square with side a is revolved about its centre through 45∘ . What is the area common to both the squares? – 2(√2 1 2 − 1)a – (√2


&nbsp;&nbsp;&nbsp;&nbsp;**(2)** + 1)a 2 – (√3 3 2 − 1) a – (√5 4 2 − 1)a


---

### Question 45 &nbsp;·&nbsp; NIMCET 2009, Q6

*locus max metric · difficulty medium*

If the distance of (x, y) from the origin is defined as d(x, y) = max(|x|, |y|), then the locus of points where d(x, y) = 1 is:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** a square of area 1 sq. unit

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** a circle of radius 1

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** a triangle

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** a square of area 4 sq. units


---

### Question 46 &nbsp;·&nbsp; NIMCET 2009, Q28

*isosceles medians slopes · difficulty medium*

ABC is isosceles with AB = AC . BC is parallel to x-axis. m1 , m2 are slopes of the medians from B and C . Then: m1 m2 = 1 −1 m1 + m2 2 = 0 m1 m2 3 = 2 (m1 2 + m2 ) 4 + 2m1 m2 = 0


---

### Question 47 &nbsp;·&nbsp; NIMCET 2009, Q37

*lines meet locus · difficulty medium*

x y x y 1 The straight lines + = k and + = (with k ≠ 0 ) meet on: a b a b k


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** a parabola

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** an ellipse

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** a hyperbola

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** a circle


---

### Question 48 &nbsp;·&nbsp; NIMCET 2008, Q20

*pair of lines angle bisector · difficulty hard*

If y = mx bisects the angle between the lines x2 (tan2 θ + cos2 θ) + 2xy tan θ − y 2 sin θ = 0 when π – θ = , then the value of √3m2 + 4m is 3


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1 1

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** – √3 –

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** √3 –

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 7√3


---

### Question 49 &nbsp;·&nbsp; NIMCET 2008, Q23

*triangle inequality · difficulty medium*

Let M be a point inside the triangle ABC . Then which one of the following is true? AB $AB+AC + AC 1


&nbsp;&nbsp;&nbsp;&nbsp;**(2)** > MB + MC AB + AC 3 ≤ MB + MC 4 None of these


---

### Question 50 &nbsp;·&nbsp; NIMCET 2008, Q24

*rotation of axes intercepts · difficulty medium*

A line L has intercepts a and b on the coordinate axes. When the axes are rotated through a given angle, keeping the origin fixed, the same line has intercepts p and q. Which of the following is true?


&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2 a + b 1 = p 2 + q 1 1 + 2 2 a b 1 2 = 2 p 1 + 2 q 2 2 a + p

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** = b 2 + q 1 1 + 2 2 a q 1

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** = 2 b 1 + 2 q


---

### Question 51 &nbsp;·&nbsp; NIMCET 2008, Q35

*centroid cubic roots · difficulty medium*

If a, b, c are the roots of the equation x3 − 3px2 + 3qx − 1 = 0 , then the centroid of the triangle with vertices (a, 1a ) , (b, 1 ) , (c, 1c ) is the point b


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** (p, q) p q

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** ( , )

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 3 (p + q, p 3 − q)

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** (3p, 3q)



&nbsp;

## A2 — Circles


---

### Question 52 &nbsp;·&nbsp; NIMCET 2026, Q45

*circle from diameters area · difficulty medium*

Segments of the lines 2x + 3y = 1 and 4x − 3y = 11 are diameters of a circle of area 153.94 square units. Then, the equation of this circle with integer radius is:


&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2 x + y + 4x 1 − 2y − 44 = 0 2 2 x + y + 4x 2 − 2y + 44 = 0 2 2 x + y − 4x 3 + 2y − 44 = 0 44 0 2 2 x + y − 4x 4 + 2y + 44 = 0


---

### Question 53 &nbsp;·&nbsp; NIMCET 2023, Q57

*circle touching locus · difficulty medium*

A circle touches the x–axis and also touches the circle with centre (0, 3) and radius 2. The locus of the centre of the circle is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** a circle

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** an ellipse

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** a parabola

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** a hyperbola


---

### Question 54 &nbsp;·&nbsp; NIMCET 2021, Q34

*common tangents circles · difficulty medium*

The number of common tangents to the circle x2 + y 2 = 4 and x2 + y 2 − 6x − 8y = 24 is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 0

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 3

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 4


---

### Question 55 &nbsp;·&nbsp; NIMCET 2021, Q40

*director circle · difficulty medium*




&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2 x y The locus of the point of intersection of tangents to the ellipse 2 + 2 = 1 which meet right angles a b is 1 a circle 2 a parabola

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** an ellipse

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** a hyperbola


---

### Question 56 &nbsp;·&nbsp; NIMCET 2020, Q95

*ellipse circle intersections · difficulty medium*




&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2 x (y − 1) Find the number of point(s) of intersection of the ellipse + = 1 and the circle x2 + y2 4 9 =4 1 4 2 3

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 2

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 1


---

### Question 57 &nbsp;·&nbsp; NIMCET 2019, Q21

*circle from diameters · difficulty medium*

The equation of the circle passing through the point (4,6) and whose diameters are along x + 2y - 5 =0 and 3x - y - 1=0 is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** x2 + y2 − 2x − 6y − 20 = 0

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** x2 + y2 − 6x − 2y − 20 = 0

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** x2 + y2 − 2x − 4y − 20 = 0

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** x2 + y2 − 4x − 2y − 20 = 0


---

### Question 58 &nbsp;·&nbsp; NIMCET 2019, Q62

*common tangents circles · difficulty medium*

For the two circles x 2 + y 2 = 16 and x 2 + y 2 − 2y = 0, there is/are


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** One pair of common tangents

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Two pair of common tangents

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Three pair of common tangents

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** No common tangents


---

### Question 59 &nbsp;·&nbsp; NIMCET 2018, Q48

*circles touch externally · difficulty medium*

The circles whose equations are x2 + y 2 + c2 = 2ax and x2 + y 2 + x2 − 2by = 0 will touch one another externally, if


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1 +

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2 b c 1 = 2 a 1 1 + 2 2 c a 2 1 = 2 b 1 1 + 2 2 a b 3 1 = 2 c 4 None of these


---

### Question 60 &nbsp;·&nbsp; NIMCET 2018, Q50

*common tangent circle hyperbola · difficulty medium*




&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2 x y Equation of the common tangents with a positive slope to the circle x2 + y 2 − 8x = 0 and − = 1 is 9 4 – 1 2x-√5y-20=0 – 2 2x-√5y+4=0

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 3x-4y+8=0

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 4x-3y+4=0


---

### Question 61 &nbsp;·&nbsp; NIMCET 2016, Q26

*circle from diameters area · difficulty medium*

The equation of a circle with diameters are 2x – 3y + 12 = 0 and x + 4y – 5 = 0 and area of 154 sq. units is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** x2 + y2 -6x + 4y - 36 =0

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** x2 + y2 + 6x - 4y - 36 =0

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** x2 + y2 - 6x - 4y + 25 =0

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of the above


---

### Question 62 &nbsp;·&nbsp; NIMCET 2016, Q116

*common tangents circle parabola · difficulty medium*

. Two common tangents to the circles x2 + y 2 = 2a2 and parabola y 2 = 8ax are x = ±(y 1 + 2a) y = ±(x 2 + 2a) x = ±(y 3 + a) y = ±(x 4 + a)


---

### Question 63 &nbsp;·&nbsp; NIMCET 2015, Q70

*circle touching locus · difficulty medium*

A circle touches the X-axis and also touches another circle with centre at (0, 3) and radius 2. Then the locus of the centre of the first circle is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** a parabola

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** a hyperbola

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** a circle

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** an ellipse


---

### Question 64 &nbsp;·&nbsp; NIMCET 2015, Q73

*circle through foci · difficulty medium*




&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2 x y The radius of the circle passing through the foci of the ellipse 16 + 9 and having it centre at (0, 3) is 1 4 units 2 3 units −−

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** √12 units 7

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** units 2


---

### Question 65 &nbsp;·&nbsp; NIMCET 2015, Q78

*circles touching condition · difficulty medium*

If two circles x2 + y 2 + 2gx + 2f y = 0 and x2 + y 2 + 2g ′ x + 2f ′ y = 0 touch each other then whichof the following is true?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** gf = g f ′ ′

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** ′ g f = gf ′

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** gg ′ = ff ′

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of these


---

### Question 66 &nbsp;·&nbsp; NIMCET 2012, Q18

*orthogonal circles · difficulty medium*

If the circles x2 + y 2 + 2x + 2ky + 6 = 0 and x2 + y 2 + 2ky + k = 0 intersect orthogonally, then k is: 3


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 2 or − 2 −2 or

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 3 − 2 3

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 2 or 2 3

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** −2 or 2


---

### Question 67 &nbsp;·&nbsp; NIMCET 2010, Q45

*circle contained in circle · difficulty medium*

The circle x2 + y 2 = 9 is contained in the circle x2 + y 2 − 6x − 8y + 25 = c2 if


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** c = 2

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** c = 3

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** c = 5

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** c = 10


---

### Question 68 &nbsp;·&nbsp; NIMCET 2008, Q36

*common tangent circle parabola · difficulty hard*

Equation of the common tangent touching the circle (x − 3)2 + y 2 = 9 and the parabola y 2 = 4x above the x-axis is – √3 y 1 = 3x + 1 – √3 y = 2 −(x + 3) – √3 y = x 3 + 3 – √3 y =


&nbsp;&nbsp;&nbsp;&nbsp;**(4)** −(3x + 1)



&nbsp;

## A2 — Parabola


---

### Question 69 &nbsp;·&nbsp; NIMCET 2026, Q46

*common tangent parabolas · difficulty medium*

Which of the following equation can represent a common tangent to the parabolas y = −x2 and y = (x − 2)2 ? y = 4x 1 + 4 y = 5x


&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 25 + 4 y = −4x 3 + 4 y = −5x 4 25 + 4


---

### Question 70 &nbsp;·&nbsp; NIMCET 2024, Q56

*common normal parabolas · difficulty hard*

The two parabolas y 2 = 4a(x + c) and y 2 = 4bx, a > b > 0 cannot have a common normal unless


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** c > 2(a + b)

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** c > (a − b)

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** c < 2(a − b) 2

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** c < a − b


---

### Question 71 &nbsp;·&nbsp; NIMCET 2023, Q19

*parabola focal distance locus · difficulty medium*

A point P in the first quadrant, lies on y 2 = 4ax , a > 0, and keeps a distance of 5a units from its focus. Which of the following points lies on the locus of P?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** (1,0)

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** (1,1)

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** (0,2)

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** (2,0)


---

### Question 72 &nbsp;·&nbsp; NIMCET 2023, Q120

*locus midpoints chords parabola · difficulty medium*

The locus of the mid-point of all chords of the parabola y 2 = 4x which are drawn through its vertex is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** y 2 = 8x

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** y 2 = 2x

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** x 2 + 4y 2 = 16

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** x 2 = 2y


---

### Question 73 &nbsp;·&nbsp; NIMCET 2022, Q41

*parabola focus general · difficulty medium*

Coordinate of the focus of the parabola 4y 2 + 12x − 20y + 67 = 0 is 5 17


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** ( − , ) 4 2 17 5

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** ( − , ) 2 4 17 5

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** ( − , )

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 2 5 17 4 ( − , ) 2 4


---

### Question 74 &nbsp;·&nbsp; NIMCET 2016, Q109

*parabola vertex focus directrix · difficulty medium*

The vertex of the parabola whose focus is (-1,1) and directrix is 4x + 3y - 24 = 0 is 3


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** (0, ) 2 5

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** (0, ) 2 3

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** (1, ) 2 5

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** (1, ) 2


---

### Question 75 &nbsp;·&nbsp; NIMCET 2015, Q46

*locus midpoints chords parabola · difficulty medium*

The locus of the mid points of all chords of the parabola y 2 = 4x which are drawn through its vertex, is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** y 2 = 8x

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** y 2 = 2x

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** x 2 + 4y 2 = 16

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** x 2 = 2y


---

### Question 76 &nbsp;·&nbsp; NIMCET 2014, Q86

*parabola directrix · difficulty easy*

If x = 1 is the directrix of the parabola y 2 = kx − 8 , then k is:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1 8

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 8

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 4 1 4


---

### Question 77 &nbsp;·&nbsp; NIMCET 2014, Q95

*normal to parabola distance · difficulty medium*

A normal to the curve x2 = 4y passes through the point (1, 2). The distance of the origin from the normal is –


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** √2 –

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2√2 1

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** √2 3

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** √2


---

### Question 78 &nbsp;·&nbsp; NIMCET 2012, Q19

*parabola rotated focus · difficulty hard*

Focus of the parabola x2 + y 2 − 2xy − 4(x + y − 1) = 0 is:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** (1,1)

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** (1,2)

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** (2,1)

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** (0,2)


---

### Question 79 &nbsp;·&nbsp; NIMCET 2011, Q32

*parabola vertex · difficulty easy*

Vertex of parabola y 2 − 8y + 19 = 0


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** (1, 3)

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** (4, 3)

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** (1, 4)

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** (3, 1)


---

### Question 80 &nbsp;·&nbsp; NIMCET 2010, Q49

*parabola focal chord tangents · difficulty medium*

If the tangents at the extremities of a focal chord of the parabola x2 = 4ay meet at a point where the abscissas are x1 and x2 , then x1 x2 =


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** a 2

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** a 2 − 1

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** a 2 + 1

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** −a 2



&nbsp;

## A2 — Ellipse


---

### Question 81 &nbsp;·&nbsp; NIMCET 2026, Q1

*ellipse normal from directrix · difficulty medium*

1 The eccentricity of an ellipse whose center is at the origin is 2 . If one of its directrices is x = −4, find the equation of the normal to the ellipse at the point 3 (1, 2 ) .


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 4x+2y=7 3

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 6x-3y= 2

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 6x+3y= 21 2

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 4x-2y=1


---

### Question 82 &nbsp;·&nbsp; NIMCET 2024, Q10

*ellipse foci through origin · difficulty medium*

If (4, 3) and (12, 5) are the two foci of an ellipse passing through the origin, then the eccentricity of the ellipse is −− √13 1 9 −− √13 2 18 −− √17 3 18 −− √17 4 9


---

### Question 83 &nbsp;·&nbsp; NIMCET 2022, Q7

*ellipse hyperbola foci coincide · difficulty medium*




&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2 2 2 x y x y 1 If the foci of the ellipse 25 + 2 = 1 and the hyperbola 144 − 81 = 25 are coincide, then the b value of b2 1 25 2 16

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 64

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 49


---

### Question 84 &nbsp;·&nbsp; NIMCET 2022, Q33

*orthogonal curves ellipse hyperbola · difficulty medium*




&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2 x y If ( a ) + ( b ) , = 1 (a>b) and x2 − y 2 = c2 cut at right angles, then 1 a 2 2 + b = 2c 2 2 b 2 − a 2 = 2c 2

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** a 2 2 − b = 2c 2

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** a 2 2 − b = c 2


---

### Question 85 &nbsp;·&nbsp; NIMCET 2022, Q48

*ellipse from directrix · difficulty medium*

1 The eccentricity of an ellipse, with its center at the origin is 3 . If one of the directrices is x = 9, then the equation of ellipse is:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 9x 2 + 8y 2 = 72

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 8x 2 + 9y 2 = 72

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 8x 2 + 7y 2 = 56

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 7x 2 + 8y 2 = 56


---

### Question 86 &nbsp;·&nbsp; NIMCET 2020, Q94

*ellipse tangent angle · difficulty medium*

The tangent to an ellipse x2 + 16y2 = 16 and making angel 60° with X-axis is:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** x - √3y + 7 = 0

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** √3x − y + 8 = 0

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** √3x − y + 7 = 0

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** x + √3y − 7 = 0


---

### Question 87 &nbsp;·&nbsp; NIMCET 2019, Q20

*ellipse equilateral eccentricity · difficulty medium*

x2 y2 a2 b2 If S and S' are foci of the ellipse + = 1, B is the end of the minor axis and BSS' is an equilateral triangle, then the eccentricity of the ellipse is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1/2

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1/3

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 1/4

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 1/5


---

### Question 88 &nbsp;·&nbsp; NIMCET 2019, Q28

*tangent from point ellipse · difficulty medium*

Equation of the tangent from the point (3,−1) to the ellipse 2x2 + 9y2 = 3 is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 2x - 3y - 3 = 0

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2x + 3y - 3 = 0

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 2x + y - 3 = 0

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of these


---

### Question 89 &nbsp;·&nbsp; NIMCET 2016, Q30

*ellipse tangent k · difficulty medium*

The line 3x + 5y = k touches the ellipse 16 x2 + 25 y2 = 400, if k is 1 2 3 4


---

### Question 90 &nbsp;·&nbsp; NIMCET 2016, Q120

*ellipse hyperbola foci coincide · difficulty medium*




&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2 2 2 x y x y 1 The foci of the ellipse + = 1 and the hyperbola − = coincide. Then the 2 16 b 144 81 25 value of b2 is 1 5 2 7

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 9

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 1


---

### Question 91 &nbsp;·&nbsp; NIMCET 2015, Q49

*ellipse hyperbola foci coincide · difficulty medium*




&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2 2 2 x y x y 1 The foci of the ellipse 16 + 2 = 1 and the hyperbola 144 − 81 = 25 coincide, then the value of b 2 is 1 1 2 5

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 7

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 9


---

### Question 92 &nbsp;·&nbsp; NIMCET 2014, Q90

*ellipse hyperbola foci coincide · difficulty medium*

81×144 If the foci of the ellipse b2 x2 + 16y 2 = 16b2 and the hyperbola 81x2 − 144y 2 = 25 coincide, then the value of b, is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1 –

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** √5 –

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** √7

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 3


---

### Question 93 &nbsp;·&nbsp; NIMCET 2014, Q104

*tangent condition ellipse · difficulty easy*




&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2 x y The condition that the line lx + my + n = 0 becomes a tangent to the ellipse + = 1 , is a2 b 2 1 2 2 a l + b m + n = 0 2 al 2 + bm 2 = n 2

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** al + bm = n

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 2 2 a l + b m 2 2 = n 2


---

### Question 94 &nbsp;·&nbsp; NIMCET 2012, Q17

*ellipse through points · difficulty medium*

The equation of ellipse with major axis along the x–axis and passes through the point (4, 3) and (−1, 4). 2 15x


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** + 7y 2 = 247 2 7x

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** + 15y 2 = 247 2 16x

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** + 9y 2 = 247 2 9x

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** + 16y 2 = 247


---

### Question 95 &nbsp;·&nbsp; NIMCET 2011, Q33

*ellipse eccentricity · difficulty easy*

Eccentricity of ellipse 9x2 + 5y 2 − 30y = 0 1 3


&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2 3

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 3 4 1 4



&nbsp;

## A2 — Hyperbola


---

### Question 96 &nbsp;·&nbsp; NIMCET 2025, Q61

*hyperbola eccentricity range · difficulty hard*




&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2 y Let F1 , F2 be foci of hyperbola x 2 − 2 = 1 , a>0, b>0, and let O be the origin. Let M be an a b arbitrary point on curve C and above X axis and H be a point on M F such that M F ⊥ F F arbitrary point on curve C and above X-axis and H be a point on M F1 such that M F2 ⊥ F1 F2 , M F1 ⊥ OH , |OH | = λ|OF2 | with λ ∈ (2/5, 3/5) , then the range of the eccentricity e is −− − 1 √7/3 , 2 – – 2 √2 , √3 −− −

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 1, √7/3 –

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** √3 , 2


---

### Question 97 &nbsp;·&nbsp; NIMCET 2023, Q119

*hyperbola foci · difficulty medium*

Find foci of the equation x2 + 2x– 4y 2 + 8y– 7 = 0 –


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** (√5 ± 1, 1) –

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** (−1 ± √5 , 1) –

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** (−1, √5 ± 1) –

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** (1, −1 ± √5 )


---

### Question 98 &nbsp;·&nbsp; NIMCET 2017, Q62

*hyperbola equation · difficulty medium*

The equation of the hyperbola with centre at the region, length of the transverse axis is 6 and one focus (0, 4) is


&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2 x x + 1 9 7 = 1 2 2 x x − 2 9 7 = 1 2 2 y x +

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 7 9 = 1 2 2 y x −

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 7 9 = 1


---

### Question 99 &nbsp;·&nbsp; NIMCET 2015, Q66

*hyperbola tangent k · difficulty medium*

If 3x + 4y + k = 0 is a tangent to the hyperbola ,9x2 − 16y 2 = 144 then the value of K is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 0

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** -1

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** -3


---

### Question 100 &nbsp;·&nbsp; NIMCET 2014, Q66

*hyperbola locus eccentricity · difficulty medium*

– – – – The locus of the intersection of the two lines √3x − y = 4k√3 and k(√3x + y) = 4√3, for different values of k, is a hyperbola. The eccentricity of the hyperbola is:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1.5 –

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** √3

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 2 √3 4 2


---

### Question 101 &nbsp;·&nbsp; NIMCET 2014, Q108

*hyperbola equilateral double ordinate · difficulty hard*




&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2 x y If PQ is a double ordinate of the hyperbola 2 − 2 = 1 such that OPQ is an equilateral triangle, a b where O is the centre of the hyperbola, then which of the following is true? 2 −a 1 b 2 > √3 2 2 b 2 > a 3 2

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** b 2 < a 3 2

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** b 2 < −a 3


---

### Question 102 &nbsp;·&nbsp; NIMCET 2012, Q36

*hyperbola conjugate eccentricities · difficulty medium*




&nbsp;&nbsp;&nbsp;&nbsp;**(1)** (a)

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** (b)

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** (c)

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** (d)


---

### Question 103 &nbsp;·&nbsp; NIMCET 2010, Q47

*hyperbola asymptotes angle · difficulty medium*

The angle between the asymptotes of the hyperbola 27x2 − 9y 2 = 24 is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 60 ∘

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 120 ∘

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 30 ∘

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 150 ∘



&nbsp;

## A2 — Other loci and areas


---

### Question 104 &nbsp;·&nbsp; NIMCET 2025, Q55

*reflection midpoint isosceles · difficulty medium*

x y Let the line 4 + 2 = 1 meets the x-axis and y-axis at A and B, respectively. M is the midpoint of side AB, and M' is the image of the point M across the line x + y = 1. Let the point P lie on the line x + y = 1 such that the ΔABP is an isosceles triangle with AP = BP. Then the distance between M' and P is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** √7 3 √5 2 3 2√7 3 2√5 4 3


---

### Question 105 &nbsp;·&nbsp; NIMCET 2024, Q40

*curves intersection count · difficulty medium*




&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2 y (y−4) At how many points the following curves intersect 9 − x 16 = 1 and x4 + 16 = 1 1 0 2 1

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 2

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 4


---

### Question 106 &nbsp;·&nbsp; NIMCET 2024, Q84

*conic classification · difficulty medium*

The equation 3x2 + 10xy + 11y 2 + 14x + 12y + 5 = 0 represents


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** a circle

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** an ellipse

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** a hyperbola

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** a parabola


---

### Question 107 &nbsp;·&nbsp; NIMCET 2023, Q21

*intersection fourth quadrant equidistant · difficulty medium*

Let a, b, c, d be no zero numbers. If the point of intersection of the line 4ax + 2ay + c = 0 & 5bx + 2by + d=0 lies in the fourth quadrant and is equidistance from the two are then


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** a+b+c+d=0

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** ad – bc = 0

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 3bc – 2ad = 0

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 3bc + 2ad = 0


---

### Question 108 &nbsp;·&nbsp; NIMCET 2022, Q32

*area |x|+|y|=2 · difficulty easy*

The area enclosed within the curve |x|+|y|=2 is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 16 sq.unit

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 24 sq.unit

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 32 sq.unit

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 32 sq.unit


---

### Question 109 &nbsp;·&nbsp; NIMCET 2021, Q67

*eccentric angle latus rectum · difficulty medium*




&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2 y The eccentric angle of the extremities of latus rectum of the ellipse x + = 1 are given by The eccentric angle of the extremities of latus-rectum of the ellipse 2 + 2 = 1 are given by a b −1 tan 1 ae (± ) b −1 tan 2 be (± ) e −1 tan

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** b (± ) ae −1 tan

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** a (± ) be


---

### Question 110 &nbsp;·&nbsp; NIMCET 2018, Q75

*circumcentre locus · difficulty medium*

A line passing through (4, 2) meets the x and y-axis at P and Q respectively. If O is the origin, then the locus of the centre of the circumcircle of ΔOPQ is -


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1 + 1 x y = 2

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1 + 2 x y = 1 1 2 +

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** x y = 2 1 1 + x y 4 1 = 2


---

### Question 111 &nbsp;·&nbsp; NIMCET 2017, Q60

*graph shift · difficulty easy*

If the graph of y = (x – 2)2 – 3 is shifted by 5 units up along y-axis and 2 units to the right along the x- axis, then the equation of the resultant graph is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** y=x2+2

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** y=(x-2)2+5

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** y=(x+2)2+2

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** y = (x - 4)2 + 2 y ( )


---

### Question 112 &nbsp;·&nbsp; NIMCET 2015, Q57

*foot of perpendicular · difficulty easy*

The foot of the perpendicular from the point (2, 4) upon x + y = 1 is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** ( 1 , 3 )

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2 1 3 2 (− , ) 2 2 4 1

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** ( , ) 3 2

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** ( 4 ,− 1 ) 3 2


---

### Question 113 &nbsp;·&nbsp; NIMCET 2013, Q17

*area |x|+|y|=1 · difficulty easy*

The area enclosed within the curve |X| + |Y | = 1 (in square units) is –


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** √2

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1 –

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** √3

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 2


---

### Question 114 &nbsp;·&nbsp; NIMCET 2013, Q31

*parallel tangents radius · difficulty medium*

The lines 3x – 4y + 4 = 0 and 6x – 8y – 7 = 0 are tangent to the same circle. The radius of the this circle is.


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 3/2

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 3/4

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 4/5

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 7/10


---

### Question 115 &nbsp;·&nbsp; NIMCET 2013, Q46

*focal distances sum · difficulty easy*




&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2 x y The sum of the focal distances of any point on the ellipse 2 + 2 = 1 with eccentricity e is given a b by 1 2ae 2 2b

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 2a

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 2be


---

### Question 116 &nbsp;·&nbsp; NIMCET 2011, Q10

*area |x|+|y|=1 · difficulty easy*

Area enclosed by |x| + |y| = 1


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 3

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 4



---

&nbsp;

# A3 · Algebra & progressions

*117 questions across 19 papers · Quadratic equations and polynomials: 39 · Progressions (AP, GP, HP) and means: 48 · Logarithms, indices and exponentials: 21 · Binomial theorem and coefficients: 4 · Other forms: 5*



&nbsp;

## A3 — Quadratic equations and polynomials


---

### Question 1 &nbsp;·&nbsp; NIMCET 2026, Q37

*AP terms quadratic roots · difficulty medium*

The roots of the quadratic equation 3x2 − px + q = 0 are the 10th and 11th terms of an arithmetic progression with common difference 3 . If the sum of 2 the first 11 terms of this arithmetic progression is 88, then q − 2p is:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 464

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 474

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 484

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 494


---

### Question 2 &nbsp;·&nbsp; NIMCET 2026, Q40

*transformed roots quadratic · difficulty medium*

Let a, b, c be nonzero real numbers such that a + b + c ≠ 0 and 4a − 2b + c ≠ 0. If α and β are the roots of the quadratic equation α+2 β+2 ax 2 + bx + c = 0 , then which of the following equations has the roots α−1 and ? β−1 (a + b 2 + c)x − (4a + b 1 − 2c)x + (4a 2b + c) − 2b + c) = 0 (a + b 2 + c)x + (4a − 2b 2 + c)x + (4a + b − 2c) = 0 (a + b 2 + c)x − (4a − 2b 3 + c)x + (4a + b − 2c) = 0 (a + b 2 + c)x + (4a + b 4 − 2c)x + (4a − 2b + c) = 0


---

### Question 3 &nbsp;·&nbsp; NIMCET 2026, Q41

*radical equations system · difficulty hard*

−−−−−−−−−− −−−− −−−− 20x+38y+18z+1 Let x, y, z be positive real numbers such that 2√x + y − 3√y + z = 2 and 4x − 5y − 9z = 8 . Then the value of √ 9y+9z+2 is:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 3

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 4

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 5

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 6


---

### Question 4 &nbsp;·&nbsp; NIMCET 2025, Q63

*quadratic transformed roots · difficulty hard*

If α and β are the two roots of the quadratic equation x2 + ax + b = 0, (ab ≠ 0) then the


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1 quadratic roots whose roots 3 and 3 is α +α β +β 1 b(b 2 + 1 + a 2 + 2b)x 2 − (a 3 + a − 3ab)x + 1 = 0

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** b(b 2 + 1 + a 2 − 2b)x 2 − (a 3 + a − 3ab)x + 1 = 0

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** b(b 2 + 1 + a 2 + 2b)x 2 + (a 3 − a − 3ab)x + 1 = 0

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** b(b 2 + 1 + a 2 − 2b)x 2 + (a 3 + a − 3ab)x + 1 = 0


---

### Question 5 &nbsp;·&nbsp; NIMCET 2025, Q70

*power sums Newton · difficulty medium*

Given the equation x + y = 1, x2 + y 2 = 2 , x5 + y 5 = A. Let N be the number of solution pairs (x,y) to this system of equations. Then AN is equal to 7 1 2


&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 3 19 3 2 4 2


---

### Question 6 &nbsp;·&nbsp; NIMCET 2024, Q26

*surds telescoping · difficulty medium*

24 – – – −− −− 1 If x = 1 + √2 + √4 + √8 + √16 + √32 then (1 + x ) = 6 6 6 6 6


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 4

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 16

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 24


---

### Question 7 &nbsp;·&nbsp; NIMCET 2023, Q6

*modulus quadratic four solutions · difficulty medium*

If the equation |x2 – 6x + 8| = a has four real solution then find the value of a ?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** a ∈ 0

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** a = 1

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** a ∈ (0, 1)

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** a ∈ [1, 2]


---

### Question 8 &nbsp;·&nbsp; NIMCET 2023, Q12

*polynomial degree 4 values · difficulty medium*

If f(x) is a polynomial of degree 4, f(n) = n + 1 & f(0) = 25, then find f(5) = ?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 30

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 20

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 25

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of these


---

### Question 9 &nbsp;·&nbsp; NIMCET 2023, Q24

*modulus equation solution set · difficulty medium*

If |x − 6| = |x − 4x| − |x2 − 5x + 6| , where x is a real variable


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** x = (2, 5)

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** x = [2, 5] ∪ [6, ∞)

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** R − [2, 6]

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of these


---

### Question 10 &nbsp;·&nbsp; NIMCET 2023, Q109

*GP from max of cubic · difficulty medium*

The sum of infinite terms of decreasing GP is equal to the greatest value of the function f (x) = x + 3x– 9 in the interval [–2, 3] and difference between the first two terms is f '(0). Then 3 the common ratio of the GP is −2 1 3 4 2 3 +2 3 −4 4 3


---

### Question 11 &nbsp;·&nbsp; NIMCET 2022, Q24

*Cauchy Schwarz inequality · difficulty medium*

If a1 , a2 , … , an are any real numbers and n is any positive integer, then 2 n n


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** n ∑ ai 2 <( ∑ a i ) i=1 i=1 2 n n

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** n ∑ ai 2 ≥( ∑ a i ) i=1 i=1 2 n n

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** ∑ ai 2 ≥( ∑ a i ) i=1 i=1

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of the above


---

### Question 12 &nbsp;·&nbsp; NIMCET 2022, Q34

*recurrence roots powers · difficulty medium*

If α, β are the roots of x2 − x − 1 = 0 and An = αn + β n , the Arithmetic mean of An−1 and An is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 2A − 1 1 2A n 1

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1 An+1 2

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 2A n − 2

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of the above


---

### Question 13 &nbsp;·&nbsp; NIMCET 2021, Q37

*factor theorem · difficulty easy*

For what value of p, the polynomial x4 − 3x3 + 2px2 − 6 is exactly divisible by (x − 1)


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 2

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 4

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 6

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 8


---

### Question 14 &nbsp;·&nbsp; NIMCET 2021, Q68

*roots ratio equation · difficulty medium*

α β If α≠β and α2 = 5α − 3, β 2 = 5β − 3, then the equation whose roots are and α is β


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 3x 2 − 25x + 3 = 0

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 3x 2 + 5x + 3 = 0

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 3x 2 − 5x + 3 = 0

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 3x 2 − 19x + 3 = 0


---

### Question 15 &nbsp;·&nbsp; NIMCET 2020, Q91

*quadratic roots expression · difficulty medium*

Q Q ( p p y y pyq y y ) b b Roots of equation are ax2 − 2bx + c = 0 are n and m , then the value of 2 + 2 is an +c am +c


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** c/a

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** b/a

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** a/c

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** b/c


---

### Question 16 &nbsp;·&nbsp; NIMCET 2020, Q97

*a+b+c=0 identity · difficulty easy*




&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2 2 a b c If a + b + c = 0, then the value of bc + ca + ab 1 1 2 0

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 3

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** -1


---

### Question 17 &nbsp;·&nbsp; NIMCET 2019, Q10

*GP from max of cubic · difficulty medium*

The sum of infinite terms of a decreasing GP is equal to the greatest value of the functionf(x) = x 3 + 3x − 9 in the interval [- 2,3] and the difference between the first two terms is f ′ (0). Then the common ratio of GP is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** -2/3

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 4/3

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 2/3

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** -4/3


---

### Question 18 &nbsp;·&nbsp; NIMCET 2019, Q60

*AP GP HP roots nature · difficulty hard*

If a, a, a2, . , a2n −1, b are in AP, a, b1, b2, . . . b2n −1, bare in GP and a, c 1, c 2, . . . c 2n −1, b are in HP, where a, b are positive, then the equation anx 2 − bn + c n has its roots


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Real and equal

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Real and unequal

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** imaginary

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** One real and one imaginary


---

### Question 19 &nbsp;·&nbsp; NIMCET 2018, Q28

*nested radical log · difficulty hard*

−−−−−−− −−−−−−− −−−−−−−


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1 1 1 6 + log1/4 [√1 − 1 − 1 − ⋯] = – – √ – √ – √2 √2 √2 √2 1 6

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 13/2

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 4

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 25/4


---

### Question 20 &nbsp;·&nbsp; NIMCET 2018, Q62

*roots relation two quadratics · difficulty hard*

α Let α and β be the roots of the equation x2 − px + r = 0 and ,β are the roots of the equation x2 − ax + r = 0, 2 then the value of r, 2 (p 9 1 − q)(2q − p) 2 (q − p)


&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 9 (2q − p) 2 (q 9 3 − 2p)(2q p)( q − p) 2 (2p 9 4 − q)(2q − p)


---

### Question 21 &nbsp;·&nbsp; NIMCET 2017, Q45

*roots powers cos · difficulty medium*

α, β are the roots of the an equation x2 − 2xcosθ + 1 = 0, then the equation having roots αn and βn is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** x 2 − (2cosnθ)x + 1 = 0

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** x 2 − (2cosnθ)x − 1 = 0

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** x 2 + (2cosnθ)x + 1 = 0

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** x 2 + (2cosnθ)x − 1 = 0


---

### Question 22 &nbsp;·&nbsp; NIMCET 2017, Q46

*sum of cubes roots · difficulty medium*

The equation (x-a)3+(x-b)3+(x-c)3 = 0 has


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** All three real roots

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** One real and two imaginary roots

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Three real roots,namely x = a, x = b, x = c

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of these


---

### Question 23 &nbsp;·&nbsp; NIMCET 2016, Q82

*min sum of squares roots · difficulty medium*

The minimum value of a , for which the sum of the squares of the roots of the equation 2 x − (a − 2)x − (a + 1) = 0


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 3

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 0

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 1


---

### Question 24 &nbsp;·&nbsp; NIMCET 2016, Q105

*exponential quadratic roots sum · difficulty medium*

Sum of the roots of the equation 4x − 3(2x+3 ) + 128 = 0 is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 5

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 6

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 7

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 8


---

### Question 25 &nbsp;·&nbsp; NIMCET 2016, Q108

*quadratic prime roots minimum · difficulty hard*

Let f (x) = x2 − bx + c , b is an odd positive integer. If f(x)=0 has two prime numbers as roots and b + c = 35, then the global minimum value of f(x) is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** −183/4

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 173/16

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** −81/4

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 17/2


---

### Question 26 &nbsp;·&nbsp; NIMCET 2015, Q58

*quadratic negative roots · difficulty medium*

The value of k for which the equation (k − 2)x2 + 8x + k + 4 = 0 has both real, distinct and negative roots is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 0

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 3

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** -4


---

### Question 27 &nbsp;·&nbsp; NIMCET 2015, Q67

*integer equations · difficulty medium*

a, b, c are positive integers such that a2 + 2b2 − 2bc = 100 and 2ab − c2 = 100 . Then the a+b value of c is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 10

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 100

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 2

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 20


---

### Question 28 &nbsp;·&nbsp; NIMCET 2014, Q78

*roots powers new quadratic · difficulty hard*

If α and β are the roots of the equation 2x2 + 2px + p2 = 0 , where p is a non-zero real number, and α4 and β 4 are the roots of x2 − rx + s = 0, then the roots of 2x2 − 4p2 x + 4p4 − 2r = 0 are:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Real and unequal

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Equal and zero

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Imaginary

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** Equal and non-zero


---

### Question 29 &nbsp;·&nbsp; NIMCET 2014, Q97

*quadratic always positive · difficulty medium*

If x2 + 2ax + 10 − 3a > 0 for all x ∈ R, then


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** -5

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** a<-5

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** a>5

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 2


---

### Question 30 &nbsp;·&nbsp; NIMCET 2012, Q41

*quadratic real roots trig coefficients · difficulty medium*




&nbsp;&nbsp;&nbsp;&nbsp;**(1)** (a)

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** (b)

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** (c)

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** (d)


---

### Question 31 &nbsp;·&nbsp; NIMCET 2012, Q42

*real roots count quintic · difficulty medium*




&nbsp;&nbsp;&nbsp;&nbsp;**(1)** (a)

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** (b)

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** (c)

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** (d)


---

### Question 32 &nbsp;·&nbsp; NIMCET 2011, Q6

*quadratic always positive · difficulty medium*

Find least integer k such that (k − 2)x2 + k + 8x + 4 > 0 for all x ∈ R.


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 5

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 4

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 3

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 6


---

### Question 33 &nbsp;·&nbsp; NIMCET 2011, Q39

*roots power sum · difficulty medium*

Roots of x2 − 2x + 4 = 0 are α, β. Compute α6 + β 6 .


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 64 6

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 128

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 256

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 132


---

### Question 34 &nbsp;·&nbsp; NIMCET 2009, Q22

*modulus equation · difficulty medium*

If x < −1 and 2|x+1| − 2x = |2x − 1| + 1 then the value of x is:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** -2

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 0

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 6


---

### Question 35 &nbsp;·&nbsp; NIMCET 2009, Q24

*cubic roots in GP · difficulty medium*

Find k in the equation x3 − 6x2 + kx + 64 = 0 if roots are in geometric progression.


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 24

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 16

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** −16

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** −24


---

### Question 36 &nbsp;·&nbsp; NIMCET 2009, Q40

*reciprocal quartic · difficulty medium*

1 If 2x4 + x3 − 11x2 + x + 2 = 0 then the values of x + are: x 5


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** −3, 2 1

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** − , 3 5 2 1

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** , 5 3 1

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** , − 5 3


---

### Question 37 &nbsp;·&nbsp; NIMCET 2008, Q25

*quadratic roots symmetric · difficulty medium*

If a, b are the roots of x2 + px + 1 = 0 and c, d are the roots of x2 + qx + 1 = 0 , the value of E = (a − c)(b − c)(a + d)(b + d) is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** p 2 − q 2

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** q 2 − p 2

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** q 2 + p 2

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of these


---

### Question 38 &nbsp;·&nbsp; NIMCET 2008, Q28

*roots of unity quadratic · difficulty medium*

Let α and β be the roots of x2 + x + 1 = 0 . The equation whose roots are α19 and β 19 is 2 x − x 1 − 1 = 0 2 x + x 2 − 1 = 0 2 x − x 3 + 1 = 0 2 x + x 4 + 1 = 0


---

### Question 39 &nbsp;·&nbsp; NIMCET 2008, Q37

*modulus equation roots · difficulty medium*

The number of roots of the equation |x2 − x − 6| = x + 2 is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 2

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 3

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 4

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** none of these



&nbsp;

## A3 — Progressions (AP, GP, HP) and means


---

### Question 40 &nbsp;·&nbsp; NIMCET 2026, Q42

*alternating sums equation · difficulty medium*

n 2 n Which of the following is a value of n if(∑k=1 (−1)k−1 k) − ∑ k=1 (−1) k−1 k 2 + 2450 = 0?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 98

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 99

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 100

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 101


---

### Question 41 &nbsp;·&nbsp; NIMCET 2026, Q103

*AM HM numbers · difficulty easy*

The arithmetic mean of two numbers a and b is 5, and the harmonic mean is 3.2. Find the numbers a and b.


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** a=3, b=7

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** a=4, b=6

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** a=1, b=9

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** a=2, b=8


---

### Question 42 &nbsp;·&nbsp; NIMCET 2025, Q74

*AP sums squares · difficulty hard*

18 Suppose t1 , t2 , . . . t5 are in AP such that ∑l=0 t3l+1 = 1197 and t7 + 3t22 = 174. If 9 ∑ l=1 tl 2 = 947b , then the value of b is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 3

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 5


---

### Question 43 &nbsp;·&nbsp; NIMCET 2024, Q82

*AM GM inserted means · difficulty medium*

If one AM (Arithmetic mean) 'a' and two GM's (Geometric means) p and q be inserted between any two positive numbers, the value of p^3+q^3 is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 2apq

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** pq/a

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 2pq/a

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** p+q+a


---

### Question 44 &nbsp;·&nbsp; NIMCET 2024, Q108

*series e sum · difficulty medium*




&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 4 6 The value of the series + + + ⋯ is 3! 5! 7! 1 2e −2 2 e −2

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** e −1

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 2e −1


---

### Question 45 &nbsp;·&nbsp; NIMCET 2023, Q118

*HP mean of products · difficulty medium*

If a, b, c, d are in HP and arithmetic mean of ab, bc, cd is 9 then which of the following number is the value of ad?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 3

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 9

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 12

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 4


---

### Question 46 &nbsp;·&nbsp; NIMCET 2022, Q17

*GP which term · difficulty easy*

√5 √5 1 √5 Which term of the series 3 , 4 , , ... is 13 ? √5


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 12

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 11

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 10

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 9


---

### Question 47 &nbsp;·&nbsp; NIMCET 2022, Q37

*HP pth qth term · difficulty medium*

In a Harmonic Progression, pth term is q and the q th term is p. Then pq th term is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 0

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** pq

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 1

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** pq(p+q)


---

### Question 48 &nbsp;·&nbsp; NIMCET 2021, Q52

*harmonic means · difficulty hard*

H n +a H n +b If H1 , H2 , … , Hn are n harmonic means between a and b (b ≠ a) ;,then H −a + H −b n n


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 2n

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** n + 1

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** n − 1

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 2n + 1


---

### Question 49 &nbsp;·&nbsp; NIMCET 2021, Q58

*geometric means · difficulty easy*

The four geometric means between 2 and 64 are


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1 1 , , , 1 4 8 16 1 32 4, 8, 16, 2 32 – 4√2 , 8, 3 – 16√2 , 32 4 None of the above


---

### Question 50 &nbsp;·&nbsp; NIMCET 2020, Q96

*AP common difference · difficulty easy*

An arithmetic progression has 3 as its first term. Also, the sum of the first 8 terms is twice the sum of the first 5 terms. Then what is the common difference?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 3/4

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1/2

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 1/4

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 4/3


---

### Question 51 &nbsp;·&nbsp; NIMCET 2019, Q45

*GP logs AP triangle · difficulty medium*

If a, b, c are in GP and log a - log 2b, log 2b - log 3c and log 3c - log a are in AP, then a, b, c are the lengths of the sides of a triangle which is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Acute angle

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Obtuse angled

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Right Angles

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** Equilateral


---

### Question 52 &nbsp;·&nbsp; NIMCET 2019, Q49

*binomial coefficients sum · difficulty medium*

If (1 + x – 2x2)6 = 1 + a1x + a2x 2 + ... + a12x 12, then the value a2 + a4 + a6 + ... + a12


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 39

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 30

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 31

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 32


---

### Question 53 &nbsp;·&nbsp; NIMCET 2018, Q34

*GP infinite sum ratio · difficulty medium*

Sum to infinity of a geometric is twice the sum of the first two terms. Then what are the possible values of common ratio? 1


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** ± – √2 1

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** ± 2 1

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** ± – √3 1

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** ± 3


---

### Question 54 &nbsp;·&nbsp; NIMCET 2018, Q35

*HP mth nth term · difficulty medium*

Suppose that m and n are fixed numbers such that the mth term of an HP is equal to n and the nth term is equal to m, (m ≠ n). Then the (m + n)th term is: m + n 1 mn 2 m + n 3 n m + n 4 m


---

### Question 55 &nbsp;·&nbsp; NIMCET 2018, Q59

*AM GM min product fixed · difficulty medium*

If a1 , a2 , . . . an are positive real numbers whose product is a fixed number c, then the minimum of a1 , a2 , . . . .2an is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** n(2c) 1/n (n 2 1/n + 1)c (2n)! 3 2 (n!) (n + 1) 4 1/n (2c)


---

### Question 56 &nbsp;·&nbsp; NIMCET 2018, Q81

*logs in AP · difficulty medium*

7 If log3 2, log3 (2 x − 5), log3 (2 x − ) are in arithmetic progression, then the value of x is equal to 2


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 5

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 4

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 3

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 2


---

### Question 57 &nbsp;·&nbsp; NIMCET 2018, Q107

*tetrahedral numbers layers · difficulty medium*

There are 8436 steel balls, each with a radius of 1 centimeter, stacked in a pile, with 1 ball on top, 3 balls in the second layer, 6 in the third layer, 10 in the fourth and so on. The number of horizontal layers in the pile is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 34

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 38

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 36

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 32


---

### Question 58 &nbsp;·&nbsp; NIMCET 2017, Q36

*HM AM GM numbers · difficulty medium*

The harmonic mean of two numbers is 4. Their arithmetic mean A and the geometric mean G satisfy the relation 2A+G2 = 27, then the two numbers are


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 4 and 2

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 6 and 3

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 5 and 7

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 4 and 1


---

### Question 59 &nbsp;·&nbsp; NIMCET 2017, Q47

*AP to GP numbers · difficulty medium*

Three positive number whose sum is 21 are in arithmetic progression. If 2, 2, 14 are added to them respectively then resulting numbers are in geometric progression. Then which of the following is not among the three numbers?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 25

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 13

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 1

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 7


---

### Question 60 &nbsp;·&nbsp; NIMCET 2017, Q69

*even coefficients sum · difficulty medium*

If (1 - x + x2 )n = a + a1x + a2x2 + ... + a2nx2n , then a0 + a2 + a4 + ... + a2n is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** (3n + 1)/2

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** (3n - 1) / 2

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** (1 - 3n)/2

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 3n + 1/2


---

### Question 61 &nbsp;·&nbsp; NIMCET 2016, Q45

*common terms two APs · difficulty medium*

The number of common terms in the two sequences 17, 21, 25, ..........., 817 and 16, 21, 26, ..........., 851 is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 28

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 39

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 40

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 87


---

### Question 62 &nbsp;·&nbsp; NIMCET 2016, Q87

*telescoping sqrt sum · difficulty easy*




&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1 1 1 The sum of the expression – – + – – + – – + ⋯ + −− −− is √1 + √2 √2 + √3 √3 + √4 √80 + √81 1 7

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 8

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 9

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 10


---

### Question 63 &nbsp;·&nbsp; NIMCET 2016, Q117

*AP sum expression · difficulty hard*

If a1 , a2 , … , an are in A.P. and a1 = 0 then the value of a3 a4 an 1 1 1 ( + + ⋯ + ) − a2 ( + + ⋯ + ) is equal to a2 a3 a n−1 a2 a3 a n−2 (n − 2)


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1 + n − 2 1 2 n − 2 3 n − 2 n 4 1 − n − 2


---

### Question 64 &nbsp;·&nbsp; NIMCET 2015, Q53

*GP logs progression · difficulty medium*

If a, b, c are in geometric progression, then logax a , log a bx and logcx a are in


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Arithmetic progression

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Geometric progression

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Harmonic progression

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** Arithmetico-geometric progression


---

### Question 65 &nbsp;·&nbsp; NIMCET 2015, Q54

*telescoping sqrt sum · difficulty medium*




&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1 1 1 The value of the sum + + +. . . + is 2√ 1+1√ 2 3√ 2+2√ 3 4√ 3+3√ 4 25√ 24+24√ 25 9 1 10

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 4 5 14 3 15 4 7 15


---

### Question 66 &nbsp;·&nbsp; NIMCET 2014, Q12

*mean of powers of 2 · difficulty easy*

The arithmetic mean of 210 and 220 is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 215

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 25+210

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 29+220

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 29+219


---

### Question 67 &nbsp;·&nbsp; NIMCET 2014, Q92

*binomial approximation · difficulty medium*

1/2 (9+2x) (3+4x) If x is so small that x2 and higher powers of x can be neglected, then 1/5 is (1−x) approximately equal to


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 9 + 74 x 15

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 9 + 74 x 5

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 3 + 74 x 15

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 3 + 74 x 5


---

### Question 68 &nbsp;·&nbsp; NIMCET 2013, Q4

*line through fixed point AP · difficulty easy*

If the straight line ax + by + c = 0 always passes through (1, –2), then a, b, c are in


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** AP

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** HP

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** GP

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of these


---

### Question 69 &nbsp;·&nbsp; NIMCET 2013, Q12

*GP ratio golden · difficulty medium*

In a G.P. consisting of positive terms, each term equals the sum of the next two terms. Then the common ratio of the G.P. is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** (1−√5) 2 (√5) 2 – 3 √5 (√5−1) 4 2


---

### Question 70 &nbsp;·&nbsp; NIMCET 2013, Q22

*AP common difference · difficulty medium*

The sum of n terms of an arithmetic series is 216. The value of the first term is n and the value of the nth term is 2n. The common difference, d is.


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1 2 3 3 3 2 12 4 11


---

### Question 71 &nbsp;·&nbsp; NIMCET 2013, Q41

*multiples of 7 sum · difficulty easy*

The sum of integers between 200 and 400, that are multiples of 7 is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 8729

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 8700

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 8972

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 8279


---

### Question 72 &nbsp;·&nbsp; NIMCET 2013, Q49

*alternating squares sum · difficulty medium*

Sum of 20 terms of the series – 12 + 22 – 32 + 42 – … is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 180

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 200

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 210

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 220


---

### Question 73 &nbsp;·&nbsp; NIMCET 2012, Q1

*harmonic mean identity · difficulty easy*

H H If H is the harmonic mean between P and Q, then + is P Q


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 2 P + Q 2 Q PQ 3 P + Q 4 None of these


---

### Question 74 &nbsp;·&nbsp; NIMCET 2012, Q3

*binomial coefficient sum · difficulty medium*

The sum 20 C8 +20 C9 +21 C10 +22 C11 −23 C11


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 22 C12

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 23 C12

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 21 C10

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 0


---

### Question 75 &nbsp;·&nbsp; NIMCET 2012, Q34

*log identity sum · difficulty medium*




&nbsp;&nbsp;&nbsp;&nbsp;**(1)** (a)

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** (b)

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** (c)

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** (d)


---

### Question 76 &nbsp;·&nbsp; NIMCET 2011, Q7

*binomial alternating sum · difficulty hard*

2n 2 2n 2 K 2n K 2n If ∑ (−1) ( ) = A , find ∑ (−1) (K − 2n)( ) . K K K =0 K =0


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** nA

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** −nA

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 0

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** A


---

### Question 77 &nbsp;·&nbsp; NIMCET 2011, Q9

*HP log identity · difficulty medium*

a, b, c are positive and c > a and in H.P. Compute log(a + c) + log(a − 2b + c) . 2 log 1 (c − b) 2 log 2 (a + c) 2 log 3 (c − a) log a


&nbsp;&nbsp;&nbsp;&nbsp;**(4)** + log b + log c


---

### Question 78 &nbsp;·&nbsp; NIMCET 2011, Q16

*AM GM minimum · difficulty medium*

The minimum value of px + qy when xy = r2 and p, q, x, y are positive numbers is −−


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 2r√pq –

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2pq√3 −−

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** −2r√pq −− −

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** √pqr


---

### Question 79 &nbsp;·&nbsp; NIMCET 2011, Q37

*sum of squares · difficulty easy*




&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2 2 The sum of 11 + 12 + ⋯ + 30 is 1 8070 2 82

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 1080

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 9700


---

### Question 80 &nbsp;·&nbsp; NIMCET 2010, Q40

*AP HP GP relation · difficulty medium*

p r If a, b, c are in A.P., p, q, r are in H.P. and ap, bq, cr in G.P., then r + p is equal to a c


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** c − a a c

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** c + a b a

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** q − p

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** b + a q p


---

### Question 81 &nbsp;·&nbsp; NIMCET 2009, Q2

*binomial coefficients sum · difficulty medium*

If (1 + x − 2x2 )6 = 1 + a1 x + a2 x2 + … + a12 x12 , then the value of a 2 + a 4 + a 6 + … + a 12 is:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1024

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 64

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 32

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 31


---

### Question 82 &nbsp;·&nbsp; NIMCET 2009, Q43

*sum not divisible · difficulty medium*

The sum of the numbers from 1 to 100 which are not divisible by 3 and 5 is:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 2946

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2732

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 2632

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 2317 3 7


---

### Question 83 &nbsp;·&nbsp; NIMCET 2008, Q27

*AP GP HP · difficulty medium*

Suppose a, b, c are in A.P. with common difference d . Then e 1/c , e 1/b , e 1/a are


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** A.P.

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** G.P.

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** H.P.

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of these


---

### Question 84 &nbsp;·&nbsp; NIMCET 2008, Q29

*coefficient product AP sum · difficulty medium*

In the expression (x + 1)(x + 4)(x + 9)(x + 16) ⋯ (x + 400) the coefficient of x19 is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 2870

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 210

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 4001

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 1900


---

### Question 85 &nbsp;·&nbsp; NIMCET 2008, Q30

*log infinite GP · difficulty medium*




&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1 The value of y = 0.36 log0.25 ( + + ⋯) is 2 3 3 1 0.1296

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 0.18

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 0.6

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 0.25


---

### Question 86 &nbsp;·&nbsp; NIMCET 2008, Q31

*harmonic means · difficulty hard*

If H1 , H2 , … , Hn are n harmonic means between a and b, a ≠ b , then the value of H1 + a Hn + b + is equal to H1 − a Hn − b


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** n + 1

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** n − 1

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 2n

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 2n + 3


---

### Question 87 &nbsp;·&nbsp; NIMCET 2008, Q72

*infinite GP bouncing ball · difficulty medium*

From a height of 16 meters a ball fell down and each time it bounces half the distance back. What is the total distance traveled?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 45 m

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** ∞

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 48 m

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 24 m



&nbsp;

## A3 — Logarithms, indices and exponentials


---

### Question 88 &nbsp;·&nbsp; NIMCET 2026, Q3

*exponential equation relation · difficulty medium*




&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 5 1 1 x+ y− x− y− If x, y are real numbers such that 2 2 × 4 6 = 3 2 × 9 3 then which of the following is true? 1 6x-12y-7=0

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 6x+12y-7=0

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 6x+12y+7=0

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 6x-12y+7=0


---

### Question 89 &nbsp;·&nbsp; NIMCET 2025, Q36

*exponential equation logs · difficulty hard*




&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1 If 8x−1 = (1/4)x , then the value of + is log x+1 4−log x+1 5 log 1−x 4−log 1−x 5 1 1

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 5/4

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 4/5

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 2


---

### Question 90 &nbsp;·&nbsp; NIMCET 2025, Q81

*log exponent equation product · difficulty hard*

Let x be a positive real number such that x(8 log x−24) = 5−4 . Then the product of all possible 5 values of x is =


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 5

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 125

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 165

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 25


---

### Question 91 &nbsp;·&nbsp; NIMCET 2023, Q26

*log series coefficient · difficulty medium*

1+x Which of the following number is the coefficient of x100 in the expansion of loge ( 2 ), |x|<1 ? 1+x


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 0.01

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 0.02

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** -0.03

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** -0.01


---

### Question 92 &nbsp;·&nbsp; NIMCET 2022, Q46

*log exponent value · difficulty easy*

The value of 33−log 5 is 3


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 5 27

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 27 5

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 9 5

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 5 9


---

### Question 93 &nbsp;·&nbsp; NIMCET 2021, Q32

*log series coefficients · difficulty hard*

If log(1 − x + x2 ) = a1 x + a2 x2 + a3 x3 +. … . then a3 + a6 + a9 +. … . is equal to


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** log 2

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2 log 2 3

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 1 log 2 3

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 2 log 2


---

### Question 94 &nbsp;·&nbsp; NIMCET 2019, Q27

*equation x = log2 · difficulty medium*

If then x =


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** log2

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2log2

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 3log2

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 4log2


---

### Question 95 &nbsp;·&nbsp; NIMCET 2019, Q43

*log inequality · difficulty hard*

The solution set of the inequality is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** (-2, -1)

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** (-2, 3)

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** (-1,3)

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** (3,∞)


---

### Question 96 &nbsp;·&nbsp; NIMCET 2016, Q25

*log equation bases · difficulty medium*

The solution set of equation logx2 log2x 2 = log4x 2 is 1 2 3 4


---

### Question 97 &nbsp;·&nbsp; NIMCET 2016, Q95

*exponential equation logs · difficulty medium*

If 3x = 4x−1 , then x = 2 − log3 2


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 2 log3 2 − 1 2

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2 log3 2 − 1 2 − log3 2

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 2 log3 2 + 1 2 log3 2

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 2 log3 2 − 1


---

### Question 98 &nbsp;·&nbsp; NIMCET 2015, Q86

*log consecutive integers · difficulty easy*

If x, y, z are three consecutive positive integers, then log(1 + xz) is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** logy y

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** log 2

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** log2y

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 2logy


---

### Question 99 &nbsp;·&nbsp; NIMCET 2014, Q76

*log equations system · difficulty hard*

If (x0, y0) is the solution of the equations (2x)ln2 = (3y)ln3 and 3lnx = 2lny, then x0 is:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1/6

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1/3

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 1/2

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 6


---

### Question 100 &nbsp;·&nbsp; NIMCET 2014, Q102

*log identities · difficulty medium*

If a = log12 18 , b = log24 54 , then ab + 5(a − b) is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 0

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 2

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 3 2


---

### Question 101 &nbsp;·&nbsp; NIMCET 2013, Q24

*infinite exponent product · difficulty medium*




&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1 1 The value of 9 3 .9 9 .9 27 . . . . . ∞ is. 1 3

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 6

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 9

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of these


---

### Question 102 &nbsp;·&nbsp; NIMCET 2013, Q27

*log equations · difficulty medium*

y If logx = 100 and log2x = 10 then the value of y is.


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 2 10

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2 100

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 2 1000

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 2 1000


---

### Question 103 &nbsp;·&nbsp; NIMCET 2012, Q44

*compare logs · difficulty easy*




&nbsp;&nbsp;&nbsp;&nbsp;**(1)** (a)

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** (b)

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** (c)

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** (d)


---

### Question 104 &nbsp;·&nbsp; NIMCET 2011, Q8

*log inequality · difficulty hard*

1 Solve inequality log3 ((x + 2)(x + 4)) + log1/3 (x + 2) < log√ 3 7 2


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** (−2, −1)

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** (−2, 3)

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** (−1, 3)

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** (3, ∞)


---

### Question 105 &nbsp;·&nbsp; NIMCET 2011, Q54

*compare powers · difficulty medium*

Let: X = 2100 , Y = 3 100 , Z = 4 100 Which statement is true? X + Y 1 = Z X + Y 2 < Z X + Y 3 > Z


&nbsp;&nbsp;&nbsp;&nbsp;**(4)** XY = Z


---

### Question 106 &nbsp;·&nbsp; NIMCET 2009, Q31

*exponential equation · difficulty medium*

Number of distinct integer values of a satisfying 22a − 3(2a+2 ) + 25 = 0 is:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 0

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 2

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of these


---

### Question 107 &nbsp;·&nbsp; NIMCET 2009, Q50

*log infinite product · difficulty hard*




&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1 1 Find the value of x, if: (2 log x 4 ) (2 log x 16 ) (2 log x 256 )⋯ = 2 1 2 1 2 3 4 1 4


---

### Question 108 &nbsp;·&nbsp; NIMCET 2008, Q32

*logarithm equation · difficulty hard*

For a > 0, a ≠ 1, the number of values of x satisfying 2 logx a + logax a + 3 loga x a = 0 is 2


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 2

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 3

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 4

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 5



&nbsp;

## A3 — Binomial theorem and coefficients


---

### Question 109 &nbsp;·&nbsp; NIMCET 2026, Q60

*binomial coefficient x^10 · difficulty medium*

12


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 12 1 The coefficient of x10 in the expansion of (x2 + x ) + (x + 2 ) is: x 1 0

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 12

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 66

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 112


---

### Question 110 &nbsp;·&nbsp; NIMCET 2023, Q14

*coefficient binomial series · difficulty hard*

The coefficient of x50 in the expression of 1000 999 2 998 1000 (1 + x) + 2x(1 + x) + 3x (1 + x) +. . . . . . +1001x


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1005 C50

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1005 C48

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 1002 C50

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 1002 C51


---

### Question 111 &nbsp;·&nbsp; NIMCET 2018, Q61

*coefficient series power · difficulty hard*

The coefficient of xn in the expansion of (1 − 2x + 3x2 − 4x3 + ⋯ to ∞)−n is (2n)!


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** n!(n − 1) ! (2n)! 2 [(n − 1)!] (2n)! 3 2 (n!) 4 None of these


---

### Question 112 &nbsp;·&nbsp; NIMCET 2010, Q31

*binomial coefficients product · difficulty medium*

If (1 + x)n = a0 + a1 x + a2 x2 + ⋯ + an xn , then a1 a2 a3 an (1 + ) (1 + ) (1 + ) … (1 + ) a0 a1 a2 an−1


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** n n /n! n (n + 1) 2 /n! n+1 n 3 /(n + 1)! n (n − 1) 4 /n!



&nbsp;

## A3 — Other forms


---

### Question 113 &nbsp;·&nbsp; NIMCET 2021, Q65

*minimise n!(21-n)! · difficulty medium*

If n is an integer between 0 to 21, then find a value of n for which the value of n!(21 − n)! is minimum


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 9

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 10

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 12

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 21


---

### Question 114 &nbsp;·&nbsp; NIMCET 2019, Q26

*partial fractions · difficulty medium*

If , then the values of A1, A2, A3, A4 are


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** A1 = 1/2 , A2 =1/4 , A 3= 1/6 , A4 = 1/8

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** A1 = 1/8, A2=1/16 , A3= 1/24 , A4 = 1/32

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** A1 = 1/6, A2=1/12 , A3= 1/18 , A4 = 1/24

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** A1 = 1/4, A2=1/8 , A 3= 1/12 , A4 = 1/16


---

### Question 115 &nbsp;·&nbsp; NIMCET 2014, Q84

*system with sqrt xy · difficulty hard*

If x and y are positive real numbers satisfying the system of equations x2 + y√−− xy = 336 and −− y 2 + x√xy = 112 , then x + y is: −− −


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** √448 −− −

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** √224

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 20

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 40


---

### Question 116 &nbsp;·&nbsp; NIMCET 2012, Q24

*min x+1/x · difficulty easy*




&nbsp;&nbsp;&nbsp;&nbsp;**(1)** (a)

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** (b)

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** (c)

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** (d)


---

### Question 117 &nbsp;·&nbsp; NIMCET 2012, Q35

*2^a=3^b=6^-c · difficulty medium*




&nbsp;&nbsp;&nbsp;&nbsp;**(1)** (a)

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** (b)

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** (c)

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** (d)



---

&nbsp;

# A4 · Probability

*88 questions across 19 papers · Classical probability (dice, coins, cards, selections): 36 · Conditional probability, independence and Bayes: 28 · Binomial, geometric and expectation: 18 · Other forms: 6*



&nbsp;

## A4 — Classical probability (dice, coins, cards, selections)


---

### Question 1 &nbsp;·&nbsp; NIMCET 2026, Q30

*neither passes · difficulty easy*




&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 3 In a tuition batch of two students, the probability that X will pass the exam is 5 and that of Y is 4 . What is the probability that neither of X and Y will pass the exam? Assume that the outcomes of exams for X and Y are independent of each other. 1 3 10 2 3 20 1 3 5 4 1 10


---

### Question 2 &nbsp;·&nbsp; NIMCET 2026, Q115

*dice either event · difficulty easy*

A die is rolled twice independently. What is the probability that either the first die shows a number no less than 4 or the second die shows at least 4? 1 2


&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 5 6

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 2 3 4


---

### Question 3 &nbsp;·&nbsp; NIMCET 2025, Q42

*adjacent captains · difficulty easy*

The captains of five cricket teams, including India and Australia, are lined up randomly next to one other for a group photo. What is the probability that the captains of India and Australia will stand next to each other?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1 4 1 2 5 3 2 5 4 1 2


---

### Question 4 &nbsp;·&nbsp; NIMCET 2025, Q44

*two coins total probability · difficulty easy*

There are two coins, say blue and red. For blue coin, probability of getting head is 0.99 and for red coin, it is 0.01. One coin is chosen randomly and is tossed. The probability of getting head is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 0.02

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 0.5

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 1

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 0.98


---

### Question 5 &nbsp;·&nbsp; NIMCET 2025, Q105

*neither red nor green · difficulty easy*

In a box, there are 8 red, 7 blue and 6 green balls. One ball is picked up randomly. What is the probability that it is neither red nor green?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 7/19

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1/3

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 8/21

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 3/4


---

### Question 6 &nbsp;·&nbsp; NIMCET 2024, Q36

*committee couple together · difficulty medium*

A committee of 5 is to be chosen from a group of 9 people. The probability that a certain married couple will either serve together or not at all is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 2/3

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 4/9

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 1/2

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 5/9


---

### Question 7 &nbsp;·&nbsp; NIMCET 2024, Q104

*divisible by 6 three numbers · difficulty medium*

If three distinct numbers are chosen randomly from the first 100 natural numbers, then the probability that all three of them are divisible by both 2 and 3 is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 4/33

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 4/35

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 4/25

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 4/1155


---

### Question 8 &nbsp;·&nbsp; NIMCET 2023, Q10

*no black ball · difficulty easy*

A bag contain different kind of balls in which 5 yellow, 4 black & 3 green balls. If 3 balls are drawn at random then find the probability that no black ball is chosen 14 1 55 1 2 66 2 3 9


&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of these


---

### Question 9 &nbsp;·&nbsp; NIMCET 2023, Q30

*Bayes transfer ball · difficulty medium*

Bag I contains 3 red, 4 black and 3 white balls and Bag II contains 2 red, 5 black and 2 white balls. One ballsis transferred from Bag I to Bag II and then a ball is drawn from Bag II. The ball so drawn is found to be black in colour. Then the probability, that the transferred is red, is:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 4/9

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 5/18

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 1/6

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 3/10


---

### Question 10 &nbsp;·&nbsp; NIMCET 2022, Q27

*divisible by 3 digits · difficulty medium*

A four-digit number is formed using the digits 1, 2, 3, 4, 5 without repetition. The probability that is divisible by 3 is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1/3

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1/4

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 1/5

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 1/6


---

### Question 11 &nbsp;·&nbsp; NIMCET 2021, Q48

*neither event · difficulty easy*

The probability of occurrence of two events E and F are 0.25 and 0.50, respectively. the probability of their simultaneous occurrence is 0.14. the probability that neither E nor F occur is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 0.61

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 0.11

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 0.39

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 0.89


---

### Question 12 &nbsp;·&nbsp; NIMCET 2021, Q69

*first to die probability · difficulty hard*

The probability that a man who is x years old will die in a year is p. Then, amongst n persons A 1 , A 2 , … A n each x year old now, the probability that A 1 will die in one year and (be the first to die ) is 1 2 n


&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1 − ((1 − p)) n 1

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** [1 − (1 − p) n ] 2 n 1

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** [1 − (1 − p) n ] n


---

### Question 13 &nbsp;·&nbsp; NIMCET 2020, Q87

*matching numbers · difficulty easy*

A and B play a game where each is asked to select a number from 1 to 25. If the two numbers match, both win a prize. The probability that they will not win a prize in a single trial is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1/25

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 24/25

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 2/25

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 3/25


---

### Question 14 &nbsp;·&nbsp; NIMCET 2019, Q70

*a^2-b^2 divisible by 3 · difficulty medium*

Two numbers a and b are chosen are random from a set of the first 30 natural numbers, then the probability that a2 − b2 is divisible by 3 is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 47/87

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 15/87

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 12/87

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 9/87


---

### Question 15 &nbsp;·&nbsp; NIMCET 2018, Q31

*divisible by 3 combinatorial · difficulty hard*

Three numbers a,b and c are chosen at random (without replacement) from among the numbers 1, 2, 3, ..., 99. The probability that a3 + b2 + c2 − 3abc is divisible by 3 is, 33 33 3 3. C3 + ( C1 ) 1 99 C3 33 33 3 3. C3 − ( C1 ) 2 99 C3 33 33 3 2. C3 + ( C1 ) 3 99 C3 33 33 3 2. C3 − ( C1 ) 4 99 C3


---

### Question 16 &nbsp;·&nbsp; NIMCET 2018, Q32

*matching numbers · difficulty easy*

A and B play a game where each is asked to select a number from 1 to 25. If the two number match, both of them win a prize. The probability that they will not win a prize in a single trial is :


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1/25

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 24/25

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 2/25

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of these


---

### Question 17 &nbsp;·&nbsp; NIMCET 2017, Q38

*Bayes truth dice · difficulty medium*

A man is known to speak the truth 2 out of 3 times. He threw a dice cube with 1 to 6 on its faces and reports that it is 1. Then the probability that it is actually 1 is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 2/7

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1/7

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 2/3

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 5/6


---

### Question 18 &nbsp;·&nbsp; NIMCET 2016, Q29

*caps none green · difficulty medium*

A box contains 2 blue caps, 4 red caps, 5 green caps and 1 yellow cap. If four caps are picked at random, the probability that none of them is green is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 7/99

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 7/12

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 5/99

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 5/12


---

### Question 19 &nbsp;·&nbsp; NIMCET 2016, Q91

*same house · difficulty easy*

Three house are available in a locality. Three persons apply for the houses. Each applies for one house without consulting other. The probability that all the three apply for the same house is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 8/9

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 7/9

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 2/9

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 1/9


---

### Question 20 &nbsp;·&nbsp; NIMCET 2016, Q93

*winning horse · difficulty easy*

Five horse are in a race. Mr. A selects two of the horses at random and bets on them. The probability that Mr. A selected winning horse is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 3/5

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1/5

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 2/5

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 4/5


---

### Question 21 &nbsp;·&nbsp; NIMCET 2015, Q69

*tickets in AP · difficulty medium*

Out of 2n + 1 tickets, which are consecutively numbered, three are drawn at random. Then the probability that the numbers on them are in arithmetic progression is 2 n 1 4n2 −1 n 2 4n2 −1 3n 3 4n2 −1 2


&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 3n 2 4n −1


---

### Question 22 &nbsp;·&nbsp; NIMCET 2014, Q96

*no two equal with replacement · difficulty medium*

Suppose r integers, 0 < r < 10, are chosen from (0, 1, 2, ...,9) at random and with replacement. The probability that no two are equal, is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 10! 10!r! 10!

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 10!(10−r)! 10! 3 (10−2)!r! 4 r 10! 10 ×10!×r!


---

### Question 23 &nbsp;·&nbsp; NIMCET 2014, Q98

*three coins total probability · difficulty medium*

A box contains 3 coins, one coin is fair, one coin is two headed and one coin is weighted, so that the 1 probability of heads appearing is 3 . A coin is selected at random and tossed, then the probability that head appears is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 11 18

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 7 18 1 3 8 1 4


---

### Question 24 &nbsp;·&nbsp; NIMCET 2013, Q5

*biased die sum even · difficulty medium*

A six faced die is a biased one. It is thrice more likely to show an odd number than to show an even number. It is thrown twice. The probability that the sum of the numbers in the two throws is even is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 4/8

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 5/8

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 6/8

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 7/8


---

### Question 25 &nbsp;·&nbsp; NIMCET 2013, Q43

*dice sum prime · difficulty easy*

Two fair dice are tossed What is the probability that the total score is a prime number? Two fair dice are tossed. What is the probability that the total score is a prime number?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1/6

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 5/12

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 1/2

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 7/9


---

### Question 26 &nbsp;·&nbsp; NIMCET 2012, Q10

*random 0-1 determinant · difficulty medium*

A determinant is chosen at random from the set of all determinants of matrices of order 2 with elements 0 and 1 only. The probability that the determinant chosen is non-zero is: 3 1 16 3 2 8 1 3 4


&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of these


---

### Question 27 &nbsp;·&nbsp; NIMCET 2012, Q14

*coin coefficients imaginary roots · difficulty medium*

Coefficients a, b, c of ax2 + bx + c = 0 are chosen by tossing 3 fair coins. Head means 1, Tail means 2. Find the probability that the roots are imaginary 7 1 8 5 2 8 3 8 1 4 8


---

### Question 28 &nbsp;·&nbsp; NIMCET 2010, Q33

*alternate heads tails · difficulty easy*

A coin is tossed three times. Probability of getting heads and tails alternately is: 1 11


&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2 3 4 4 1 4


---

### Question 29 &nbsp;·&nbsp; NIMCET 2009, Q4

*expectation die game · difficulty medium*

A and B throw a die in succession to win a bet with A starting first. Whoever throws ‘1’ first wins Rs. 110. What are the respective expectations of A and B?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Rs. 70 and Rs. 40

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Rs. 60 and Rs. 50

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Rs. 75 and Rs. 35

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of these


---

### Question 30 &nbsp;·&nbsp; NIMCET 2009, Q13

*first to die probability · difficulty hard*

The probability that a man who is 85 yrs old will die before attaining the age of 90 is 1/3. A 1 , A 2 , A 3 , A 4 are four persons aged 85 yrs. The probability that A 1 will die before attaining 90 and will be the first to die is: 3 1 5 13 2 81 65 3 324 13 4 108


---

### Question 31 &nbsp;·&nbsp; NIMCET 2009, Q32

*coins lower face · difficulty medium*

A man has 5 coins: 2 double-headed 1 double-tailed 2 normal He randomly picks a coin and tosses it. Probability that the lower face is a head is: 1 5 2 5 3 5 4 5


---

### Question 32 &nbsp;·&nbsp; NIMCET 2008, Q38

*dice sum 5 before 7 · difficulty medium*

A pair of unbiased dice is rolled together till a sum of either 5 or 7 is obtained. The probability that 5 comes before 7 is 3 1 5 2 5 4 3 5


&nbsp;&nbsp;&nbsp;&nbsp;**(4)** none of these


---

### Question 33 &nbsp;·&nbsp; NIMCET 2008, Q39

*same letter two words · difficulty medium*

A letter is taken at random from the letters of the word STATISTICS and another letter is taken at random from the letters of the word ASSISTANT. The probability that they are the same letter is 1 45 13 2 90 19 3 90 5 4 8


---

### Question 34 &nbsp;·&nbsp; NIMCET 2008, Q40

*balls chosen by die · difficulty hard*

A bag contains 6 red and 4 green balls. A fair die is rolled and a number of balls equal to that appearing on the die is chosen from the bag at random. The probability that all the balls selected are red is 1 3 2 10 1 3 8


&nbsp;&nbsp;&nbsp;&nbsp;**(4)** none of these


---

### Question 35 &nbsp;·&nbsp; NIMCET 2008, Q42

*biased die sum even · difficulty medium*

A six-faced die is a biased one. It is thrice more likely to show an odd number than to show an even number. It is thrown twice. The probability that the sum of the numbers in the two throws is even is 4 1 8 5 2 8 6 3 8 7 4 8


---

### Question 36 &nbsp;·&nbsp; NIMCET 2008, Q43

*Bayes letter origin · difficulty medium*

A letter is known to have come from either TATANAGAR or CALCUTTA. On the envelope, just two consecutive letters, TA, are visible. The probability that the letter has come from CALCUTTA is 4 1 11 1 2 3 5 3 12


&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of these



&nbsp;

## A4 — Conditional probability, independence and Bayes


---

### Question 37 &nbsp;·&nbsp; NIMCET 2026, Q31

*multiplication rule · difficulty medium*

Let A1 , A2 , A3 are three events in a sample space with the condition A1 ∩ A2 ≠ ϕ, then always: P (A1 ∩ A2 ∩ A3 ) = P (A1 1 )P (A2 /A1 )P (A3 /(A1 ∩ A2 )) P (A1 ∩ A2 ∩ A3 ) 2 = P (A1 )P (A3 /A 2 ) P (A1 ∩ A2 ∩ A3 ) 3 = P (A1 ) (A )P (A2 /A 3 ) P (A1 ∩ A2 ∩ A3 ) = P (A1 4 )P (A1 /A2 )P (A1 /(A2 ∩ A3 ))


---

### Question 38 &nbsp;·&nbsp; NIMCET 2025, Q54

*sample space events independence · difficulty medium*

Consider the sample space Ω = {(x, y) : x, y ∈ {1, 2, 3, 4}} where each outcome is equally likely. Let A = {x ≥ 2} and B = {y > x} be two events. Then which of the following is NOT true?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** P (A ∩ B) = 1/4

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** P (B) = 3/4

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** P (B) = 3/8

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** A and B are not independent


---

### Question 39 &nbsp;·&nbsp; NIMCET 2025, Q75

*independence equivalent conditions · difficulty medium*

Let E and F be two events such that P(E) > 0 and P(F) > 0. Which one of the following is NOT equivalent to the condition that P (E) = P (E|F )?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** E and F are independent c 2P (E )P c (F ) 2 ≠ P (E c ∩ F ) P (F ) 3 = P (F /E) 4 E c and F are independent


---

### Question 40 &nbsp;·&nbsp; NIMCET 2024, Q54

*contradict each other · difficulty easy*

A speaks truth in 40% and B in 50% of the cases. The probability that they contradict each other while narrating some incident is:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1/4

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1/3

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 1/2

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 2/3


---

### Question 41 &nbsp;·&nbsp; NIMCET 2024, Q64

*symmetric difference probability · difficulty medium*

Let A and B be two events defined on a sample space Ω. Suppose AC denotes the complement of A ( ) C C relative to the sample space Ω. Then the probability P ((A ∩ B ) ∪ (A ∩ B)) equals


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** P (A) + P (A) + P (A ∩ B)

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** P (A) + P (A) − P (A ∩ B)

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** P (A) + P (A) + 2P (A ∩ B)

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** P (A) + P (A) − 2P (A ∩ B)


---

### Question 42 &nbsp;·&nbsp; NIMCET 2023, Q8

*odds bounds probability · difficulty medium*

Given to events A and B such that odd in favour A are 2 : 1 and odd in favour of A ∪ B are 3 : 1. Consistent with this information the smallest and largest value for the probability of event B are given by


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 3 1 ≤P (B)≤ 12 4 1 1

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** ≤P (B)≤

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 2 1 1 3 ≤P (B)≤ 6 3

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of these


---

### Question 43 &nbsp;·&nbsp; NIMCET 2023, Q103

*Bayes defective plants · difficulty medium*

A computer producing factory has only two plants T1 and T2 . Plant T1 produces 20% and plant T2 produces 80% of total computers produced. 7% of computers produced in the factory turn out to be defective. It is known that P (computer turns out to be defective given that it is produced in plant T1 ) ( b d f i i h i i d di l T ) h ( )d = 10P (computer turns out to be defective given that it is produced in plant T2 ). where P(E) denotes the probability of an event E. A computer produced in the factory is randomly selected and it does not turn out to be defective. Then the probability that it is produced in plant T2 is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 36 73

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 47 79

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 78 93

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 75 83


---

### Question 44 &nbsp;·&nbsp; NIMCET 2023, Q114

*contradict each other · difficulty easy*

A speaks truth in 60% and B speaks the truth in 50% cases. In what percentage of cases they are likely incontradict each other while narrating some incident is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1/2

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1/4

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 2/3

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 1/3


---

### Question 45 &nbsp;·&nbsp; NIMCET 2022, Q21

*independence complements · difficulty medium*

If 0<P (A)<1 and 0<P (B)<1 and P (A ∩ B) = P (A)P (B) , then


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** P (B|A) = P (B) − P (A) c

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** P (A c c − B ) = P (A ) − P (B ) c c c

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** P (A ∪ B) = P (A )P (B ) c

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** P (A|B) = P (A) − P (B)


---

### Question 46 &nbsp;·&nbsp; NIMCET 2019, Q13

*Bayes defective plants · difficulty medium*

A computer producing factory has only two plants T1 and T2 produces 20% and plant T2 produces 80% of the total computers produced. 7% of the computers produced in the factory turn out to be defective. It is known that P (computer turns out to be defective given that it is produced in plant T1 10P(computer turns out to be defective given that it is produced in plant T 2 ). A computer produced in the factory is randomly selected and it does not turn out to be defective. Then the probability that it is produced in plant T2 is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 36/73

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 47/79

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 78/93

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 75/83


---

### Question 47 &nbsp;·&nbsp; NIMCET 2019, Q35

*events statements true · difficulty medium*

Let U and V be two events of a sample space S and P(A) denote the probability of an event A. Which of the following statements is true?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** If P(U) = P(V) the U = V

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** if P(U)=0 then U c = S

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** If U ∩ V =

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** If U and V are independent, then so are Uc and Vc


---

### Question 48 &nbsp;·&nbsp; NIMCET 2018, Q58

*events relation · difficulty medium*

5 1 If A and B are two events and P (A ∪ B) = , P (A ∩ B) = , the A and B are two events which are 6 2


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Dependent

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Independent

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Mutually Exclusive

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** Equally Likely


---

### Question 49 &nbsp;·&nbsp; NIMCET 2017, Q35

*witnesses truth · difficulty medium*

A and B are independent witness in a case. The chance that A speaks truth is x and B speaks truth is y. If A and B agree on certain statement, the probability that the statement is true is xy xy + (1 1 − x)(1 − y) xy


&nbsp;&nbsp;&nbsp;&nbsp;**(2)** (1 − x)(1 − y) (1 − x)(1 − y)

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** xy + (1 − x)(1 − y) x + y xy + (1 4 − x)(1 − y) G t Di i (htt // t t i t d i /lib / /4266)


---

### Question 50 &nbsp;·&nbsp; NIMCET 2017, Q37

*Bayes guessing · difficulty medium*

In an entrance test there are multiple choice questions, with four possible answer to each question of which one is correct. The probability that a student knows the answer to a question is 90%. If the student gets the correct answer to a question, then the probability that he as guessing is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 37/40

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1/37

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 36/37

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 1/9


---

### Question 51 &nbsp;·&nbsp; NIMCET 2017, Q39

*independent events · difficulty medium*

Let A and B be two events such that , and where stands for the complement of event A. Then the events A and B are


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** independent but notequally likely

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** mutually exclusively and independent

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** equally likely andmutually exclusive

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** equally likelybut not independent


---

### Question 52 &nbsp;·&nbsp; NIMCET 2017, Q42

*addition rule · difficulty easy*

If E1 and E2 are two events associated with a random experiment such that P (E2) = 0.35, P (E1 or E2) = 0.85 and P (E1 & E2) = 0.15 then P(E1) is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 0.25

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 0.35

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 0.65

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 0.75


---

### Question 53 &nbsp;·&nbsp; NIMCET 2016, Q80

*independent events outcomes · difficulty medium*

An experiment has 10 equally likely outcomes. Let A and B be two non-empty events of the experiment. If A consists of 4 outcomes, the number of outcomes that B must have so that A and B are independent is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 2, 4 or 8

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 3, 6 or 9

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 4 or 8

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 5 or 10


---

### Question 54 &nbsp;·&nbsp; NIMCET 2016, Q83

*complement sum · difficulty easy*

For any two events A and B, the probability that atleast one of them occur is 0.6. If A and B occur simultaneously with a probability 0.3 then P (A′ ) + P (B′ ) is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 09 0.9

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1.15

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 1.1

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 1.0


---

### Question 55 &nbsp;·&nbsp; NIMCET 2016, Q85

*contradict each other · difficulty easy*

The probability that A speaks truth is 4/5 while this probability for B is 3/4. The probability that they contradict each other when asked to speak on a fact is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 3/20

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1/5

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 7/20

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 4/5


---

### Question 56 &nbsp;·&nbsp; NIMCET 2015, Q81

*conditional targets · difficulty medium*




&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1 A is targeting B, B and C are targeting A. Probability of hitting the target by A, B and C are 3 , 2 and 1 3 respectively. If A is hit then the probability that B hits the target and C does not, is 1 2 2 1 3 2 3 4 3 4


---

### Question 57 &nbsp;·&nbsp; NIMCET 2014, Q65

*total probability warranty · difficulty medium*

A chain of video stores sells three different brands of DVD players. Of its DVD player sales, 50% are brand 1, 30% are brand 2 and 20% are brand 3. Each manufacturer offers one year warranty on parts and labor. It is known that 25% of brand 1 DVD players require warranty repair work whereas the corresponding percentage for brands 2 and 3 are 20% and 10% respectively. The probability that a randomly selected purchaser has a DVD player that will need repair while under warranty, is:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 0.795

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 0.205

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 0.125

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 0.060


---

### Question 58 &nbsp;·&nbsp; NIMCET 2013, Q20

*contradict each other · difficulty medium*

Atal Speaks truth in 70% and George speaks the truth in 60% cases. In what percentage of cases they are likely to contradict each other in stating the same fact? 13 1 50


&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 11 50

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 23 50 33 4 50


---

### Question 59 &nbsp;·&nbsp; NIMCET 2013, Q34

*events independent · difficulty medium*

5 1 ¯ ¯¯¯ 1 If A and B are two events such that P (A ∪ B) = 6 , P (A ∩ B) = 3 and P (B) = 2 , then the events A and B are


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Dependent

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Independent

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Mutually exclusive

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of these


---

### Question 60 &nbsp;·&nbsp; NIMCET 2012, Q28

*conditional probability · difficulty easy*

1 Let P (E) denote the probability of event E . Given P (A) = 1, P (B) = 2 , the values of P (A ∣ B) and P (B ∣ A) respectively are


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1 , 1 4 2

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1 , 1 2 4 1

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** ,1 2 1

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 1, 2


---

### Question 61 &nbsp;·&nbsp; NIMCET 2012, Q119

*conditional probability · difficulty easy*

1 Let P(E) denote the probability of event E. Given P(A) = 1, P(B) = 2 the value of P(A|B) and P(B|A) respectively are


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1 , 1 4 2

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1 , 4 1 2 1

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** ,1 2

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 1 , 1 2


---

### Question 62 &nbsp;·&nbsp; NIMCET 2009, Q8

*witnesses truth · difficulty medium*

A and B are independent witnesses. Probability A speaks the truth = x, Probability B speaks the truth = y. If both agree on a statement, the probability that the statement is true is: xy xy + (1 1 − x)(1 − y) xy


&nbsp;&nbsp;&nbsp;&nbsp;**(2)** (1 − x)(1 − y) (1 − x)(1 − y)

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** xy + (1 − x)(1 − y) (1 − x)(1

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** − y) xy


---

### Question 63 &nbsp;·&nbsp; NIMCET 2009, Q38

*independent events · difficulty medium*




&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1 1 Events A and B satisfy: P (A ∪ B) = , P (A ∩ B) = , P (A) = Then events A and B 6 4 4 are: 1 Independent but not equally likely

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Mutually exclusive and independent

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Equally likely and mutually exclusive

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** Equally likely but not independent


---

### Question 64 &nbsp;·&nbsp; NIMCET 2008, Q19

*conditional probability · difficulty medium*

If two events A and B such that P (A′ ) = 0.3, P (B) = 0.5 and P (A ∩ B) = 0.3 , then P (B ∣ A ∪ B ) is ′ 1 4 3 2 8 1 3 8


&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of these



&nbsp;

## A4 — Binomial, geometric and expectation


---

### Question 65 &nbsp;·&nbsp; NIMCET 2024, Q44

*binomial exactly two · difficulty easy*

A critical orthopedic surgery is performed on 3 patients. The probability of recovering a patient is 0.6. Then the probability that after surgery, exactly two of them will recover is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 0.123

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 0.432

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 0.321

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 0.234


---

### Question 66 &nbsp;·&nbsp; NIMCET 2024, Q74

*odd number of heads · difficulty medium*

A coin is thrown 8 number of times. What is the probability of getting a head in an odd number of throw?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 3/4

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1/2

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 1/4

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 1/8


---

### Question 67 &nbsp;·&nbsp; NIMCET 2024, Q92

*geometric probability quadrant · difficulty medium*

Region R is defined as region in first quadrant satisfying the condition x2 + y 2 < 4 . Given that a point P=(r,s) lies in R, what is the probability that r>s?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 0

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 1/2

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 1/3


---

### Question 68 &nbsp;·&nbsp; NIMCET 2022, Q42

*geometric probability circles · difficulty medium*

There are two circles in xy −plane whose equations are x2 + y 2 − 2y = 0 and x + y − 2y − 3 = 0. A point (x, y) is chosen at random inside the larger circle. Then the


&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2 probability that the point has been taken from smaller circle is 1 1/3 2 2/3

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 1/2

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 1/4


---

### Question 69 &nbsp;·&nbsp; NIMCET 2021, Q77

*triplets binomial · difficulty medium*

If three thrown of three dice, the probability of throwing triplets not more than twice is 1


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1 − 2 6 1

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1 − 3 6 1

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 1 − 2 36 1

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 1 − 3 36


---

### Question 70 &nbsp;·&nbsp; NIMCET 2019, Q36

*expected value raffle · difficulty easy*

If a man purchases a raﬄe ticket, he can win a ﬁrst prize of Rs.5,000 or a second prize of Rs.2,000 with probabilities 0.001 and 0.003 respectively. What should be a fair price to pay for the ticket?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Rs.11

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Rs. 15

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Rs. 2000

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of these


---

### Question 71 &nbsp;·&nbsp; NIMCET 2019, Q53

*random walk binomial · difficulty medium*

A man takes a step forward with probability 0.4 and backward with probability 0.6. The probability that at the end of eleven steps, he is one step away from the starting point is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 462( 0.34)5

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 462( 0.04)5

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 462( 0.14)5

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 462(0.24)5


---

### Question 72 &nbsp;·&nbsp; NIMCET 2018, Q30

*meeting probability geometric · difficulty hard*

Two person A and B agree to meet 20 april 2018 between 6pm to 7pm with understanding that they will wait no longer than 20 minutes for the other. What is the probability that they meet?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 5/9

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 7/9

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 2/9

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 4/9


---

### Question 73 &nbsp;·&nbsp; NIMCET 2015, Q60

*geometric even throw · difficulty medium*

If a fair dice is rolled successively, then the probability that 1 appears in an even numbered throw is 5 1 36


&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 6 11 1 3 6 5 4 11


---

### Question 74 &nbsp;·&nbsp; NIMCET 2014, Q103

*at least one correct · difficulty easy*

A student takes a quiz consisting of 5 multiple choice questions. Each question has 4 possible answers. If a student is guessing the answer at random and answer to different are independent, then the probability of atleast one correct answer is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 0.237

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 0.00076

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 0.7627

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 1


---

### Question 75 &nbsp;·&nbsp; NIMCET 2013, Q8

*at least two hits · difficulty medium*

Person A can hit a target 4 times in 5 attempts. Person B - 3 times in four attempts. Person C – 2 times in 3 attempts. They fire a volley. The probability that the target is hit at least two times. Is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 3/4

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1/2

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 5/6

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 1


---

### Question 76 &nbsp;·&nbsp; NIMCET 2013, Q48

*binomial at least four · difficulty medium*

An experiment succeeds twice often as it fails. The probability that in the next six trials there will be at least four successes is.


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 240/729

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 496/729

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 220/729

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 233/729


---

### Question 77 &nbsp;·&nbsp; NIMCET 2012, Q37

*odd number of heads · difficulty medium*




&nbsp;&nbsp;&nbsp;&nbsp;**(1)** (a)

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** (b)

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** (c)

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** (d)


---

### Question 78 &nbsp;·&nbsp; NIMCET 2012, Q40

*binomial max probability · difficulty hard*




&nbsp;&nbsp;&nbsp;&nbsp;**(1)** (a)

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** (b)

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** (c)

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** (d)


---

### Question 79 &nbsp;·&nbsp; NIMCET 2011, Q2

*binomial defective packets · difficulty medium*

Probability a blade is defective = 0.002 , packet of 10 blades. Find packets with no defective blades in 10000 packets.


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 2000

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 9802

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 9950

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 8000


---

### Question 80 &nbsp;·&nbsp; NIMCET 2011, Q15

*gun hits probability · difficulty medium*

An anti-aircraft gun fires at a plane. Probabilities of hitting at slots 1,2,3,4 are 0.4, ; 0.3, ; 0.2, ; 0.1. Probability that the gun hits the plane is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 0.5 0 5

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 0.7235

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 0.6976

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 1.0


---

### Question 81 &nbsp;·&nbsp; NIMCET 2010, Q34

*binomial max probability · difficulty hard*

One hundred identical coins, each with probability p of showing up a head, are tossed. If $0


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1 2

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 49 101

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 50 101

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 51 101


---

### Question 82 &nbsp;·&nbsp; NIMCET 2009, Q39

*gun hits probability · difficulty medium*

An anti-aircraft gun fires a maximum of four shots. Probabilities of hitting in the 1st, 2nd, 3rd, and 4th shot are 0.4, 0.3, 0.2 and 0.1 respectively. Find the probability that the gun hits the plane.


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 0.6972

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 0.6978

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 0.6976

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 0.6974



&nbsp;

## A4 — Other forms


---

### Question 83 &nbsp;·&nbsp; NIMCET 2021, Q71

*x+100/x inequality · difficulty medium*

If a number x is selected at random from natural numbers 1,2,…,100, then the probability for x + 100 x >29 is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 37 50

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 39 50

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 41 50 41 4 50


---

### Question 84 &nbsp;·&nbsp; NIMCET 2020, Q86

*problem solved by C · difficulty medium*

A problem in Mathematics is given to 3 students A, B, and C. If the probability of A solving the problem is 1/2 and B not solving it is 1/4 . The whole probability of the problem being solved is 63/64 , then what is the probability of solving it by C?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1/9

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1/64

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 7/8

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 1/2


---

### Question 85 &nbsp;·&nbsp; NIMCET 2015, Q83

*intersection bounds · difficulty medium*




&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1 Suppose that A and B are two events with probabilities P (A) = 2 P (B) = 3 Then which of the following is true? 1 1 1 ≤ P (A ∩ B) ≤ 3 2 1 1

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** ≤ P (A ∩ B) ≤ 4 3 1 1

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** ≤ P (A ∩ B) ≤ 6 3 1 1

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** ≤ P (A ∩ B) ≤ 4 2


---

### Question 86 &nbsp;·&nbsp; NIMCET 2012, Q46

*problem solved · difficulty medium*




&nbsp;&nbsp;&nbsp;&nbsp;**(1)** (a)

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** (b)

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** (c)

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** (d)


---

### Question 87 &nbsp;·&nbsp; NIMCET 2011, Q36

*probability distribution constant · difficulty easy*

A random variable X has the probability distribution: x 0 1 2 3 4 5 6 7 8 P (X = x) a 3a 5a 7a 9a 11a 13a 15a 17a The value of a is: 1 81 2 82 5 3 81 7 4 81


---

### Question 88 &nbsp;·&nbsp; NIMCET 2010, Q32

*match points probability · difficulty medium*

India plays 4 matches. Probabilities of scoring 0, 1, 2 points: 0.45, 0.05, 0.50. Find probability of at least 7 points.


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 0.8750

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 0.0875

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 0.0625

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 0.0250



---

&nbsp;

# A5 · Sets, relations & functions

*59 questions across 19 papers · Set counting and inclusion–exclusion: 35 · Set algebra and identities: 13 · Relations and functions: 11*



&nbsp;

## A5 — Set counting and inclusion–exclusion


---

### Question 1 &nbsp;·&nbsp; NIMCET 2026, Q26

*venn regions five sets · difficulty medium*

If there are 5 sets represented via a Venn diagram, the number of regions that arise in the Venn diagram equals:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 22

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 20

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 28

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 32


---

### Question 2 &nbsp;·&nbsp; NIMCET 2026, Q28

*triples of sets count · difficulty hard*

The number of triples of sets (A, B, C ) with A, B, C ⊆ 1, … , n such that (A ∩ B) ⊆ C ⊆ (A ∪ B) is:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 5 n

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 6 n

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 7 n

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 8 n


---

### Question 3 &nbsp;·&nbsp; NIMCET 2025, Q5

*set expression countries · difficulty easy*

Suppose that C represents the set of all countries, R represents the set of all countries that have at least one river flowing through it, M represents the set of all countries that have at least one mountain in it, and D represents the set of all countries that have at least one desert in it. It is given that: R ∪ M ∪ D = C Which one of the following gives the set of all countries that have either a mountain or a river, but do not have a desert in it? The notation Dc represents the complement of the set D with respect to the universal set C .


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** (R ∪ M ) ∩ D c

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** (R ∪ M ) − ((R ∩ M ) ∩ D ) c

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** (R ∪ M ) − (R ∩ M )

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** (R ∩ M ) ∩ D c


---

### Question 4 &nbsp;·&nbsp; NIMCET 2025, Q46

*relation elements count · difficulty easy*

Let A = {1,2,3, ... , 20}. Let R ⊆ A × A such that R = {(x,y): y = 2x - 7}. Then the number of elements in R, is equal to


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 10

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 13

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 7

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 17


---

### Question 5 &nbsp;·&nbsp; NIMCET 2025, Q49

*set inclusion induction · difficulty medium*

Let A = {5n − 4n − 1: n ∈ N } and B = {16(n − 1): n ∈ N } be sets. Then


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Neither A ⊂ B and B ⊂ A

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** A ∩ B is a finite set

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** A ⊂ B

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** B ⊂ A


---

### Question 6 &nbsp;·&nbsp; NIMCET 2024, Q24

*natural solutions count · difficulty easy*

Let C denote the set of all tuples (x,y) which satisfy x2 − 2y = 0 where x and y are natural numbers. What is the cardinality of C?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 0

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 2

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 3


---

### Question 7 &nbsp;·&nbsp; NIMCET 2024, Q27

*survey coffee tea · difficulty medium*

In a recent survey of 500 employees in a company, it was found that 60% of the employees prefer coffee over tea, 25% prefer tea over coffee, and the remaining 15% have no preference. If 20% of the employees who prefer coffee are also tea drinkers, how many employees prefer only tea?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 75

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 50

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 65

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 55


---

### Question 8 &nbsp;·&nbsp; NIMCET 2024, Q66

*integer solutions intersection · difficulty easy*

Let Z be the set of all integers, and consider the sets X = {(x, y): x2 + 2y 2 = 3, x, y ∈ Z } and Y = {(x, y): x>y, x, y ∈ Z } . Then the number of elements in X ∩ Y is:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 3

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 4


---

### Question 9 &nbsp;·&nbsp; NIMCET 2024, Q98

*max intersection three sets · difficulty medium*

Out of a group of 50 students taking examinations in Mathematics, Physics, and Chemistry, 37 students passed Mathematics, 24 passed Physics, and 43 passed Chemistry. Additionally, no more than 19 students passed both Mathematics and Physics, no more than 29 passed both Mathematics and Chemistry, and no more than 20 passed both Physics and Chemistry. What is the maximum number of students who could have passed all three examinations?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 14

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 10

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 12

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 9


---

### Question 10 &nbsp;·&nbsp; NIMCET 2023, Q71

*exactly one course · difficulty medium*

A university is offering elective courses in Mathematics, Economics and Sociology. Each of its 100 undergraduate students has to opt for at least one of these electives. Course enrollment data showed that 47 students enrolled for Mathematics, 47 students enrolled for Economics and 57 students enrolled for Sociology. If 7 students enrolled for all three courses, how many students enrolled for exactly one course?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 58

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 56

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Cannot be determined

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 60


---

### Question 11 &nbsp;·&nbsp; NIMCET 2022, Q19

*survey both range · difficulty medium*

A survey is done among a population of 200 people who like either tea or coffee. It is found that 60% of the pop lation like tea and 72% of the population like coffee. Let x be the number of people who like both tea & coffee. Let m≤ x ≤ n, then choose the correct option.


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** n-m=56

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** n-m=28

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** n-m=32

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** n+m=92


---

### Question 12 &nbsp;·&nbsp; NIMCET 2021, Q64

*cartesian product count · difficulty medium*

If A={1,2,3,4} and B={3,4,5}, then the number of elements in (A∪B)×(A∩B)×(AΔB)


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 18

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 20

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 24

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 30


---

### Question 13 &nbsp;·&nbsp; NIMCET 2021, Q66

*union of sets counting · difficulty medium*

Suppose A1 , A2 , … , A30 are 30 sets each with five elements and B1 , B2 , B3 , … , Bn are n 30 n sets (each with three elements) such that ⋃i=1 Ai = ⋃j=1 Bi = S and each element of S belongs to exactly ten of the Ai 's and exactly 9 of the B′j 's. Then n =


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 15

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 45

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 75

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 90


---

### Question 14 &nbsp;·&nbsp; NIMCET 2020, Q7

*subset union cardinality · difficulty easy*

If A is a subset of B and B is a subset of C, then cardinality of A ∪ B ∪ C is equal to


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Cardinality of C

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Cardinality of B

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Cardinality of A

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of the above


---

### Question 15 &nbsp;·&nbsp; NIMCET 2020, Q79

*newspapers both · difficulty easy*

In a class of 50 students, it was found that 30 students read "Hitava", 35 students read "Hindustan" and 10 read neither. How many students read both: "Hitavad" and "Hindustan" newspapers?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 25

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 20

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 15

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 30


---

### Question 16 &nbsp;·&nbsp; NIMCET 2020, Q80

*set union induction · difficulty medium*

If A = {4x − 3x − 1 : x ∈ N } and B = {9(x − 1) : x ∈ N }, where N is the set of natural numbers, then


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** A⊂B

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** A⊆ B

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** A⊃B

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** A⊇B


---

### Question 17 &nbsp;·&nbsp; NIMCET 2020, Q81

*power set count · difficulty easy*

If A = { x, y, z }, then the number of subsets in powerset of A is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 6

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 8

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 7

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 9


---

### Question 18 &nbsp;·&nbsp; NIMCET 2019, Q6

*voters both neither · difficulty easy*

In a beauty contest, half the number of experts voted Mr. A and two thirds voted for Mr. B 10 voted for both and 6 did not for either. How may experts were there in all.


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 18

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 36

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 24

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of these


---

### Question 19 &nbsp;·&nbsp; NIMCET 2019, Q33

*union of sets counting · difficulty medium*

Suppose A1, A2, ... 30 are thirty sets, each with five elements and B1, B2, ...., Bn are n sets each with three elements. Let ⋃ i =1Ai = ⋃ nj=1Bj = S. If each element of S belongs to exactly ten of the Ai' s and exactly nine of the Bj' s then n= 30


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 15

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 30

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 40

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 45


---

### Question 20 &nbsp;·&nbsp; NIMCET 2018, Q57

*exactly one subject · difficulty medium*

In a survey where 100 students reported which subject they like, 32 students in total liked Mathematics, 38 students liked Business and 30 students liked Literature. Moreover, 7 students liked both Mathematics and Literature, 10 students liked both Mathematics and Business. 8 students like both Business and Literature, 5 students liked all three subjects. Then the number of people who liked exactly one subject is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 60

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 65

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 70

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 80


---

### Question 21 &nbsp;·&nbsp; NIMCET 2018, Q77

*English Hindi speakers · difficulty easy*

There are 50 students admitted to a nursery class. Some students can speak only English and some can speak only Hindi. Ten students can speak both English and Hindi. If the number of students who can speak English is 21, then how many students can speak Hindi, only Hindi and only English.


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 21, 11 and 29 respectively

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 39, 29 and 11 respectively

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 27, 27 and 13 respectively

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 28, 18 and 22 respectively


---

### Question 22 &nbsp;·&nbsp; NIMCET 2018, Q99

*films all three · difficulty medium*

Forty students watched films A, B and C over a week. Each student watched either only one film or all three. Thirteen students watched film A, sixteen students watched film B and nineteen students watched film C. How many students watched all three films?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 0

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 4

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 8


---

### Question 23 &nbsp;·&nbsp; NIMCET 2017, Q68

*power set count · difficulty easy*

The number of elements in the power set P(S) of the set S = {2, (1, 4)} is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 2

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 4

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 8

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 10


---

### Question 24 &nbsp;·&nbsp; NIMCET 2016, Q71

*set union induction · difficulty medium*

If X = 4n − 3n − 1, ; n ∈ N and Y = 9n − 9, ; n ∈ N , then X ∪ Y is equal to


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Y

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** X

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** N

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None


---

### Question 25 &nbsp;·&nbsp; NIMCET 2015, Q87

*inclusion exclusion three sets · difficulty medium*

A professor has 24 text books on computer science and is concerned about their coverage of the topics (P) compilers, (Q) data structures and (R) Operating systems. The following data gives the number of books that contain material on these topics: n(P ) = 8, n(Q) = 13, n(R) = 13, n(P ∩ R) = 3, n(P ∩ R) = 3, n(Q ∩ R) = 3, n(Q ∩ R) = 6, n(P ∩ Q ∩ R) = 2 where n(x) is the cardinality of the set x. Then the number of text books that have no material on compilers is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 4

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 8

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 12

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 16


---

### Question 26 &nbsp;·&nbsp; NIMCET 2014, Q93

*intersection of sets curves · difficulty easy*

If the sets A and B are defined as A = {(x, y) | y = 1 / x, 0 ≠ x ∈ R}, B = {(x, y)|y = -x ∈ R} then


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** A ∩ B = ϕ

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** A ∩ B = B

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** A ∩ B = A

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of these


---

### Question 27 &nbsp;·&nbsp; NIMCET 2013, Q3

*inclusion exclusion four sets · difficulty medium*

Find the number of elements in the union of 4 sets A, B, C and D having 150, 180, 210 and 240 elements respectively, given that each pair of sets has 15 elements in common. Each triple of sets has 3 elements in common and A ∩ B ∩ C ∩ D = ϕ


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 616

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 512

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 111

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 702


---

### Question 28 &nbsp;·&nbsp; NIMCET 2012, Q15

*physics only count · difficulty easy*

In a class of 100 students, 55 passed in Mathematics and 67 passed in Physics.The number of students who passed in Physics only is:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 22

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 33

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 10

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 45


---

### Question 29 &nbsp;·&nbsp; NIMCET 2011, Q12

*complement intersection count · difficulty easy*

Let X be the universal set for sets A and B. If n(A) = 200, ; n(B) = 300, ; n(A ∩ B) = 100, then n(A′ ∩ B′ ) = 300 provided n(X) is equal to


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 600

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 700

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 800

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 900


---

### Question 30 &nbsp;·&nbsp; NIMCET 2011, Q13

*newspapers students count · difficulty medium*

In a college of 300 students, every student reads 5 newspapers and every newspaper is read by 60 students. The number of newspapers is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** at least 30

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** at most 20

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** exactly 25

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** exactly 28


---

### Question 31 &nbsp;·&nbsp; NIMCET 2010, Q29

*survey both range · difficulty medium*

Survey: 63 like cheese, 76 like apples. If x like both?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** x ≥ 39

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** x ≤ 63 39 ≤ x 3 ≤ 63 4 None


---

### Question 32 &nbsp;·&nbsp; NIMCET 2009, Q25

*set union induction · difficulty medium*

If P = (4n − 3n − 1) : n ∈ N and Q = (9n − 9) : n ∈ N , then P ∪ Q equals to:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** N

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** P

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Q

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of these


---

### Question 33 &nbsp;·&nbsp; NIMCET 2009, Q27

*inclusion exclusion four sets · difficulty medium*

A1 , A2 , A3 , A4are subsets of U (75 elements). Each Ai has 28 elements. Any two intersect in 12 elements. Any three intersect in 5 elements. All four intersect in 1 element. Find the number of elements belonging to none of the four subsets.


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 15

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 17

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 16

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 18


---

### Question 34 &nbsp;·&nbsp; NIMCET 2009, Q34

*max intersection three sets · difficulty medium*

From 50 students: 37 passed Math, 24 Physics, 43 Chemistry. At most 19 passed Math & Physics, at most 29 passed Math & Chemistry, at most 20 passed Physics & Chemistry. Intersection of all 3 is x. Find maximum possible value of x.


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 10

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 12

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 9

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of these


---

### Question 35 &nbsp;·&nbsp; NIMCET 2008, Q12

*union of sets counting · difficulty medium*

Suppose P1 , P2 , … , P30 are thirty sets each having 5 elements and Q1 , Q2 , … , Qn are n sets with 3 30 n elements each. Let ⋃i=1 Pi = ⋃j=1 Qj = S and each element of S belongs to exactly 10 of the P ’s and exactly 9 of the Q’s. Then n equals


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 15

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 3

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 45

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of these



&nbsp;

## A5 — Set algebra and identities


---

### Question 36 &nbsp;·&nbsp; NIMCET 2026, Q23

*symmetric difference identity · difficulty medium*

The set (AΔB) ∩ C is not equal to: (A


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** ∩ C )Δ (B ∩ C ) c ((A ∩ B ) ∩ C)

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** ∪ ((B c ∩ A ) ∩ C) c (A ∩ B) 3 ∩ C (A ∩ B c ∩ C) 4 ∩ ((A ∪ B) ∩ C)


---

### Question 37 &nbsp;·&nbsp; NIMCET 2026, Q27

*relation function statements · difficulty hard*

Let R ⊂ N × N. Which of the following statement is necessarily true?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** If for each a ∈ N the set Ra := b ∈ N : (a, b) ∈ R has cardinality at most 1 , then R represents a function f : N → N

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** If for each b ∈ N the set Rb := a ∈ N : (a, b) ∈ R has cardinality at most 1 , then R represents a function f : N → N

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** If for some a ∈ N the set Ra is infinite then Ra and R have the same cardinality

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** If for all a ∈ N the set Ra is infinite then the cardinality of R is larger than that of Ra


---

### Question 38 &nbsp;·&nbsp; NIMCET 2025, Q72

*signum composition statements · difficulty medium*

Let g : R → R and h : R → R , be two functions such that h(x) = sgn(g(x)) . Then select which of the following is not true?( R denotes the set of all real numbers, sgn stands for signum function) The domain of h(x) is the 1 same as the domain of g(x). The domain of continuity of h(x)


&nbsp;&nbsp;&nbsp;&nbsp;**(2)** equal the domain of continuity of g(x) − {x ∈ R, g(x) = 0} The domain of h(x) is different

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** from the domain of g(x) at the same point.

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** h(x) is discontinuous at g(x) = 0


---

### Question 39 &nbsp;·&nbsp; NIMCET 2023, Q23

*reflexive relation ordered pairs · difficulty easy*

Let R be reflexive relation on the finite set a having 10 elements and if m is the number of ordered pair in R, then


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** m ≥ 10

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** m = 100

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** m = 10

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** m ≤ 10


---

### Question 40 &nbsp;·&nbsp; NIMCET 2023, Q117

*sets with X relation · difficulty medium*

Let A and B be sets. A ∩ X = B ∩ X = ϕ and A ∪ X = B ∪ X for some set X, relation between A&B


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** A = B

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** A ∪ B = X

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** B = X

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** A = X


---

### Question 41 &nbsp;·&nbsp; NIMCET 2022, Q47

*power set difference 112 · difficulty medium*

There are two sets A and B with |A| = m and |B| = n. If |P(A)| − |P(B)| = 112 then choose the wrong option (where |A| denotes the cardinality of A, and P(A) denotes the power set of A)


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** m+n=11

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2m-n=1

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 2n-m=1

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 3n-m=5


---

### Question 42 &nbsp;·&nbsp; NIMCET 2021, Q72

*set identity · difficulty easy*

If X and Y are two sets, then X∩Y ' ∩ (X∪Y) ' is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** X'

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Y'

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** ϕ

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of these


---

### Question 43 &nbsp;·&nbsp; NIMCET 2017, Q71

*subsets at least three · difficulty medium*

Let A and B two sets containing four and two elements respectively. The number of subsets of the A × B, each having at least three elements is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 270

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 239

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 219

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 256


---

### Question 44 &nbsp;·&nbsp; NIMCET 2016, Q73

*set statements false · difficulty easy*

Which of the following statements is False ?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 2 ∈ A ∪ B implies that if 2 ∉ A then 2 ∈ B

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2, 3 ⊆ A implies that 2 ∈ A and 3 ∈ A A ∩ B implies that 2, 3 ⊆ A and 2, 3 ⊆ B 3 ⊇ 2, 3 4 none of the above


---

### Question 45 &nbsp;·&nbsp; NIMCET 2016, Q84

*subsets difference 56 · difficulty easy*

Two finite sets A and B are having m and n elements. The total number of subsets of the first set is 56 more than the total number of subsets of the second set. The value of m and n are


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 7,6

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 6,3

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 5,3

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 8, 7


---

### Question 46 &nbsp;·&nbsp; NIMCET 2015, Q71

*set identity · difficulty easy*

Let P¯ and Q ¯ denote the complements of two sets P and Q. Then the set (P − Q) ∪ (Q − P ) ∪ (P ∩ Q) is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** P ∪ Q

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** ¯ ¯ P ∪ Q

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** P ∩ Q

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** ¯ ¯ P ∩ Q


---

### Question 47 &nbsp;·&nbsp; NIMCET 2010, Q27

*subsets containing elements · difficulty medium*

How many proper subsets of 1, 2, 3, 4, 5, 6, 7 contain the numbers 1 and 7?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 7 2

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 31

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 32

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 62


---

### Question 48 &nbsp;·&nbsp; NIMCET 2010, Q28

*set identities · difficulty medium*

Identify the wrong statement. A − B 1 ¯ ¯¯¯ = A ∩ B (A − B) − C = (A 2 − C) − (B − C) ¯ ¯¯¯¯ ¯¯¯ ¯ A ∪ B 3 ¯ ¯¯¯ ¯ ¯¯¯ = A ∩ B A ∩ B


&nbsp;&nbsp;&nbsp;&nbsp;**(4)** ¯ ¯¯¯ ∩ C ⊂ A ∩ B



&nbsp;

## A5 — Relations and functions


---

### Question 49 &nbsp;·&nbsp; NIMCET 2026, Q24

*relation properties · difficulty medium*

Define a relation ∼ on the set 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 by a ∼ b if a − 2b is divisible by 3. Then:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** ∼ is not symmetric, not reflexive and not transitive

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** ∼ is reflexive but neither symmetric nor transitive

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** ∼ is symmetric but neither transitive nor reflexive

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** ∼ is transitive but neither reflexive nor symmetric


---

### Question 50 &nbsp;·&nbsp; NIMCET 2026, Q47

*composition piecewise · difficulty medium*

f (x) = { 1 if |x| ≤ 1 , g(x) = { 2 2 − x if |x| ≤ 2 0 if |x| > 1 2 if |x| > 2 If h(x) = f [g(x)], then an interval in which h(x) = 1 for all values of x in that interval is: 1 ≤ |x|


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 2 – ≤ √3 –

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** |x| ≤ √2 1 ≤ |x|

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** – ≤ √3 –

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** |x| ≤ √3


---

### Question 51 &nbsp;·&nbsp; NIMCET 2024, Q68

*functional substitution · difficulty easy*

1−x The value of f (1) for f ( 1+x ) = x + 2 is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 3

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 4


---

### Question 52 &nbsp;·&nbsp; NIMCET 2023, Q27

*piecewise function modulus · difficulty medium*

−1 −2 ≤ x ≤ 0 A real valued function f is defined as f (x) = { . Which of the following x − 1 0 ≤ x ≤ 2 statement is FALSE?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** f (|x|) = |x| − 1, if 0 ≤ x ≤

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** f (|x|) = x − 1, if 1 ≤ x ≤ 2

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** f (|x|) + |f (x)| = 1, if 0 ≤ x ≤ 1

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** f (|x|) − |f (x)| = 1, if 1 ≤ x ≤ 2


---

### Question 53 &nbsp;·&nbsp; NIMCET 2022, Q1

*inverse function · difficulty medium*

x −x 10 −10 Inverse of the function f (x) = x −x is 10 +10


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** log10 (2 − x) 1 1 + x

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** log10 ( ) 2 1 − x 1

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** log10 (2x − 1) 2 1 2x

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** log10 ( ) 4 2 − x


---

### Question 54 &nbsp;·&nbsp; NIMCET 2018, Q55

*self inverse function · difficulty medium*

Which of the following function is the inverse of itself? f (x)


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** (1 − x) = 1 + x f (x) 2 log x = 3 f (x) 3 x(x+1) = 3 4 None of these


---

### Question 55 &nbsp;·&nbsp; NIMCET 2011, Q35

*inverse function · difficulty medium*

If the function f : [1, ∞) → [1, ∞) is defined by f (x) = 2x(x−1) , then f −1 (x) is: x(x−1) 1


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** ( ) 2 1⎛ 1 2⎝ 2 −−−−− − −−⎞ + 1 + 4 log2 √ ⎠ x 1⎛ 1 2⎝ 3 −−−−− − −−⎞ − 1 + 4 log 2 √ ⎠ x 4 not defined


---

### Question 56 &nbsp;·&nbsp; NIMCET 2010, Q30

*number of injections · difficulty easy*

Set A has 3 elements. Set B has 4 elements. Number of injections?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 144

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 12

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 24

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 64


---

### Question 57 &nbsp;·&nbsp; NIMCET 2009, Q11

*number of relations · difficulty medium*

The total number of relations that exist from a set A with m elements into the set A × A is:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** m 2

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** m 3

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** m

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of these


---

### Question 58 &nbsp;·&nbsp; NIMCET 2008, Q11

*functional equation polynomial · difficulty medium*




&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1 If f (x) is a polynomial satisfying f (x)f ( x ) = f (x) + f ( x ) and f (3) = 28, then f (4) is 1 63

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 65

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 67

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 68


---

### Question 59 &nbsp;·&nbsp; NIMCET 2008, Q26

*functional equation sum · difficulty medium*




&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 2 2000 If f (x) + f (1 − x) = 2 , then the value of f ( ) + f ( ) + ⋯ + f ( ) is 2001 2001 2001 1 2000

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2001

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 1999

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 1998



---

&nbsp;

# A6 · Statistics

*45 questions across 19 papers · Mean, median, mode: 23 · Dispersion (mean deviation, variance, SD): 16 · Distributions, regression, correlation: 6*



&nbsp;

## A6 — Mean, median, mode


---

### Question 1 &nbsp;·&nbsp; NIMCET 2026, Q32

*sample mean sd · difficulty medium*

The distances in meters for seven throws of a shotputter are: 14.5, 15.2, 16.8, 17.1, 15.9, 16.3, 14.7. Calculate the sample mean and sample standard deviation. Round to two decimals. 15.79, 1 1.02 15.79, 2 0.96 14.79, 3 1.15 14.79, 4 0.88


---

### Question 2 &nbsp;·&nbsp; NIMCET 2026, Q33

*grouped data mean · difficulty medium*

consider the following grouped data: Class Interval Number of students 20-25 8 25-30 14 30-35 20 35-40 18 40-45 10 45-50 6


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 32.14

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 31.67

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 33.75

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 34.12


---

### Question 3 &nbsp;·&nbsp; NIMCET 2026, Q34

*missing value mean median mode · difficulty medium*

An investigator has missed a value while collecting data in an experiment. Denoting the missing value by x, the observations are: 10, 4, 11, 6, 17, 15, 9, 8, x. What should be the value of x, if he wants mean = median = mode for this data set?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 9

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 10

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 11

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 12


---

### Question 4 &nbsp;·&nbsp; NIMCET 2026, Q105

*mean of squares sum · difficulty medium*

n Let Ak be the arithmetic mean of squares of k natural numbers. If ∑k=1 (6Ak − 3k) = 31, find the value of n .


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 3

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 4

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 1


---

### Question 5 &nbsp;·&nbsp; NIMCET 2025, Q80

*combined average heights · difficulty easy*

There are 40 female and 20 male students in a class. If the average heights of female and male students are 5.15 feet and 5.66 feet, respectively, then the average height (in feet) of all the students in the class equals


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 5.405

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 5.490

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 5.175

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 5.320


---

### Question 6 &nbsp;·&nbsp; NIMCET 2024, Q31

*mean consecutive integers · difficulty easy*

The mean of consecutive positive integers from 2 to n is n + 2 1 2 n(n + 1) 2 n + 1 3 2 n − 1 4 2


---

### Question 7 &nbsp;·&nbsp; NIMCET 2024, Q70

*median combined sets · difficulty medium*

Q Given a set A with median m1 = 2 and set B with median m2 = 4 What can we say about the median of the combined set?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** at most 1

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** at most 2

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** at least 1

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** at least 2


---

### Question 8 &nbsp;·&nbsp; NIMCET 2024, Q106

*mean median mode relation · difficulty medium*

It is given that the mean, median and mode of a data set is 1, 3x and 9x respectively. The possible values of the mode is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1,4

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1,9

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 3,9

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 9,8


---

### Question 9 &nbsp;·&nbsp; NIMCET 2023, Q107

*corrected mean sd · difficulty medium*

For a group of 100 candidates, the mean and standard deviation of scores were found to be 40 and 15 respectively. Later on, it was found that the scores 25 and 35 were misread as 52 and 53 respectively. Then the corrected mean and standard deviation corresponding to the corrected figures are


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 39.9, 14.97

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 39.5, 14

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 39.55, 14.97

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 40.19, 15.1


---

### Question 10 &nbsp;·&nbsp; NIMCET 2023, Q108

*median frequency unknowns · difficulty medium*

Consider the following frequency distribution table. Class interval 10-20 20-30 30-40 40-50 50-60 60-70 70-80 Frequency 180 f1 34 180 136 f2 50 If the total frequency is 685 & median is 42.6 then the values of f1 and f2 are


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 80, 25

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 83, 22

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 79, 26

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 82, 23


---

### Question 11 &nbsp;·&nbsp; NIMCET 2022, Q5

*percentiles · difficulty easy*

The 10th and 50th percentiles of the observation 32, 49, 23, 29, 118 respectively are


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 21, 32

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 23, 32

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 23, 33

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 22, 31


---

### Question 12 &nbsp;·&nbsp; NIMCET 2022, Q18

*moments mean variance · difficulty medium*

The first three moments of a distribution about 2 are 1, 16, -40 respectively. The mean and variance of the distribution are


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** (2 16) (2,16)

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** (2,15)

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** (3,15)

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** (1,16)


---

### Question 13 &nbsp;·&nbsp; NIMCET 2022, Q31

*corrected mean · difficulty easy*

The mean of 25 observations was found to be 38. It was later discovered that 23 and 38 were misread as 25 and 36, then the mean is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 32

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 36

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 38

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 42


---

### Question 14 &nbsp;·&nbsp; NIMCET 2021, Q80

*median frequency unknowns · difficulty medium*

Consider the following frequency distribution table. Class Interval 10-20 20-30 30-40 40-50 50-60 60-70 70-80 Frequency 180 f1 34 180 136 f2 50 If the total frequency is 686 and the median is 42.6, then the value of f1 ;and f2 are


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 81, 25

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 82, 24

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 83, 23

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 84, 22


---

### Question 15 &nbsp;·&nbsp; NIMCET 2020, Q88

*mean median mode compare · difficulty medium*

A, B, C are three sets of values of x: A: 2,3,7,1,3,2,3 B: 7,5,9,12,5,3,8 C: 4,4,11,7,2,3,4 Select the correct statement among the following:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Mean of A is equal to Mode of C

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Mean of C is equal to Median of B

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Median of B is equal to Mode of A

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** Mean, Median and Mode of A are same


---

### Question 16 &nbsp;·&nbsp; NIMCET 2019, Q24

*linear transformation mean sd · difficulty medium*

′ Let Xi, i = 1, 2, . . , n be n observations and wi = px i + k, i = 1, 2, , n where p and k are constants. If the mean of x i s is 48 and ′ the standard deviation is 12, whereas the mean of wi s is 55 and the standard deviation is 15, then the value of p and k should be


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** p = 1.25, k = -5

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** p=-1.25, k = 5

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** p = 2.5, k = -5

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** p = 25, k = 5


---

### Question 17 &nbsp;·&nbsp; NIMCET 2018, Q37

*mean of squares · difficulty easy*

If the mean of the squares of first n natural numbers be 11, then n is equal to?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** -13/2

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 11

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 5

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 4


---

### Question 18 &nbsp;·&nbsp; NIMCET 2017, Q40

*binomial mean variance · difficulty medium*

The mean and variance of a random variable X having binomial distribution are 4 and 2 respectively. The P(X = 1) is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1/32

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1/16

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 1/8

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 1/4


---

### Question 19 &nbsp;·&nbsp; NIMCET 2014, Q73

*corrected mean · difficulty easy*

In a group of 200 students, the mean and the standard deviation of scores were found to be 40 and 15, respectively. Later on it was found that the two scores 43 and 35 were misread as 34 and 53, respectively. The corrected mean of scores is:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 40.965

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 39.035

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 39.965

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 40.035


---

### Question 20 &nbsp;·&nbsp; NIMCET 2013, Q16

*combined mean · difficulty easy*

¯ ¯¯¯¯ ¯ ¯ ¯¯¯¯ ¯ ¯ ¯¯¯¯ ¯ ¯ ¯¯¯¯ ¯ ¯¯¯ ¯ If X1 and X2 are the means of two distributions such that X1 < X2 and X is the mean of the combined distribution, then


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** ¯ ¯¯¯ X < X1 ¯ ¯¯¯ ¯¯

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** ¯ ¯¯¯ X > X2 ¯ ¯¯¯ ¯¯ ¯ ¯¯¯ X

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** ¯ ¯¯¯¯ ¯¯ ¯ ¯¯¯¯ ¯¯ X 1 +X 2 = 2 ¯ ¯¯¯ ¯¯ ¯ ¯¯¯ X1 < X 4 ¯ ¯¯¯ ¯¯ < X2


---

### Question 21 &nbsp;·&nbsp; NIMCET 2011, Q1

*mean of squares · difficulty easy*

If the mean of the squares of first n natural numbers be 11, then n is equal to 13


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** − 2

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 11

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 5

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 4


---

### Question 22 &nbsp;·&nbsp; NIMCET 2011, Q5

*mean natural numbers · difficulty easy*

n + 7 Mean of first n natural numbers = . Find n : 3


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 9

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 10

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 11

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 12


---

### Question 23 &nbsp;·&nbsp; NIMCET 2010, Q36

*corrected average · difficulty easy*

The average marks per student in a class of 30 students were 45. On rechecking it was found that marks had been entered wrongly in two cases. After correction these marks were increased by 24 and 34 in the two cases. The correct average marks per student are


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 75

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 60

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 56

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 47



&nbsp;

## A6 — Dispersion (mean deviation, variance, SD)


---

### Question 24 &nbsp;·&nbsp; NIMCET 2026, Q36

*kurtosis classification · difficulty medium*

For a given sample, the computed values of the variance and fourth central moment are 3 and 63 respectively. Then the underlying frequency distribution is classified as:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Normal

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Mesokurtic

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** Platykurtic

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** Leptokurtic


---

### Question 25 &nbsp;·&nbsp; NIMCET 2025, Q56

*sd statements · difficulty medium*

Which one of the following is NOT a correct statement?


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** The value of standard deviation changes by a change of scale

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** The standard deviation is greater than or equal to the mean deviation (about mean)

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** The sum of squares of deviations is minimum when taken from the mean

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** The variance is expressed in the same units as the units of observation


---

### Question 26 &nbsp;·&nbsp; NIMCET 2024, Q55

*variance linear transform · difficulty medium*

In a reality show, two judges independently provided marks base do the performance of the participants. If the marks provided by the second judge are given by Y = 10.5 + 2x, where X is the marks provided by the first judge. If the variance of the marks provided by the second judge is 100, then the variance of the marks provided by the first judge is:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 49.5

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 25

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 50

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 99


---

### Question 27 &nbsp;·&nbsp; NIMCET 2023, Q104

*mean deviation from variance · difficulty medium*

The mean of 5 observation is 5 and their variance is 12.4. If three of the observations are 1, 2 and 6; then the mean deviation from the mean of the data is:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 2.5

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2.6

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 2.8

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 2.4


---

### Question 28 &nbsp;·&nbsp; NIMCET 2021, Q44

*sd shift invariance · difficulty easy*

The standard deviation of 20 numbers is 30. If each of the numbers is increased by 4, then the new standard deviation will be


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 24

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 34

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 30

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 20


---

### Question 29 &nbsp;·&nbsp; NIMCET 2020, Q89

*standard deviation frequency · difficulty medium*

Standard deviation for the following distribution is Size of 6 7 8 9 10 11 12 item Frequency 3 6 9 13 8 5 4


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1 607 1 1.607

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 9.0

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 5.0

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 1.88


---

### Question 30 &nbsp;·&nbsp; NIMCET 2019, Q5

*mean deviation from variance · difficulty medium*

The mean of 5 observation is 5 and their variance is 12.4. If three of the observations are 1,2 and 6; then the mean deviation from the mean of the data is:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 2.5

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 2.6

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 2.8

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 2.4


---

### Question 31 &nbsp;·&nbsp; NIMCET 2019, Q38

*mean deviation AP · difficulty medium*

If the mean deviation 1, 1+d, 1+2d, … , 1+100d from their mean is 255, then d is equal to


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 10.1

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 10.2

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 10.02

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 10.4


---

### Question 32 &nbsp;·&nbsp; NIMCET 2019, Q40

*sum of squares constraint · difficulty medium*

If and , then a possible value of n is among the following is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 9

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 12

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 15

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 18


---

### Question 33 &nbsp;·&nbsp; NIMCET 2017, Q41

*mean deviation notation · difficulty easy*

If is the mean of distribution of x, then usual notation is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** Mean deviation about mean

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** Standard deviation

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 1

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 0


---

### Question 34 &nbsp;·&nbsp; NIMCET 2016, Q112

*variance shift · difficulty easy*

Suppose a population A has 100 observations 101, 102, … , 200 and another population B has 100 observations 151, 152, … , 250. If V A and V B represent variance of the two populations VA respectively, then is VB


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 9/4

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 4/9

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 1

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 2/3


---

### Question 35 &nbsp;·&nbsp; NIMCET 2016, Q114

*sum of squares constraint · difficulty medium*

Let x1 , x2 , … , xn be n observations such that ∑ x2i = 400 and ∑ xi = 80. Then a possible value of n amongst the following is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 10

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 15

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 20

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 8


---

### Question 36 &nbsp;·&nbsp; NIMCET 2015, Q51

*mean deviation AP · difficulty medium*

If the mean deviation of the numbers 1, 1 + d, 1 + 2d, ....., 1 + 100d from their mean is 255, then the value of d is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 20.0

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 10.1

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 20.2

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 10.0


---

### Question 37 &nbsp;·&nbsp; NIMCET 2014, Q75

*mean deviation AP · difficulty medium*

The mean deviation from the mean of the AP a, a + d, a + 2d, ..., a + 2nd, is: n


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** n+1 d n

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** d 2n+1 n+1

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** d 2n+1 n(n+1)

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** d 2n+1


---

### Question 38 &nbsp;·&nbsp; NIMCET 2013, Q39

*variance distribution · difficulty easy*

A random variable X has the distribution law as given below: X 1 2 3 P(X=x) 0.3 0.4 0.3 The variance of the distribution is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 0.4

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 0.6

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 2

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** None of these


---

### Question 39 &nbsp;·&nbsp; NIMCET 2012, Q32

*variance bounds · difficulty medium*




&nbsp;&nbsp;&nbsp;&nbsp;**(1)** (a)

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** (b)

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** (c)

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** (d)



&nbsp;

## A6 — Distributions, regression, correlation


---

### Question 40 &nbsp;·&nbsp; NIMCET 2026, Q35

*Bernoulli product · difficulty medium*

1 Let X and Y be two independent identically distributed Bernoulli random variables with common probability mass function: P (X = 1) = 2 and 1 P (X = 0) = 2 . If Z = XY , then the distribution of Z is:


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 1 1 Bernoulli with P (Z = 1) = 2 and P (Z = 0) = 2

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 1 2 Bernoulli with P (Z = 1) = 3 and P (Z = 0) = 3

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 1 Bernoulli with P (Z = 1) = 3 and P (Z = 0) = 3 2 1 3

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** Bernoulli with P (Z = 1) = 4 and P (Z = 0) = 4


---

### Question 41 &nbsp;·&nbsp; NIMCET 2025, Q39

*normal distribution probability · difficulty medium*

The scores of students in a national level examination are normally distributed with a mean of 500 and a standard deviation of 100. If the value of the cumulative distribution of the standard normal random variable at 0.5 is 0.691, then the probability that a randomly selected student scored between 450 and 500 is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 0.091

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 0.591

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 0.391

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 0.191


---

### Question 42 &nbsp;·&nbsp; NIMCET 2025, Q59

*Poisson two weeks · difficulty medium*

The number of accidents per week in a town follows Poisson distribution with mean 3 (In Exam Given 2, which is incorrect). If the probability that there are three accidents in two weeks time is ke −6 , then the value of k is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 9

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 27

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 36

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 18


---

### Question 43 &nbsp;·&nbsp; NIMCET 2021, Q63

*AM binomial frequencies · difficulty medium*

If a variable takes values 0, 1, 2,…, 50 with frequencies 1, 50C , 50C , … . . , 50C , then the AM is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 2 50 1 50

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 25 50

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 2 50

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** 51


---

### Question 44 &nbsp;·&nbsp; NIMCET 2011, Q3

*regression correlation · difficulty medium*

Regression lines: 3x + 2y = 26 , 6x + y = 31 Correlation between x, y is


&nbsp;&nbsp;&nbsp;&nbsp;**(1)** 0.5

&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 0.7

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** −0.7

&nbsp;&nbsp;&nbsp;&nbsp;**(4)** −0.5


---

### Question 45 &nbsp;·&nbsp; NIMCET 2010, Q35

*Poisson distribution · difficulty medium*

n a Poisson distribution if P [X = 3] = 14 P [X = 4] then P [X = 5] = kP [X = 7] where k equals to 1 7


&nbsp;&nbsp;&nbsp;&nbsp;**(2)** 21 128

&nbsp;&nbsp;&nbsp;&nbsp;**(3)** 128 21 4 256
