import time
from threading import Thread, Lock
import sys

lock = Lock()

def animate_text(text, delay=0.1):
    """Mengetik teks huruf demi huruf dengan jeda tertentu"""
    with lock:
        for char in text:
            sys.stdout.write(char)
            sys.stdout.flush()
            time.sleep(delay)
        print()

def sing_lyric(lyric, delay, speed):
    """Menunggu delay lalu menampilkan lirik dengan kecepatan tertentu"""
    time.sleep(delay)
    animate_text(lyric, speed)

def sing_song():
    # Format: (lirik, delay sebelum mulai, kecepatan huruf)
    lyrics = [
        ("Kita hampir mati", 0.3, 0.3),
        ("dan kau selamatkan aku", 3.5, 0.2),
        ("Dan ku menyelamatkanmu", 2.0, 0.11),
        ("dan sekarang aku tahu", 2.0, 0.30),
        ("Ceeeeeeeerita kita tak jauh berbeda", 6.0, 0.10),
        ("Got beat down by the world", 0.2, 0.10),
        ("sometimes I wanna fold", 0.1, 0.1),
        ("sempurnaaaaaaaaaaaa", 34.5, 0.1),
    ]

    threads = []
    for lyric, delay, speed in lyrics:
        t = Thread(target=sing_lyric, args=(lyric, delay, speed))
        threads.append(t)
        t.start()

    for thread in threads:
        thread.join()

if __name__ == "__main__":
    sing_song()
