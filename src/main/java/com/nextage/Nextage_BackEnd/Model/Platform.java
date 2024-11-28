package com.nextage.Nextage_BackEnd.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "game_platforms")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Platform {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private Long igdbId;

    @Column(nullable = false)
    private String name;

    private String slug;

    @ManyToMany(mappedBy = "platforms")
    private Set<Game> games = new HashSet<>();
}