package com.example.controller;

import com.example.MyUserDetailsService;
import com.example.DAO.AdminService;
import com.example.DAO.UserService;
import com.example.model.AdminModel;
import com.example.model.AuthenticationRequest;
import com.example.model.AuthenticationResponse;
import com.example.model.UserModel;
import com.example.Util.JwtUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class AuthController {

    @Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtUtil jwtTokenUtil;

	@Autowired
	private MyUserDetailsService userDetailsService;

    @Autowired
    UserService userService;

    @Autowired
    AdminService adminService;

    @Autowired
    PasswordEncoder passwordEncoder;

    @PostMapping("/user/signup")
    public void saveUser(@RequestBody UserModel user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userService.saveUser(user);
    }

    @PostMapping("/admin/signup")
    public void saveAdmin(@RequestBody AdminModel admin){
        admin.setPassword(passwordEncoder.encode(admin.getPassword()));
        adminService.saveAdmin(admin);
    }
    
    /*@PostMapping("/user/login")
    public boolean isUserPresent(@RequestParam String email, @RequestParam String password){
        //return userService.isUserPresent(email, passwordEncoder.encode(password));
        return userService.isUserPresent(email, password);
    }

    @PostMapping("/admin/login")
    public boolean isAdminPresent(@RequestParam String email, @RequestParam String password){
        //return adminService.isAdminPresent(email, passwordEncoder.encode(password));
        return adminService.isAdminPresent(email, password);
    }*/

    @PostMapping(value={"/user/login","/admin/login"})
	public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {

		try {
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
			);
		}
		catch (BadCredentialsException e) {
			throw new Exception("Incorrect username or password", e);
		}


		final UserDetails userDetails = userDetailsService
				.loadUserByUsername(authenticationRequest.getUsername());

		final String jwt = jwtTokenUtil.generateToken(userDetails);

		return ResponseEntity.ok(new AuthenticationResponse(jwt));
	}
    
    @PostMapping("/super/login")
    public boolean SuperAdminLogin(){
        return true;
    }
}