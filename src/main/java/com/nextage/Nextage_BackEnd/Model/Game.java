package com.nextage.Nextage_BackEnd.Model;

import com.nextage.Nextage_BackEnd.Model.Enums.GameCategory;
import com.nextage.Nextage_BackEnd.Model.Enums.GameStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "games")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private Long igdbId;

    @Column(nullable = false)
    private String name;

    private String slug;

    @Column(columnDefinition = "TEXT")
    private String summary;

    @Column(columnDefinition = "TEXT")
    private String storyline;

    @Column(name = "first_release_date")
    private LocalDate firstReleaseDate;

    @Column(name = "total_rating")
    private Double totalRating;

    @Column(name = "total_rating_count")
    private Integer totalRatingCount;

    @Enumerated(EnumType.STRING)
    private GameCategory category;

    @Enumerated(EnumType.STRING)
    private GameStatus status;

    @Column(name = "cover_url")
    private String coverUrl;

    private String website;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @ManyToMany
    @JoinTable(
            name = "game_genres",
            joinColumns = @JoinColumn(name = "game_id"),
            inverseJoinColumns = @JoinColumn(name = "genre_id")
    )
    private Set<Genre> genres = new HashSet<>();

    @ManyToMany
    @JoinTable(
            name = "game_platform_releases",
            joinColumns = @JoinColumn(name = "game_id"),
            inverseJoinColumns = @JoinColumn(name = "platform_id")
    )
    private Set<Platform> platforms = new HashSet<>();
}
