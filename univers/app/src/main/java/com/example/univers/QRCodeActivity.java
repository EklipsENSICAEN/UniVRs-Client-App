package com.example.univers;

import android.graphics.Bitmap;
import android.graphics.Point;
import android.os.Bundle;
import android.text.TextUtils;
import android.util.Log;
import android.view.Display;
import android.view.WindowManager;
import android.widget.ImageView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.google.zxing.WriterException;

import androidmads.library.qrgenearator.QRGContents;
import androidmads.library.qrgenearator.QRGEncoder;

public class QRCodeActivity extends AppCompatActivity {

    private ImageView qrCodeIV;
    Bitmap bitmap;
    QRGEncoder qrgEncoder;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_qrcode);

        String lastname = getIntent().getStringExtra("lastname");
        String forename = getIntent().getStringExtra("forename");
        String pseudo = getIntent().getStringExtra("pseudo");
        String email = getIntent().getStringExtra("email");
        String age = getIntent().getStringExtra("age");

        String data = "{ \"lastname\": " + "\"" + lastname +  "\"" +
                ", \"forename\": " +  "\"" + forename +  "\"" +
                ", \"pseudo\": " + "\"" + pseudo + "\"" +
                ", \"email\": " +  "\"" + email + "\"" +
                ", \"age\": " + "\"" + age +  "\"" + "}" ;

        qrCodeIV = findViewById(R.id.idIVQrcode);
        System.err.println(qrCodeIV);

        if (TextUtils.isEmpty(data)) {

            // if the edittext inputs are empty then execute
            // this method showing a toast message.
            Toast.makeText(QRCodeActivity.this, "There is an issue to create your QRCode !", Toast.LENGTH_SHORT).show();
        } else {
            // below line is for getting
            // the windowmanager service.
            WindowManager manager = (WindowManager) getSystemService(WINDOW_SERVICE);

            // initializing a variable for default display.
            Display display = manager.getDefaultDisplay();

            // creating a variable for point which
            // is to be displayed in QR Code.
            Point point = new Point();
            display.getSize(point);

            // getting width and
            // height of a point
            int width = point.x;
            int height = point.y;

            // generating dimension from width and height.
            int dimen = Math.min(width, height);
            dimen = dimen * 3 / 4;

            // setting this dimensions inside our qr code
            // encoder to generate our qr code.
            qrgEncoder = new QRGEncoder(data, null, QRGContents.Type.TEXT, dimen);
            try {
                // getting our qrcode in the form of bitmap.

                bitmap = qrgEncoder.encodeAsBitmap();
                // the bitmap is set inside our image
                // view using .setimagebitmap method.
                qrCodeIV.setImageBitmap(bitmap);
            } catch (WriterException e) {
                // this method is called for
                // exception handling.
                Log.e("Tag", e.toString());
            }
        }

    }
}
