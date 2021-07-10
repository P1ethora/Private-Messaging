package org.example.model.system;

import java.security.Principal;

public class CustomPrincipal implements Principal {
        private String name;

        public CustomPrincipal(String name) {
            this.name = name;
        }

        public CustomPrincipal(){}

        @Override
        public String getName() {
            return name;
        }
    }