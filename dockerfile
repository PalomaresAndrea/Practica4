# Imagen Node dependiendo de versión instalada 
FROM node:24 
 
# Establece el directorio de trabajo 
WORKDIR /app 
 
# Copia dependencias y las instala
COPY package.json package-lock.json ./ 
RUN npm install

# Copia el resto del código
COPY . .

# Expone el puerto deseado (cámbialo si tu app corre en otro puerto)
EXPOSE 8080

# Forzar que React sirva en 0.0.0.0 para acceso externo
ENV HOST 0.0.0.0

# Ejecuta la aplicación
CMD ["npm", "start"]
