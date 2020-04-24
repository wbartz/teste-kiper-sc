# Derruba os sistemas antigos
docker-compose down --remove-orphans
echo "Subindo banco"

docker-compose up -d database
echo "Aguardando banco"

while true
do
    string=$(docker-compose logs --tail=1)
    if [[ $string = *"Plugin ready for connections"* ]]
    then
        echo "Banco iniciado"
        break
    fi
    sleep 1
done

echo "Subindo sistema"

docker-compose up -d --force-recreate --build web