package com.example.univers;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class FormActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_form);

        final Button button = findViewById(R.id.subscribe);

        final EditText lastname = findViewById(R.id.name);
        final EditText forename = findViewById(R.id.firstName);
        final EditText pseudo = findViewById(R.id.nickName);
        final EditText email = findViewById(R.id.mail);
        final EditText age = findViewById(R.id.age);

        button.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                Intent intent = new Intent(FormActivity.this, QRCodeActivity.class);
                intent.putExtra("lastname", lastname.getText().toString());
                intent.putExtra("forename", forename.getText().toString() );
                intent.putExtra("pseudo", pseudo.getText().toString());
                intent.putExtra("email", email.getText().toString());
                intent.putExtra("age", age.getText().toString());
                startActivity(intent);
            }
        });
    }
}
