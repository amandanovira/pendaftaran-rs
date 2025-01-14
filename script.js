import java.util.Scanner;

public class SimpleChatBot {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Halo! Saya adalah Chatbot sederhana. Ketik 'keluar' untuk mengakhiri percakapan.");
        
        while (true) {
            System.out.print("Anda: ");
            String input = scanner.nextLine().toLowerCase();
            
            // Periksa jika pengguna ingin keluar
            if (input.equals("keluar")) {
                System.out.println("Chatbot: Terima kasih! Sampai jumpa lagi!");
                break;
            }
            
            // Jawaban sederhana berdasarkan input
            String response = getResponse(input);
            System.out.println("Chatbot: " + response);
        }
        
        scanner.close();
    }
    
    public static String getResponse(String input) {
        // Logika sederhana untuk menangani berbagai input
        if (input.contains("halo") || input.contains("hi")) {
            return "Halo juga! Apa kabar?";
        } else if (input.contains("nama kamu siapa")) {
            return "Saya adalah Chatbot sederhana.";
        } else if (input.contains("apa kabar")) {
            return "Saya baik, terima kasih! Bagaimana dengan Anda?";
        } else if (input.contains("umur kamu berapa")) {
            return "Saya tidak punya umur, saya adalah program komputer!";
        } else {
            return "Maaf, saya tidak mengerti. Bisa Anda jelaskan lagi?";
        }
    }
}