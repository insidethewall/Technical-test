import sys, time, tracemalloc


def calculate_fleet_capacity(n):
    """
    Calculate the maximum and minimum fleet capacity for a given number.

    Args:
        n (int): The total number of units.

    Returns:
        dict | int: A dictionary with 'maximum_capacity' and 'minimum_capacity'
        if n is divisible by 4, 6, or 10; otherwise -1.
    """
    
    if n < 4 or n % 2 != 0:
        return -1

    maximum_capacity = n // 4  
    minimum_capacity = (n + 5) // 6

    return {
        "maximum_capacity": maximum_capacity,
        "minimum_capacity": minimum_capacity
    }

def output():
    """
    Read test cases from stdin, compute fleet capacities, and print the results.

    Input format:
        - First line: an integer T (1 <= T <= 1000), the number of test cases.
        - Next T lines: each line contains an integer n (1 <= n <= 10**18).

    For each test case:
        - Calls calculate_fleet_capacity(n).
        - If the function returns -1 (no valid combination exists,), prints "-1" to stdout.
        - Otherwise, prints "<minimum_capacity> <maximum_capacity>" to stdout.

    Performance logging:
        - For each test case, measures execution time with time.perf_counter().
        - Tracks peak memory usage with tracemalloc.
        - Logs a line to stderr in the format:
          "[case i] time=<ms> ms  peak=<KB> KB"

    Error handling:
        - Exits the program with SystemExit if:
            * The number of test cases is not an integer or out of range.
            * A test case line is not an integer.
            * n is out of the allowed range [1, 10**18].
    """
test_cases_input = sys.stdin.readline().strip()
try:
    test_cases = int(test_cases_input)
except ValueError:
    raise SystemExit("invalid number of test cases")
if not (1<= test_cases <= 1000):
    raise SystemExit("number of test cases out of range")
for i in range(test_cases):
    n_input = sys.stdin.readline().strip()
    #  time and memory tracking
    tracemalloc.start()
    t0 = time.perf_counter()
    try:
        n = int(n_input)
    except ValueError:
        raise SystemExit("each test case must be an integer")
    if not ( 1 <= n <= 10**18):
        raise SystemExit("n out of range")
    result = calculate_fleet_capacity(int(n))

    dt = time.perf_counter() - t0
    current, peak = tracemalloc.get_traced_memory()
    tracemalloc.stop()
    if result == -1:
        print(-1)
    else:
        print(f"{result['minimum_capacity']} {result['maximum_capacity']}")

    print(f"[case {i}] time={dt*1e3:.3f} ms  peak={peak/1024:.1f} KB",
            file=sys.stderr)

print("end of output")

if __name__ == "__main__":
    output()


