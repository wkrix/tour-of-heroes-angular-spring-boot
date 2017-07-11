package hu.klayton.wade.heroes.dao;

import hu.klayton.wade.heroes.domain.Hero;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Collection;

/**
 * @author Walter Krix <wkrix89@gmail.com>
 */
@RepositoryRestResource
public interface HeroRepository extends CrudRepository<Hero, Long> {

    @Query("from Hero h where lower(h.name) like CONCAT('%', lower(:name), '%')")
    Collection<Hero> findByName(@Param("name")String name);
}
